


const qrcode = new QRCode(document.querySelector("#qrcode"), {
    text: "aaaaaaaaaaaaa",
	width: 150,
	height: 150,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});



qrcode.makeCode("testando");


$("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });
