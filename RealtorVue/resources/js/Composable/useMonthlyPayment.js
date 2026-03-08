import { computed, isRef } from "vue";

export const useMonthlyPayment = (total, interestRate, duration) => {
  const computedInterestRate = computed(() => {
    return isRef(interestRate) ? interestRate.value : interestRate;
  });
  const computedTotal = computed(() => {
    return isRef(total) ? total.value : total;
  });
  const computedDuration = computed(() => {
    return isRef(duration) ? duration.value : duration;
  });

  const monthlyPayment = computed(() => {
    const P = computedTotal.value;
    const r = computedInterestRate.value / 100 / 12;
    const n = computedDuration.value * 12;

    return Math.trunc((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  });

  const totalInterest = computed(() => {
    return totalPaid.value - computedTotal.value;
  });

  const totalPaid = computed(() => {
    return monthlyPayment.value * computedDuration.value * 12;
  });

  return { monthlyPayment, totalPaid, totalInterest };
};
