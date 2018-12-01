// BURGERFUNC.JS FILE //

$(function() {
    $(".change-burger").on("click", function(event) {
      console.log("click test1");
      var id = $(this).data("id");
      var newBurger = $(this).data("newOrder");
  
      var newBurgerAdd = {
        devoured: newBurger
      };
      console.log(newBurgerAdd);
      // Send the PUT request.
      $.ajax("/api/burgers/"+ id,{
        type: "PUT",
        data: newBurgerAdd
      }).then(
        function() {
          console.log("click test2");
          console.log("=====================");
          console.log("changed burger to", newBurger);
          console.log("============================s");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      console.log("click test3");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bp").val(),
        devoured: $("[name=devoured]:checked").val()
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new delicous burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      console.log("click test4");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("devoured burger", id);
          console.log("click test5");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
// ON BUTTON SUBMIT IT WILL MAKE A CHOMP SOUND ON DEVOURED!
// var audio = new Audio('audio_file.mp3');
// audio.play();