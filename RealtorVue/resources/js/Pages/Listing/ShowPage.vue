<script setup>
import ListingAddress from '@/Components/ListingAddress.vue';
import ListingSpace from '@/Components/ListingSpace.vue';
import Price from '@/Components/Price.vue';
import Box from '@/Components/UI/Box.vue';
import { ref } from 'vue';
import { useMonthlyPayment } from '@/Composable/useMonthlyPayment';

const interestRate = ref(2.5);
const duration = ref(25);

const props = defineProps({
  listing: {
    type: Object,
  },
});
const { monthlyPayment, totalPaid, totalInterest } = useMonthlyPayment(props.listing.price, interestRate, duration);
</script>

<template>
  <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">

    <Box class="md:col-span-7 flex items-center">
      <div class="w-full text-center text-gray-500">image</div>
    </Box>

    <div class="md:col-span-5 flex flex-col gap-2">

      <Box>
        <template #title>Info</template>
        <Price :price="listing.price" class="text-xl font-bold" />
        &nbsp;
        <Price :price="listing.price" :locales="'ja-JP'" :currency="'JPY'" class="text-xl font-bold" />
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress :listing="listing" class="text-gray-400" />
      </Box>

      <Box>
        <template #title>Buy</template>
        <div>
          <label class="label">Interest {{ interestRate }}</label>
          <input v-model.number="interestRate" type="range" min="0.1" max="30" step="0.1"
            class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-700" />

          <label class="label">Duration {{ duration }}</label>
          <input v-model.number="duration" type="range" min="3" max="35" step="1"
            class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-700" />
          <div class="text-gray-600 dark:text-gray-300 mt-2">
            <div class="text-gray-400">Monthly payment</div>
            <Price :price="monthlyPayment" class="text-3xl" />
          </div>
          <div class="mt-2 text-gray-400">
            <div class="flex justify-between">Total paid:
              <div>
                <Price :price="totalPaid" />
              </div>
            </div>
            <div class="flex justify-between">Principal:
              <div>
                <Price :price="listing.price" />
              </div>
            </div>
            <div class="flex justify-between">Total interest:
              <div>
                <Price :price="totalInterest" />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  </div>
</template>
