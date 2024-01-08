const calcular = document.getElementById('calcular');



function CalculaRetangulo(){
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById('arearetangulo');

    const area = base * altura;


    /*document.querySelector('arearetangulo').innerHTML = 'a área total é: ' + area;

    const inputarea = document.getElementById("arearetangulo");
    inputarea.value = area;

    console.log(area)*/

    resultado.textContent = `A base ${base} x altura ${altura} é: ${area}`;
}

calcular.addEventListener('click', CalculaRetangulo);