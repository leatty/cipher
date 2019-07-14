var ORIGIN_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.*!@#%&_";
var TRANS_CHARS  = "jXkNGrwyPdafSCghnvIubtpLVmlAZQDiWBcKYEzoqsFHMOxJeTUR2910%745!*@6&3.#8_";

function encrypt(e){
    //console.log("tansString:" + e);
    var msg = "";

    for(var i= 0; i < e.length; i++){
        var ichar = e.charAt(i);
        var index = ORIGIN_CHARS.indexOf(ichar);
        //console.log("ichar:" + ichar + " index:" + index);
        for(var j = 0; j < ORIGIN_CHARS.length; j++){
            var jchar = ichar;
            if(index == -1){
                msg = msg + jchar;
                break;
            }else{
                if(index == j){
                    jchar = TRANS_CHARS.charAt(j);
                    //console.log("jchar:" +  jchar);
                    msg = msg + jchar;
                    break;
                }
            }
        }
    }
    //console.log(msg);
    return msg;
}



function decrypt(e){
    //console.log("tansString:" + e);
    var msg = "";

    for(var i= 0; i < e.length; i++){
        var ichar = e.charAt(i);
        var index = TRANS_CHARS.indexOf(ichar);
        //console.log("ichar:" + ichar + " index:" + index);
        for(var j = 0; j < TRANS_CHARS.length; j++){
            var jchar = ichar;
            if(index == -1){
                msg = msg + jchar;
                break;
            }else{
                if(index == j){
                    jchar = ORIGIN_CHARS.charAt(j);
                    //console.log("jchar:" +  jchar);
                    msg = msg + jchar;
                    break;
                }
            }
        }
    }
    //console.log(msg);
    return msg;
}