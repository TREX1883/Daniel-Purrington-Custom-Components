<template>
  <v-app>
    <v-content>
      <magic-grid :cards="cards"></magic-grid>
    </v-content>
  </v-app>
</template>

<script>
import MagicGrid from './components/MagicGrid'
import { cards } from './assets/MTG-api'

console.log(cards)

export default {
  name: 'App',
  components: {
    MagicGrid
  },
  data: () => {
    return {
      cards
    }
  },
};
</script>