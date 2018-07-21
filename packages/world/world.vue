<template>
  <div class="v-hello">
    <p class="v-hello__message">world {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'v-world',
  props: {
    message: String
  }
}
</script>