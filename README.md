# 🚀 Vue Form Generator

Dynamic form generator built with Vue 3 + TypeScript featuring clean architecture and modern tech stack.

## 🌐 Live Demo

**[Try it online →](https://vue-form-generatorr.netlify.app/)**

## ⚡ Features

- 🎯 **Composition API** - modern Vue 3 approach
- 📝 **Dynamic forms** - JSON configuration-driven
- 🎨 **Slot customization** - flexible field and button styling
- 🔔 **Toast notifications** - beautiful animated messages
- 🧪 **100% test coverage** - Unit, Integration, E2E
- 📱 **Responsive design** - adaptive layout
- 🎭 **TypeScript** - full typing without `any`

## 🛠 Tech Stack

- **Vue 3** - Composition API, `<script setup>`
- **TypeScript** - strict typing
- **Vite** - fast build and HMR
- **Vue Router** - routing
- **SCSS** - CSS preprocessor
- **Vitest** - testing framework
- **ESLint + Prettier** - code quality

## 📦 Installation & Setup

```bash
# Clone repository
git clone <repository-url>
cd vue-form-generator

# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Testing
npm run test
```

## 🏗 Architecture

```
src/
├── components/          # Reusable components
│   ├── FormGenerator.vue    # Main form generator
│   ├── FormField.vue        # Universal field component
│   └── Toast.vue           # Notification system
├── composables/         # Vue composables
│   └── useToast.ts         # Toast management
├── utils/              # Utility functions
│   └── formConfigs.ts      # Field configurations
├── views/              # Application pages
│   ├── RegistrationForm.vue # Registration form
│   └── PersonalSurvey.vue   # Personal survey
└── types/              # TypeScript types
    └── form.ts             # Form types
```

## 🎯 Usage

### Creating a form

```typescript
// 1. Define fields
const fields: Field[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'input',
    attrs: { placeholder: 'Enter username' }
  },
  {
    name: 'role',
    label: 'Role',
    type: 'select',
    options: [
      { label: 'User', value: 'user' },
      { label: 'Admin', value: 'admin' }
    ]
  }
]

// 2. Use component
<FormGenerator
  v-model="formData"
  :fields="fields"
  @submit="onSubmit"
/>
```

### Customization with slots

```vue
<FormGenerator v-model="formData" :fields="fields">
  <!-- Custom field -->
  <template #field-username="{ field }">
    <div class="custom-field">
      <label>👤 {{ field.label }}</label>
      <input v-model="formData.username" class="custom-input" />
    </div>
  </template>
  
  <!-- Custom buttons -->
  <template #actions>
    <button type="submit">💾 Save</button>
    <button type="reset">🗑️ Clear</button>
  </template>
</FormGenerator>
```

## 🧪 Testing

- **20 tests** covering all application aspects
- **4 testing levels**: Unit, Composables, Components, E2E
- **Vitest + @vue/test-utils** for modern Vue 3 testing

```bash
npm run test        # Watch mode
npm run test:run    # CI mode
npm run test:ui     # Web UI
```

## 📋 Available Scripts

```bash
npm run dev         # Start dev server
npm run build       # Production build
npm run preview     # Preview build
npm run lint        # ESLint check
npm run format      # Prettier formatting
npm run test        # Run tests
```

## 🌟 Demonstrated Skills

- ✅ Modern Vue 3 architecture
- ✅ Composition API and reactivity
- ✅ TypeScript without compromises
- ✅ Reusable component design
- ✅ Slot system for extensibility
- ✅ Comprehensive testing
- ✅ Development tooling setup
- ✅ Clean and readable code

---

**Live version:** [vue-form-generatorr.netlify.app](https://vue-form-generatorr.netlify.app/)
