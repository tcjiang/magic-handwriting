var canvasNode = document.getElementById('canvas');
fitToContainer(canvasNode);
function fitToContainer(canvasNode) {
  canvasNode.style.width='100%';
  canvasNode.style.height='100%';
  canvasNode.width  = canvasNode.offsetWidth;
  canvasNode.height = canvasNode.offsetHeight;
}

function updateCanvas() {
    var updatedCanvas = document.getElementById('canvas');
    fitToContainer(updatedCanvas);
}

var canvas = new handwriting.Canvas(canvasNode, 3);
canvas.setCallBack(function(data, err) {
    if (err) {
        throw err;
    }
    else {
        var result = document.getElementById("suggestion_list");
        result.innerHTML = "";
        data.forEach(function(word) {
            var div = document.createElement("div");
            div.innerHTML = word;
            div.addEventListener("click", function() {
                var output = document.getElementById("output");
                output.className = "output-container";
                output.innerHTML += this.innerHTML;
                canvas.erase();
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
