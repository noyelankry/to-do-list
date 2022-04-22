export const showList = () => {
    const listID = {listID: $('#lists-selector').val()}
    
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
            // console.log('List Displayed!', data, data.response._id)
            const url = new URL(`http://localhost:3000/new-list.html?id=${data.response._id}`)
            location.href = url
        })
        .catch((error) => {
            console.error('Error:', error)
        })
}