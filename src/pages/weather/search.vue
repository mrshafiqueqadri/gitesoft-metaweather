<template>
    <div class="container">
        <div class="row">
            <div class="cold-md-12 no-result-found mt-20" v-if="no_result">
                <h2>{{'no_result' | translate}}</h2>
            </div>
            <img v-if="loading" class="mt-20 m-a" src="../../assets/loading.gif" alt="">
            <weather v-for="(weather, index) in detail.consolidated_weather" :key="index" :weather="{consolidated_weather: weather, title: detail.title}"></weather>
        </div>
    </div>
</template>

<script>
    import {
        _search,
        _location
    } from '@/services/Weather'
    
    export default {
        data(){
            return {
                detail: {},
                no_result: false,
                loading: false
            }
        },
        beforeMount() {
            this.search(this.$route.params.keyword)
        },
        methods: {
            search(key) {
                this.loading = true;
                this.no_result = false
                _search(key).then(res => {
                    if (res.length < 1) {
                        this.no_result = true
                        this.loading = false
                        return
                    }
                    this.location(res[0])
                })
            },
            location({woeid}){
                _location(woeid).then(res => {
                    this.detail = res
                    this.loading = false
                })
            }
        }
    }
</script>

<style>
    
</style>
