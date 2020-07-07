<template>
  <div>
   <!-- Start Header -->
  <b-navbar toggleable="lg" class="stylnav" >
   

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <!-- <b-nav-item-dropdown text="Lang" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <img src="../assets/img/mm.svg" width="40px" height="40px">       -->
         <!-- <i class="material-icons micon">info</i>
          <i class="material-icons micon">account_circle</i> -->
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
  name: "Headerraboutme",
  data() {
    return {
     
    };
  },

  methods: {
   
       
  }
};
</script>
<style scoped>
.micon{
  color: #0045FF;
  font-size: 40px;
}
.imgh{
   color: #0045FF;
   width: 40px;
   height: 40px;
}
.stylnav{
  /* border-bottom:1px solid #0045FF; */
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  padding: 20px;
}
@media  (max-width:991px) {
  .imgh {
       margin-top: 20px;
  }
}
</style>
