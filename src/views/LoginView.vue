
<script setup>
// import router from '../router/index'
import { reactive } from 'vue'
import { userStore } from '../stores/user'
import { RouterLink } from 'vue-router';
const details = reactive({
	name: '',
	pass: '',
})


const authDetails = userStore

</script>
<template>
	<div>
		<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div class="relative py-3 sm:max-w-xl sm:mx-auto">
				<div
					class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
				</div>
				<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
					<div class="max-w-md mx-auto">
						<div>
							<h1 class="text-2xl font-semibold">Login Form with Floating Labels</h1>
						</div>
						<div class="divide-y divide-gray-200">
							<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
								<div class="relative">
									<input autocomplete="off" id="email" name="email" type="text"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										v-model="details.name"
										placeholder="Email address" />
									<label for="email"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
										Address</label>
								</div>
								<div class="relative">
									<input autocomplete="off" id="password" name="password" type="password"
										class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
										v-model="details.pass"
										placeholder="Password" />
									<label for="password"
										class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
								</div>
						 		<div class="flex justify-between">
									<div class="relative">
										<button @click="authDetails.authenticate(details.name, details.pass)" class="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
									</div>
									<p class="font-bold">OR</p>
									<div class="">
										<div class="flex items-center justify-center w-full h-full button">
											<RouterLink to="/signup" class="relative inline-flex items-center justify-start px-5 border py-1 shadow-lg overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
												<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
												<span class="relative w-full text-[12px] text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign Up</span>
											</RouterLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped></style>