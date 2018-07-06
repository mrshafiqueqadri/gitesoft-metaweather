<template>
    <div class="container">
        <div class="row">
            <img v-if="loading" class="mt-20 m-a" src="../../assets/loading.gif" alt="">
            <weather v-for="(weather, index) in detail.consolidated_weather" :key="index" :weather="{consolidated_weather: weather, title: detail.title}"></weather>
        </div>
    </div>
</template>

<script>
    import {
        _location,
    } from '@/services/Weather'
    
    export default {
        data(){
            return {
                detail: {},
                loading: false
            }
        },
        beforeMount() {
            this.location()
        },
        methods: {
            location(){
                this.loading = true
                _location(this.$route.params.woeid).then(res => {
                    this.detail = res
                    this.loading = false
                })
            }
        }
    }
</script>

<style>
    
</style>
