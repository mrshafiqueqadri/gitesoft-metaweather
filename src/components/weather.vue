<template>
    <div class="col-md-3 mt-20">
        <div class="card">
            <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
            <div class="card-body">
                <h5 class="card-title">{{weather.title}}</h5>
                <p class="card-text"><b>{{'city_name' | translate}}:</b> {{weather.title}}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>{{'min_temperature' | translate}}: </b>{{weather.consolidated_weather.min_temp | round}}</li>
                <li class="list-group-item"><b>{{'max_temperature' | translate}}: </b>{{weather.consolidated_weather.max_temp | round}}</li>
                <li class="list-group-item"><b>{{'date' | translate}}: </b>{{weather.consolidated_weather.applicable_date | showDate}}</li>
            </ul>
            <div class="card-body" v-if="$route.name != 'ViewDetail' && $route.name != 'SearchResult'">
                <a href="#" class="card-link"><router-link :to="{name: 'ViewDetail', params: {woeid: weather.woeid}}">{{'view_detail'| translate}}</router-link></a>
            </div>
        </div>
    
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: 'weather',
        props: ['weather'],
        filters: {
            showDate: value => {
                if (value) {
                    return moment(String(value)).format('dddd, DD MMM YYYY')
                }
            }
        }
    }
</script>
