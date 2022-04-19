export const addToList = () => {
    const listItemText = $('#input-box').val()

    if (listItemText) {
        const template = `
        <div class='list-item'>
            <label>
                <input type='checkbox' class='item-checkbox' value='' unchecked onclick="lineThrough(this)"> 
                ${listItemText}
                </label>
            <button class='rmv-item-btn' onclick='removeItem(this)'>remove from list</button>
        </div>
                        `
        $('#result-list').append($(template))
        $('#input-box').val('')
    } else {
        alert('No input found! Type something...')
    }

}