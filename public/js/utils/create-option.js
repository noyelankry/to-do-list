
export const createOption = (list) => {
    console.log(list, list._id)
    const option = `<option value="${list._id}">${list.name}</option>`
    const listSelector = $('#lists-selector')
    listSelector.append(option) 
}