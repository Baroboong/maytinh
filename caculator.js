let num1 = "",num2 = "",phepTinh;


function caculator(btn) {
    const btnValue = btn.value; 
    const resutInput = document.getElementById("resultInput");

    if (isNaN(btnValue)){
        // xoa du lieu 
        if (btnValue == "c") {
            num1 = "";
            num2 = "";
            phepTinh = undefined;
            resutInput.value = "";
            // console.log("Xoa ok")
        } else if (btnValue == "=") {
            resutInput.value = tinhToan(num1,num2,phepTinh);
            num1 = "";
            num2 = "";
            phepTinh = undefined;
            // console.log("Da tinh xong");
        }
        else {
            phepTinh = btnValue;
        }
    }
    else {
        if (phepTinh) {
            num2 += btnValue;
            resutInput.value = num2;
        }
        else {
            num1 += btnValue;
            resutInput.value = num1;
        }
    }
}
function tinhToan(so1, so2, pheptinh) {
    so1 = Number(so1);
    so2 = Number(so2);
    if (phepTinh) {
        switch (pheptinh) {
            case "+":
                return so1 + so2;
            case "-":
                return so1 - so2;
            case "*":
                return so1 * so2;
            case ":":
                return so1 / so2;
        }
    } else {
        return 0;
    }
}