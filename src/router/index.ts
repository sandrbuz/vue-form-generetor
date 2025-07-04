import { createRouter, createWebHistory } from 'vue-router';
import RegistrationForm from '../views/RegistrationForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: RegistrationForm,
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import('../views/PersonalSurvey.vue'),
    },
  ],
});

export default router;
