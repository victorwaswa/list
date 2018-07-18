$(document).ready(function(){
    $("#TaskInput form").submit(function(event){
      event.preventDefault()
      var erIck=$("input#TaskInput").val();
      $("#result").append("<li>" + erIck + "</li>")
      console.log($("#TaskInput").val());
    });
   });