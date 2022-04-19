const { response } = require("express");
const { listenerCount } = require("../models/lists");
const List = require("../models/lists");

// show the list of lists

const index = (req, res) => {
  List.find() // mongoose query to find and return all the to-do-lists from the DB
    .then((response) => {
      res.json({
        response
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!"
      })
    })
}

// return a specific list

const show = (req, res) => {
  let listID = req.body.listID;
  List.findById(listID)
    .then((response) => {
      res.json({
        response,
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!"
      })
    })
}

// add a list to the DB
const add = (req, res) => {
  let list = new List({
    name: req.body.name,
    date: req.body.date,
    list_items: req.body.list_items,
  })
  list
    .save()
    .then((response) => {
      res.json({
        response
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!"
      })
    })
}

// update list by ID
const update = (req, res) => {
  let listID = req.body.listID

  let updateList = {
    name: req.body.name,
    date: req.body.date,
    list_items: req.body.list_items
  }

  List.findByIdAndUpdate(listID, { $set: updateList })
    .then(() => {
      res.json({
        message: "List updated successfully"
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!"
      })
    })
}

// delete list
const deleteList = (req, res) => {
  let listID = req.body.listID;
  List.findByIdAndRemove(listID)
    .then(() => {
      res.json({
        message: "List deleted successfully"
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!"
      })
    })
}

module.exports = {
  index,
  show,
  add,
  update,
  deleteList
}
