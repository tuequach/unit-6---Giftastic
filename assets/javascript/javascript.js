          
              $("#add-gif").on("click", function (event) {
                var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=V6C5daTHzk80YfiMLv6CXZxC00TBvWK9;
            
                $.ajax({
                  url: queryURL,
                  method: "GET"
               });
                });
  
  const topics = [];
  
  
              </script>