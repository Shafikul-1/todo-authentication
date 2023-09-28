<script setup>
// import { ref } from 'vue';
import {addedItem, tododetails} from '../stores/todo'

function updateAddedItem(event) {
  addedItem.value.name = event.target.value;
}

function addItem() {
  if (addedItem.value.name.trim() === '') {
    return; // Don't add empty tasks
  }

  addedItem.value.id = tododetails.value.length + 1;
  tododetails.value.push({ ...addedItem.value });
  addedItem.value.name = ''; // Clear the input

//   console.log(tododetails.value)
}

function toggleItem(item) {
  item.checked = !item.checked;
}

function removeTask(removeId){
  const indexSearch = tododetails.value.findIndex((item)=>{
    return item.id === removeId
  })
  if(indexSearch !== -1){
    tododetails.value.splice(indexSearch , 1)
  }
}
</script>

<template>
    
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div class="px-4 py-2">
        <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form @submit.prevent="addItem" class="w-full max-w-sm mx-auto px-4 py-2">
        <div class="flex items-center border-b-2 border-teal-500 py-2">
          <input
            v-model="addedItem.name"
            @input="updateAddedItem"
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
          />
          <button
            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <ul class="divide-y divide-gray-200 px-4">
        <li class="py-4 cursor-pointer" v-for="(details) in tododetails" :key="details.id">
          <div class="flex items-center">
            <input
              @click="toggleItem(details)"
              :id="'todo-' + details.id"
              :name="'todo-' + details.id"
              type="checkbox"
              :checked="details.checked"
              class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
            <label :for="'todo-' + details.id" class="ml-3 block text-gray-900 cursor-pointer w-full">
             <div class="flex justify-between w-full">
                <span :class="details.checked ? 'line-through' : 'font-bold'" class="text-lg capitalize font-serif">{{ details.name }}</span>
                <svg @click="removeTask(details.id)" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
             </div>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </template>
  

  
  <style scoped>
 svg{fill:#ff0505}
  </style>
  