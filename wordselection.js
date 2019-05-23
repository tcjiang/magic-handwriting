var canvas = new handwriting.Canvas(document.getElementById('canvas'), 3);
canvas.setCallBack(function(data, err) {
    if (err) {
        throw err;
    }
    else {
        var result = document.getElementById("result");
        result.innerHTML = "";
        data.forEach(function(word) {
            var div = document.createElement("div");
            div.innerHTML = word;
            div.addEventListener("click", function() {
		var output = document.getElementById("output");
        output.className = "output-container";
		output.innerHTML += this.innerHTML;
	    });
            result.appendChild(div);
        });
    }
});
canvas.set_Undo_Redo(true, true);

function outputCut() {
    var output = document.getElementById("output");
    var cutText = output.innerHTML;
    copyStringToClipboard(cutText);
    output.innerHTML = "";
}

function outputErase() {
    var output = document.getElementById("output");
    output.innerHTML = "";
}

function outputBack() {
    var output = document.getElementById("output");
    var text = output.innerHTML;
    if (text.length < 1) {
        return;
    }
    output.innerHTML = text.slice(0, -1);
}

function copyStringToClipboard(str) {
    var el = document.createElement("textarea");
    el.value = str;
    el.stye = {postition: "absolute", left: "-9999px"};
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}
