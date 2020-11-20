<template>
  <div>
      <!-- <rotate-square2></rotate-square2> -->
    <Headerresume v-on:nightMode="updnightMode($event)" />
    <!-- <Headerresume :nightMode="nightMode" /> -->
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
      <div class="bodyaboutpage"  :class="{ 'body-one': nightMode }">
        <div class="bodyabout p-4" :class="{ 'body-main': nightMode }">
          <transition name="flip" appear>
            <h1 class="title title--h1 title__separate" :class="{ 'color-txt': nightMode }">Resume</h1>
          </transition>

          <b-row class="pb-4">
            <b-col xl="4" lg="4" md="6" sm="12" xs="12" >
              <img src="../assets/img/vian.jpg" class="imgsty" />
            </b-col>
            <b-col xl="4" lg="4" md="6" sm="12" xs="12" class="namemedia">
              <h1 class="namesty">Vian Adeeb Noori</h1>
              <br />
              <span class="jobsty">Front-End Web Developer</span>
              <br />
              <br />
              <span class="jobsty">UI/UX Designer</span>
              <br />
              <br />
              <a href="https://www.dribbble.com/vianadeeb" target="_blank">
                <img src="../assets/img/dribbble.svg" class="iconlink" />
              </a>
              <a href="https://www.linkedin.com/in/vian-a-n/" target="_blank">
                <img src="../assets/img/n.svg" class="iconlink" />
              </a>
              <a href="https://www.github.com/vianadeeb" target="_blank">
                <img src="../assets/img/github.svg" class="iconlink" />
              </a>
              <a href="https://www.pinterest.com/vadeeb94/" target="_blank">
                <img src="../assets/img/pinterest.svg" class="iconlink" />
              </a>
              <a href="https://www.behance.net/vadeeb" target="_blank">
                <img src="../assets/img/behance.svg" class="iconlink" />
              </a>
              <a href="https://medium.com/@v.adeeb.94" target="_blank">
                <img src="../assets/img/medium.svg" class="iconlink" />
              </a>
              <br />
              <br />
              <!-- <a href="../../public/vianpdf.pdf" download target="_blank">
                <button type="button" class="downloadsty">
                  <img src="../assets/img/download.svg" class="iconlink" />
                  Download CV
                </button>
              </a> -->
            </b-col>
            <b-col xl="4" lg="4" md="6" sm="12" xs="12">
              <img src="../assets/img/calendar.svg" class="iconsty" />
              <span class="textsty" v-b-tooltip.hover title="Birthday" :class="{ 'colordes': nightMode }"
                >December 15, 1994</span
              >
              <br />
              <br />
              <img src="../assets/img/pin.svg" class="iconsty" />
              <span class="textsty" v-b-tooltip.hover title="Location" :class="{ 'colordes': nightMode }"
                >Baghdad, Iraq</span
              >
              <br />
              <br />
              <img src="../assets/img/phone.svg" class="iconsty" />
              <span class="textsty" v-b-tooltip.hover title="Phone" :class="{ 'colordes': nightMode }"
                >+964 7714354364</span
              >
              <br />
              <br />
              <a href="https://skype.com/cid.69e81f8812504fa9" target="_blank">
                <img src="../assets/img/skype.svg" class="iconsty" />
                <span class="textsty" v-b-tooltip.hover title="Skype" :class="{ 'colordes': nightMode }"
                  >Vian Adeeb Noori</span
                >
              </a>
              <br />
              <br />
              <a href="mailto:v.adeeb.94@gmail.com">
                <img src="../assets/img/mail.svg" class="iconsty" />
                <span class="textsty" v-b-tooltip.hover title="Mail" :class="{ 'colordes': nightMode }"
                  >v.adeeb.94@gmail.com</span
                >
              </a>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col cols xs="12">
              <hr :class="{ 'des-hr': nightMode }"/>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col  xl="6" lg="6" md="6" sm="12" xs="12">
              <h2 class="title title--h3" :class="{ 'body-text': nightMode }">
                <img src="../assets/img/icon-education.svg" class="imgedu" />
               <span :class="{ 'body-text': nightMode }" > Education </span>
              </h2>
              <div class="timeline">
                <!-- Item -->
                <article class="timeline__item" :class="{ 'body-text': nightMode }">
                  <h5 class="title title--h5 timeline__title" :class="{ 'body-text': nightMode }">
                    University of Baghdad
                  </h5>
                  <span class="timeline__period">2015 — 2016</span>
                  <p class="timeline__description" :class="{ 'txt-cap': nightMode }">
                    Bachelor Degree - Ibn Al-Haytham / Computer Science College.
                  </p>
                </article>

                <!-- Item -->
                <article class="timeline__item">
                  <h5 class="title title--h5 timeline__title" :class="{ 'body-text': nightMode }">
                    CodeLab CodeBits
                  </h5>
                  <span class="timeline__period" >2019</span>
                  <p class="timeline__description" :class="{ 'txt-cap': nightMode }">
                    Flutter Development. - Sponsored by Zain
                  </p>
                </article>
              </div>
            </b-col>
            <b-col xl="6" lg="6" md="6" sm="12" xs="12">
              <h2 class="title title--h3" :class="{ 'body-text': nightMode }">
                <img src="../assets/img/icon-experience.svg" class="imgeduc" />
                <span :class="{ 'body-text': nightMode }" > Experience </span>
              </h2>
              <div class="timeline">
                <!-- Item -->
                <article class="timeline__item">
                  <h5 class="title title--h5 timeline__title" :class="{ 'body-text': nightMode }">
                    Front End Web Development at Croczi
                  </h5>
                  <span class="timeline__period">2019 — Former</span>
                  <p class="timeline__description" :class="{ 'txt-cap': nightMode }">
                    Croczi is information technology company in Iraq - Worked as
                    Front End using React js.
                  </p>
                </article>

                <!-- Item -->
                <article class="timeline__item">
                  <h5 class="title title--h5 timeline__title" :class="{ 'body-text': nightMode }">
                    Front End Web Development and UI/UX Designer and Software engineer at Enjaz LLC
                  </h5>
                  <span class="timeline__period">2019 — Present</span>
                  <p class="timeline__description" :class="{ 'txt-cap': nightMode }">
                    Enjaz is information technology company in Iraq - Worked as
                    Front End Developer using Jquery , Vue js , Gravit Designer
                    and Adobe XD .
                  </p>
                </article>
              </div>
            </b-col>
          </b-row>
          <b-row class="pt-4">
            <b-col cols xs="12">
              <hr :class="{ 'des-hr': nightMode }"/>
            </b-col>
          </b-row>
          <!-- Skills -->
          <b-row class="pt-4">
            <b-col lg="6" xs="12">
              <h2 class="title title--h3" :class="{ 'main-txt': nightMode }" > Main Coding Skills</h2>
              <br />
              <h5 :class="{ 'body-text': nightMode }">HTML , CSS</h5>
              <b-progress
                :value="80"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Javascript , ES6</h5>
              <b-progress
                :value="70"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Vue js , Jquery</h5>
              <b-progress
                :value="72"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Gravit Designer , Adobe XD</h5>
              <b-progress
                :value="85"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Bootstrap , Vuetify</h5>
              <b-progress
                :value="75"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Git , GitHub</h5>
              <b-progress
                :value="75"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
               <h5 :class="{ 'body-text': nightMode }">Software engineer</h5>
              <b-progress
                :value="60"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
            </b-col>
            <b-col lg="6" xs="12" class="other">
              <h2 class="title title--h3" :class="{ 'body-text': nightMode }">Other Coding Skills</h2>
              <br />
              <h5 :class="{ 'body-text': nightMode }">MySql</h5>
              <b-progress
                :value="50"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">PHP , Laravel</h5>
              <b-progress
                :value="50"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">Wordpress</h5>
              <b-progress
                :value="50"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
              <h5 :class="{ 'body-text': nightMode }">swift</h5>
              <b-progress
                :value="5"
                :max="max"
                show-value
                class="mb-3"
              ></b-progress>
            </b-col>
          </b-row>
          
        </div>
        
      </div>
      <!-- Start footer -->
<div class="container-fluid footer"  :class="{ 'body-one': nightMode }">
      <p class="cop"  :class="{ 'body-one': nightMode }"> © 2020 Vian Adeeb - All Rights Reserved. </p>
  </div>
    <!--end of footer-->
    </div>
    <!-- <Comfooter v-on:nightMode="updnightMode($event)"/> -->
    
  </div>
</template>

<script>
 import {RotateSquare2} from 'vue-loading-spinner'
import Headerresume from "@/components/Headerresume.vue";
import Comfooter from "@/components/Comfooter.vue";
export default {
  // props: ['nightMode'],
  components: {
    Headerresume,
    Comfooter,
     RotateSquare2
  },
  // watch: {
  //   nightMode: function() {
  //     localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
  //   },
  // },
  // created() {
  //   this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  // },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 20));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    updnightMode:function(updatebody){
     this.nightMode=updatebody;
    },
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
      nightMode: false,
      max:"",
    };
  },
};
</script>
<style lang="scss" >
.bodyabout {
  width: 100%;
 margin: 20px 20px 0px 20px;
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
  font-weight: 600;
  letter-spacing: 2px;
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
@media only screen and (max-width: 580px) {
  .title__separate {
    margin-bottom: 1.5rem;
  }
  .title__separate::before {
    height: 2px;
    bottom: -0.6rem;
    width: 3rem;
  }
  .downloadsty {
    margin-bottom: 32px;
    transition: 0.5s;
    outline: none;
  }
  .downloadsty:hover {
    transform: scale(1.1);
  }
  .namesty {
    padding-top: 10px;
    font-size: 36px;
  }
  .other {
    margin-top: 25px;
  }
}
@media only screen and (max-width: 580px) {
  .title--h1 {
    font-size: 1.75rem;
  } 
}
.imgsty {
  border-radius: 1px;
  width: 300px;
  transition: 0.7s;
  cursor: pointer;
  /* height: 320px; */
}
.imgsty:hover {
  transform: scale(0.9, 0.9);
}
.iconlink {
  width: 26px;
  height: 26px;
  margin-right: 20px;
}
.backtop {
  width: 38px;
  height: 38px;
  margin-bottom: 30px;
}
.namesty {
  background: -webkit-linear-gradient(#0045ff, #0081ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.jobsty {
  background-color: #f0f0f6;
  color: #44566c;
  font-size: 0.875rem;
  font-weight: 400;
  border-radius: 10rem;
  padding: 5px 15px;
  margin: 10px;
  font-size: 16px;
}
.downloadsty {
  padding: 10px 40px;
  background-size: 200% auto;
  background: -webkit-linear-gradient(#0045ff, #0081ff);
  transition: 0.4s ease-in-out;
  border: none;
  border-radius: 42px;
  color: white;
  outline: none;
  transition: 0.7s;
  cursor: pointer;
}
.downloadsty::before {
  content: "";
  /* background-color: #f8fafb; */
  height: 100%;
  position: absolute;
  top: 0;
  width: 1.875rem;
  z-index: -1;
}
.downloadsty:hover {
  transform: scale(0.9, 0.9);
}
.iconsty,
.textsty {
  color: #44566c;
  font-style: normal;
  text-decoration: none;
}
.iconsty {
  width: 26px;
  height: 26px;
  margin-right: 20px;
}

/* -----------------------------------------------------------------
    - Progress
----------------------------------------------------------------- */
.progress {
  background-color: #f0f0f6;
  border-radius: 1rem; 
  height: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: inherit;
  position: relative;
  text-align: right;
}
@media only screen and (max-width: 580px) {
  .progress {
    margin-bottom: 1rem;
  }
}
.progress:last-child {
  margin-bottom: 0;
}
.progress-bar {
  background-color: #0045ff;
  background-image: linear-gradient(to right, #0081ff 0%, #0045ff 100%);
  border-radius: 18rem;
  box-shadow: 0 2px 4px rgba(0, 69, 255, 0.15), 0 8px 16px rgba(0, 69, 255, 0.2);
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  z-index: 1;
}
.progress .progress-text {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .progress-text span:nth-child(2) {
    float: right;
  }
}
.textsty:hover {
  color: #007bff;
  text-decoration: none;
}
.imgedu {
  width: 60px;
  height: 60px;
  transition: 0.5s;
}
.imgedu:hover,
.imgeduc:hover {
  transform: scale(1.1);
}
.imgeduc {
  width: 50px;
  height: 50px;
  transition: 0.5s;
}

/* -----------------------------------------------------------------
    - Timeline
----------------------------------------------------------------- */
.timeline {
  margin-top: 1.8rem;
  padding-left: 0.5rem;
}
.timeline__item {
  border-left: 1px solid #f0f0f6;
  padding-bottom: 0.6rem;
  padding-left: 1.4rem;
  position: relative;
}
.timeline__item::before {
  content: "";
  background-color: #0045ff;
  box-shadow: 0 0 0 3px rgba(0, 69, 255, 0.25);
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: -5px;
  height: 10px;
  width: 10px;
}
.timeline__item:last-child {
  border: 0;
}
.timeline__title {
  margin-bottom: 0.1rem;
}
.timeline__period {
  color: #8697a8;
  font-size: 0.875rem;
}
.timeline__description {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
.title--h3,
.timeline__title,
.timeline__description,
h5 {
  color: #44566c;
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
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
/**/


.flip-enter-active {
  animation: flip-in 1.5s ease-out forwards;
}
.flip-leave-active {
  animation: flip-out 1.5s ease-out forwards;
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
*,
body {
  font-family: "Archivo", sans-serif;
}
.body-main {
  color: #efefef;
  background-color:#222437;
}
.body-one {
  color: #efefef;
  background-color:#2a2c40 ;
}
.body-text,.color-txt,.body-text,.colordes,.main-txt {
  // color: #ffffff;
  color: #979fc2;
}
.txt-cap{
  color: #606a96;
}
.des-hr{
  background-color: #3f445d;
}
.footer{
//  background-color: #f0f0f6;
 padding-bottom: 20px;
  padding-top: 20px;
}
.cop{
  margin: 0px;
  text-align: center;
  color: #44566c;
}
</style>
