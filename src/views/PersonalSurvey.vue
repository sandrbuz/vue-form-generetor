<template>
  <div class="form-container">
    <h1 class="form-title">Персональная анкета</h1>
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
    name: 'city',
    label: 'Город',
    type: 'input',
    attrs: { placeholder: 'Ваш город' },
  },
  {
    name: 'gender',
    label: 'Пол',
    type: 'select',
    options: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' },
      { label: 'Не указывать', value: 'other' },
    ],
    attrs: {},
  },
  {
    name: 'agree',
    label: 'Согласен с условиями',
    type: 'checkbox',
    attrs: {},
  },
];

const formData = ref<FormData>({
  city: '',
  gender: '',
  agree: false,
});

function onSubmit(data: FormData) {
  alert('Данные отправлены!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Анкета очищена');
}
</script> 