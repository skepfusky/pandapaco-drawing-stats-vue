<template>
  <pds-species-chip>
    <img :src="img" :alt="name" :aria-label="name">
    <span>{{ name }}</span>
  </pds-species-chip>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
  }
}
</script>

<style lang="scss" scoped>
pds-species-chip {
  display: flex;
}
</style>