const bir=document.getElementById("bir");
const  iki=document.getElementById("iki");
const uc=document.getElementById("uc");
const  dort=document.getElementById("dort");
const bes=document.getElementById("bes");
const altı=document.getElementById("altı");
const yedi=document.getElementById("yedi");
const sekiz=document.getElementById("sekiz");
const dokuz=document.getElementById("dokuz");

const sonuc=document.getElementById("sonuc");

const eksi=document.getElementById("eksi");
const arti=document.getElementById("arti");
const artıeksi=document.getElementById("artıeksi");
const carpı=document.getElementById("carpı");
const esittir=document.getElementById("esittir");
const bolum=document.getElementById("bolum");
const yuzde=document.getElementById("yüzde");

const sifir=document.getElementById("sifir");
const nokta=document.getElementById("nokta");
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

arti.addEventListener('click',() =>{sayiyaz("+");});
carpı.addEventListener('click',() =>{sayiyaz("x");});
bolum.addEventListener('click',() =>{sayiyaz("÷");});
yuzde.addEventListener('click',() =>{sayiyaz("");});
esittir.addEventListener('click',() =>{hesapla();});
eksi.addEventListener('click',() =>{sayiyaz("-");});
AC.addEventListener('click', () =>{ sonuc.innerHTML=`0`});

function sayiyaz(rakam){ 
    if(sonuc.innerHTML=='0'){
         sonuc.innerHTML=" ";
         
     }
     sonuc.innerHTML +=rakam;
}

function hesapla(){
     if(!sonuc.innerHTML){
         alert("Please enter a number");
     }
     else if(sonuc.innerHTML.includes("+")){
         let deger=sonuc.innerHTML.split("+");
         sonuc.innerHTML=Number(deger[0])+Number(deger[1]);
     }
     else if(sonuc.innerHTML.includes("-")){
        let deger=sonuc.innerHTML.split("-");
        sonuc.innerHTML=Number(deger[0])-Number(deger[1]);
    }
    else if(sonuc.innerHTML.includes("x") ){
        let deger=sonuc.innerHTML.split("x");
        sonuc.innerHTML=(Number(deger[0])*Number(deger[1]));
    } 
    else if(sonuc.innerHTML.includes("÷") ){
        let deger=sonuc.innerHTML.split("÷");
        sonuc.innerHTML=(Number(deger[0])/Number(deger[1]));
    }
}

yuzde.addEventListener('click',() =>{let yuzde=Number(sonuc.innerHTML); sonuc.innerHTML=(yuzde/100).toFixed(2);});
artıeksi.addEventListener('click',() =>{
    if(sonuc.innerHTML=="0"){
        sonuc.innerHTML=`0`;
    }
   else if(!sonuc.innerHTML.includes("-"))
   sonuc.innerHTML="-" + `${sonuc.innerHTML}`;
   else if(sonuc.innerHTML.includes('-')){
       let yazi=sonuc.innerHTML.substring(1);
    sonuc.innerHTML=`${yazi}`;
   }
});

nokta.addEventListener('click',() =>{
    if(!sonuc.innerHTML.includes(".")){
        sayiyaz(".");
    }
    else if(sonuc.innerHTML.includes(".")){
        let yazi=sonuc.innerHTML;
        sonuc.innerHTML=`${yazi}`;
    }
});