import { removeItem } from "./utils/remove-item.js"
import { addToList } from "./utils/add-to-list.js"
import { lineThrough } from "./utils/line-through.js"

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