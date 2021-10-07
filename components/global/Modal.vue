<template>
  <div>
    <transition name="modal" appear="">
      <div class="background" @click.self="closeModal">
        <div
          class="modal-container d-flex justify-content-center align-items-center"
        >
          <div class="image-container p-3">
            <img :src="image" alt="image" class="img-fluid" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["image"],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  @include center(row);

  position: fixed;
  inset: 0;
  z-index: 9;
  width: $full;
  height: $full;
  background-color: $liteDark;
  backdrop-filter: $blur;

  .modal-container {
    background-color: $liteLight;
    backdrop-filter: $blur;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(238, 238, 238, 0.1),
      -5px -5px 10px rgba(238, 238, 238, 0.1);

    .image-container {
      img {
        border-radius: 10px;
        box-shadow: $darkShadow;
      }
    }
  }
}
// Media Query
@media (min-width: 1024px) {
  .modal-container {
    width: 30vw;
  }
}
@media (max-width: 1024px) {
  .modal-container {
    width: 65vw;
  }
}
@media (max-width: 410px) {
  .modal-container {
    width: 90vw;
  }
}
/* Transition */
.modal-enter,
.modal-leave-to {
  transform: scale(0) translateX(-300px);
}
.modal-enter-active,
.modal-leave-active {
  transition: $transition;
}
</style>
