function clicou() {
  let data = new Date();
  let ano = data.getFullYear();
  let anoNascimento = document.getElementById("anoN");
  let res = document.getElementById("res");
  let img = document.getElementById("foto");
  if (anoNascimento.value.length == 0 || Number(anoNascimento.value) > ano) {
    alert("error, try it again");
  } else {
    let fsex = document.getElementsByName("sex");
    let idade = ano - Number(anoNascimento.value);
    let genero = null;
    res.style.textAlign = "center";
    if (fsex[0].checked) {
      genero = "homem";
      res.innerHTML = `Você é um homem de ${idade} anos`;
      if (idade < 18) {
        //menino
        img.setAttribute("src", "menino.jpg");
      } else if (idade < 60) {
        //adulto
        img.setAttribute("src", "homemadulto.jpg");
      } else if (idade < 125) {
        //idoso
        img.setAttribute("src", "homemidoso.jpg");
      } else {
        res.innerHTML = "idade invalída";
      }
    } else {
      genero = "mulher";
      res.innerHTML = `você é uma mulher de ${idade} anos`;
      if (idade < 18) {
        //menina
        img.setAttribute("src", "menina.jpg");
      } else if (idade < 60) {
        //adulta
        img.setAttribute("src", "mulheradulta.jpg");
      } else if (idade < 125) {
        //idosa
        img.setAttribute("src", "mulheridosa.jpg");
      } else {
        res.innerHTML = "idade invalída";
      }
    }
  }
}
