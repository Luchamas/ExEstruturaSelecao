function exe1() {
  let cont = 1
  let soma = 0
  while (cont <= 4) {
    let nota = Number(prompt("Informe nota " + cont))

    soma = soma + nota
   
    cont = cont + 1 
  }
  let media = soma/4
  alert("A media é " + media)
}
