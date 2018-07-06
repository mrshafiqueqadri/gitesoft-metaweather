<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <router-link :to="{name: 'Home'}">{{'home' | translate}}</router-link> <span class="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" :placeholder="'keyword' | translate" v-model="keyword" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" :disabled="!keyword" @click="search">{{'search'|translate}}</button>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'nav-bar',
        data(){
            return {
                keyword: ''
            }
        },
        methods: {
            search(){
                window.location.href = window.location.origin+'/#/search/'+this.keyword
                window.location.reload()
            }
        }
    }
</script>
