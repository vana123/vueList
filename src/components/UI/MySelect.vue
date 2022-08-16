<template lang="">
    <select v-model="modelValue" @change="changeOption" class="select">
        <option disable value="">choose from list</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
        {{option.value}}
        </option>
    </select>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
.select {
    height: 30px;
    border-radius: 15px;
    padding: 5px;
}
</style>