<template>
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ card.name }} </h3>
                <div>
                    {{ card.type }}
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
        card: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>