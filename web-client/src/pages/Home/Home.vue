<template>
  <SectionHero />
  <SectionHowItWorks />
  <SectionFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SectionHero from './sections/SectionHero.vue'
import SectionHowItWorks from './sections/SectionHowItWorks.vue'
import SectionFooter from './sections/SectionFooter.vue'

export default defineComponent({
  name: 'Home',
  components: { SectionHero, SectionHowItWorks, SectionFooter },
})
</script>
