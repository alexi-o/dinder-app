
  fetchData(){
    var lat = this.state.position.coords.latitude
    var lng = this.state.position.coords.longitude
    var latlng = "ll=" + String(lat) + "," + String(lng)
    var consumerKey = "n3Gy9SxwCVWab6TDeN5gow"
    var consumerSecret = "uzN67riG64UvB51g88Fz3ktxJrq5ddaLS2acbkJJNQHR5tfzafq1enL3fMcAZxLO"
    var tokenSecret = "FJiCf9lWorGAnVGmEErE21IGdmJ5jXLh7v5vTJzPRICs310w6aKWMv7nIhB8WcjhVNIJADbx85AY0Bup1sRAV0cG1GBfIdh2Ano1502jtaSLd5yc_s0DBHkeK1IsWXYx"
    var token = "Bearer"

    var oauth = new OAuthSimple(consumerKey, tokenSecret)
    var request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v3/search",
      parameters: latlng,
      signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token, access_secret: tokenSecret},
  })
}
fetch('https://api.yelp.com/v3/businesses/search?location=80209', {
	method: 'GET',
	headers: {
		'Authorization': 'Bearer FJiCf9lWorGAnVGmEErE21IGdmJ5jXLh7v5vTJzPRICs310w6aKWMv7nIhB8WcjhVNIJADbx85AY0Bup1sRAV0cG1GBfIdh2Ano1502jtaSLd5yc_s0DBHkeK1IsWXYx'
		'Content-Type': 'application/json'
	}
})

var request_yelp = function(lng_lat) {

  /* The url we are using for the request */
  var url = 'https://api.yelp.com/v3/businesses/search?location=80209';

  /* We can setup default parameters here */
  var default_parameters = {
    ll: lng_lat.lat + ',' + lng_lat.lng,
    sort: '2'
  };

