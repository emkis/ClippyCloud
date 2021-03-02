<template>
  <div class="ProgressCircle" :style="`--size: ${size}px`">
    <svg shape-rendering="geometricPrecision" viewBox="0 0 100 100">
      <circle
        :stroke="foregroundColor"
        :stroke-width="stroke"
        fill="none"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
      <circle
        :stroke="backgroundColor"
        :stroke-dasharray="`${circumference} ${circumference}`"
        :style="{ strokeDashoffset: strokeDashOffset }"
        :stroke-width="stroke"
        fill="none"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ProgressCircle',
  props: {
    size: { type: [String, Number], default: 100 },
    stroke: { type: [String, Number], default: 3 },
    progress: { type: [String, Number], default: 0 },
    backgroundColor: { type: String, required: true },
    foregroundColor: { type: String, required: true },
  },
  setup(props) {
    const radius = 50
    const normalizedRadius = radius - props.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI

    const strokeDashOffset = computed(() => {
      return circumference - (props.progress / 100) * circumference
    })

    return { strokeDashOffset, normalizedRadius, radius, circumference }
  },
})
</script>

<style lang="scss" scoped>
.ProgressCircle {
  max-width: var(--size);
  max-height: var(--size);

  > svg {
    width: 100%;
    height: 100%;
    transition: stroke 350ms, stroke-dashoffset 350ms;
    transform: rotate(-90deg);
  }
}
</style>
