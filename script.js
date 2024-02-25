let bar = document.getElementById("bar")
let navbars = document.getElementById("nv")
bar.onclick = function () {
    navbars.classList.toggle("active")
}



let acc = document.getElementsByClassName("btn-faq");


for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function () {
        let desc = this.nextElementSibling;

        if (desc.style.display == "none") {
            desc.style.display = "block"
        } else {
            desc.style.display="none"
        }
    })
}

let telegramLink = "https://t.me/+8o5zyuqCbCpmZDJi"

let telegramButton = document.querySelector('#telegramButton');
telegramButton.addEventListener("click",function(){
    window.location.href = telegramLink;
});