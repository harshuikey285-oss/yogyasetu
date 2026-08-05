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
function loadLatestSchemes(){

const container=document.getElementById("latestSchemes");

if(!container) return;

schemes.forEach(item=>{

container.innerHTML+=`

<div class="latest-card">

<h3>${item.name}</h3>

<p><strong>Category:</strong> ${item.category}</p>

<p><strong>State:</strong> ${item.state}</p>

<p>${item.description}</p>

<button>View Details</button>

</div>

`;

});

}

loadLatestSchemes();
document.getElementById("filterBtn").addEventListener("click", filterSchemes);

function filterSchemes() {

    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const state = document.getElementById("stateFilter").value;

    const container = document.getElementById("latestSchemes");
    container.innerHTML = "";

    const filtered = schemes.filter(item => {

        const matchKeyword =
            item.name.toLowerCase().includes(keyword);

        const matchCategory =
            category === "" || item.category === category;

        const matchState =
            state === "" || item.state === state;

        return matchKeyword && matchCategory && matchState;

    });

    if(filtered.length===0){

        container.innerHTML="<h3>No Scheme Found</h3>";

        return;

    }

    filtered.forEach(item=>{

        container.innerHTML += `

        <div class="latest-card">

            <h3>${item.name}</h3>

            <p><strong>Category:</strong> ${item.category}</p>

            <p><strong>State:</strong> ${item.state}</p>

            <p>${item.description}</p>

            <button>View Details</button>

        </div>

        `;

    });

}
