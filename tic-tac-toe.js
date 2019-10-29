let XorO = 1;
let end = 0;

function getElem(arg) {
	return document.getElementById(arg)
}

function winLine(arg1, arg2, arg3) {
	if (getElem(arg1).value != " " & getElem(arg1).value == getElem(arg2).value & getElem(arg1).value == getElem(arg3).value) {
		getElem(arg1).style.backgroundColor = "red";
		getElem(arg2).style.backgroundColor = "green";
		getElem(arg3).style.backgroundColor = "blue";
		if (getElem(arg1).value == "X") {
				alert("Победили крестики!");
			} else {
				alert("Победили нолики!");
			}
		end = 1;	
	}
}

function win() {
	winLine("1", "2", "3");
	winLine("4", "5", "6");
	winLine("7", "8", "9");
	winLine("1", "4", "7");
	winLine("2", "5", "8");
	winLine("3", "6", "9");
	winLine("1", "5", "9");
	winLine("7", "5", "3");
}

function test(arg) {
	if (arg.value == " " & end == 0) {
		if (XorO == 1) {
			arg.value = "X";
			XorO = 0;
		} else {
			arg.value = "O";
			XorO = 1;
		}
	win();
	}
}