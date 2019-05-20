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
	        console.log(this.innerHTML);
		var output = document.getElementById("output");
		output.innerHTML += this.innerHTML;
	    });
            result.appendChild(div);
        });
    }
});
canvas.set_Undo_Redo(true, true);
