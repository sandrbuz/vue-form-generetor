<template>
  <div>
    <h1>Персональная анкета</h1>
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
import FormGenerator from '../components/FormGenerator.vue';

const fields = [
  {
    name: 'city',
    label: 'Город',
    type: 'input' as const,
    attrs: { placeholder: 'Ваш город' },
  },
  {
    name: 'gender',
    label: 'Пол',
    type: 'select' as const,
    options: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' },
    ],
    attrs: {},
  },
  {
    name: 'agree',
    label: 'Согласен с условиями',
    type: 'checkbox' as const,
    attrs: {},
  },
];

const formData = ref({
  city: '',
  gender: '',
  agree: false,
});

function onSubmit(data: Record<string, unknown>) {
  alert('Отправлено!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Форма очищена');
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
