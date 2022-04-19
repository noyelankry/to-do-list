export function listToArray() {
    const $list_items = $('.list-item')
    const listArray = []
    $list_items.each((i, val) => {
        listArray.push($(val).children('label').text())
    })
    return listArray
}
