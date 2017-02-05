(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// documentation on the chrome.tabs API: https://developer.chrome.com/extensions/tabs

chrome.tabs.query({'active': true}, function (tabs) {
    var url = tabs[0].url; 
    var title = tabs[0].title; 
    // console.log(url); 
    var splitUrl = url.split("/"); 
    var site = splitUrl[1]; 
    console.log("site: " + site); 
    
    /* google custom search */ 
    var query = title; 
    //var key = "AIzaSyBz4G8Z4mocrtPLPX8kFyJ1NvTyV8J44Sc"; //key 
    var key = "AIzaSyAgfhTgZhs1Vr9u8vP6MLnjIsYHvfcTc3s"; 

    // Google custom search api 
    $.get("https://www.googleapis.com/customsearch/v1?q="+query+"&cx=013199845727965234313:allhxzwrat4&key=" + key, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        //$("#title").innerHTML = data.items[0].title; 
        document.getElementById('title').innerHTML = data.items[0].title;
        console.log(data.items[0].title);
        console.log(data);
        document.getElementById('link').innerHTML = data.items[0].link;
        document.getElementById('link').href = data.items[0].link;
        if (data.items[0].description != "undefined") { 
            document.getElementById('description').innerHTML = data.items[0].snippet; 
        } 
        //$("#link").innerHTML = data.items[0].link; 
        console.log("link: " + data.items[0].link);

    });
    console.log("done!");


     
});
},{}]},{},[1]);
