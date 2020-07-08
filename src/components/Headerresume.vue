<template>
  <div :class="{ 'theme-dark': nightMode }">
    <!-- Start Header -->
    <b-navbar toggleable="lg" class="stylnav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <img
            src="../assets/img/sun.svg"
            class="imgh"
            v-if="nightMode"
            @click="nightMode = !nightMode"
          />
          <img
            src="../assets/img/moon.svg"
            class="imgh"
            v-else
            @click="nightMode = !nightMode"
          />
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <img src="../assets/img/mm.svg" width="40px" height="40px">       -->
          <!-- <i class="material-icons micon">info</i>
          <i class="material-icons micon">account_circle</i> -->
          <router-link to="/aboutme">
            <img
              src="../assets/img/help.svg"
              class="imgh mr-4 "
              v-b-tooltip.hover
              title="About"
            />
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
  data() {
    return {
      nightMode: false,
    };
  },
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
  methods: {},
};
</script>
<style >
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
}
@media (max-width: 991px) {
  .imgh {
    margin-top: 20px;
  }
}
.theme-dark {
  color: #efefef;
  background-color: #333;
}

</style>
