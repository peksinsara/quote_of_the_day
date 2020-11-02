let btn = document.getElementById('btn');
let result = document.getElementById('result');
let author = document.getElementById('author');
function getQuote(){
/*GET API URL THAT CONVERTES INTO JSON FORMAT*/
let url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
$.getJSON(url, function (data) {
    $(".result").html(data.quoteText);
    $(".author").html("-" + data.quoteAuthor);
});
};

