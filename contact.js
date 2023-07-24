console.log('Welcome to contact me region')

let abbae = document.getElementById('abbae');
// abbae.innerText = 'Leave your query'
abbae.setAttribute('style', 'width: 22vw; background-color: white; height: 10vh; margin-left: 10.4vw; border-radius: 7px;')
// abbae.innerHTML = 'Leave your query'

let lS = localStorage.getItem('text');
console.log(abbae, lS);

abbae.addEventListener('click', function () {
    noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = 'Enter your Query';
        abbae.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        abbae.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value)
    })
})


let bb = document.getElementById('bb');
bb.innerText = 'Leave us a comment';
bb.setAttribute('style', 'width: 22vw; background-color: white; height: 10vh; margin-left: 39vw; border-radius: 7px;')

let lS1 = localStorage.getItem('text1');


bb.addEventListener('click', function () {
    let noText = document.getElementsByClassName('textarea1').length;
    if (noText == 0) {
        let html1 = 'Leave us a comment';
        bb.innerHTML = `<textarea class="textarea1 form-control1" id="textarea1" rows="3"> ${html1}</textarea>`
    }
    let textarea1 = document.getElementById("textarea1");
    textarea1.addEventListener('blur', function () {
        bb.innerHTML = textarea1.value;
        localStorage.setItem('text1', textarea1.value)
    })
})
// console.log(ba);