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
                 });
            }
        });
    });