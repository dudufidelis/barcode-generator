

function getConfig() {
    const code = document.querySelector("#code").value;
    const format = document.querySelector("#format").value;
    const height = document.querySelector("#height").value;
    const barcodeLabel = document.querySelector("#barcode-label").value;
    const background = document.querySelector("#background").value;
    const lineColor = document.querySelector("#line-color").value;
    genBarcode(code, format, height, barcodeLabel, background, lineColor);
}

function genBarcode(code, format, height, barcodeLabel, background, lineColor) {
    JsBarcode("#barcode", code, {
        format: format,
        fontSize: 12,
        fontOptions: "bold italic",
        height: height,
        displayValue: barcodeLabel,
        background: background,
        lineColor: lineColor
    });
}



downloadBarcode = 
document.querySelector("#downloadButton").addEventListener("click", () => {
    const code = document.querySelector("#code").value;
    const barcode = document.querySelector("#barcode");
    const downloadButton = document.querySelector("#downloadButton");
    const input = document.querySelector("#code")
    if (code !== "") {
        const a = document.createElement('a');
        a.href = barcode.src;
        a.download = code + "-code.png";
        a.click();
    } else {
        downloadButton.classList.add("anim-error");
        input.classList.add("after-error");
    }
});




