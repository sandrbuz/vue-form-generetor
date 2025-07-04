<template>
  <div class="form-container">
    <h1 class="form-title">Регистрация пользователя</h1>
    <FormGenerator v-model="formData" :fields="fields" @submit="onSubmit" @reset="onReset">
      <template #field-username="{ field }">
        <div class="custom-field">
          <label :for="field.name" class="custom-label">
            👤 {{ field.label }} (кастомный дизайн)
          </label>
          <input
            :id="field.name"
            v-model="formData.username"
            v-bind="field.attrs"
            class="custom-input"
          />
        </div>
      </template>

      <template #actions>
        <div class="custom-actions">
          <button type="submit" class="btn btn-primary">💾 Зарегистрироваться</button>
          <button type="reset" class="btn btn-secondary">🗑️ Очистить форму</button>
        </div>
      </template>
    </FormGenerator>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';
import { registrationFormFields, createFormData } from '@/utils/formConfigs';
import type { FormData } from '@/types/form';

const fields = registrationFormFields;
const formData = ref<FormData>(createFormData(fields));

function onSubmit(data: FormData) {
  alert('Сохранено!\n' + JSON.stringify(data, null, 2));
}

function onReset() {
  alert('Форма сброшена');
}
</script>

<style scoped>
.custom-field {
  margin-bottom: 1.5rem;
}

.custom-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #6366f1;
  font-size: 1.1rem;
}

.custom-input {
  width: 100%;
  padding: 1rem;
  border: 3px solid #6366f1;
  border-radius: 12px;
  font-size: 1rem;
  background: linear-gradient(135deg, #f8faff 0%, #f1f5ff 100%);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #a5b4fc;
  }
}

.custom-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
