<template>
    <v-card>
        <v-card-title>
            <div>
                <h1>Test</h1>
                <h3> {{ mtg.name }} </h3>
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
    props: {
        mtg: {
            type: Object
        }
    },
}
</script>

<style scoped>

</style>