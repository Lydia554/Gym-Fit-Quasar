<template>
  <q-page class="pricing">
    <div class="q-pa-md row justify-center q-gutter-md">
      <q-col
        class="col-3 slide-up-section"
        v-for="(option, index) in pricingOptions"
        :key="index"
      >
        <q-card class="box full-height slide-up">
          <q-card-section>
            <div
              :class="[
                'pricing-h3',

                {
                  'basic-title': option.title === 'Basic',
                  'silver-title': option.title === 'Silver',
                  'gold-title': option.title === 'Gold',
                  'platinum-title': option.title === 'Platinum',
                },
              ]"
            >
              {{ option.title }}
            </div>
            <div class="text-h4">
              <sup class="currency-sign">$</sup
              ><span class="price">{{ option.price }}</span
              ><span class="month"> / month</span>
            </div>
            <ul>
              <li
                v-for="(feature, index) in option.features"
                :key="index"
                :class="{ na: option.unavailableFeatures.includes(index) }"
              >
                {{ feature }}
              </li>
            </ul>
            <div class="btn-wrap">
              <q-btn class="btn-buy" label="Buy Now" />
            </div>
            <div v-if="option.title === 'Platinum'" class="advanced">
              Advanced
            </div>
          </q-card-section>
        </q-card>
      </q-col>
    </div>
  </q-page>
</template>

<script>
import { pricingOptions } from "../data/MainPricingData.js";
import { mounted, beforeRouteLeave } from "../js/MainPricingMethods.js";

export default {
  data() {
    return {
      pricingOptions,
    };
  },
  mounted,
  beforeRouteLeave,
};
</script>
<style scoped src="../css/MainPricing.css"></style>
