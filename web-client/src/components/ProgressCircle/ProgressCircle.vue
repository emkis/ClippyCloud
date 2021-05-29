<template>
  <div class="ProgressCircle" :style="`--size: ${size}px`" aria-hidden="true">
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
        :stroke="progressColor"
        :stroke-dasharray="`${circumference} ${circumference}`"
        :stroke-width="stroke"
        stroke-linecap="round"
        :style="{ strokeDashoffset: strokeDashOffset }"
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
    size: { type: String, default: '100' },
    stroke: { type: Number, default: 3 },
    progress: { type: Number, default: 0 },
    progressColor: { type: String, required: true },
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
    transform: rotate(-90deg);

    circle {
      transition: stroke 350ms, stroke-dashoffset 350ms;
    }
  }
}
</style>
