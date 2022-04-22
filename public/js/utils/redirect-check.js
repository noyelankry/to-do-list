import { showInList } from "./show-in-list.js"

export const redirectCheck = () => {
    const queryString = window.location.search
    console.log(queryString)
    if(queryString.includes('?')){
        $('#save-n-exit-btn').remove()
        $('#make-list-container').append('<button id="update-list-btn" onclick="updateList()">Update & Exit</button>')
        
        const urlParams = new URLSearchParams(queryString) 
        const listID = {listID: urlParams.get('id')}
        fetch('http://localhost:3000/list/show', {
        method: 'post',
        body: JSON.stringify(listID),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json())
        .then(data => {
            console.log(data)
            $('#list-name').val(data.response.name)
            $('#list-date').val(data.response.date)

            const listItems = data.response.listItems
            listItems.forEach(item => {
                showInList(item)
            })
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    } else {
        console.log('new list clicked')
    }
}