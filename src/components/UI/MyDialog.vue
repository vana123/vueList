<template lang="">
    <div class="dialog" v-if="show" @click.stop="hiden">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-dialog',
    props: {
        show: Boolean
    },
    methods: {
        hiden() {
            this.$emit('update:show', false)
            console.log("")
        }
    }
}
</script>
<style>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
}
</style>