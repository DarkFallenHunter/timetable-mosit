<template>
  <div class="error-modal" v-if="show"  @click.self="hideDialog">
    <div class="error-content">
      <img class="modal-cross-icon" src="../../assets/cross.svg" alt="Cross" @click="hideDialog">
<!--      <h1 class="header">Ошибка!</h1>-->
      <div class="error-body">
        <img class="modal-error-icon" src="../../assets/error.svg" alt="Error!">
        <div class="container">
          <h2 class="error-header">{{header}}</h2>
          <div class="error-args"><!-- <b>Аргументы ошибки</b> -->
            <div class="arg" :key="arg" v-for="(arg, idx) in args"><b>{{argNames[idx]}}:</b> {{arg}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-dialog",
  data() {
    return {
      argNames: [
          'Группа',
          'Предмет',
          'День недели',
          'Номер пары'
      ]
    }
  },
  props: {
    header: {
      type: Text,
      required: true
    },
    args: {
      type: Text,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  },
}
</script>

<style scoped>
.error-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;

  background: rgba(0, 0, 0, 0.4);
}

.error-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: 700px;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /*border: 5px solid var(--mosit-gray-color);*/
  border-radius: 15px;
  /*box-shadow: 3px 3px 5px 1px black;*/

  margin: auto;
  padding: 20px;
  background: white;
}

.error-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modal-error-icon {
  /*width: 120px;*/
  height: 110px;
}

.modal-cross-icon {
  position: absolute;
  right: -12px;
  top: -12px;
  height: 30px;
  border-radius: 50%;
  box-shadow: -2px 2px 5px 1px black;
}

.error-header {
  padding: 10px;
}

.arg {
  white-space: pre-wrap;
}
</style>