<template>
  <div class="Home">
    <SectionHero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SectionHero from './SectionHero.vue'

export default defineComponent({
  name: 'Home',
  components: { SectionHero },
})
</script>
