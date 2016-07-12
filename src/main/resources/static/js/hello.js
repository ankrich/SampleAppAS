angular.module('events', [])
.controller('showEvents', function($http){
var self = this;
$http.get('/events/').then(function(response){

self.events = response.data;

})
 })

