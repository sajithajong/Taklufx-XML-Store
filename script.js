const popup=document.getElementById("paymentPopup");

document.querySelectorAll(".buy").forEach(btn=>{
btn.onclick=()=>{
popup.style.display="flex";
}
});

document.querySelector(".close").onclick=()=>{
popup.style.display="none";
}

window.onclick=(e)=>{
if(e.target==popup){
popup.style.display="none";
}
}

document.getElementById("paidBtn").onclick=()=>{
alert("Thanks! Please send your payment screenshot on WhatsApp. XML will be provided after verification.");
}
