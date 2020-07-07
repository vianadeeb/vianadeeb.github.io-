<template>
  <div id="app">
    <Headerraboutme />
    <template id="backToTop">
      <div>
        <transition name="back-to-top-fade">
          <div
            class="vue-back-to-top"
            :style="`bottom:${this.bottom};right:${this.right};`"
            v-show="visible"
            @click="backToTop"
          >
            <slot>
              <div class="default">
                <span>
                  <img src="../assets/img/up-arrow.svg" class="backtop" />
                </span>
              </div>
            </slot>
          </div>
        </transition>
      </div>
    </template>
    <div id="app">
      <back-to-top text="Back to top"></back-to-top>
      <div class="bodyaboutpage">
        <div class="bodyabout p-4">
           <transition name="flip" mode="out-in" appear>
          <h1 class="title title--h1 title__separate">About Me</h1>
           </transition>
          <p class="colordes">
            I'm Vian Adeeb My job is to build your website so that it is
            functional and user-friendly but at the same time attractive.
            Moreover, I add personal touch to your product and make sure that is
            eye-catching and easy to use. My aim is to bring across your message
            and identity in the most creative way. I created web design for many
            <!-- famous brand -->
            companies.
            <!-- I also manage organizing coding camps and
          hackathons events with FikraSpace. Since I was a project manager and
          trainer for the latest FikraCamps coding camp and FikraThon. -->
          </p>
          <b-row class="pt-4">
            <b-col cols xs="12">
              <hr />
            </b-col>
          </b-row>
          <br />
          <h2 class="title title--h3">What I'm Doing</h2>
          <div class="row p-2">
            <!-- Case Item -->
            <div class="col-12 col-lg-6">
              <div class="case-item box box__second">
                <img
                  class="case-item__icon"
                  src="../assets/img/icon-design.svg"
                  alt=""
                />
                <div>
                  <h3 class="title title--h5">Web Design</h3>
                  <p class="case-item__caption">
                    The most modern and high-quality design made at a perfect
                    level.
                  </p>
                </div>
              </div>
            </div>

            <!-- Case Item -->
            <div class="col-12 col-lg-6">
              <div class="case-item box box__second">
                <img
                  class="case-item__icon"
                  src="../assets/img/icon-dev.svg"
                  alt=""
                />
                <div>
                  <!-- <h3 class="title title--h5">Web Development</h3>
                <p class="case-item__caption">
                  High-quality and professional development of sites at the
                  professional level.
                </p> -->
                  <h3 class="title title--h5">UI/UX Designer</h3>
                  <p class="case-item__caption">
                    High-quality and designer of sites t a perfect level.
                  </p>
                </div>
              </div>
            </div>

            <!-- Case Item -->
            <div class="col-12 col-lg-6">
              <div class="case-item box box__second">
                <img
                  class="case-item__icon"
                  src="../assets/img/icon-app.svg"
                  alt=""
                />
                <div>
                  <h3 class="title title--h5">Mobile Apps</h3>
                  <p class="case-item__caption">
                    <!-- Beginner in app development, for IOS apps mainly -->
                    Beginner in app development, for Flutter apps mainly
                  </p>
                </div>
              </div>
            </div>

            <!-- Case Item -->
            <div class="col-12 col-lg-6">
              <div class="case-item box box__second">
                <img
                  class="case-item__icon"
                  src="../assets/img/icon-education.svg"
                  alt=""
                />
                <div>
                  <h3 class="title title--h5">Training</h3>
                  <p class="case-item__caption">
                    <!-- I train students on some advanced coding concepts, trying to
                  make them at a better level. mainly javascript training, I
                  also manage the logistics of the camps. -->
                    not yet
                  </p>
                </div>
              </div>
            </div>
          </div>
          <b-row class="pt-4">
            <b-col cols xs="12">
              <hr />
            </b-col>
          </b-row>
          <h2 class="title title--h3 mt-4">Events Experience</h2>
          <div class="row">
            <!-- Case Item -->
            <div class="col-12 col-lg-6 scaleevent">
              <div class="swiper-slide review-item">
                <svg
                  style="top: -18px;
          left: 1.6rem;
          height: 104px;
          z-index: 1;
          position: absolute;"
                  class="avatar avatar--100"
                  viewBox="0 0 84 84"
                >
                  <g class="">
                    <image
                      style="width:67px"
                      xlink:href="../assets/img/avatar-33.png"
                      height="100%"
                      width="100%"
                    />
                  </g>
                </svg>
                <h4 class="title title--h5">facebook developer circle</h4>
                <p class="review-item__caption">
                  Organizer (volunteer) The Initiator for the first circle in
                  Baghdad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Comfooter />
  </div>
</template>
<script>
import Headerraboutme from "@/components/Headerraboutme.vue";
import Comfooter from "@/components/Comfooter.vue";
export default {
  components: {
    Headerraboutme,
    Comfooter,
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    catchScroll() {
      this.visible = window.pageYOffset > parseInt(this.visibleoffset);
    },

    backToTop() {
      window.smoothscroll();
      this.$emit("scrolled");
    },
  },
  beforeCreate() {},
  props: {
    text: {
      type: String,
      default: "text",
    },
    visibleoffset: {
      type: [String, Number],
      default: 300,
    },
    right: {
      type: String,
      default: "30px",
    },
    bottom: {
      type: String,
      default: "40px",
    },
  },
  data() {
    return {
      // value: 33.3,
      // max: 50,
      visible: false,
    };
  },
};
</script>
<style scoped>
.bodyabout {
  width: 100%;
  margin: 20px;
  background-color: #ffffff;
}
.bodyaboutpage {
  background-color: #f0f0f6;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.title--h1 {
  font-size: 2rem;
  margin-bottom: 1.1rem;
  font-weight: 600 !important;
  letter-spacing: 2px;
  color: #44566c;
}
.title--h3 {
  font-size: 24px;
  margin-bottom: 1.1rem;
  font-weight: 600 !important;
  color: #44566c;
}
.title__separate {
  margin-bottom: 2.3rem;
  position: relative;
}
.title__separate::before {
  content: "";
  background-color: #0045ff;
  border-radius: 0.5rem;
  height: 4px;
  position: absolute;
  bottom: -1.1rem;
  left: 0;
  width: 3.12rem;
  z-index: 1;
}
.case-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  height: calc(100% - 1.875rem);
  margin-bottom: 1.875rem;
  padding: 1.875rem 1.875rem 1.5rem;
  position: relative;
}
.case-item__icon {
  margin-right: 1.2rem;
  height: 2.5rem;
  width: 2.5rem;
}
.box__second {
  background-color: #f8fafb;
  border-radius: 0.937rem;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  transition: 0.7s;
  cursor: pointer;
}
.box__second:hover{
      transform: scale(0.9,0.9);
      border:2px solid #0045ff;
}
.scaleevent{
   transition: 0.7s;
  cursor: pointer; 
}
.scaleevent:hover{
   transform: scale(0.9,0.9);
}
.review-item {
  display: flex;
  flex-direction: column;
  background-color: #f8fafb;
  background-image: url(../assets/img/icon-quote.html);
  background-repeat: no-repeat;
  background-position: right 1.875rem top 1.875rem;
  border-radius: 0.937rem;
  height: auto;
  padding: 1.875rem 1.875rem 1.5rem;
  margin-top: 2.5rem;
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
}
@media only screen and (max-width: 580px) {
  .title__separate {
    margin-bottom: 1.5rem;
  }
  .title__separate::before {
    height: 2px;
    bottom: -0.6rem;
    width: 3rem;
  }
  .title--h5 {
    font-size: 24px;
  }
}
@media only screen and (max-width: 580px) {
  .title--h1 {
    font-size: 1.75rem;
  }
}
*,
body {
  font-family: "Archivo", sans-serif;
}

.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity 0.7s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  position: fixed;
  z-index: 1000;
  cursor: pointer;
}

.vue-back-to-top .default {
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
}

.vue-back-to-top .default span {
  color: #ffffff;
}
.backtop {
  width: 38px;
  height: 38px;
  margin-bottom: 30px;
}
.title--h5,
.case-item__caption,
.colordes,
.review-item__caption {
  color: #44566c;
}
/**/
  .flip-enter {
        /*transform: rotateY(0deg);*/
    }

    .flip-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }

    .flip-leave {
        /*transform: rotateY(0deg);*/
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
