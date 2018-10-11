function makeAJAXRequest () {
    var request = new XMLHttpRequest();
    var url = "//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=<APIKEYHERE>&format=json&nojsoncallback=?&text=";
    //var url = '//api.flickr.com/services/feeds/photos_public.gne?format=json&tags=puppy';
    request.addEventListener("load", writeResponse);

    // request.open("GET", url + document.getElementById("query").value);
    request.open("GET", url);
    request.send();
}

function writeResponse() {
  resultsArray = JSON.parse(this.responseText);
  console.log(resultsArray);
}

makeAJAXRequest();