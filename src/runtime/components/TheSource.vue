<script setup>
import { useI18n } from '#imports';

const { t } = useI18n({
  messages: {
    en: {
      source: 'module'
    }
  },
});
</script>
<template>
  <p>source: <strong>{{ t('source') }}</strong></p>
</template>