const express = require("express")
const List = require("../models/lists")

// show the list of lists
const index = (req, res) => {
  List.find()
    .then((response) => {
      res.json({
        response
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!",
        error
      })
    })
}

// return a specific list
const show = (req, res) => {
  let listID = req.body.listID;
  List.findById(listID)
    .then((response) => {
      res.json({
        response
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!",
        error
      })
    })
}

// add a list to the DB
const add = (req, res) => {
  let list = new List({
    name: req.body.name,
    date: req.body.date,
    listItems: req.body.listItems,
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
        message: "An error has occured!",
        error
      })
    })
}

// update list by ID
const update = (req, res) => {
  let listID = req.body.listID

  let updateList = {
    name: req.body.name,
    date: req.body.date,
    listItems: req.body.listItems
  }

  List.findByIdAndUpdate(listID, { $set: updateList })
    .then(() => {
      res.json({
        message: "List updated successfully"
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!",
        error
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
        message: "An error has occured!",
        error
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
