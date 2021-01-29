<template>
  <div class="Home">
    <h1 @dragover="handleDrag" @dragleave.prevent="handleDrop">Clippy Cloud</h1>

    <div v-bind="getRootProps({ className: 'aaa' })">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
    </div>

    <button @click="open">open</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDropzone } from 'vue3-dropzone'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    // https://react-dropzone.js.org/
    function onDrop(acceptFiles: any, rejectReasons: any) {
      console.log({ acceptFiles })
      console.log({ rejectReasons })

      const [file] = acceptFiles

      const url = URL.createObjectURL(file)
      console.log(url)
    }

    const {
      getRootProps,
      getInputProps,
      isDragActive,
      open,
      draggedFiles,
      acceptedFiles,
    } = useDropzone({
      onDrop,
      accept: ['image/jpeg'],
    })

    const handleDrag = () => {
      console.log('handleDrag')
    }

    const handleDrop = () => {
      console.log('handleDrop')
    }

    return {
      handleDrag,
      handleDrop,
      getRootProps,
      getInputProps,
      isDragActive,
      open,
    }
  },
})
</script>
