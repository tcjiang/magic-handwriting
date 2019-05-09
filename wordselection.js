var canvas = new handwriting.Canvas(document.getElementById('canvas'), 3);
canvas.setCallBack(function(data, err) {
    if (err) {
        throw err;
    }
    else {
    	var result =  document.getElementById("result");
        result.innerHTML = "";
        data.forEach(function(word) {
		    var div = document.createElement("div");
            div.innerHTML = word;
            result.appendChild(div);
        });
    }
});
canvas.set_Undo_Redo(true, true);