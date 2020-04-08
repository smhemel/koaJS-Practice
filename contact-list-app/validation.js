exports.isValid = (userInfo) => {
    var numberRGEX = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    console.log(userInfo.name);
    if(userInfo.name.length<2){
        return false;
    }
    if(!numberRGEX.test(userInfo.mobile)){
        return false;
    }
    return true;
}