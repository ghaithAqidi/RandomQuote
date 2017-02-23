$(document).ready(function(){
    var elms = {
        quoteText: $("#quoteText")
    };

    $("#quoteButton").on('click', function(event) {
        //using this API to add data to our paragraph.
        $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json){
            console.log(json.quoteText);
            elms.quoteText.html(json.quoteText);
        });
    });
});
