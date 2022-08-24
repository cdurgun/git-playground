function exportAsPng() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        canvas.toBlob(function(blob) {
            saveAs(blob, "git-cheat-sheet.png");
            //let file = new Blob([blob], {type: "application/octet-stream"});
            //let blobURL = URL.createObjectURL(file);
            //window.location.href = blobURL;
        })
    });
}

document.querySelectorAll('div').forEach(item => {
    item.onmouseover = () => {
        item.style.color = "red"
    } 
    item.onmouseout = () => {
        item.style.color = "black"
    }   
})
