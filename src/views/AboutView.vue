<template>
  <div>
    <h1>Другая форма</h1>
    <FormGenerator v-model="formData" :fields="fields" @submit="onSubmit" @reset="onReset">
      <template #actions>
        <button type="submit" class="btn btn-primary">Отправить</button>
        <button type="reset" class="btn btn-secondary">Очистить</button>
      </template>
    </FormGenerator>
    <pre>{{ formData }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FormGenerator from "../components/FormGenerator.vue";

const fields = [
  {
    name: "city",
    label: "Город",
    type: "input",
    attrs: { placeholder: "Ваш город" },
  },
  {
    name: "gender",
    label: "Пол",
    type: "select",
    options: [
      { label: "Мужской", value: "male" },
      { label: "Женский", value: "female" },
    ],
    attrs: {},
  },
  {
    name: "agree",
    label: "Согласен с условиями",
    type: "checkbox",
    attrs: {},
  },
];

const formData = ref({
  city: "",
  gender: "",
  agree: false,
});

function onSubmit(data: Record<string, unknown>) {
  alert("Отправлено!\n" + JSON.stringify(data, null, 2));
}

function onReset() {
  alert("Форма очищена");
}
</script>

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
