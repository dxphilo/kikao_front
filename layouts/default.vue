<template>
  <main>
    <Header />
    <slot />
    <Footer v-if="$route.path !== '/register'" />
  </main>
</template>
