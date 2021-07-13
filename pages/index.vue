<template>
  <div class="w-11/12 mx-auto">
    <div>
      
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'isAuth',
  fetch ({ params, redirect }) {
    redirect(301, `/dashbord`)
  }
}
</script>

<style>
</style>
