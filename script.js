function genBarCode() {
    const code = document.querySelector("#code").value;
    JsBarcode("#barcode", code);
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



