// GRAPHICS LIBRARY

// <script src="graphics library.js">

// </script>
// <script src="random library.js">
// </script>

// Function List:

// canvasSize(width, height): Sets the height and width of the canvas
// background(color); Sets the background color of the canvas.
// stroke(color): Sets the stroke color.
// fill(color): Sets the fill color.
// lineWidth(width): Sets the line width.
// font(fontSetting): Sets the font family. Reference: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font
// rect(x, y, w, h, mode): Draws a rectangle. Mode will be stroke or fill.
// line(x1, y1, x2, y2): Draws a line.
// circle(x, y, r, mode): Draws a circle. Mode will be stroke or fill.
// triangle(x1, y1, x2, y2, x3, y3, mode). Draws a triangle. Mode will be stroke or fill.
// text(message, x, y, mode): Draws text. Mode will be stroke or fill. Reference: https://www.w3schools.com/graphics/canvas_text.asp
// ellipse(x, y, xRadius, yRadius, rotation, mode): Draws an ellipse. Reference: https://reference.codeproject.com/book/dom/CanvasRenderingContext2D/ellipse
// image(img, x, y, w, h). Draws an image. Reference: https://www.w3schools.com/graphics/canvas_images.asp

function canvasSize(width, height) {
	cnv.width = width;
	cnv.height = height;
}

function background(colour) {
	ctx.fillStyle = colour;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
}

function stroke(colour) {
	ctx.strokeStyle = colour;
}

function fill(colour) {
	ctx.fillStyle = colour;
}

function lineWidth(width) {
	ctx.lineWidth = width;
}

function font(fontSetting) {
	ctx.font = fontSetting;
}

function rect(x, y, w, h, mode) {
	mode.toLowerCase();
	ctx.beginPath();

	if (mode == 'stroke') {
		ctx.strokeRect(x, y, w, h);
		ctx.stroke();
	} else if (mode == 'fill') {
		ctx.fillRect(x, y, w, h);
		ctx.fill();
	} else return 'Error. Choose either Stroke or Fill'
}

function line(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function circle(x, y, r, mode) {
	mode.toLowerCase();
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);

	if (mode == 'fill') {
		ctx.fill();
	} else if (mode == 'stroke') {
		ctx.stroke();
	} else return 'Error. Choose either Stroke or Fill'
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
	mode.toLowerCase();
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);


	if (mode == 'fill') {
		ctx.fill();
	} else if (mode == 'stroke') {
		ctx.stroke();
	} else return 'Error. Choose either Stroke or Fill'
}

function text(message, x, y, mode) {
	mode.toLowerCase();
	ctx.beginPath();
	if (mode == 'fill') {
		ctx.fillText(message, x, y);
	} else if (mode == 'stroke') {
		ctx.strokeText(message, x, y);
	} else return 'Error. Choose either Stroke or Fill'
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
	mode.toLowerCase();
	ctx.beginPath();
	ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);

	if (mode == 'fill') {
		ctx.fill();
	} else if (mode == 'stroke') {
		ctx.stroke();
	} else return 'Error. Choose either Stroke or Fill'
}

function image(img, x, y, w, h) {
	ctx.drawImage(img, x, y, w, h);
}