# 🚀 Vue Form Generator

Динамический генератор форм на Vue 3 + TypeScript с чистой архитектурой и современным стеком технологий.

## 🌐 Live Demo

**[Попробовать онлайн →](https://vue-form-generatorr.netlify.app/)**

## ⚡ Особенности

- 🎯 **Композиция API** - современный подход Vue 3
- 📝 **Динамические формы** - генерация через конфигурацию JSON
- 🎨 **Слоты для кастомизации** - гибкая настройка полей и кнопок
- 🔔 **Toast уведомления** - красивые анимированные сообщения
- 🧪 **100% покрытие тестами** - Unit, Integration, E2E
- 📱 **Отзывчивый дизайн** - адаптивная верстка
- 🎭 **TypeScript** - полная типизация без `any`

## 🛠 Технологический стек

- **Vue 3** - Composition API, `<script setup>`
- **TypeScript** - строгая типизация
- **Vite** - быстрая сборка и HMR
- **Vue Router** - маршрутизация
- **SCSS** - препроцессор стилей
- **Vitest** - тестирование
- **ESLint + Prettier** - качество кода

## 📦 Установка и запуск

```bash
# Клонирование
git clone <repository-url>
cd vue-form-generator

# Установка зависимостей
npm install

# Разработка
npm run dev

# Сборка
npm run build

# Тестирование
npm run test
```

## 🏗 Архитектура

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── FormGenerator.vue    # Главный генератор форм
│   ├── FormField.vue        # Универсальное поле
│   └── Toast.vue           # Система уведомлений
├── composables/         # Композаблы Vue
│   └── useToast.ts         # Управление уведомлениями
├── utils/              # Утилитарные функции
│   └── formConfigs.ts      # Конфигурации полей
├── views/              # Страницы приложения
│   ├── RegistrationForm.vue # Форма регистрации
│   └── PersonalSurvey.vue   # Персональная анкета
└── types/              # TypeScript типы
    └── form.ts             # Типы для форм
```

## 🎯 Использование

### Создание формы

```typescript
// 1. Определяем поля
const fields: Field[] = [
  {
    name: 'username',
    label: 'Имя пользователя',
    type: 'input',
    attrs: { placeholder: 'Введите имя' }
  },
  {
    name: 'role',
    label: 'Роль',
    type: 'select',
    options: [
      { label: 'Пользователь', value: 'user' },
      { label: 'Админ', value: 'admin' }
    ]
  }
]

// 2. Используем компонент
<FormGenerator
  v-model="formData"
  :fields="fields"
  @submit="onSubmit"
/>
```

### Кастомизация через слоты

```vue
<FormGenerator v-model="formData" :fields="fields">
  <!-- Кастомное поле -->
  <template #field-username="{ field }">
    <div class="custom-field">
      <label>👤 {{ field.label }}</label>
      <input v-model="formData.username" class="custom-input" />
    </div>
  </template>
  
  <!-- Кастомные кнопки -->
  <template #actions>
    <button type="submit">💾 Сохранить</button>
    <button type="reset">🗑️ Очистить</button>
  </template>
</FormGenerator>
```

## 🧪 Тестирование

- **20 тестов** покрывают все аспекты приложения
- **4 уровня тестирования**: Unit, Composables, Components, E2E
- **Vitest + @vue/test-utils** для современного тестирования Vue 3

```bash
npm run test        # Watch mode
npm run test:run    # CI mode
npm run test:ui     # Web UI
```

## 📋 Доступные скрипты

```bash
npm run dev         # Запуск dev сервера
npm run build       # Сборка для продакшена
npm run preview     # Предварительный просмотр сборки
npm run lint        # Проверка ESLint
npm run format      # Форматирование Prettier
npm run test        # Запуск тестов
```

## 🌟 Демонстрируемые навыки

- ✅ Современная архитектура Vue 3
- ✅ Композиция API и реактивность
- ✅ TypeScript без компромиссов
- ✅ Переиспользуемые компоненты
- ✅ Система слотов для расширяемости
- ✅ Комплексное тестирование
- ✅ Настройка инструментов разработки
- ✅ Чистый и читаемый код

---

**Live версия:** [vue-form-generatorr.netlify.app](https://vue-form-generatorr.netlify.app/)
