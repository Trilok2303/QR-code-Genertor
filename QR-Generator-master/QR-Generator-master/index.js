

let qrcode = new QRCode("qrcode");
qrcode.makeCode("www.google.com");

document.getElementById("text")
document.getElementById("bgColor")
document.getElementById("fgColor")
document.getElementById("correctLvl")



bgColor.addEventListener("input", () => {
updateQR()
}, false);

fgColor.addEventListener("input", () => {
    updateQR()
}, false);

text.addEventListener("keyup" , () => {   
   updateQR()
})

correctLvl.addEventListener("change" , () => {
    updateQR()
})

function updateQR(){
    qr.innerHTML = ""
    qrcode = new QRCode("qrcode", {
        text: (text.value)?text.value:"www.google.com",
        colorDark : fgColor.value,
        colorLight : bgColor.value,
        correctLevel : getCorrectLevel()
    });
}

function getCorrectLevel(){
    let selectedOption = correctLvl.options[correctLvl.selectedIndex].value;
    if(selectedOption=='H') return QRCode.CorrectLevel.H
    else if(selectedOption=='L') return QRCode.CorrectLevel.L
    else return QRCode.CorrectLevel.M
}

const qr = document.getElementById('qrcode');
function DownloadAsImage() {
    function downloadURI(uri, name) {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
        link.delete;
    }
    html2canvas(qr).then(function (canvas) {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, "qrcode.png");
    });
}

const download = document.getElementById("download");

download.onclick = function(){
    DownloadAsImage()
}

