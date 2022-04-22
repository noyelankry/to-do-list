import { createOption } from "../utils/create-option.js"
export const getLists = () => {
    let listsArray = []
    
    // reset lists selector (empty and add default option)
    const listSelector = $('#lists-selector')
    listSelector.empty()
    listSelector.append('<option value="" disabled selected>choose a list</option>')
    
    fetch('http://localhost:3000/list/', {method: 'get'})
    .then(response => response.json())
        .then(data => {
            console.log('Success:', data.response)
            listsArray = data.response

            listsArray.forEach(list => {
                createOption(list)
            })
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}
