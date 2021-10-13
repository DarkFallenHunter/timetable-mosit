<template>
  <modal-dialog v-model:show="changeShow">
    <div class="error-content">
<!--      <h1 class="header">Ошибка!</h1>-->
      <div class="error-body">
        <img class="modal-error-icon" src="../../assets/error.svg" alt="Error!">
        <div class="container">
          <h2 class="error-header">{{header}}</h2>
          <div class="error-args"><!-- <b>Аргументы ошибки</b> -->
            <div class="arg" :key="arg" v-for="(arg, argName) in args"><b>{{argName}}:</b> {{arg}}</div>
          </div>
        </div>
      </div>
    </div>
  </modal-dialog>
</template>

<script>
import ModalDialog from "@/components/UI/ModalDialog";
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "error-dialog",
  components: {ModalDialog},
  mixins: [toggleMixin],
  data() {
    return {

    }
  },
  props: {
    header: {
      type: String,
      required: true
    },
    args: {
      type: Object,
      required: true
    }
  },
  computed: {
    changeShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit('update:show', val);
      }
    }
  }
}
</script>

<style scoped>
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

.error-header {
  padding: 10px;
}

.arg {
  white-space: pre-wrap;
}
</style>