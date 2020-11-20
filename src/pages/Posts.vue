<template>
  <div class="about">
    <b-card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      sub-title="Card subtitle"
    >
      <b-card-text>
        {{ post.body }}
      </b-card-text>

      <b-link :to="`post/${post.id}`" class="card-link">Another link</b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  beforeCreate() {
    this.$axios.get("posts").then(res => {
      this.posts = res.data;
    });
  }
};
</script>
