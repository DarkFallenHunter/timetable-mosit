<template>
  <timetable-placeholder v-if="classes.every(i => i.length <= 0)"/>

  <div class="timetable" v-else>
    <div class="tt-control" v-if="classes.length > 0">
      <button
          class="tt-button"
          :class="{ 'small-button': smallDevice }"
          @mousedown="showingDay--"
          :disabled="showingDay <= 0"
      >
        &#10094; <span v-if="!smallDevice">Предыдущий</span>
      </button>
      <button
          class="tt-button"
          :class="{ 'small-button': smallDevice }"
          @mousedown="showingDay++"
          :disabled="showingDay >= 5"
      >
        <span v-if="!smallDevice">Следующий</span> &#10095;
      </button>
    </div>

    <div class="tt-container">
      <div class="tt-column" :key="idx" v-for="(classesInfo, idx) in classes">
        <tt-column-header :text="weekDays[idx]"/>
        <tt-column-placeholder v-if="classesInfo.length <= 0"/>
        <div v-else-if="type === 'week'" class="tt-column-classes">
          <timetable-item
              :key="idx"
              :class-info="classesItem['info']"
              v-for="(classesItem, idx) in classesInfo"
              :header-text="classesItem['header']"
          />
        </div>
        <div v-else-if="type === 'full'" class="tt-column-classes">
          <timetable-even-odd-item
              :key="idx"
              :classes-info="classesItem"
              :header-text="classesItem['header']"
              v-for="(classesItem, idx) in classesInfo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimetablePlaceholder from "./TimetablePlaceholder";
import TtColumnHeader from "./UI/TtColumnHeader";
import TimetableItem from "./TimetableItem";
import TimetableEvenOddItem from "./TimetableEvenOddItem";
import hiddenMixin from "../mixins/hiddenMixin";
import TtColumnPlaceholder from "./TtColumnPlaceholder";

export default {
  components: {TtColumnPlaceholder, TimetableEvenOddItem, TimetableItem, TtColumnHeader, TimetablePlaceholder},
  mixins: [hiddenMixin],
  name: "timetable-base",
  data() {
    return {
      weekDays: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ],
      showingDay: null,
      lastWidth: null,
      smallDevice: false
    }
  },
  props: {
    type: {
      type: String,
      require: true,
      validator(value) {
        return value === 'full' || value === 'week';
      }
    },
    classes: {
      type: Object,
      require: true
    }
  },
  methods: {
    checkWindowWidth() {
      const windowWidth = window.innerWidth;

      if ( windowWidth < 1200 && this.lastWidth > 1200 ) {
        this.showingDay = 0;
      }

      this.smallDevice = windowWidth <= 375;
      this.lastWidth = windowWidth;
    }
  },
  watch: {
    showingDay(newDay, oldDay) {
      if (newDay < 0 || newDay > 5)
        this.showingDay = oldDay;

      const elements = this.$el.querySelectorAll('.tt-container > .tt-column');
      this.showOneElemInList(elements, this.showingDay);
    }
  },
  mounted() {
    this.showingDay = 0;
    this.checkWindowWidth()
    window.addEventListener('resize', this.checkWindowWidth);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkWindowWidth);
  }
}
</script>

<style scoped>
.tt-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.tt-container > .tt-column {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 0 2px;
}

.tt-control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 10px 0;
}

.tt-control > .tt-button {
  display: none;
  padding: 10px;
  border-radius: 20px;
  border: none;

  background-color: var(--mosit-blue-color);
  color: var(--tt-bg-color);

  font-size: var(--baze-font-size);
}

.tt-control > .tt-button:disabled {
  visibility: hidden;
}

.tt-control > .tt-button.small-button {
  width: 50px;
  border-radius: 50%;

  font-size: 25px;
}

@media all and (device-width: 1200px), all and (max-width: 1200px) {
  .tt-container {
    grid-template-columns: 1fr;
  }

  .tt-container > .tt-column {
    display: none;
  }

  .tt-container > .tt-column.active {
    display: grid;
  }

  .tt-control > .tt-button {
    display: block;
  }
}
</style>
