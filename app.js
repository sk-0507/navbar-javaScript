const toogle = document.querySelector(".nav-toggle")
const link = document.querySelector(".links")
toogle.addEventListener("click", function(){
    //method 1
   // link.classList.toggle("show-links")
    //method 2
    if(link.classList.contains("show-links"))
    {
        link.classList.remove("show-links")
    }else{
        link.classList.add("show-links")
    }
})