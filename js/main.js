//sticky menu

jQuery('document').ready(function($) {

    var nav = $('.menu-wraper_menu');

    $(window).scroll(function () {
        if($(this).scrollTop() > 470){
          nav.addClass('sticky');
        }
        else{
          nav.removeClass('sticky');
        }
    });
});

let rectangle = document.getElementById('rectangle');

// button onscroll
let smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop>0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}
    
window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 200) {
   rectangle.style.display = 'block';
  } else {
   rectangle.style.display = 'none';
  }
}

let modal = document.getElementById('myModel');
let modal1 = document.getElementById('myModel1');
let modal2 = document.getElementById('myModel2');
let modal3 = document.getElementById('myModel3');
let modal4 = document.getElementById('myModel4');
let modal5 = document.getElementById('myModel5');
let modal6 = document.getElementById('myModel6');
let modal7 = document.getElementById('myModel7');
let modal8 = document.getElementById('myModel8');
let modal9 = document.getElementById('myModel9');
let modal10 = document.getElementById('myModel10');

let btn = document.getElementById('modalBtn');
let btn1 = document.getElementById('modalBtn1');
let btn2 = document.getElementById('modalBtn2');
let btn3 = document.getElementById('modalBtn3');
let btn4 = document.getElementById('modalBtn4');
let btn5 = document.getElementById('modalBtn5');
let btn6 = document.getElementById('modalBtn6');
let btn7 = document.getElementById('modalBtn7');
let btn8 = document.getElementById('modalBtn8');
let btn9 = document.getElementById('modalBtn9');
let btn10 = document.getElementById('modalBtn10');

let cross = document.getElementById('close');
let cross1 = document.getElementById('close1');
let cross2 = document.getElementById('close2');
let cross3 = document.getElementById('close3');
let cross4 = document.getElementById('close4');
let cross5 = document.getElementById('close5');
let cross6 = document.getElementById('close6');
let cross7 = document.getElementById('close7');
let cross8 = document.getElementById('close8');
let cross9 = document.getElementById('close9');
let cross10 = document.getElementById('close10');
    btn.onclick = function () {
        modal.style.display = 'block';
    }

    cross.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal){
            modal.style.display = 'none';
        }
    }


    btn1.onclick = function () {
        modal1.style.display = 'block';
    }

    cross1.onclick = function () {
        modal1.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal1){
            modal1.style.display = 'none';
        }
    }


    btn2.onclick = function () {
        modal2.style.display = 'block';
    }

    cross2.onclick = function () {
        modal2.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal2){
            modal2.style.display = 'none';
        }
    }


    btn3.onclick = function () {
        modal3.style.display = 'block';
    }

    cross3.onclick = function () {
        modal3.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal3){
            modal3.style.display = 'none';
        }
    }


    btn4.onclick = function () {
        modal4.style.display = 'block';
    }

    cross4.onclick = function () {
        modal4.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal4){
            modal4.style.display = 'none';
        }
    }


    btn5.onclick = function () {
        modal5.style.display = 'block';
    }

    cross5.onclick = function () {
        modal5.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal5){
            modal5.style.display = 'none';
        }
    }

    
    btn6.onclick = function () {
        modal6.style.display = 'block';
    }

    cross6.onclick = function () {
        modal6.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal6){
            modal6.style.display = 'none';
        }
    }


    btn7.onclick = function () {
        modal7.style.display = 'block';
    }

    cross7.onclick = function () {
        modal7.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal7){
            modal7.style.display = 'none';
        }
    }
    

    btn8.onclick = function () {
        modal8.style.display = 'block';
    }

    cross8.onclick = function () {
        modal8.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal8){
            modal.style.display = 'none';
        }
    }
    

    btn9.onclick = function () {
        modal9.style.display = 'block';
    }

    cross9.onclick = function () {
        modal9.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal9){
            modal9.style.display = 'none';
        }
    }

    btn10.onclick = function () {
        modal10.style.display = 'block';
    }

    cross10.onclick = function () {
        modal10.style.display = 'none';
    }
    window.onclick = function (event) {
        if(event.target == modal10){
            modal10.style.display = 'none';
        }
    }