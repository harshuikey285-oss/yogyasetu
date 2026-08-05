const schemes = [

{
name:"PM Kisan Samman Nidhi",
category:"Farmers",
type:"Central",
eligibility:"Small & Marginal Farmers",
link:"https://pmkisan.gov.in/"
},

{
name:"PM Awas Yojana",
category:"Women",
type:"Central",
eligibility:"EWS / LIG Families",
link:"https://pmaymis.gov.in/"
},

{
name:"NSP Scholarship",
category:"Students",
type:"Central",
eligibility:"Students",
link:"https://scholarships.gov.in/"
},

{
name:"Atal Pension Yojana",
category:"Senior Citizen",
type:"Central",
eligibility:"18-40 Years",
link:"https://www.npscra.nsdl.co.in/"
},

{
name:"Accessible India Campaign",
category:"Disabled",
type:"Central",
eligibility:"Persons with Disabilities",
link:"https://depwd.gov.in/"
}

];

const params=new URLSearchParams(window.location.search);

const category=params.get("category");

document.getElementById("categoryTitle").innerHTML=category+" Schemes";

displaySchemes(category);

document.getElementById("searchBox").addEventListener("keyup",function(){

let keyword=this.value.toLowerCase();

let filtered=schemes.filter(s=>s.category===category && s.name.toLowerCase().includes(keyword));

showCards(filtered);

});

function displaySchemes(cat){

let filtered=schemes.filter(s=>s.category===cat);

showCards(filtered);

}

function showCards(data){

const container=document.getElementById("schemeContainer");

container.innerHTML="";

data.forEach(scheme=>{

container.innerHTML+=`

<div class="scheme-card">

<h2>${scheme.name}</h2>

<p><b>Category:</b> ${scheme.category}</p>

<p><b>Type:</b> ${scheme.type}</p>

<p><b>Eligibility:</b> ${scheme.eligibility}</p>

<a href="${scheme.link}" target="_blank">

<button>Apply Now</button>

</a>

</div>

`;

});

}
