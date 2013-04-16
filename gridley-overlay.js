var gridley = {};

gridley.baseline = 2.4;
gridley.numColumns = 18;

gridley.gutterSize = (gridley.baseline / 2) + "rem";

gridley.lineColor = "#999"
gridley.gutterColor = "rgba(200, 100, 100, 0.4)"

gridley.guides = null;

window.onkeydown = function(event)
{
	if (event.keyCode == 72)
	{
		gridley.guides.style.display = gridley.guides.style.display == "none" ? "block" : "none";
	}
}

window.onload = function()
{
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = 5;
	canvas.height = gridley.baseline * 10;

	context.fillStyle = gridley.lineColor;
	context.fillRect(0, 0, 4, 1);

	var guides = document.createElement("div");
	guides.style.position = "absolute";
	guides.style.top = "0";
	guides.style.left = "0";
	guides.style.backgroundImage = "url('" + canvas.toDataURL() + "')";
	guides.style.width = "100%";
	guides.style.height = "100%";

	gridley.guides = guides;

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(guides);

	for (var i = 0; i < gridley.numColumns; ++i)
	{
		var column = document.createElement("div");

		column.style.width = (100 * (1 / gridley.numColumns)) + "%";
		column.style.height = "100%";
		column.style.borderLeft = "solid " + gridley.gutterColor + " " + gridley.gutterSize;
		column.style.borderRight = "solid " + gridley.gutterColor + " " + gridley.gutterSize;

		column.style.styleFloat = "left";
		column.style.cssFloat = "left";

		column.style.MozBoxSizing = "border-box";
		column.style.boxSizing = "border-box";
		column.style.webkitBoxSizing = "border-box";

		guides.appendChild(column);
	}
}	