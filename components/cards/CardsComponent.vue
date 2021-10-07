<template>
  <div class="cards">
    <h2 class="d-none d-md-block my-3 text-center text-capitalize">
      Some From inside of your house
    </h2>
    <h2 class="d-block d-md-none my-3 text-center text-capitalize">
      Some From inside of your house
    </h2>
    <div class="row">
      <div class="col-lg-3 col-md-6 mt-3" v-for="card in cards" :key="card.id">
        <div class="card">
          <img class="card-img-top" :src="card.img" alt="Card image cap" />
          <div class="card-body px-2">
            <h5 class="card-title text-capitalize">{{ card.title }}</h5>
            <p class="card-text btn-sm">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <nuxt-link :to="`/card/${card.id}`" class="btn btn-outline-dark"
              >Go there <i class="bi-arrow-right btn-sm"></i
            ></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cards"])
  }
};
</script>

<style lang="scss" scoped></style>
