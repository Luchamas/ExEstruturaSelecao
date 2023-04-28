function exe4() {
  let n1 = Number(prompt("Insira o primeiro número"))
  let n2 = Number(prompt("Insira o segundo número"))
  let n3 = Number(prompt("Insira o terceiro número"))

  if (n1 > n2 && n1 > n3) {
    alert(n1 + " é o maior")
  }
  if (n2 > n1 && n2 > n3) {
    alert(n2 + " é o maior")
  }
  if (n3 > n1 && n3 > n2) {
    alert(n3 + " é o maior")
  }
}
