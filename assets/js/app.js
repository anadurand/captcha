var check = document.getElementById("check");
var reload = document.getElementById("reload");
check.addEventListener("click", function(e){
  e.preventDefault();
  ValidarCaptcha();
  createCaptcha();
});
reload.addEventListener("click", function(e){
  e.preventDefault();
  createCaptcha();
})

createCaptcha();
function createCaptcha(){
  var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var number = ["0","1","2","3","4","5","6","7","8","9","'"];
  for (i=0;i<6;i++){
     var a = alpha[Math.floor(Math.random() * alpha.length)];
     var b = number[Math.floor(Math.random() * number.length)];
     var c = alpha[Math.floor(Math.random() * alpha.length)];
     var d = number[Math.floor(Math.random() * number.length)];
     var e = alpha[Math.floor(Math.random() * alpha.length)];
     var f = number[Math.floor(Math.random() * number.length)];
     var g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var captchaCode = a + b + c + d + e + f + g;
  document.getElementById("captchaCode").value = captchaCode;
}

function ValidarCaptcha(){
    var code = removeSpaces(document.getElementById('captchaCode').value);
    var answerCode = removeSpaces(document.getElementById('answer').value);

    if (code == answerCode){
      alert("Codigo validado. Bienvenido");
    }
    else{
      alert("Codigo invalido, vuelva a intentarlo");
    }
}
function removeSpaces(text){
  return text.split(' ').join('');
}

function changeColor(){
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
