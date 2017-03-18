$(document).ready(function(){
    var elms = {
        quoteText: $("#quoteText"),
        quoteAuthor: $("#quoteAuthor"),
        tweetButton: $("#tweetButton")
    };

    //the api website: http://forismatic.com/en/api/

    $("#quoteButton").on('click', function(event) {
        //using this API to add data to our paragraph.
        $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json){
            elms.quoteText.html(json.quoteText);
            elms.quoteAuthor.html(json.quoteAuthor);
            //twit the quote.
            var twitterText = "https://twitter.com/intent/tweet?text=" + json.quoteText + " Author: " + json.quoteAuthor;
            elms.tweetButton.attr('href',twitterText);

        });
    });
});
