<template>
    <div class="container">
        <div class="row text-center">
            <img v-if="loading" class="mt-20 m-a" src="../../assets/loading.gif" alt="">
            <weather v-for="(weather, index) in reports" :key="index" :weather="weather"></weather>
        </div>
    </div>
</template>

<script>
    import {
        _search,
        _location
    } from '@/services/Weather'
    const COUNTRIES = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
    export default {
        data(){
            return {
                reports: [],
                loading: false
            }
        },
        mounted() {
            COUNTRIES.forEach(c => {
                this.search(c)
            });
        },
        methods: {
            search(key) {
                this.loading = true
                _search(key).then(res => {
                    if (res.length < 1) {
                        this.no_result = true
                        return
                    }
                    this.location(res[0])
                })
            },
            location(cityData){
                _location(cityData.woeid).then(res => {
                    let data = {...cityData, consolidated_weather: res.consolidated_weather[0]}
                    this.reports = [...this.reports, data]
                    this.loading = false
                })
            }
        }
    }
</script>

<style>
    
</style>
