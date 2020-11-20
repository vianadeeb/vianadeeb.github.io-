<template>
  <div :class="{ 'theme-dark': nightMode }">
    <!-- Start Header -->
    <b-navbar  toggleable="lg" class="stylnav " sticky fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <img
            src="../assets/img/sun.svg"
            class="imgh"
            v-if="nightMode"
            @click="changeMode()"
          />
          <img
            src="../assets/img/moon.svg"
            class="imgh"
            v-else
            @click="changeMode()"
          />
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <img src="../assets/img/mm.svg" width="40px" height="40px">       -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <img src="../assets/img/mm.svg" width="40px" height="40px">       -->
          <!-- <i class="material-icons micon">info</i>
          <i class="material-icons micon">account_circle</i> -->
         
          <router-link   to="/aboutme">
      
            <img
              
             
              src="../assets/img/help.svg"
              class="imgh mr-4 "
              v-b-tooltip.hover
              title="About"
            />
        
          </router-link>
          <router-link to="/">
<img src="../assets/img/resume.svg" class="imgh mr-4 " v-b-tooltip.hover title="Resume"/>
  </router-link>  
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--end of header-->
  </div>
</template>
<script>
export default {
  name: "Headerresume",
  // props: ['nightMode'],
  data() {
    return {
      nightMode: false,
      sun:false,
    };
  },
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      this.$emit("nightMode", this.nightMode);
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
  methods: {
    changeMode() {
      if (this.nightMode == false) {
        this.nightMode = true;
      } else {
        this.nightMode = false;
      }
    },
    // sun() {
    //   if (this.sun == false) {
    //     this.sun = true;
    //   } else {
    //     this.sun = false;
    //   }
    // },
  },
};
</script>
<style>
.micon {
  color: #0045ff;
  font-size: 40px;
}
.imgh {
  color: #0045ff;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.stylnav {
  /* border-bottom:1px solid #0045FF; */
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  padding: 20px;
  position: sticky;
}
@media (max-width: 991px) {
  .imgh {
    margin-top: 20px;
  }
}
.theme-dark {
  color: #efefef;
  background-color: #1c1e2f;
}

</style>
