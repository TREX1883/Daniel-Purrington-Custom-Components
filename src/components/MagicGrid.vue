<template>
    <v-container>
        <h1>Grid Test</h1>
        <v-row>
            <v-col cols="3" v-for="card in cards" :key="card.multiverseid">
                <magic-cards :card="card"></magic-cards>
            </v-col> 
        </v-row>    
    </v-container>
</template>

<script>
import MagicCards from "../components/MagicCards"

export default {
    props: ["cards"],
    components: {
       MagicCards 
    }
}
</script>

<style scoped>

</style>