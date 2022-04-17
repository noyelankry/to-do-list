export const lineThrough = (elem) => {
    if ($(elem).is(':checked')) {
        $(elem).parent().addClass('line-through')
    } else {
        $(elem).parent().removeClass('line-through')
    }
}