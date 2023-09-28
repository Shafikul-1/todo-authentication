import { ref } from 'vue'

const addedItem = ref({
    name: '',
    checked: false,
})
const tododetails = ref([])
export {addedItem, tododetails}