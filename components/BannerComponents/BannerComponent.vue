<template>
  <div class="banner container">
    <div class="row">
      <section class="context my-2 text-center">
        <div class="d-none d-md-block">
          <h2 class="h1 font-weight-bolder">
            Welcome Home!
          </h2>
          <p class="p-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            cupiditate modi nostrum accusamus ratione iure eos et, officiis quis
            facere expedita quisquam dolores cumque, nihil obcaecati laborum
            eligendi ad autem.
          </p>
          <button class="button-lg">
            Discover more <i class="bi-arrow-right"></i>
          </button>
        </div>
        <div class="d-block d-md-none">
          <h2 class="font-weight-bolder">Welcom Home!</h2>
          <p class="p-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            autem itaque sequi non necessitatibus in amet suscipit modi.
            Doloribus cupiditate quasi dolorum dignissimos cumque enim, commodi
            magnam odio et sapiente?
          </p>
          <button class="button-sm">
            Discover more <i class="bi-arrow-right"></i>
          </button>
        </div>
      </section>
      <section class="images position-relative p-lg-4 p-1">
        <figure class="front">
          <img src="@/assets/2.jpg" alt="Image" class="img-fluid" />
        </figure>
        <figure class="back position-absolute">
          <img src="@/assets/1.jpg" alt="Image" class="img-fluid p-lg-4 p-1" />
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  .images {
    .front,
    .back {
      img {
        width: $full;
        height: $full;
        object-fit: cover;
      }
    }

    .back {
      inset: 0;
      width: $full;
      height: $full;
      transition: $transition;

      &:hover {
        opacity: 0;
      }
    }
  }
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
        padding: 6px 10px;
      }
    }
  }
}
</style>
