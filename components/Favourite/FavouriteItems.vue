<template>
  <div v-if="favourite">
    <div class="favourite-items container">
      <div class="card py-2 my-3" v-if="favourite">
        <div class="row">
          <div class="col-md-2">
            <div class="image px-2">
              <img
                :src="favourite.img"
                :alt="favourite.title"
                class="img-fluid rounded"
              />
            </div>
          </div>
          <div class="col-md-10">
            <div class="context p-2">
              <h2 class="d-none d-md-block text-capitalize">
                {{ favourite.title }}
              </h2>
              <h3 class="d-block d-md-none text-capitalize">
                {{ favourite.title }}
              </h3>
              <p>{{ favourite.details }}</p>
              <button
                class="btn btn-outline-danger"
                @click="
                  () => {
                    removeitem(favourite.id);
                  }
                "
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["favourite"],
  methods: {
    ...mapMutations(["removeitem"])
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) and (min-width: 410px) {
  img {
    height: 120px;
    object-fit: cover;
  }
}
</style>
