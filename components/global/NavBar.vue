<template>
  <nav class="position-relative">
    <div
      class="container-fluid d-flex justify-content-between align-items-center py-3"
    >
      <div class="logo">
        <h5 class="title">
          <nuxt-link to="/"> <i class="bi bi-house"></i> Compound </nuxt-link>
        </h5>
      </div>
      <div class="burger" :class="{ active: isActive }" @click="listHandler">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="list" :class="{ active: isActive }">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left">
                <div class="context">
                  <h2 class="list-title font-weight-bold mb-3">
                    <i class="bi bi-house"></i> Compound
                  </h2>
                  <p class="list-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores voluptatem dignissimos officia temporibus fuga ut
                    dolorem beatae? Autem deleniti aspernatur maiores numquam
                    officia magnam accusamus!
                  </p>
                </div>
                <div class="image">
                  <img
                    src="@/assets/1.jpg"
                    alt="Home"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right">
                <ul class="links">
                  <li>
                    <nuxt-link to="/" exact>Home</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/favourite">Favourite</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about">About</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact">Contact</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="list-footer mt-5">
          <h6>Created by Ahmed Ragab &copy; 2021</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    listHandler() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  @include between(row);

  .logo {
    h5 {
      cursor: pointer;
    }
  }

  .burger {
    padding: 1px;
    cursor: pointer;
    z-index: 4;

    div {
      margin: 5px;
      height: 1px;
      width: 20px;
      background-color: $dark;
      transition: all 1s ease-in-out;
    }

    &.active {
      div {
        background-color: $light;
      }

      .line1 {
        transform: translate(0, 9px) rotate(45deg);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: translate(0, -3px) rotate(-45deg);
      }
    }
  }

  .list {
    @include center(column);

    * {
      color: $light;
    }

    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: $blur;
    width: $full;
    height: 100vh;
    z-index: 3;
    transition: all 1s ease-in-out;

    //active class options
    opacity: 0;
    pointer-events: none;
    transform: scale(0.8) translateX(-100%);

    &.active {
      opacity: 1;
      pointer-events: all;
      transform: scale(1) translateX(0%) rotate(0deg);
    }

    .left {
      .context {
        margin-bottom: 20px;

        .list-p {
          font-size: 0.9rem;
        }
      }

      .image {
        img {
          box-shadow: $darkShadow;
          transition: $transition;

          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    .right {
      height: 100%;
      @include center(column);

      .links {
        height: 50%;
        width: 100%;
        @include around(column);

        li {
          a {
            &:hover {
              text-decoration: underline;
            }
          }
          .nuxt-link-active {
            padding: 10px 30px;
            background-color: $light;
            color: $dark;
            border-radius: 5px;

            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}

/* Media Query */

@media (max-width: 410px) {
  nav {
    .list {
      .right {
        @include center(row);
        .links {
          @include center(row);
          width: 90%;
          gap: 10px;
          padding: 10px 5%;
          margin-top: 30px;
          height: auto;
          li {
            .nuxt-link-active {
              padding: 8px 10px;
              background-color: $light;
              color: $dark;
              box-shadow: $darkShadow;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
