function exe5(){
  let n1 = Number(prompt("Insira o primeiro número"))
  let n2 = Number(prompt("Insira o segundo número"))
  let result = Number(0)
  let op = Number(prompt("Insira um número de 1 a 4 de acordo com a operação desejada"))
  if (op == 1){
    result = (n1 + n2) /2

  } else
  if (op == 2){
    result = Number(n1 - n2)
    if (result < 0 ) {
      result = result * -1
    }
  } else
  if (op == 3){
    result = n1 * n2
  } else

  if (op == 4){
    result = n1/n2
  }

  else {
    result = "Opção inválida"
  }

  alert(result)
}