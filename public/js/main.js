import { removeItem } from "./utils/remove-item.js"
import { addToList } from "./utils/add-to-list.js"
import { lineThrough } from "./utils/line-through.js"
import { saveList } from "./business-logic/save-list.js"
import { updateList } from "./business-logic/update-list.js"
import { getLists } from "./business-logic/get-lists.js"
import { showList } from "./business-logic/show-list.js"
import { deleteList } from "./business-logic/delete-list.js"
import { redirectCheck } from "./utils/redirect-check.js"
import { signUp } from "./user-login/sign-up.js"
import { signIn } from "./user-login/sign-in.js"

const addBtn = document.getElementById('add-to-list-btn')
if(addBtn){
    addBtn.addEventListener('click', addToList)
}

const inputBox = document.getElementById('input-box')
if(inputBox){
    inputBox.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addToList()
        }
    })
}

window.removeItem = removeItem
window.lineThrough = lineThrough
window.saveList = saveList
window.updateList = updateList
window.getLists = getLists
window.showList = showList
window.redirectCheck = redirectCheck
window.deleteList = deleteList
window.signUp = signUp 
window.signIn = signIn 