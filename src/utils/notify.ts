import { ElMessage } from 'element-plus';

export const notify = {
  success(message: string, duration: number = 3000) {
    return ElMessage({ message, type: 'success', duration });
  },
  warning(message: string, duration: number = 3000) {
    return ElMessage({ message, type: 'warning', duration });
  },
  error(message: string, duration: number = 3000) {
    return ElMessage({ message, type: 'error', duration });
  },
  info(message: string, duration: number = 3000) {
    return ElMessage({ message, type: 'info', duration });
  },
  primary(message: string, duration: number = 3000) {
    return ElMessage({ message, type: 'primary', duration });
  }
};
