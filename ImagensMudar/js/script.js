const img_grande = document.getElementById('img-grande')
const img_1 = document.getElementById('img-1')
const img_2 = document.getElementById('img-2')
const img_3 = document.getElementById('img-3')

function trocarImg1(){
    img_grande.src="img/img (1).jpg"
    dark()
    img_1.classList.remove('dark')
}

function trocarImg2(){
    img_grande.src="img/img (2).jpg"
    dark()
    img_2.classList.remove('dark')
}
function trocarImg3(){
    img_grande.src="img/img (3).jpg"
    dark()
    img_3.classList.remove('dark')
}
function dark(){
    img_1.classList.add('dark');
    img_2.classList.add('dark');
    img_3.classList.add('dark');
}