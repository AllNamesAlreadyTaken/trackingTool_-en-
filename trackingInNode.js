//use strict;

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

/************************************** 
   
   Created by Michael Horstmann.
   Application is to be used within the
   legal boundaries to manage ones own 
   tracking across multiple carriers.

   Main - App

**************************************/




currentTrackNoFDE = 'fde TrackNoHERE'; // ifFDE
currentTrackNoUPS = 'ups TrackNoHERE'; // ifUPS

var carrierArray = [
    "carrier" = {

    };
];


    carrier[1].UPS = false;
    carrier[1].USPS = false;
    carrier[1].FDE = false;
    carrier[1].DHL = false;
    carrier[1].etc1 = false;
    carrier[1].etc2 = false;

//var carrier.UPS = true;
//var carrier.FDE = true;
//if (carrier.UPS) { //BEGIN UPS proces....};
//else if (carrierFDE) { //BEGIN FDE process....});
//else { // you know the drill..... };

var requestURL_UPS = 'http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=' + currentTrackNoUPS ;
var requestURL_FDE = 'http://www.fedex.com/Tracking?action=track&tracknumbers=' + currentTrackNoFDE ;

request(requestURL_UPS, function(error, response, html){
    if (!error){
        console.log('succeeded: ' + response.statusCode 
            + '\n' + response + '\n' + html);
        var $ = cheerio.load(html);
        //then log some stuff from ups
        $('.th_table tbody').each(function(){
            var a = $(this).html();
            console.log(a);
        });
    } else {
        console.log('failed: \n' + error + '\n' + response.statusCode);
    }
});

request(requestURL_FDE, function(error, response, html){
    if (!error){
        console.log('succeeded: ' + response.statusCode 
            + '\n' + response + '\n' + html);
        var $ = cheerio.load(html);
        //then log some stuff from ups
        $('.dataTable tbody').each(function(){
            var a = $(this).html();
            console.log(a);
        });
    } else {
        console.log('failed: \n' + error + '\n' + response.statusCode);
    }
});
