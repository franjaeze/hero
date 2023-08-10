
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


const franBk = document.getElementById('franBk')
const hero = document.querySelector('.hero')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
/*    franBk.style.top= value * -8 + 'px'; 
    hero.style.backgroundPosition= value /1.5+ '% ' */
}) 

/*+ value  /1.55+ '%' */