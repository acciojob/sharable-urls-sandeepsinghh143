// your code here
const button=document.getElementById("button");
const name=document.getElementById("name");
const year=document.getElementById("year");
const h3=document.getElementById("url");
button.addEventListener("click",(e)=>{
	e.preventDefault();
	h3.innerText=`${h3.innerText}?name=${name.value}&year=${year.value}`;
})