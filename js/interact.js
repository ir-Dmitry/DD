window.addEventListener('scroll', function() 
{
    var scrollButton = document.querySelector('.scroll-top-btn');
    if (window.pageYOffset > 200) 
    {
      scrollButton.classList.add('show');
    } 
    else 
    {
      scrollButton.classList.remove('show');
    }
});
  
function scrollToTop() 
{

console.log("плавно");

$("html, body").animate({
    scrollTo
}, 500)
}

var showed = false;
document.querySelector('.menu_button').addEventListener('click', function() 
{
    if(showed == false)
    {
        document.querySelector(".sidebar").style.height = "auto";
        document.querySelector(".sidebar").style.transition = "height .75s ease";

        console.log("показ");
        showed = true;
    }
    else
    {
        
        document.querySelector(".sidebar").style.transition = "height .75s ease";
        document.querySelector(".sidebar").style.height = "0";

        console.log("не показ");
        showed = false;
    }
    
});