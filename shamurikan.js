document.querySelectorAll("img").forEach( (item) => {item.classList.add("images");});

document.querySelectorAll("p").forEach( (item) => { item.classList.add("paragraphs");});

document.querySelectorAll("div").forEach( (item) => {item.classList.add("divs");});

// THE READY IMAGE AND PARAG

setTimeout( () => {
document.getElementById("img1").classList.add("imageAfter");
document.getElementById("p1").classList.add("paragAfter");
}, 1000);

window.onscroll = () => {

// FRAMEWORK ONE

const SectionOne = [
document.getElementById("img1"),
document.getElementById("p1"),
document.getElementById("div1")];

if (scrollY >= SectionOne[2].offsetTop - 250){

SectionOne[0].classList.add("imageAfter");
SectionOne[0].classList.remove("imageBefore");

SectionOne[1].classList.add("paragAfter");
SectionOne[1].classList.remove("paragBefre");

} else {

SectionOne[0].classList.remove("imageAfter");
SectionOne[0].classList.add("imageBefore");

SectionOne[1].classList.remove("paragAfter");
SectionOne[1].classList.add("paragBefre");}

// FRAMEWORK TOW

const SectionTow = [
document.getElementById("img2"),
document.getElementById("p2"),
document.getElementById("div2")];

if (scrollY >= SectionTow[2].offsetTop - 250){

SectionTow[0].classList.add("imageAfter");
SectionTow[0].classList.remove("imageBefore");

SectionTow[1].classList.add("paragAfter");
SectionTow[1].classList.remove("paragBefre");

   SectionOne[0].classList.remove("imageAfter");
   SectionOne[0].classList.add("imageBefore");

   SectionOne[1].classList.remove("paragAfter");
   SectionOne[1].classList.add("paragBefre");

} else {

SectionTow[0].classList.remove("imageAfter");
SectionTow[0].classList.add("imageBefore");

SectionTow[1].classList.remove("paragAfter");
SectionTow[1].classList.add("paragBefre");}

// FRAMEWORK THREE

const SectionThree = [
document.getElementById("img3"),
document.getElementById("p3"),
document.getElementById("div3")];

if (scrollY >= SectionThree[2].offsetTop - 250){

SectionThree[0].classList.add("imageAfter");
SectionThree[0].classList.remove("imageBefore");

SectionThree[1].classList.add("paragAfter");
SectionThree[1].classList.remove("paragBefre");

   SectionTow[0].classList.remove("imageAfter");
   SectionTow[0].classList.add("imageBefore");

   SectionTow[1].classList.remove("paragAfter");
   SectionTow[1].classList.add("paragBefre");

} else {

SectionThree[0].classList.remove("imageAfter");
SectionThree[0].classList.add("imageBefore");

SectionThree[1].classList.remove("paragAfter");
SectionThree[1].classList.add("paragBefre");}

// FRAMEWORK FOUR

const SectionFour = [
document.getElementById("img4"),
document.getElementById("p4"),
document.getElementById("div4")];

if (scrollY >= SectionFour[2].offsetTop - 250){

SectionFour[0].classList.add("imageAfter");
SectionFour[0].classList.remove("imageBefore");

SectionFour[1].classList.add("paragAfter");
SectionFour[1].classList.remove("paragBefre");

   SectionThree[0].classList.remove("imageAfter");
   SectionThree[0].classList.add("imageBefore");

   SectionThree[1].classList.remove("paragAfter");
   SectionThree[1].classList.add("paragBefre");

} else {

SectionFour[0].classList.remove("imageAfter");
SectionFour[0].classList.add("imageBefore");

SectionFour[1].classList.remove("paragAfter");
SectionFour[1].classList.add("paragBefre");}};

// SHAMURIKAN

const _0x7cbe=["\x6E\x6D","\x70\x61\x73\x73\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x76\x61\x6C\x75\x65"];const password=_0x7cbe[0];const pass1=document[_0x7cbe[2]](_0x7cbe[1]);function passcheck(){if(pass1[_0x7cbe[3]]!= password){return false};if(pass1[_0x7cbe[3]]== password){}}