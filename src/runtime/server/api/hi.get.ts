import { defineEventHandler, useStorage, useFoo } from '#imports'

export default defineEventHandler(async event => {
  await useStorage('cache').setItem('debug', 'y');
  return useFoo();
});