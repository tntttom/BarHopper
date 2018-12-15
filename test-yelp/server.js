/* a simple Express server for Node.js
* query YELP API & publish
*/

var express = require("express"),
    http = require("http"),
    jsonApp = express();

const yelp = require('yelp-fusion');
// Place holder for Yelp Fusion's API Key
const apiKey = "rrGvy4AFVjsJ-dhNPO0AwETST5IPBbnazdu3ZDIw6r-th1pZLrkV7wvTxI_UW15yAjSCncL62CJWaTL9vLj3W5xlwdYvEj3Oz-J0RRdac4v4qh_WNw-aksbRFWQEXHYx";
const client = yelp.client(apiKey);

http.createServer(jsonApp).listen(3030);

const searchRequest = {
  term:'bar',
  location: 'Chicago, IL',
  price: '1'
};

jsonApp.get("/yelp.json", function(req, res){
  client.search(searchRequest).then(response => {
    res.json(response.jsonBody);
    }).catch(e => {
      console.log(e);
    });
});
