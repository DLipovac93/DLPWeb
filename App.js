
function alertButton() {
    alert("img");
}
function showContent(src, width, height, alt) {
    var img = document.createElement("something.jpg");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}