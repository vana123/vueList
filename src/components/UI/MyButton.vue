<template lang="">
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button',
}
</script>
<style scoped>
.btn {
    padding: 10px;
    border-radius: 15px;
    border: 3px solid teal;
    cursor: pointer;
}
</style>