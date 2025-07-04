<template>
  <div class="form-container">
    <h1 class="form-title">Регистрация пользователя</h1>
    <FormGenerator
      v-model="formData"
      :fields="fields"
      @submit="onSubmit"
      @reset="onReset"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';
import type { Field, FormData } from '@/types/form';

const fields: Field[] = [
  {
    name: 'username',
    label: 'Имя пользователя',
    type: 'input',
    attrs: { placeholder: 'Введите имя' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'input',
    attrs: { type: 'email', placeholder: 'Введите email' },
  },
  {
    name: 'role',
    label: 'Роль',
    type: 'select',
    options: [
      { label: 'Пользователь', value: 'user' },
      { label: 'Админ', value: 'admin' },
    ],
    attrs: {},
  },
  {
    name: 'subscribe',
    label: 'Подписаться на новости',
    type: 'checkbox',
    attrs: {},
  },
  {
    name: 'about',
    label: 'О себе',
    type: 'textarea',
    attrs: { rows: 3, placeholder: 'Расскажите о себе' },
  },
];

const formData = ref<FormData>({
  username: '',
  email: '',
  role: '',
  subscribe: false,
  about: '',
});

function onSubmit(data: FormData) {
  alert('Сохранено!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Форма сброшена');
}
</script> 