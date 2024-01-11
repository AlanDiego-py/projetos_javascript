const calcular = document.getElementById('calc');

function raiz(){
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const c = parseFloat(document.getElementById('num3').value);

    resp = document.getElementById('result');

    const delta = (b*b) - 4*a*c;

    if (delta>0){
        let raiz1 = (-b + Math.sqrt(delta) )/(2*a);
        let raiz2 = (-b - Math.sqrt(delta) )/(2*a);

        resp.textContent =`A Raiz 1 é ${raiz1} e raiz 2 é ${raiz2}`;
         
        
    }else{
        if (delta===0){
         let raiz = (-b + Math.sqrt(delta) )/(2*a);
         resp.textContent =`Raiz dupla é ${raiz}`;
          
        }else{
            let real = (-b)/(2*a);
            let img1  = Math.sqrt(-delta)/(2*a);
            let img2  = - Math.sqrt(-delta)/(2*a);
            

            resp.textContent = `A Raiz 1 é ${real} + ${img1} i e a raiz 2 é ${real} + ${img2} + i`;
        
        }
    
    }


}


calcular.addEventListener('click', raiz);



