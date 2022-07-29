// Shamurikan 1

const _0x7cbe=["\x6E\x6D","\x70\x61\x73\x73\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x76\x61\x6C\x75\x65"];const password=_0x7cbe[0];const pass1=document[_0x7cbe[2]](_0x7cbe[1]);function passcheck(){if(pass1[_0x7cbe[3]]!= password){return false};if(pass1[_0x7cbe[3]]== password){}}

// Shamurikan 2

const img = document.querySelectorAll("#padding-body img");

img.forEach( (item) => {
item.classList.add("images");
});

const p = document.querySelectorAll("#padding-body p");

p.forEach( (item) => {

item.classList.add("paragraphs");

});

// Class3

const div = document.querySelectorAll("div");

div.forEach( (item) => {

item.classList.add("divs");

});

// Variables for frame 1

const img1 = document.getElementById("img1");
const p1 = document.getElementById("p1");
const div1 = document.getElementById("div1");

// Variables for frame 2

const img2 = document.getElementById("img2");
const p2 = document.getElementById("p2");
const div2 = document.getElementById("div2");

// Variables for frame 3

const img3 = document.getElementById("img3");
const p3 = document.getElementById("p3");
const div3 = document.getElementById("div3");

// Variables for frame 4

const img4 = document.getElementById("img4");
const p4 = document.getElementById("p4");
const div4 = document.getElementById("div4");

// The Frame Works

window.onscroll = () => {

// frameWork 1

if (scrollY >= div1.offsetTop - 180){

img1.style.marginTop = "40px";
img1.style.transition = "1s";

p1.style.opacity = "1";
p1.style.transition = "1s";
p1.style.marginTop = "8px";

} else {

img1.style.marginTop = "70px";
img1.style.transition = "1s";

p1.style.opacity = "0";
p1.style.transition = "0.4s";
p1.style.marginTop = "0px";

}

// frameWork 2

if (scrollY >= div2.offsetTop - 180){

img2.style.marginTop = "40px";
img2.style.transition = "1s";

p2.style.opacity = "1";
p2.style.transition = "1s";
p2.style.marginTop = "8px";

	// smallFrameWork 1

	img1.style.marginTop = "70px";
	img1.style.transition = "1s";

	p1.style.opacity = "0";
	p1.style.transition = "0.4s";
	p1.style.marginTop = "0px";

} else {

img2.style.marginTop = "70px";
img2.style.transition = "1s";

p2.style.opacity = "0";
p2.style.transition = "0.4s";
p2.style.marginTop = "0px";

}

// frameWork 3

if (scrollY >= div3.offsetTop - 180){

img3.style.marginTop = "40px";
img3.style.transition = "1s";

p3.style.opacity = "1";
p3.style.transition = "1s";
p3.style.marginTop = "8px";

	// smallFrameWork 2

	img2.style.marginTop = "70px";
	img2.style.transition = "1s";

	p2.style.opacity = "0";
	p2.style.transition = "0.4s";
	p2.style.marginTop = "0px";

} else {

img3.style.marginTop = "70px";
img3.style.transition = "1s";

p3.style.opacity = "0";
p3.style.transition = "0.4s";
p3.style.marginTop = "0px";

}

// frameWork 4

if (scrollY >= div4.offsetTop - 200){

img4.style.marginTop = "40px";
img4.style.transition = "1s";

p4.style.opacity = "1";
p4.style.transition = "1s";
p4.style.marginTop = "8px";

	// smallFrameWork 3

	img3.style.marginTop = "70px";
	img3.style.transition = "1s";

	p3.style.opacity = "0";
	p3.style.transition = "0.4s";
	p3.style.marginTop = "0px";

} else {

img4.style.marginTop = "70px";
img4.style.transition = "1s";

p4.style.opacity = "0";
p4.style.transition = "0.4s";
p4.style.marginTop = "0px";

}};

// ready img and p

img1.classList.add("ready-img");
p1.classList.add("ready-p");