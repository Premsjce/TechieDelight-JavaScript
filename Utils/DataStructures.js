function arrayInit(num) {
    return Array(num).fill(0).map(() => Array(num).fill(0))
}

module.exports = { arrayInit};