// your code here
const name=document.getElementById("name");
const year=document.getElementById("year");
const h3=document.getElementById("url");
const button=document.getElementById("button");
button.addEventListener("click",()=>{
	h3.innerText=h3.innerText+`?name=${name.value}&year=${year.value}`);
})