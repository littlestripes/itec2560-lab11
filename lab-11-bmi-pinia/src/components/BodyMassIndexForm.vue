<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '../stores/BMIStore.js';
import { ref } from 'vue';

const BMIStore = useStore();
const { height, weight, heightUnit, weightUnit, useImperial } = storeToRefs(BMIStore);
</script>


<template>
    <h2>Enter your height and weight</h2>
    <p>
        <label for="bmi-height">Height (in {{ heightUnit }}) </label>
        <input name="bmi-height" v-model="height">
        <br>
        <label for="bmi-weight">Weight (in {{ weightUnit }}) </label>
        <input name="bmi-weight" v-model="weight">
    </p>

	<div id="options">
		<h3>Options</h3>
        <!-- v-model works with store data exported using storeToRefs -->
		<input type="checkbox" unchecked v-model="useImperial" name="units"><label for="units"> Use imperial units?</label>
    </div> 
</template>


<style scoped>
div {
    margin: 1rem 0;
}
</style>
