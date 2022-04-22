export const deleteList = () => {
    const listID = {listID: $('#lists-selector').val()}
    
    fetch('http://localhost:3000/list/delete', {
        method: 'post',
        body: JSON.stringify(listID),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(response => response.json())
        .then(data => {
            console.log('List Deleted!')
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    .then(getLists())
}