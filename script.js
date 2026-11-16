//十進位轉二進位計算機
function convertToBinary() {
    let num = document.getElementById("decInput").value;
    if (num === "" || num < 0) {
        document.getElementById("binResult").innerText = "請輸入大於等於 0 的整數！";
        return;
    }
    // 使用內建的toString()把數字轉成二進位字串
    let binary = Number(num).toString(2);
    document.getElementById("binResult").innerText = "二進位結果：" + binary;
}

//基本邏輯閘模擬器
function simulateGate() {
    let a = Number(document.getElementById("inputA").value);
    let b = Number(document.getElementById("inputB").value);
    let gate = document.getElementById("gateType").value;
    let output = 0;

    if (gate === "AND") {
        output = (a === 1 && b === 1) ? 1 : 0;
    } else if (gate === "OR") {
        output = (a === 1 || b === 1) ? 1 : 0;
    } else if (gate === "XOR") {
        output = (a !== b) ? 1 : 0;
    } else if (gate === "NAND") {
        output = (a === 1 && b === 1) ? 0 : 1;
    } else if (gate === "NOR") {
        output = (a === 0 && b === 0) ? 1 : 0;
    } else if (gate === "XNOR") {
        output = (a === b) ? 1 : 0;
    }
    document.getElementById("gateResult").innerText = "輸出結果 (Output)：" + output;
}