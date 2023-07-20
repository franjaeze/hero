const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navBtn.addEventListener('click', function(){
    links.classList.toggle('show-links')

  /*   Esto es lo mismo que hacer
  
    if(links.classLists.contains('show-links')) {
        links.classList.remove('show-links') 
    } else {
        links.classList.add('show-links')
    } */

})
