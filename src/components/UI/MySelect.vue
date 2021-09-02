<template>
  <select class="select" v-model="selectedVal">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    onChangeFunc: {
      type: Function,
      required: true
    }
  },
  methods: {
    changeOption(value) {
      this.$emit('update:modelValue', value);
      this.onChangeFunc();
    }
  },
  computed: {
    selectedVal: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.changeOption(val);
      }
    }
  }
}
</script>

<style scoped>
.select {
  padding: 10px;
  font-size: 16px;
}
</style>