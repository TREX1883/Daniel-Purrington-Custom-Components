<template>
<v-app>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server-details></app-server-details>
            <servers></servers>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</v-app>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
