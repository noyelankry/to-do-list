import { listToArray } from './list-to-array.js'

export const saveList = () => {
    const name = $('#list-name').val()
    const date = $('#list-date').val()
    const listItems = listToArray()

    const addedList = {
        name,
        date,
        listItems
    }
    console.log(addedList)
    fetch('http://localhost:3000/list/add', {
        method: 'post',
        body: JSON.stringify(addedList),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
}
