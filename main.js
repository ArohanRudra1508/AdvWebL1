function scrRes(){
    Width = window.innerWidth
    document.getElementById("size").innerHTML = "width: "+Width+" px"
}

window.onload = scrRes
window.onresize = scrRes
