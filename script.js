function genBarcode() {
    const format = document.querySelector("#format").value;
    const code = document.querySelector("#code").value;
    const height = document.querySelector("#height").value;
    const barcodeLabel = document.querySelector("#barcode-label").value;
    const background = document.querySelector("#background").value;
    const lineColor = document.querySelector("#line-color").value;
    
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
    const barcode = document.querySelector("#barcode");
    if (barcode.src) {
        const a = document.createElement('a');
        a.href = barcode.src;
        a.download = 'barcode.png';
        a.click();
    } else {
        alert("Por favor, gere o código de barras antes de baixá-lo.");
    }
}



