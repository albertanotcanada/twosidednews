$(document).ready(function(){

        var input;
        var delim = [' ', '+', '(', ')', '*', '\\/', ':', '?', '-'];
        var tokens;
         $('#go-button').on({
             'click': function(){
                 input = document.getElementById('query-Input').value;
                 tokens = input.split(new RegExp('[' + delim.join('') + ']', 'g'));
                 var querySum = [];
                 for(i=0; i<tokens.length; i++){
                     querySum += tokens[i] 
                     if(i!=tokens.length-1){
                         querySum += "+"
                     }
                 }
                 var liberalQuery = "https://www.googleapis.com/customsearch/v1?q=" + querySum + "&cx=003349935858378228433%3Awuei2zd_tuc&key=AIzaSyDvQ7P_rS2Yh28FQCUrqNYQlZKKCwDclW0";
                 var conserQuery = "https://www.googleapis.com/customsearch/v1?q="+querySum+"&cx=013199845727965234313:allhxzwrat4&key=AIzaSyDvQ7P_rS2Yh28FQCUrqNYQlZKKCwDclW0"
                 $.get(liberalQuery, function(data){
//                         "data" now contains all of the needed queries
//                         link, title, snippet
//                         $("#result").html(data.item[0]);
                     console.log(data);
//                     if(data.items[0].pagemap.person == null){
//                         
//                     }
                    $("#left-1 a").attr('href', data.items[0].link);
                    $("#left-1 img").attr('src', data.items[0].pagemap.cse_image[0].src);
                    $("#left-1 h3").html(data.items[0].title);
                    $("#left-1 p").html(data.items[0].snippet);

                    $("#left-2 a").attr('href', data.items[1].link);
                    $("#left-2 img").attr('src', data.items[1].pagemap.cse_image[0].src);
                    $("#left-2 h3").html(data.items[1].title);
                    $("#left-2 p").html(data.items[1].snippet);

                    $("#left-3 a").attr('href', data.items[2].link);
                    $("#left-3 img").attr('src', data.items[2].pagemap.cse_image[0].src);
                    $("#left-3 h3").html(data.items[2].title);
                    $("#left-3 p").html(data.items[2].snippet);
                 });
                 $.get(conserQuery, function(data){
//                         "data" now contains all of the needed queries
//                         link, title, snippet
//                         $("#result").html(data.item[0]);
                     console.log(data);

                    $("#right-1 a").attr('href', data.items[0].link);
                    $("#right-1 img").attr('src', data.items[0].pagemap.cse_image[0].src);
                    $("#right-1 h3").html(data.items[0].title);
                    $("#right-1 p").html(data.items[0].snippet);

                    $("#right-2 a").attr('href', data.items[1].link);
                    $("#right-2 img").attr('src', data.items[1].pagemap.cse_image[0].src);
                    $("#right-2 h3").html(data.items[1].title);
                    $("#right-2 p").html(data.items[1].snippet);

                    $("#right-3 a").attr('href', data.items[2].link);
                    $("#right-3 img").attr('src', data.items[2].pagemap.cse_image[0].src);
                    $("#right-3 h3").html(data.items[2].title);
                    $("#right-3 p").html(data.items[2].snippet);
                 });
            }
        });
    });