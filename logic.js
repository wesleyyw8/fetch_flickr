var s = document.createElement("script");
s.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=puppy";
document.body.appendChild(s);

//makeAJAXRequest();

function jsonFlickrFeed (data) {
  console.log(data);
}