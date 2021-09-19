let elShowarea = document.querySelector('#textarea');
let elresult = document.querySelector('#result');
const elBtns = document.querySelectorAll('#btn');
// const elclear = document.querySelectorAll('#btn-clear');
// const elPumpkin = document.querySelector('#btn-pumpkin');
// const elPercent = document.querySelector('#btn-percent'); 
// const elDivide = document.querySelector('#btn-divide');
// const elMultiply = document.querySelector('#btn-multiply');
// const elMinus = document.querySelector('#btn-minus');
// const elPilus = document.querySelector('#btn-pilus');
// const elEqual = document.querySelector('#btn-equal');
// const elReverseSign = document.querySelector('#btn-reversesign');

// let Doingplace = 0

elBtns.forEach(item => {
    item.addEventListener('click', function(e){
         let num = e.target.innerText

        //  console.log(num)
        if(num == 'C'){
            elShowarea.textContent = ''
            elresult.textContent = ''
        }else{
            if(num == '='){
                elresult.textContent = eval(elShowarea.textContent)
            }else{
                if(num == '%'){
                    console.log(elShowarea.textContent[0] * 100 / elShowarea.textContent[1])
                }else{
                    elShowarea.textContent += num
                }
            }
        }
    })
})

