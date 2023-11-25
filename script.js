let output = document.getElementById('input')

function key(num) {
    output.value = output.value + num
}
function result() {
    try {
        output.value = eval(output.value)
    }
    catch {
        output.value = "Error!!!"
    }
}
function clr() {
    output.value = ""
}
function del() {
    output.value = output.value.slice(0, -1)
}
