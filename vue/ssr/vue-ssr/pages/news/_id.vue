<template>
  <div>
    <h2>News-content</h2>
    <p>newsId: {{$route.params.id}}</p>
    <ul>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>