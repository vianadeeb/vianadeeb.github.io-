<template>
  <div :class="{ 'theme-dark': nightMode }">

  <b-navbar toggleable="lg" class="stylnav" >
   

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

     
      <b-navbar-nav class="ml-auto">
       
  <router-link to="/">
<img src="../assets/img/resume.svg" class="imgh mr-4 " v-b-tooltip.hover title="Resume"/>
  </router-link>   

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    
  </div>
</template>
<script>
export default {
  name: "Headerraboutme",
  data() {
    return {
      nightMode: false,
    };
  },
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
      this.$emit('nightMode',this.nightMode);
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
  methods: {
    changeMode() {
          if(this.nightMode == false){
            this.nightMode = true;
          }else{
            this.nightMode = false;
          }
    }
       
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
  
  box-shadow: 0px 4px 8px rgba(134, 151, 168, 0.1);
  padding: 20px;
}
@media  (max-width:991px) {
  .imgh {
       margin-top: 20px;
  }
}
.theme-dark {
  color: #efefef;
  background-color: #1c1e2f;;
}
</style>
