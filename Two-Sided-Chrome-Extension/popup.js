// documentation on the chrome.tabs API: https://developer.chrome.com/extensions/tabs

var sources = { 
    "www.foxnews.com": "conservative", 
    "www.theblaze.com": "conservative", 
    "www.breitbart.com": "conservative", 
    "www.drudgereport.com": "conservative", 
    "www.newyorker.com": "liberal", 
    "www.buzzfeed.com": "liberal", 
    "www.theatlantic.com": "liberal", 
    "www.washingtonpost.com": "liberal", 
    "www.nytimes.com": "liberal", 
    "www.cnn.com": "liberal",
    "www.huffingtonpost.com": "liberal", 
    "www.msnbc.com": "liberal"
}

var logos = { 
    "www.foxnews.com": "http://global.fncstatic.com/static/v/all/img/og/og-fn-foxnews.jpg", 
    "www.theblaze.com": "https://upload.wikimedia.org/wikipedia/en/1/19/TheBlaze_Logo.png", 
    "www.breitbart.com": "conservative", 
    "www.drudgereport.com": "conservative", 
    "www.newyorker.com": "https://s-media-cache-ak0.pinimg.com/originals/13/6e/01/136e012417e5be40f403fd15cd854665.jpg", 
    "www.buzzfeed.com": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/BuzzFeed.svg/2000px-BuzzFeed.svg.png", 
    "www.theatlantic.com": "https://cdn.theatlantic.com/assets/static/b/theatlantic/img/default-thumbnail.png", 
    "www.washingtonpost.com": "https://s3.amazonaws.com/share-the-facts/logos/washington_post_logo.png", 
    "www.nytimes.com": "https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png", 
    "www.cnn.com": "lhttps://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cnn.svg/2000px-Cnn.svg.png",
    "www.huffingtonpost.com": "http://jerz.setonhill.edu/wp-content/uploads/2013/12/image6.jpg", 
    "www.msnbc.com": "http://www.msnbc.com/sites/msnbc/themes/leanforward/images/site-header/msnbc-logo-card-twitter.png"
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
    // var key = "AIzaSyBz4G8Z4mocrtPLPX8kFyJ1NvTyV8J44Sc"; //key 
    // var key = "AIzaSyAgfhTgZhs1Vr9u8vP6MLnjIsYHvfcTc3s"; 
    // var key = "AIzaSyDvQ7P_rS2Yh28FQCUrqNYQlZKKCwDclW0"; 
    var key = "AIzaSyCrfL2c9Blh0HHGCvwmDa_-tE0S5RDpgmI";
    var searchID; 
    var goAhead = true; 
    if (sources[site] == "liberal") { 
        searchID = "013199845727965234313:allhxzwrat4" ; // search conservative 
    } else if (sources[site] == "conservative") { 
        searchID = "003349935858378228433%3Awuei2zd_tuc"; // search liberal 
    } else { 
        goAhead = false; 
        $("#message").html("<b> Sorry, we couldn't find an article with similar content. </b>"); 
    }

    if (goAhead) {
        // Google custom search api 
        $.get("https://www.googleapis.com/customsearch/v1?q="+query+"&cx=" + searchID + "&key=" + key, function(data, status){
            console.log(data);
            if (data == null) { 
                $("#message").html("<b> Sorry, we couldn't find an article with similar content. </b>"); 
            } else { 
                var article = data.items[0]; 
                if (data.items[0].pagemap.metatags.pagetype != "article") { 
                    article = data.items[1]; 
                }
                console.log("Data: " + data + "\nStatus: " + status); 
                document.getElementById('title').innerHTML = article.title;
                document.getElementById('title').href = article.link;

                
                // console.log(data.items[0].title);
                // console.log(data);

                document.getElementById('source').innerHTML = "<img id='logo' src='" + logos[article.displayLink] + "'> </img> "//from " + data.items[0].displayLink;
                if (article.description != "undefined") { 
                    document.getElementById('description').innerHTML = article.snippet; 
                } 
                //$("#link").innerHTML = data.items[0].link; 
                console.log("link: " + article.link);
            }

        });
    } 
    console.log("done!");

     
});