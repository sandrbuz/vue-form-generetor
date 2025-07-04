<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '../components/FormGenerator.vue';

const fields = [
  {
    name: 'username',
    label: 'Имя пользователя',
    type: 'input' as const,
    attrs: { placeholder: 'Введите имя' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input' as const,
    attrs: { type: 'email', placeholder: 'Введите email' },
  },
  {
    name: 'role',
    label: 'Роль',
    type: 'select' as const,
    options: [
      { label: 'Пользователь', value: 'user' },
      { label: 'Админ', value: 'admin' },
    ],
    attrs: {},
  },
  {
    name: 'subscribe',
    label: 'Подписаться на новости',
    type: 'checkbox' as const,
    attrs: {},
  },
  {
    name: 'about',
    label: 'О себе',
    type: 'textarea' as const,
    attrs: { rows: 3, placeholder: 'Расскажите о себе' },
  },
];

const formData = ref({
  username: '',
  email: '',
  role: '',
  subscribe: false,
  about: '',
});

function onSubmit(data: Record<string, unknown>) {
  alert('Сохранено!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Форма сброшена');
}
</script>

<template>
  <div>
    <h1>Регистрация пользователя</h1>
    <FormGenerator
      v-model="formData"
      :fields="fields"
      @submit="onSubmit"
      @reset="onReset"
    />
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
