var gifs = [ "Naruto", "One Piece", "Fairy Tail", "Fullmetal Alchemist", "My Hero Academia", "Attack on Titans" ];
var newGifs ="";
var button;

var buttonGen = function () {
    $("#add-gif").empty();
    for (var i= 0; i< gifs.length; i++){
        $("#add-gifs").append(button);
    };
}
    

    
    
$("#add-gif").on("click", function (event) {
                var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=V6C5daTHzk80YfiMLv6CXZxC00TBvWK9";
            
                $.ajax({
                  url: queryURL,
                  method: "GET"
               });
                });
  
  const topics = [];
  
