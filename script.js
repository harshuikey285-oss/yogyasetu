console.log("Welcome to YogyaSetu 2.0");
document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("click",()=>{

let category=card.querySelector("h3").innerText;

window.location.href="schemes.html?category="+category;

});

});
document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", function () {

        let category = this.querySelector("h3").innerText;

        window.location.href = "schemes.html?category=" + encodeURIComponent(category);

    });

});
