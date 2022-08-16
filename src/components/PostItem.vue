<template>
    <div class="post__item">
        <div class="post__main">
            <div><strong>Name:</strong>{{ post.title }}</div>
            <div><strong>Discription:</strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button class="post__delete" @click="$emit('remuve', post)">delete</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
.post__item {
    padding: 10px;
    border: 2px solid teal;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-align: left;
}

.post__delete {
    width: 100px;
    height: 40px;
}
</style>