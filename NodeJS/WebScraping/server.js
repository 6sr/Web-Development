//http://localhost:8081/scrape

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', 
    function(req, res) {
        url = 'https://en.wikipedia.org/wiki/Git';

        request(url, 
            function(error, response, html) {
                if(!error) {
                    var $ = cheerio.load(html);

                    var scrapeData;
                    var json = { scrapeData : ""};

                    $('#mw-content-text .mw-parser-output').filter(function() {     // Prints all text inside
                        var data = $(this);
                        scrapeData = data.children().text();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })
                    /*
                    //url = 'https://en.wikipedia.org/wiki/Git';
                    //$('#mw-content-text .mw-parser-output p').eq(-2).filter(function() {   // Selects second last <p> tag why ?
                    $('#mw-content-text .mw-parser-output p').filter(function() {   // Selects last <p> tag why ?
                        var data = $(this);
                        scrapeData = data.children().text();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })

                    $('#mw-content-text .mw-parser-output dl').filter(function() {      // prints this "Strong support for non-linear develop ......"
                        var data = $(this);
                        scrapeData = data.text();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })

                    $('#mw-content-text .mw-parser-output').filter(function() {         // Prints all text inside
                        var data = $(this);
                        scrapeData = data.text();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })
                    $('#mw-content-text').filter(function() {       // Prints text and tags
                        var data = $(this);
                        scrapeData = data.toString();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })
                    */

                    // ====================================================================

                    /*
                    //url = "https://delhimetrorail.info/peera-garhi-delhi-metro-station-to-dwarka-mor-delhi-metro-station?live=true"

                    $('#lblData h3 a').filter(function() {
                    
                    //HTML code
                    $('.ampstart-card').filter(function() {
                        var data = $(this);
                        scrapeData = data.children().first().toString();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })

                    //Scrapes data in raw form
                    $('.ampstart-card').filter(function() {
                    
                    //Scrapes stations in raw form
                    $('#divCanvas').filter(function() {
                        var data = $(this);
                        scrapeData = data.text();
                        //scrapeData = scrapeData.replace(/\s+/g,' ').trim();

                        json.scrapeData = scrapeData;
                    })
                    */
                }

                fs.writeFile('output.json', JSON.stringify(json, null, 4), 
                    function(err) {
                        console.log('Website successfully scrapped to output.json file');
                    }
                )
                // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
                res.send('See your console!');
            }
        );
    }
);

app.listen('8081');
console.log('Try accessing port 8081');
exports = module.exports = app;
