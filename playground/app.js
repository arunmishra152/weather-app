// const yargs = require('yargs');
// const geocode = require('../geocode/geocode');

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'Address to fetch weather',
//         string: true
//     }
// })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address);

const request = require('request');

//const url = "https://api.darksky.net/forecast/cbb927dfde8f6197abdba404ff74112b/37.8267,-122.4233";
// request({url:url, json: true},(error,response)=>{
//     if(error){
//         console.log('unable to connect weather service!');
//     } else if(response.body.error){
//         console.log('unable to find the location');
//     } else{
//         console.log('It is currently ',response.body.currently.temperature,' degrees out. There is 0% chance of rain.');
//     }
// });

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGlsYXJ1biIsImEiOiJjanRqdG9ibW8xMGc4NDVvNnltam1oMHhxIn0.gbjMLdbnsu8Jwa20tcYNfQ&limit=1";
// request({url: url, json: true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect weather service!');
//     } else if(response.body.features.length === 0){
//         console.log('Unable to find the location');
//     }else{
//         console.log('latitude : ' + response.body.features[0].center[1] + ' longitude : ' + response.body.features[0].center[0]);
//     }
    
// })

const geocode = (address,callback)=>{
 const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoibGlsYXJ1biIsImEiOiJjanRqdG9ibW8xMGc4NDVvNnltam1oMHhxIn0.gbjMLdbnsu8Jwa20tcYNfQ&limit=1";    
 request({url: url, json: true},(error,response)=>{
     if(error){
         callback('Unable to connect weather services!', undefined);
     } else if(response.body.features.length === 0){
         callback('Unable to find the location', undefined);
     } else{
        callback(undefined,{
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name
        })
     }
 })
}

geocode('Lucknow',(error,response)=>{
    console.log('error',error);
    console.log('response',response);
})

