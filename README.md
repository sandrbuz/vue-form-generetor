# Vue Form Generator

Универсальный генератор форм на Vue 3 + TypeScript с поддержкой различных типов полей и кастомизации через слоты.

## 🏗️ Архитектура проекта

### Основные компоненты

- **FormGenerator.vue** - Главный компонент для генерации форм
- **FormField.vue** - Компонент для отрисовки отдельного поля
- **FormActions.vue** - Компонент с кнопками действий (Сохранить/Отмена)

### Структура данных

```typescript
// Типы определены в src/types/form.ts
interface Field {
  name: string;
  label: string;
  type: 'input' | 'select' | 'checkbox' | 'textarea';
  options?: FieldOption[];
  attrs?: Record<string, unknown>;
}
```

### Конфигурации форм

Конфигурации полей вынесены в `src/utils/formConfigs.ts` для:

- Переиспользования между компонентами
- Централизованного управления
- Лучшей тестируемости
- Масштабируемости

## 🚀 Функциональность

### Поддерживаемые типы полей

- ✅ Input (text, email, etc.)
- ✅ Select (dropdown)
- ✅ Checkbox
- ✅ Textarea

### Возможности

- ✅ Двусторонняя привязка данных (v-model)
- ✅ Кастомизация через слоты
- ✅ TypeScript типизация
- ✅ Валидация HTML5
- ✅ Современный дизайн
- ✅ Адаптивная верстка

## 🎯 Использование

```vue
<template>
  <FormGenerator v-model="formData" :fields="fields" @submit="onSubmit" @reset="onReset" />
</template>

<script setup>
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';
import { registrationFormFields, createFormData } from '@/utils/formConfigs';

const fields = registrationFormFields;
const formData = ref(createFormData(fields));

const onSubmit = data => console.log('Submitted:', data);
const onReset = () => console.log('Form reset');
</script>
```

## 🛠️ Технологии

- Vue 3 (Composition API)
- TypeScript
- Vite
- SCSS
- Vue Router
- Pinia

## 🎨 Дизайн-система

- Единая цветовая палитра
- Переиспользуемые CSS-классы
- Современные UI-паттерны
- Плавные анимации и переходы

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── FormGenerator.vue
│   ├── FormField.vue
│   └── FormActions.vue
├── views/              # Страницы приложения
│   ├── RegistrationForm.vue
│   └── PersonalSurvey.vue
├── types/              # TypeScript типы
│   └── form.ts
├── utils/              # Утилиты и конфигурации
│   └── formConfigs.ts
└── assets/             # Стили и ресурсы
    ├── base.scss
    └── main.css
```

## 🚀 Запуск проекта

```bash
npm install
npm run dev
```

## 🧪 Особенности реализации

### Архитектурные решения:

1. **Композиция над наследованием** - использование Composition API
2. **Разделение ответственности** - компоненты имеют четкие роли
3. **Типобезопасность** - полная TypeScript типизация
4. **Конфигурационный подход** - формы описываются декларативно
5. **Слоты для кастомизации** - максимальная гибкость

### Принципы чистого кода:

- DRY (Don't Repeat Yourself)
- SOLID принципы
- Читаемость и поддерживаемость
- Масштабируемость

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
