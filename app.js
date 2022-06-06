const btnyedi=document.getElementById("yedi");
const sekiz=document.getElementById("sekiz");
const esittir=document.getElementById("esittir");
const sonuclar=document.getElementById("sonuc");


sekiz.addEventListener('click',()=>{
    sonuclar.innerHTML=`<p>8</p>`.style.color="red";
});