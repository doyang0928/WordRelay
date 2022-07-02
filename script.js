const $button = document.querySelector("button");
const $input = document.querySelector("input");
const number = Number(prompt("몇 명이 참가하나요?"));
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word;
let newWord;

function onClickButton(){
   //2 console.log("버튼 클릭");
   if(word === undefined){
       word = newWord;
       $word.innerText = word;
       let order = Number($order.innerText);
       if(order + 1 >number){
            $order.innerText = 1;
       }
       else{
            $order.innerText = order + 1;
       }
       $input.value ="";
       $input.focus();
}
else{
    if(word[word.length-1] === newWord[0]){
        if(word.length !=3){
            alert("3글자 단어가 아닙니다.");
            word = undefined;
        }
        else if(newWord.length !=3){
            alert("3글자 단어가 아닙니다.");
            newWord = word;
        }
        word = newWord;
        $word.innerText = word;2
        let order = Number($order.innerText);
        if(order + 1 >number){
             $order.innerText = 1;
        }
        else{
             $order.innerText = order + 1;
        }
        $input.value ="";
        $input.focus();
    }
    else{
        alert("올바르지 않은 단어입니다.");
        $input.value ="";
        $input.focus();
        
    }

    function enterkey(){
        if(window.event.keyCode == 13){
            onClickButton();
        }
    }

}

}

function oninput(event){
   // console.log("글자 입력", event.target.value);
   newWord = event.target.value;

}

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", oninput);
