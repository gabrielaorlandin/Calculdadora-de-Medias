const formMedia = document.getElementById('formMedia');
const resultado = document.getElementById('resultado');
const situacao = document.getElementById('situacao');

formMedia.addEventListener('submit', function (event) {
  event.preventDefault();

  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  const media = (nota1 + nota2 + nota3) / 3;

  let status;
  if (media >= 6) {
    status = 'Aprovado';
    situacao.textContent = `Situação: ${status}`;
    situacao.classList.add('aprovado');
    situacao.classList.remove('reprovado');
  } else {
    status = 'Reprovado';
    situacao.textContent = `Situação: ${status}`;
    situacao.classList.add('reprovado');
    situacao.classList.remove('aprovado');
  }

  resultado.textContent = `Média: ${media.toFixed(2)}`;
});