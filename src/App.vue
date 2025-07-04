<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <nav style="text-align: center; margin-bottom: 2rem;">
    <RouterLink to="/">Форма регистрации</RouterLink> 
    <RouterLink to="/survey">Анкета</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #ccc;
  text-decoration: none;
  color: #42b983;
}

nav a:first-of-type {
  border: 0;
}

nav a.router-link-exact-active {
  color: #333;
  font-weight: bold;
}
</style>
