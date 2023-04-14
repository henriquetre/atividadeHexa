const back = document.getElementById('fundo');
const label= document.getElementById('label'); 





document.getElementById("botao").addEventListener("click",function(){
    let str = '#';

    if(fundo.style.backgroundColor=='white'){
        fundo.style.backgroundColor='blue';
        label.innerText='BLUE';
        
        

    }else if(fundo.style.backgroundColor=='blue'){
        fundo.style.backgroundColor='green';
        label.innerText='GRENN';
    }
    else if(fundo.style.backgroundColor=='green'){
        fundo.style.backgroundColor='aqua';
        label.innerText='AQUA';
    }
    else if(fundo.style.backgroundColor=='aqua'){
        fundo.style.backgroundColor='yellow';
        label.innerText='YELLOW';
    }
    else if(fundo.style.backgroundColor=='yellow'){
        fundo.style.backgroundColor='pink';
        label.innerText='PINK';
    }
    else if(fundo.style.backgroundColor=='pink'){
        fundo.style.backgroundColor='brown';
        label.innerText='BROWN';
    }
    else if(fundo.style.backgroundColor=='brown'){
        fundo.style.backgroundColor='white';
        label.innerText='WHITE';
    }



});