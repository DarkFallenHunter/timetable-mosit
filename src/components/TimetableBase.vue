<template>
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
</template>

<script>
import TtColumnHeader from "./UI/TtColumnHeader";
import TimetableItem from "./TimetableItem";
import TimetableEvenOddItem from "./TimetableEvenOddItem";
import hiddenMixin from "../mixins/hiddenMixin";
import TtColumnPlaceholder from "./TtColumnPlaceholder";

export default {
  components: {TtColumnPlaceholder, TimetableEvenOddItem, TimetableItem, TtColumnHeader},
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
      lastWidth: null
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
    },
    showingDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showSelectedDay() {
      const elements = this.$el.querySelectorAll('.tt-container > .tt-column');

      if ( this.showingDay === -1 ) elements.forEach(el => this.showElement(el) );
      else                          this.showOneElemInList(elements, this.showingDay);
    }
  },
  watch: {
    showingDay() {
      this.showSelectedDay();
    }
  },
  updated() {
    this.showSelectedDay();
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
}
</style>
