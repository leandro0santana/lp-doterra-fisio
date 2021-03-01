document.getElementById('testimony-form').addEventListener('click', scrollTop);
document.getElementById('benefits-form').addEventListener('click', scrollTop);
document.getElementById('oils-form').addEventListener('click', scrollTop);
document.getElementById('kit-form-one').addEventListener('click', scrollTop);
document.getElementById('kit-form-two').addEventListener('click', scrollTop);
document.getElementById('kit-form-three').addEventListener('click', scrollTop);

function scrollTop(event) {
   event.preventDefault();
   const element = event.target;
   const id = element.getAttribute('href');
   const to = document.querySelector(id).offsetTop;

   window.scroll({
      top: to - 25,
      behavior: "smooth",
   });
}