<template>
  <v-app>
    <v-content>
      <magic-grid :mtgs="mtgs"></magic-grid>
    </v-content>
  </v-app>
</template>

<script>
import MagicGrid from './components/MagicGrid'
import { cards } from './assets/MTG-api'

export default {
  name: 'App',
  components: {
    MagicGrid
  },
  data: () => {
    return {
      mtgs: cards
    }
  },
};
</script>