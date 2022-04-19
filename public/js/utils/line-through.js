export const lineThrough = (elem) => {
    if ($(elem).is(':checked')) {
        $(elem).next().addClass('line-through')
    } else {
        $(elem).next().removeClass('line-through')
    }
}