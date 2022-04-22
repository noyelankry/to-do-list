import { listToArray } from './list-to-array.js'

export const updateList = () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString) 
    const listID = urlParams.get('id')
    const name = $('#list-name').val()
    const date = $('#list-date').val()
    const listItems = listToArray()

    const addedList = {
        listID,
        name,
        date,
        listItems
    }
    console.log(addedList)

    fetch('http://localhost:3000/list/update', {
        method: 'put',
        body: JSON.stringify(addedList),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            const url = new URL(`http://localhost:3000/my-lists.html`)
            location.href = url
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}