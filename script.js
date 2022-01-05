

const menuBar = document.querySelector('.mainmenu');

document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 5) {
    menuBar.classList.add('menu_bgcolor')
  } else if (document.documentElement.scrollTop <= 4) {
    menuBar.classList.remove('menu_bgcolor')
  }
})


let couning_div = document.querySelectorAll('.count_number span');

couning_div.forEach( allDiv => {
var mainvalue= allDiv.getAttribute('data-endValue')
  

  var counting = setInterval(() => {

    result = (Math.random() * 50)

    result = result.toFixed()
    couning_div.innerHTML = result
    allDiv.innerHTML = result

  }, 60);

  setTimeout(() => {
    clearInterval(counting)
    allDiv.innerHTML = mainvalue
    
  }, 3000);


});

let menuDot = document.querySelector('.manu_span');
let menuList = document.querySelector('.menu');
let mainmenu = document.querySelector('.mainmenu');

menuDot.addEventListener('click', function(){
  menuDot.classList.toggle("closed");
  menuList.classList.toggle("list_blocked");
  mainmenu.classList.toggle("manu_color");
})

