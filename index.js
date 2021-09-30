// Your code here
function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`
}

const mondayWork = function (thing = 'go to the office') {
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}
