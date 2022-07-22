const btn = document.getElementById('btn')


function converter(e) {
    e.preventDefault()

    const num = document.getElementById('num').value;

    if (num === '') {
        alert('Please input Number')
    } else
    if (num < 0) {
        alert('Please input Possitive Number')
    }

    bianaryNumber = Number(num).toString(2)
    document.getElementById('result').innerHTML = bianaryNumber
}

btn.addEventListener('click', converter)