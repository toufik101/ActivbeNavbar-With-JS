let section = document.querySelectorAll("section");
let navA = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  section.forEach(section => {
    let top = window.scrollY ;
    let offset = section.offsetTop-46.3;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navA.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`nav a[href*=`+ id +`]`).classList.add("active");
      });
    }
  });
});
