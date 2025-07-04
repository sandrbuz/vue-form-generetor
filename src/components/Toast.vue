<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="visible" :class="['toast', `toast--${type}`]">
        <div class="toast__icon">
          <span v-if="type === 'success'">✅</span>
          <span v-else-if="type === 'info'">ℹ️</span>
          <span v-else-if="type === 'warning'">⚠️</span>
          <span v-else>❌</span>
        </div>
        <div class="toast__content">
          <div class="toast__title">{{ title }}</div>
          <div v-if="message" class="toast__message">{{ message }}</div>
        </div>
        <button @click="close" class="toast__close">×</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, defineOptions } from 'vue';

defineOptions({
  name: 'ToastNotification',
});

defineProps<{
  title: string;
  message?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}>();

const emit = defineEmits(['close']);

const visible = ref(false);

const close = () => {
  visible.value = false;
  setTimeout(() => emit('close'), 300);
};

onMounted(() => {
  visible.value = true;
  // Автозакрытие через 3 секунды
  setTimeout(close, 3000);
});
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  min-width: 300px;
  max-width: 400px;
  z-index: 1000;
  border-left: 4px solid;
}

.toast--success {
  border-left-color: #10b981;
}

.toast--error {
  border-left-color: #ef4444;
}

.toast--warning {
  border-left-color: #f59e0b;
}

.toast--info {
  border-left-color: #3b82f6;
}

.toast__icon {
  font-size: 20px;
  flex-shrink: 0;
}

.toast__content {
  flex: 1;
}

.toast__title {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
}

.toast__message {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.4;
}

.toast__close {
  background: none;
  border: none;
  font-size: 24px;
  color: #9ca3af;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.toast__close:hover {
  background-color: #f3f4f6;
  color: #374151;
}

/* Анимации */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style> 