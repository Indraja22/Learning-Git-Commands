function reverseString(inputStr) {
    let revStr = "";
    for(let i=inputStr.length -1 ; i >= 0;i--){
        revStr = revStr + inputStr[i];
    }
    return revStr;
}

console.log(reverseString("Alibag"));