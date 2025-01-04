document.addEventListener("DOMContentLoaded",function() {
    const popup = document.getElementById("surat");
    const  amplop = document.getElementById("amplop");
    const backBtn = document.getElementsByClassName("close");
    
    // let tampilan = 0;
    
    amplop.onclick = function() {
        popup.style.display = "block";
    }

    backBtn.onclick = function() {
        popup.style.display = "none";
    }
})