<template>
    <v-container>
        <h1>Test</h1>
        <v-row>
            <v-col cols="3" v-for="mtg in mtg" :key="mtg.cards">
                <magic-cards :mtg="mtg"></magic-cards>
            </v-col> 
        </v-row>    
    </v-container>
</template>

<script>
import MagicCards from "../components/MagicCards"

export default {
    props: ["mtg"],
    components: {
       MagicCards 
    }
}
</script>

<style scoped>

</style>