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
import { personalSurveyFields, createFormData } from '@/utils/formConfigs';
import type { FormData } from '@/types/form';

const fields = personalSurveyFields;
const formData = ref<FormData>(createFormData(fields));

function onSubmit(data: FormData) {
  alert('Данные отправлены!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Анкета очищена');
}
</script> 