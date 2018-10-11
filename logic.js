var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

function makeRequest(name) {
  var script = document.createElement("script");
  script.src = url+name;
  document.body.appendChild(script);
  script.parentNode.removeChild(script);
}

function jsonFlickrFeed (data) {
  var imageContainer = document.getElementById('images-container')
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }
  var limit = data.items.length > 5 
    ? 5 
    : data.items.length;

  for(var x=0; x<limit; x++) {
    var img = document.createElement('img');
    img.src = data.items[x].media.m;
    document.getElementById('images-container').appendChild(img);
  }
}