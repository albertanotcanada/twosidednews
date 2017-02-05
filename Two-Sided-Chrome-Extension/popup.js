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