
/* javascript */
//$("#project").load("https://thqtcher.github.io/?url=google.com");
/*
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  jsontext = request.responseText;
  alert(jsontext);
}
request.open("GET", "https://whitscustard.com", true);
request.send();
*/
$.ajax({
          headers: { "Accept": "application/json", "Access-Control-Allow-Origin": "*"},
          type: 'GET',
          url: 'https://www.davidson.edu',
          crossDomain: true,
          beforeSend: function(xhr){
              xhr.withCredentials = true;
        },
          success: function(data, textStatus, request){
              console.log(data);
          }
});
