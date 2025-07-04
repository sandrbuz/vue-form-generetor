import { ref, markRaw } from 'vue';
import type { Component } from 'vue';
import ToastNotification from '@/components/Toast.vue';

interface ToastOptions {
  title: string;
  message?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: number;
  component: Component;
}

const toasts = ref<ToastItem[]>([]);
let toastId = 0;

export const useToast = () => {
  const addToast = (options: ToastOptions) => {
    const id = ++toastId;
    const toast: ToastItem = {
      id,
      component: markRaw(ToastNotification),
      type: 'info',
      ...options,
    };

    toasts.value.push(toast);

    return id;
  };

  const removeToast = (id: number) => {
    const index = toasts.value.findIndex(toast => toast.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };

  const success = (title: string, message?: string) =>
    addToast({ title, message, type: 'success' });

  const error = (title: string, message?: string) => addToast({ title, message, type: 'error' });

  const warning = (title: string, message?: string) =>
    addToast({ title, message, type: 'warning' });

  const info = (title: string, message?: string) => addToast({ title, message, type: 'info' });

  const showToast = (
    title: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    message?: string
  ) => addToast({ title, message, type });

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
    showToast,
  };
};
