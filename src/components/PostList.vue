<template>
    <div class="post__list" v-if="posts.length > 0">
        <TransitionGroup name="list">
            <post-item v-for="post in posts" :post="post" :key="post.id" @remuve="$emit('remuve', post)" />
        </TransitionGroup>
    </div>
    <div class="post__list" v-else>
        <h3>List empty</h3>
    </div>
</template>
<script>
import PostItem from '@/components/PostItem.vue'
export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>