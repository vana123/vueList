<template lang="">
    <div class="post__form">
        <form class="form" @submit.prevent>
            <h4 class="form_title">Crate post</h4>
            <my-input 
                class="input"
                type="text"
                placeholder="Title"
                v-model="post.title"
                v-focus
            />
            <my-input 
                class="input"
                type="text"
                placeholder="Body"
                v-model="post.body"
            />
            <my-button
                class="button" 
                @click="createPost"
            >
                add
            </my-button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            post: {
                id: 0,
                title: "",
                body: "",
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                id: 0,
                title: '',
                body: '',
            }
        },
    }
}
</script>
<style>
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input {
    width: 100%;
    margin-top: 5px;
}

.button {
    margin: 15px 0;
    width: 200px;
    height: 50px;
}

.form_title {
    text-align: center;
}
</style>