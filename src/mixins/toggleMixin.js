export default {
    data() {

    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        hiden() {
            this.$emit('update:show', false)
            console.log("")
        },
    }
}