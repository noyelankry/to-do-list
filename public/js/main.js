import { removeItem } from "./utils/remove-item.js"
import { addToList } from "./utils/add-to-list.js"
import { lineThrough } from "./utils/line-through.js"
import { saveList } from "./business-logic/save-list.js"


const addBtn = document.getElementById('add-to-list-btn')
addBtn.addEventListener('click', addToList)

const inputBox = document.getElementById('input-box')
inputBox.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToList()
    }
})

window.removeItem = removeItem
window.lineThrough = lineThrough
window.saveList = saveList