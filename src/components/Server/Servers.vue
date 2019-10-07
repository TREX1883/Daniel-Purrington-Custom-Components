<template>
    <div class="col-xs-12 col-sm-6">

<h1>servers.vue</h1>
<div class="red">Test
</div>
        <ul class="list-group">
            <app-server
                v-for="server in servers" V-bind:key = "server.id"
                :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data: function() {
            return {
              servers: [
                  { id: 1, status: 'Normal'},
                  { id: 2, status: 'Critical'},
                  { id: 3, status: 'Unknown'},
                  { id: 4, status: 'Normal'},
                  { id: 5, status: 'Critical'},
                //   { id: 5, server: 'Test'},
              ]
            };
        },
        components: {
            appServer: Server
        }
    }
</script>

<style>
template {
    background-color: green;
}
.red {
    background-color: red;
}
</style>
