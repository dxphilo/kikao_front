<script>
export default {
  name: 'ProfileLayout',
}
</script>

<template>
  <div>
    <Header v-if="$route.path !== '/signup'" />
    <BusinessOverview />
    <section>
      <slot name="content" />
    </section>
    <Footer v-if="$route.path !== '/signup' && $route.path !== '/register'" />
  </div>
</template>
