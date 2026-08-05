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
document.getElementById("filterBtn").addEventListener("click",function(){

let search=document.getElementById("searchInput").value;
let category=document.getElementById("categoryFilter").value;
let state=document.getElementById("stateFilter").value;

alert(
"Searching...\n\n"+
"Keyword : "+search+
"\nCategory : "+category+
"\nState : "+state
);

});
