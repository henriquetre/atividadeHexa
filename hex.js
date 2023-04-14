const back = document.getElementById('fundo');
const label= document.getElementById('label'); 



document.getElementById("botao").addEventListener("click",function(){
    let str = '#';

    while (str.length < 7) {
        str += Math.floor(Math.random(6) * 0x10).toString(16);
       }
           let random = str;
           console.log(random);

        fundo.style.backgroundColor=random;
        label.innerText=random;
        
});