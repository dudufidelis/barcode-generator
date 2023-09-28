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

function downloadBarcode() {
    const code = document.querySelector("#code").value;
    const barcode = document.querySelector("#barcode");
    console.log(code)
    if (code !== "") {
        const a = document.createElement('a');
        a.href = barcode.src;
        a.download = code + "-code.png";
        a.click();
    } else {
        alert("Por favor, gere o código de barras antes de baixá-lo.");
    }
}



