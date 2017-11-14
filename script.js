$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
  });

  $.get("this_doesnt_exist.html", function(data) {
    // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    // This is called when an error occurs
    console.log('Something went wrong: ' + error);
  });

  //This is another example of how we could use jQuery to perform an Ajax request:
  var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";
  $.get(url, function(data) {
      console.log("Done");
      console.log(data);
    });
});

//same thing but outside of $(document).ready
var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

$.get(url)
  .done(function(data) {
    console.log("Done");
    console.log(data);
  });
