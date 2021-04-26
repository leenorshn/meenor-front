<template>
  <div class="p-4">
    <div class="flex items-center justify-end">
      <nuxt-link to="/" class="bg-indigo-900 text-white px-8 py-2 rounded-md"
        >Nouveau</nuxt-link
      >
    </div>
    <account-item v-for="(n,i) in 5" :key="i" class="mb-2"/>
  </div>
</template>
<script>
export default {
  layout: "account",
};
</script>