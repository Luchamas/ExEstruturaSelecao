function exe2() {
  let n1 = Number(prompt("Insira a primeira nota"))
  let n2 = Number(prompt("Insira a segunda nota"))
  let text
  let media = (n1 + n2)/2

  if (media >= 0 && media < 3){
    text = "Reprovado"
  } else

  if (media >= 3 && media < 7){
    text = "Exame"
  } else

  if (media >= 7 && media <= 10) {
    text = "Aprovado"
  } 

  else {
    text = "Notas inválidas"
  }
  alert("A média foi " + media + ", " + text)
}
