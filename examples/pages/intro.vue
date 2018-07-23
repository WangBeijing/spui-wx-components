<template>
  <div>
    hello {{ message }}
    <v-world message="真大"></v-world>
  </div>
</template>

<script>
export default {
  name: 'v-hello',
  props: {
    message: String
  }
}
</script>