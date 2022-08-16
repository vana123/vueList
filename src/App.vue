<template>
    <div class="app">
        <h1>Page whis posts</h1>
        <div class="app__buttons">
            <my-button class="button" @click="showDialog">Add posts</my-button>
            <my-button class="button" @click="fetchPosts">Get posts</my-button>
            <my-select v-model="selectedSort" :options="[{ value: 'title' }, { value: 'body' }]"></my-select>
        </div>
        <post-list :posts="posts" @remuve="remuvePost" v-if="!isLoading" />
        <div class="Loading" v-if="isLoading">Loading...</div>
        <my-dialog v-model:show="isDialog">
            <post-form @create="createPost" />
        </my-dialog>
    </div>
</template>

<script>
import axios from 'axios'

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

export default {
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            isDialog: false,
            isLoading: false,
            selectedSort: '',
        }
    },
    methods: {
        showDialog() {
            this.isDialog = true
        },
        createPost(post) {
            this.posts.unshift(post)
        },
        remuvePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
            console.log(post)
        },
        async fetchPosts() {
            try {
                this.isLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                alert("Error")
            }
            finally {
                this.isLoading = false;
            }
        },
    },
    watch: {
        selectedSort(newValue) {
            this.posts.sort((post1, post2) => {
                return post1[newValue]?.localeCompare(post2[newValue])
            })
            console.log(newValue)
        }
    },
    computed: {
        sortPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        }
    },
    mounted() {
        this.fetchPosts();
    },
}
</script> 

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 15px;
    text-align: center;
}

.app__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    margin: 5px;
}
</style>

