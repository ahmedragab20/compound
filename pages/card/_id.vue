<template>
  <div class="container position-relative">
    <div class="row">
      <div class="col-lg-6 order-lg-last">
        <div class="image d-flex justify-content-satrt align-items-center">
          <img :src="item.img" :alt="item.img" class="img-fluid w-75" />
        </div>
      </div>
      <div class="col-lg-6 order-lg-first">
        <div
          class="context d-flex justify-content-center flex-column h-100 my-3"
        >
          <h2 class="d-none d-md-block h1 text-uppercase mb-2">
            {{ item.title }}
          </h2>
          <h3 class="d-block d-md-none text-uppercase mb-2">
            {{ item.title }}
          </h3>
          <p>{{ item.details }} {{ item.details }} {{ item.details }}</p>

          <div class="btns">
            <button class="btn btn-dark" @click="toggleModal">
              see more <i class=" bi-eye-fill" style="font-size: 0.75rem"></i>
            </button>
            <button
              class="btn btn-danger"
              @click.once="
                () => {
                  addToFavourite(item.id);
                }
              "
            >
              Add to Favourites
              <i class=" bi-heart" style="font-size: 0.75rem"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <Modal @close="toggleModal" :image="item.img" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    item() {
      return this.$store.getters.getCardsById(this.$route.params.id);
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    ...mapMutations(["addToFavourite"])
  }
};
</script>

<style lang="scss" scoped></style>
