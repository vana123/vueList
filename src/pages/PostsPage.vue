<template>
    <div>
        <h1>Page whis posts</h1>
        <my-input v-model="searchQuery" v-focus></my-input>

        <div class="Posts__buttons">
            <my-button class="button" @click="showDialog">Add posts</my-button>
            <my-button class="button" @click="fetchPosts">Get posts</my-button>
            <my-select v-model="selectedSort" :options="[{ value: 'title' }, { value: 'body' }]"></my-select>
        </div>

        <post-list :posts="sortedAndSearchedPosts" @remuve="remuvePost" v-if="!isLoading" />
        <div v-intersection="LoadMorePosts" class="observer"></div>
        <!-- <div class="pagination">
            <div v-for="pageNumber in totalPages" class="pagination__item" @click="changePage(pageNumber)"
                :class="{ 'pagination__item_active': pageNumber == this.page }" :key="pageNumber">
                {{ pageNumber }}
            </div>
        </div> -->

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
            searchQuery: '',
            limit: 10,
            page: 1,
            totalPages: 0
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
        //    
        async fetchPosts() {
            try {
                this.isLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.posts = response.data;
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
            } catch (e) {
                alert("Error")
            }
            finally {
                this.isLoading = false;
            }
        },
        async LoadMorePosts() {
            try {
                this.page += 1
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                })
                this.posts = [...this.posts, ...response.data];
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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
        },
        // page() {
        //     this.fetchPosts()
        // }

    },
    computed: {
        sortPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts() {
            return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    mounted() {
        this.fetchPosts();

    },
}
</script> 

<style scoped>
.Posts__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    margin: 5px;
}

.pagination {
    margin: 10px 0;
    display: flex;
    justify-content: center;
}

.pagination__item {
    margin: 0 5px;
    border: 1px solid teal;
    border-radius: 45%;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.pagination__item_active {
    border: 3px solid rgb(0, 82, 82);
}

.observer {
    height: 30px;
    background-color: rgb(51, 255, 0);
}
</style>

