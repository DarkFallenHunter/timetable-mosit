<template>
  <div class="tt-control" v-if="classes.length > 0">
    <button
        class="tt-button"
        @mousedown="showingDay--"
        :disabled="showingDay <= 0"
    >
      &#10094; Предыдущий
    </button>
    <button
        class="tt-button"
        @mousedown="showingDay++"
        :disabled="showingDay >= 5"
    >
      Следующий &#10095;
    </button>
  </div>

  <timetable-placeholder v-if="classes.length <= 0"/>
  <div v-else-if="type === 'week'" class="timetable-container">
    <tt-header :showingDay="showingDay" class="top-header" :cells-text="weekDays" ></tt-header>
    <timetable-row
        :key="idx"
        :classes="classes"
        v-for="(classes, idx) in classes"
        :showing-day="showingDay"
        :header-text="headerContent[idx]"
    />
  </div>
  <div v-else-if="type === 'full'" class="timetable-container">
    <tt-header :showingDay="showingDay" :is-weeks-mark="true" class="top-header" :cells-text="weekDays" ></tt-header>
    <timetable-even-odd-row
        :key="idx"
        :classes-info="classes"
        :header-text="headerContent[idx]"
        :showing-day="showingDay"
        v-for="(classes, idx) in classes"
    />
  </div>
</template>

<script>
import TimetablePlaceholder from "./TimetablePlaceholder";
import TimetableRow from "@/components/TimetableRow";
import TtHeader from "@/components/UI/TtHeader";
import TimetableEvenOddRow from "@/components/TimetableEvenOddRow";



export default {
  components: {TimetablePlaceholder, TimetableRow, TimetableEvenOddRow, TtHeader},
  name: "timetable-base",
  data() {
    return {
      headerContent: [
        '1 пара\n9:00\n10:30',
        '2 пара\n10:40\n12:10',
        '3 пара\n12:40\n14:10',
        '4 пара\n14:20\n15:50',
        '5 пара\n16:20\n17:50',
        '6 пара\n18:00\n19:30',
        '7 пара\n19:40\n21:10',
        '7 пара\nмаг.\n18:30\n20:00',
        '8 пара\nмаг.\n20:10\n21:40',
      ],
      weekDays: [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ],
      showingDay: null,
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
    }
  },
  methods: {
    checkWindowWidth() {
      const windowWidth = window.innerWidth;

      if ( windowWidth < 1200 && this.lastWidth > 1200 ) {
        this.showingDay = 0;
        console.log(windowWidth, this.lastWidth);
      }

      this.lastWidth = windowWidth;
    }
  },
  computed: {
    classHeaders() {
      return this.headerContent.slice(0, this.classes.length)
    }
  },
  watch: {
    showingDay(newDay, oldDay) {
      if (newDay < 0 || newDay > 5)
        this.showingDay = oldDay;
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
.timetable-container {
  display: grid;
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

  background-color: var(--mosit-gray-color);
  color: var(--tt-bg-color);

  font-size: var(--baze-font-size);
}

.tt-control > .tt-button:disabled {
  visibility: hidden;
}

@media all and (device-width: 1200px), all and (max-width: 1200px) {
  .tt-control > .tt-button {
    display: block;
  }
}
</style>
