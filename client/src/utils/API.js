import axios from "axios";

export default {
  //Required for all data to load on page
  postToken: function(data, header) {
    return axios.post("/api/users/tokenIsValid", data, header)
  },
  //Grabs encrypted password and matches for login approval
  loginUser: function (data){
    return axios.post("/api/users/login", data)
  },
  //Creates new user
  createUser: function (data){
    return axios.post("/api/users/register", data)
  },
  //Gets all users
  getUser: function() {
    return axios.get("/api/users/register")
  },
  //Gets user by ID
  getUserById: function(id) {
    return axios.get("/api/users/register/" + id)
  },
  getUsers: function(data) {
    return axios.get("/api/users", data)
  },
  //Gets all texts
  getExamples: function() {
    return axios.get("/api/text");
  },
  // Gets the text with the given id
  getExample: function(id) {
    return axios.get("/api/text/" + id);
  },
  //Gets text with text name that matches
  getExamplesByName: function(data) {
    return axios.get("/api/text/name/" + data);
  },
  // Deletes the Example with the given id
  deleteExample: function(id) {
    return axios.delete("/api/text/" + id);
  },
  // Updates
  updateExample: function (id,data) {
    return axios.put("/api/text/" + id, data)
  },
  // Saves a Example to the database
  saveExample: function(data) {
    return axios.post("/api/text", data);
  },
};
