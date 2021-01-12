module.exports = function parseStringArray(arryString) {
    return arryString.split(',').map(tech => tech.trim()) 
}