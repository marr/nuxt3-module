import { useStorage } from '#imports';

const storage = useStorage('cache');

export const useFoo = () => {
  return storage.getItem('debug');
}