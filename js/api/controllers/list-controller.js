import List from '../models/lists.js'

// show the list of lists
export const index = (req, res) => {
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
export const show = (req, res) => {
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
export const add = (req, res) => {
  console.log(`Received ${JSON.stringify(req.body)}`)
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
export const update = (req, res) => {
  let listID = req.body.listID
  console.log('REQ', listID)

  let updateList = {
    name: req.body.name,
    date: req.body.date,
    listItems: req.body.listItems
  }
  List.findByIdAndUpdate(listID, { $set: updateList, function(error, list) { callback(error, list) } })
    .then(() => {
      res.json({
        message: 'updated'
      })
    })
    .catch((error) => {
      res.json({
        message: "An error has occured!",
        error: error
      })
    })
}

// delete list
export const deleteList = (req, res) => {
  console.log(`Received ${req.body}`)
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
