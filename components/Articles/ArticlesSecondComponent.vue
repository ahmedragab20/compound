<template>
  <article class="poster-2 my-5">
    <div class="row">
      <div class="col-lg-6">
        <div class="image">
          <img src="@/assets/p2-2.jpg" alt="img" class="img-fluid" />
        </div>
      </div>
      <div class="col-lg-6">
        <section
          class="context mt-1 h-100 d-flex justify-content-center align-items-center  "
        >
          <div class="d-none d-md-block">
            <h2 class="h1">
              How it looks!
            </h2>
            <p class="p-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              cupiditate modi nostrum accusamus ratione iure eos et, officiis
              quis facere expedita quisquam dolores cumque, nihil obcaecati
              laborum eligendi ad autem.
            </p>
            <button class="button-lg">
              Discover more <i class="bi-arrow-right"></i>
            </button>
          </div>
          <div class="d-block d-md-none">
            <h2>
              How it looks!
            </h2>
            <p class="p-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              autem itaque sequi non necessitatibus in amet suscipit modi.
              Doloribus cupiditate quasi dolorum dignissimos cumque enim,
              commodi magnam odio et sapiente?
            </p>
            <button class="button-sm">
              Discover more <i class="bi-arrow-right"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.poster-2 {
  .context {
    .button-lg,
    .button-sm {
      border: 1px solid #453f3a;
      transition: $transition;

      &:hover {
        background-color: #453f3a;
        color: #fff;
      }

      i {
        font-size: 0.75rem;
      }
    }
    .d-md-block {
      .button-lg {
        padding: 10px 20px;
      }
    }
    .d-md-none {
      text-align: center;
      .p-sm {
        font-size: 0.8rem;
      }
      .button-sm {
        text-align: center;
        padding: 8px 13px;
      }
    }
  }
}
</style>
