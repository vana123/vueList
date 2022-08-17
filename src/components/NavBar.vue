<template lang="">
    <div class="navbar">
        <my-button @click="$router.push('./')" class="navbar__btn">Home</my-button>
        <my-button @click="$router.push('./posts')" class="navbar__btn">Pages</my-button>
        <my-button @click="$router.push('./about')" class="navbar__btn">About it</my-button>
        <!-- <router-link to="/" >Home</router-link>
        <router-link to="/posts" >Posts</router-link>
        <router-link to="/about" >About</router-link> -->
    </div>
</template>
<script>
export default {

}
</script>
<style>
.navbar {
    display: flex;
    justify-content: center;
    background: lightgray;
    padding: 15px;
}

.navbar__btn {
    margin: 0 10px;
}
</style>