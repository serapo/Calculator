const bir=document.getElementById("bir");
const  iki=document.getElementById("iki");
const uc=document.getElementById("uc");
const  dort=document.getElementById("dort");
const bes=document.getElementById("bes");
const altı=document.getElementById("altı");
const yedi=document.getElementById("yedi");
const sekiz=document.getElementById("sekiz");

const sonuc=document.getElementById("sonuc");

const dokuz=document.getElementById("dokuz");
const sifir=document.getElementById("sifir");
const AC=document.getElementById("AC");

bir.addEventListener('click',()=>{sayiyaz(1);})
iki.addEventListener('click',()=>{sayiyaz(2);})
uc.addEventListener('click',()=>{sayiyaz(3);})
dort.addEventListener('click',()=>{sayiyaz(4);})
bes.addEventListener('click',()=>{sayiyaz(5);})
altı.addEventListener('click',()=>{sayiyaz(6);})
yedi.addEventListener('click',() =>{sayiyaz(7);});
sekiz.addEventListener('click',() =>{sayiyaz(8);});
dokuz.addEventListener('click',() =>{sayiyaz(9);});
sifir.addEventListener('click',() =>{sayiyaz(0);});
AC.addEventListener('click', () =>{ sonuc.innerHTML=`0`});

function sayiyaz(rakam){ 
    if(sonuc.innerHTML=='0'){
         sonuc.innerHTML=" ";
         
     }
     sonuc.innerHTML +=rakam;
}
