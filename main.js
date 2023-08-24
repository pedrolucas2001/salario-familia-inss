var btnCalcular = document.querySelector("#btnCalcular");
var nomeEmpregado = document.querySelector("#nome");
var qtdFilhos = document.querySelector("#qtdFilhos");
var salario = document.querySelector("#salario");
var resultado = document.querySelector("#resultado");
var salarioFamilia = 0;

btnCalcular.addEventListener("click",function(){
   
    if(nomeEmpregado.value === "" || nomeEmpregado.value === null || nomeEmpregado.value === undefined){
        alert("Por favor digite o nome do empregado");
    } else if(qtdFilhos.value === "" || qtdFilhos.value === null || qtdFilhos.value === undefined){
        alert("Por favor digite o número de filhos");
    } else if (salario.value === "" || salario.value === null || salario.value === undefined){
        alert("Por favor digite o valor do sálario");
    } else{
       
        if (salario.value > 0 && salario.value < 806.80) {
            salarioFamilia = parseFloat(salario.value) + (parseFloat(qtdFilhos.value) * 41.37);
        } else if (salario.value >= 806.81 && salario.value < 1212.63) {
            salarioFamilia = parseFloat(salario.value) + (parseFloat(qtdFilhos.value) * 29.16);
        } else {
            salarioFamilia = parseFloat(salario.value);
            console.log(salarioFamilia);
        }


        resultado.innerHTML = `${nomeEmpregado.value}, o salário família é R$${salarioFamilia} `
    }
}
)



 

