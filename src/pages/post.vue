<template>
  <div class="about">
        <b-spinner v-if="loading" type="grow" label="Spinning"></b-spinner>
      <b-card  v-else  :title="post.title" sub-title="Card subtitle">
        <b-card-text>
         {{ post.body}}
         
        </b-card-text>
      </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},   //object
      loading: true
    };
  },
  beforeCreate() {
    this.$axios.get(`posts/${this.$route.params.id}`).then(res => {
      this.post = res.data;
      this.loading = false;
    });
  }
};
</script>
