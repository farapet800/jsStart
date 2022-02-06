
//Задача.Как решить проблему?
//'use strict'
//if(2 > 1){
//  function showMessage() {
//      console.log('Сообщение');
//      }
//  }
// showMessage();//Error (showMessage is not defined)
'use strict'
let showMessage;
if(2 > 1){
    showMessage =  function (){
        console.log('Сообщение');
    };
}
showMessage();

