function setLanguage(lang){

localStorage.setItem("lang",lang);

document
.querySelectorAll("[data-" + lang + "]")
.forEach(el=>{

el.textContent=
el.getAttribute("data-" + lang);

});

document.documentElement.lang=lang;
}

const savedLanguage=
localStorage.getItem("lang");

if(savedLanguage){

setLanguage(savedLanguage);

}else{

const browserLanguage=
navigator.language ||
navigator.userLanguage;

if(browserLanguage.startsWith("no")){

setLanguage("no");

}else{

setLanguage("en");

}

}

const heroImages=[

"images/qa-pitch.png",
"images/qa-transfer.png",
"images/qa-final.png",
"images/qa-keep.png",
"images/analysis.png"

];

let current=0;

setInterval(()=>{

current++;

if(current>=heroImages.length){

current=0;

}

const hero=
document.getElementById("heroShot");

if(hero){

hero.src=heroImages[current];

}

},5000);
