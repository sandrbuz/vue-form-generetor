import type { Field } from "@/types/form";

export const registrationFormFields: Field[] = [
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

export const personalSurveyFields: Field[] = [
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
      { label: "Не указывать", value: "other" },
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

/**
 * Фабрика для создания начальных данных формы
 * Автоматически генерирует объект formData на основе конфигурации полей
 *
 * @param fields - массив конфигураций полей
 * @returns объект с начальными значениями для формы
 */
export const createFormData = (fields: Field[]) => {
  const formData: Record<string, unknown> = {};
  fields.forEach((field) => {
    formData[field.name] = field.type === "checkbox" ? false : "";
  });
  return formData;
};
