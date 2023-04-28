function exe3() {
  let n1 = Number(prompt("Insira o primeiro número"))
  let n2 = Number(prompt("Insira o segundo número"))

  if (n1 > n2) {
    alert(n2 + " é menor")
  }
  if (n2 > n1) {
    alert(n1 + " é menor")
  }
}
