<template>
  <div class="form-container">
    <h1 class="form-title">Персональная анкета</h1>
    <FormGenerator v-model="formData" :fields="fields" @submit="onSubmit" @reset="onReset" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';
import { personalSurveyFields, createFormData } from '@/utils/formConfigs';
import { useToast } from '@/composables/useToast';
import type { FormData } from '@/types/form';

const fields = personalSurveyFields;
const formData = ref<FormData>(createFormData(fields));
const { showToast } = useToast();

function onSubmit(data: FormData) {
  showToast('Анкета успешно отправлена!', 'success', 'Данные в консоли (F12)');
  console.log('Данные анкеты:', data);
}

function onReset() {
  showToast('Анкета очищена', 'info');
}
</script>
