<template>
    <v-card>
        <v-card-title>
            <div>
                <h1>Test</h1>
                <h3> {{ mtg.cards.name }} </h3>
                <div>
                    {{ mtg.colors }}
                </div>
            </div>
        </v-card-title>    
        <v-card-actions>

        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["mtg"],
}
</script>

<style scoped>

</style>