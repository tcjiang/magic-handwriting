var canvas = new handwriting.Canvas(document.getElementById('canvas'), 3);
canvas.setCallBack(function(data, err) {
    if (err)
        throw err;
    else
        document.getElementById("result").innerHTML = data;//Todo: selection into output box
});
canvas.set_Undo_Redo(true, true);