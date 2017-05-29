var obj = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer FJiCf9lWorGAnVGmEErE21IGdmJ5jXLh7v5vTJzPRICs310w6aKWMv7nIhB8WcjhVNIJADbx85AY0Bup1sRAV0cG1GBfIdh2Ano1502jtaSLd5yc_s0DBHkeK1IsWXYx',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'client_id': 'n3Gy9SxwCVWab6TDeN5gow',
      'client_secret': 'uzN67riG64UvB51g88Fz3ktxJrq5ddaLS2acbkJJNQHR5tfzafq1enL3fMcAZxLO',
      'grant_type': 'client_credentials',
  }),
    
function(){
fetch('https://api.yelp.com/v3/businesses/search?location=80209', obj)  
  .then(function(res) {
    return res.json();
   })
  .then(function(resJson) {
    return resJson;
   })
}