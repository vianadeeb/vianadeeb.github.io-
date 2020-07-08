<template>
    <div class="login">
        <div class="login-card">
                <b-form-input v-model="form.username" class="mb-2" placeholder="Enter your name"></b-form-input>
                <b-form-input v-model="form.password" class="mb-2" placeholder="password"></b-form-input>
                <b-button block variant="success" @click="login">Login</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                username: null,
                password: null
            }
        }
    },
    methods:{
        login(){
            this.$axios.post("/login", this.form).then((succ) => {
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>
.login {
    width: 100%;
    height: 100vh;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-card { 
    width: 340px;
    padding: 10px;
    background: #fff;
}
</style>