<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="app-container">
    <div class="content-wrapper">
      <nav class="navigation">
        <RouterLink to="/" class="nav-link">Форма регистрации</RouterLink> 
        <RouterLink to="/survey" class="nav-link">Анкета</RouterLink>
      </nav>
      
      <main class="main-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
}

.content-wrapper {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  width: 100%;
  margin-bottom: 2rem;
  padding: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 0;
  overflow: hidden;
}

.nav-link {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #42b983;
  border-right: 1px solid #eee;
  transition: all 0.3s ease;
  font-weight: 500;
  text-align: center;
}

.nav-link:last-child {
  border-right: none;
}

.nav-link:hover {
  background: #f8f9fa;
  color: #369870;
}

.nav-link.router-link-exact-active {
  background: #42b983;
  color: white;
}

.main-content {
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
