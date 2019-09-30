<template>
  <v-app>
    <v-content>
      <magic-grid> :mtg="mtg"</magic-grid>
    </v-content>
  </v-app>
</template>

<script>
import MagicGrid from './components/MagicGrid'
import { mtg } from './assets/MTG-api'

export default {
  name: 'App',
  components: {
    MagicGrid
  },
  data: () => {
    return {
      mtg
    }
  },
};
</script>