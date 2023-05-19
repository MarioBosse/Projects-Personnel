<template>
    <div>
        <img style="text-align: left;" src="../assets/parkbridge.png" class="header" width="200">
        <span style="text-align: center;" class="description">Système de gestion de tournois</span>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="../assets/home.png" width="30">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a v-if="isConnected" class="nav-link disabled" href="#">Link</a>
                </li>
                <li v-if="isConnected" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div v-if="isConnected" class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li v-if="isConnected" class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <button class="btn btn-outline-success mr-sm-2 my-2 my-sm-0" type="submit">Connexion</button>
                    </li>
                </ul>
                <input class="form-control mr-sm-2" type="search" placeholder="Rechercer un évènement" aria-label="Rechercher">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </div>
    </nav>
</template>
<style>
    .description{
        font-family: "Times New Roman", Times, serif;
        font-size: 40px;
        font-weight: bold;
    }
</style>
<script lang="js">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data(){
            return {
                isConnected: false
            }
        }
    })
</script>