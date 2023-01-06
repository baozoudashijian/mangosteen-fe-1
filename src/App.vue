<template>
  <div>
  {{count}}
  </div>
  <div>
    <button  @click="onClick">点击</button>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const count = ref(0)
  const onClick = () => {
    count.value += 1
  }

</script>