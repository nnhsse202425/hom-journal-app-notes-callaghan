const express = require("express");
const route = express.Router();

// easy way to assign static data (e.g., array of strings) to a variable
const habitsOfMind = require("../model/habitsOfMind.json");

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

// route for createEntry
route.get("/createEntry", (req, res) => {
  res.render("createEntry", { habits: habitsOfMind });
});

route.post("/createEntry", (req, res) => {
  const entry = req.body;
  console.log("entry" + entry);
  res.status(201).end();
});

module.exports = route;
