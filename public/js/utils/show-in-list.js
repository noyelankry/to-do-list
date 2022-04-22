export const showInList = (item) => {
    const template = `
    <div class='list-item'>
        <input type='checkbox' class='item-checkbox' value='' unchecked onclick="lineThrough(this)"> 
        <label>${item}</label>
        <button class='rmv-item-btn' onclick='removeItem(this)'>remove from list</button>
    </div>
                    `
    $('#result-list').append($(template))
}