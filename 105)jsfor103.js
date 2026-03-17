let ui=document.querySelector('#uii');
let ci=document.querySelector('#cii');
const r=document.querySelector('#r');
const p=document.querySelector('#p');
const s=document.querySelector('#s');
const re=document.querySelector('#re');
let us=document.querySelector('#us');
let cs=document.querySelector('#cs');
let winp=document.querySelector('#winp');


let usc=0;
let csc=0;


function cm(uc){
if(usc<winp.value && csc<winp.value){
let m=Math.floor(Math.random()*3)+1;
if(m==1)ci.src="rs.png";
else if(m==2) ci.src="rp.png";
else if(m==3)ci.src="rsc.png";

if(uc==1 && m==2)csc++;
else if(uc==1 && m==3) usc++;
else if(uc==2 && m==1) usc++;
else if(uc==2 && m==3) csc++;
else if(uc==3 && m==1) csc++;
else if(uc==3 && m==2) usc++;
us.innerText=`${usc}`;
cs.innerText=`${csc}`;
}

if(usc==winp.value && csc<winp.value){
us.style.color='green';
cs.style.color='red';
}
else if(usc<winp.value && csc==winp.value){
us.style.color='red';
cs.style.color='green';
}
}


function rk(){
if(usc<winp.value && csc<winp.value){

ui.src="lst.png";
cm(1);
}
}

function pp(){
if(usc<winp.value && csc<winp.value){
ui.src="lp.png";
cm(2);
}
}

function sc(){
if(usc<winp.value && csc<winp.value){
ui.src="lsc.png";
cm(3);
}
}

function resett(){
usc=0;
csc=0;
us.innerText=0;
cs.innerText=0;

us.style.color='black';
cs.style.color='black';

}











r.addEventListener('click',rk);
p.addEventListener('click',pp);
s.addEventListener('click',sc);
re.addEventListener('click',resett);


