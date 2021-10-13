<template>
  <div class="modal" v-if="show"  @click.self="hideDialog">
    <img class="modal-cross-icon" src="../../assets/cross.svg" alt="Cross" @click="hideDialog">

    <slot></slot>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "ModalDialog",
  mixins: [toggleMixin],
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;

  background: rgba(0, 0, 0, 0.4);
}


.modal-cross-icon {
  position: absolute;
  right: -12px;
  top: -12px;
  height: 30px;
  border-radius: 50%;
  box-shadow: -2px 2px 5px 1px black;
}
</style>