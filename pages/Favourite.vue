<template>
  <div>
    <FavouriteItems
      v-for="item in favourite"
      :key="item.id"
      :favourite="item"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["favourite"])
  }
};
</script>

<style lang="scss" scoped></style>
