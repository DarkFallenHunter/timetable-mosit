<template>
  <div class="timetable-row">
    <tt-vertical-header :cell-text="headerText"/>
    <div class="tt-row">
      <div class="cls-info" :key="idx" v-for="(clsInfo, idx) in classes">
        <div
            class="class-placeholder"
            v-if="clsInfo === 0"
        ></div>
        <class
            v-else
            :class-info="clsInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Class from "@/components/Class";
import TtVerticalHeader from "@/components/UI/TtVerticalHeader";
import hiddenMixin from "../mixins/hiddenMixin";

export default {
  name: "timetable-row",
  components: {TtVerticalHeader, Class},
  mixins: [hiddenMixin],
  props: {
    classes: {
      type: Array,
      required: true
    },
    headerText: {
      type: String,
      required: true
    }
  },
  watch: {
    showingDay(newDay) {
      if (this.showingDay < 0 || this.showingDay > 5 ) {
        return;
      }

      const elements = this.$el.querySelectorAll('.cls-info');
      this.showOneElemInList(elements, newDay);
    }
  }
}
</script>

<style scoped>
.timetable-row {
  display: grid;
  grid-template-columns: min-content 1fr;
  box-sizing: border-box;
}

.tt-row {
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.cls-info {
  border: 1px solid var(--tt-brd-clr);
  border-top: none;
  border-left: none;

  word-wrap: anywhere;
}

.class-placeholder {
  height: 100%;
  background-color: var(--tt-placaholder-bg-clr);
}

@media all and (device-width: 1200px), all and (max-width: 1200px) {
  .tt-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .tt-row > .cls-info {
    display: none;
  }

  .tt-row > .cls-info.active {
    display: grid;
  }

  .class-placeholder {
    width: 100%;
  }
}
</style>