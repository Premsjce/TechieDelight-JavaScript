function arrayInit(num) {
    return Array(num).fill(0).map(() => Array(num).fill(0))
}

function array1DWithInit(dim, init){
    return Array(dim).fill(init);
}
module.exports = { arrayInit, array1DWithInit};