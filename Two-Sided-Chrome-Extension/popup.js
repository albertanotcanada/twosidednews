// documentation on the chrome.tabs API: https://developer.chrome.com/extensions/tabs

var sources = { 
    "www.foxnews.com": "conservative", 
    "www.theblaze.com": "conservative", 
    "www.breitbart.com": "conservative", 
    "www.drudgereport.com": "conservative", 
    "www.newyorker.com": "liberal", 
    "www.nytimes.com": "liberal", 
    "www.cnn.com": "liberal",
    "www.huffingtonpost.com": "liberal", 
    "www.msnbc.com": "liberal"
}


chrome.tabs.query({'active': true}, function (tabs) {
    var url = tabs[0].url; 
    var title = tabs[0].title; 
    // console.log(url); 
    var splitUrl = url.split("/"); 
    var site = splitUrl[2]; 
    console.log(splitUrl); 
    console.log("site: " + site); 
    /* google custom search */ 
    var query = title; 
    //var key = "AIzaSyBz4G8Z4mocrtPLPX8kFyJ1NvTyV8J44Sc"; //key 
    var key = "AIzaSyAgfhTgZhs1Vr9u8vP6MLnjIsYHvfcTc3s"; 
    var searchID; 
    if (sources[site] == "liberal") { 
        searchID = "013199845727965234313:allhxzwrat4" ; // search conservative 
    } else if (sources[site] == "conservative") { 
        searchID = "003349935858378228433%3Awuei2zd_tuc"; // search liberal 
    } else { 

    }

    // Google custom search api 
    $.get("https://www.googleapis.com/customsearch/v1?q="+query+"&cx=" + searchID + "&key=" + key, function(data, status){
        console.log("Data: " + data + "\nStatus: " + status); 
        //$("#title").innerHTML = data.items[0].title; 
        document.getElementById('title').innerHTML = data.items[0].title;
        document.getElementById('title').href = data.items[0].link;
        console.log(data.items[0].title);
        console.log(data);
        /*
        document.getElementById('link').innerHTML = data.items[0].link;
        document.getElementById('link').href = data.items[0].link;
        */ 
        document.getElementById('source').innerHTML = "from " + data.items[0].displayLink;
        if (data.items[0].description != "undefined") { 
            document.getElementById('description').innerHTML = data.items[0].snippet; 
        } 
        //$("#link").innerHTML = data.items[0].link; 
        console.log("link: " + data.items[0].link);

    });
    console.log("done!");

     
});