<template>
  <div>
   <!-- Start footer -->
<div class="container-fluid footer"  :class="{ 'body-one': nightMode }">
      <p class="cop"  :class="{ 'body-one': nightMode }"> © 2020 Vian Adeeb - All Rights Reserved. </p>
  </div>
    <!--end of footer-->
  </div>
</template>
<script>
export default {
  name: "Comfooter",
  data() {
    return {
     
    };
  },

  methods: {
   
       
  }
};
</script>
<style scoped>
.footer{
 background-color: #f0f0f6;
 padding-bottom: 20px;
}
.cop{
  margin: 0px;
  text-align: center;
  color: #44566c;
}
.body-one {
  color: #efefef;
  background-color:#2a2c40 ;
}
</style>
