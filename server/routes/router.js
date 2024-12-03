const express = require("express");
const route = express.Router();

// pass a path (e.g., "/") and a callback function to the get method
//  when the client makes an HTTP GET request to the specified path,
//  the callback function is executed
route.get("/", (req, res) => {
  // the req parameter references the HTTP request object, which
  //    contains the request details (a number of properties and methods)
  console.log("path: " + req.path);
  // send a response to the client
  // the res parameter references the HTTP response object
  res.render("index");
});

module.exports = route;
