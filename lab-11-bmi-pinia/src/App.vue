<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

import { storeToRefs } from 'pinia';
import { useStore } from './stores/BMIStore.js';
import { ref } from 'vue';  // not sure if this is necessary for storeToRefs to work

const BMIStore = useStore();
const { bmi } = storeToRefs(BMIStore);
</script>


<template>

    <div id="main">
        <h1>Body Mass Index Calculator</h1>
    
        <BodyMassIndexForm />

        <h2 v-if="bmi">Your BMI is {{ bmi }}</h2>
    </div>

</template>


<style scoped>
h2 {
    margin-top: 3rem;
}
</style>
