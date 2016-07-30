var user = "tamoxin@codepen:~$ ";

var shareLink = "https://twitter.com/intent/tweet?text=";

var command = "";

var quote;

var author;

var insertText = function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
    quote = a[0].content;
    author = a[0].title;
    $("#quote").html(quote);
    $("#author").html(author);
  });
}

var insertAbout = function(){
  quote = "<p>This random quote machine was made by <a href='https://twitter.com/tamoxin' target='_blank' class='links'>Marco Carrizales</a>.<br>Thanks to <a href='http://www.mattboldt.com/' target='_blank' class='links'>Matt Boldt</a> for the Typed plugin.<br>The quotes showed on this site are from <a href='https://quotesondesign.com/' target='_blank' class='links'>https://quotesondesign.com/</a></p>";
  author = "Thanks for passing by :)"
  $("#quote").html(quote);
  $("#author").html(author);
}

var newQuote = function(){
  $(clr);
  command = "sudo ./randomQuote.py^400..^100..^100.^100.^300";
  $("#user").typed({
    strings: [command],
    typeSpeed: -900,
    onStringTyped: insertText
  });
};

var about = function(){
  $(clr);
  command = "about.txt^500";
  $("#user").typed({
    strings: [command],
    typeSpeed: -900,
    onStringTyped: insertAbout
  });
}

var clr = function(){
  quote = "";
  author = "";
  $("#quote").text(quote);
  $("#author").text(author);
}

$(document).ready(function(){
  $(newQuote);
  // new quote
  $("#new-quote").on("click", newQuote);
  
  //about
  $("#about").on("click", about);
  
  //share
  $("share-quote").on("click", function(){
    //var qte = "hola a todos";
    //var autr = $("#author").text();
    $("#author").html(quote);
  });
});