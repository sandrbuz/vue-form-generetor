<script lang="ts" setup>
import { ref } from "vue";
import FormGenerator from "../components/FormGenerator.vue";

const fields = [
  {
    name: "username",
    label: "Имя пользователя",
    type: "input",
    attrs: { placeholder: "Введите имя" },
  },
  {
    name: "email",
    label: "Email",
    type: "input",
    attrs: { type: "email", placeholder: "Введите email" },
  },
  {
    name: "role",
    label: "Роль",
    type: "select",
    options: [
      { label: "Пользователь", value: "user" },
      { label: "Админ", value: "admin" },
    ],
    attrs: {},
  },
  {
    name: "subscribe",
    label: "Подписаться на новости",
    type: "checkbox",
    attrs: {},
  },
  {
    name: "about",
    label: "О себе",
    type: "textarea",
    attrs: { rows: 3, placeholder: "Расскажите о себе" },
  },
];

const formData = ref({
  username: "",
  email: "",
  role: "",
  subscribe: false,
  about: "",
});

function onSubmit(data: Record<string, unknown>) {
  alert("Сохранено!\n" + JSON.stringify(data, null, 2));
}

function onReset() {
  alert("Форма сброшена");
}
</script>

<template>
  <div>
    <h1>Демо: Генератор форм</h1>
    <FormGenerator v-model="formData" :fields="fields" @submit="onSubmit" @reset="onReset">
      <template #field-username="{ field }">
        <div class="form-group">
          <label :for="field.name">👤 {{ field.label }}</label>
          <input
            v-bind="field.attrs"
            v-model="formData.username"
            :id="field.name"
            class="form-control"
          />
        </div>
      </template>
    </FormGenerator>
    <pre>{{ formData }}</pre>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
pre {
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 2rem;
}
</style>
