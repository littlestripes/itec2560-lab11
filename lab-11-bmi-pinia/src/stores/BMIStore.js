import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// amount to multiply metric BMI by to get imperial BMI
const CONVERSION_FACTOR = 730;

export const useStore = defineStore('bmi-store', () => {
    
    const height      = ref(0);
    const weight      = ref(0);
    const useImperial = ref(false);

    const heightUnit = computed(() => {
        return ( useImperial.value ? 'inches' : 'meters' );
    });

    const weightUnit = computed(() => {
        return ( useImperial.value ? 'pounds' : 'kilos' );
    });

    const bmi = computed(() => {
        if ( height.value && weight.value ) {
            // calculate metric first
            let metric = weight.value / ( height.value ** 2 );

            return ( useImperial.value ? ( metric * CONVERSION_FACTOR ).toFixed(2) : metric.toFixed(2) );
        } else {
            return false;  // so nothing shows up when BMI hasn't been calculated
        }
    });
    
    return {
        height,
        weight,
        useImperial,
        heightUnit,
        weightUnit,
        bmi
    };

});
