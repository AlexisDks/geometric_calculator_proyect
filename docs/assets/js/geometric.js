const myModule = (() => {
  "use strict";

  const valuesResult = document.getElementById("result");

  const btnPerimSquare = document.getElementById("btnPerimSquare"),
    btnAreaSquare = document.getElementById("btnAreaSquare");

  const btnPerimTriangle = document.getElementById("btnPerimTriangle"),
    btnAreaTriangle = document.getElementById("btnAreaTriangle");

  const btnDiamCircle = document.getElementById("btnDiamCircle"),
    btnPerimCircle = document.getElementById("btnPerimCircle"),
    btnAreaCircle = document.getElementById("btnAreaCircle");

  // área y perimetro del cuadrado
  const perimetroCuadrado = (lado) => lado * 4;
  const areaCuadrado = (lado) => lado * lado;

  btnPerimSquare.addEventListener("click", () => {
    let lado = document.getElementById("inputSide");
    lado = Number(lado.value);

    const result = `El perímetro del cuadrado es: ${perimetroCuadrado(
      lado
    )} cm`;
    valuesResult.innerHTML = result;
  });

  btnAreaSquare.addEventListener("click", () => {
    let lado = document.getElementById("inputSide");
    lado = Number(lado.value);

    const result = `El área del cuadrado es: ${areaCuadrado(lado)} cm\u00B2`;
    valuesResult.innerHTML = result;
  });

  const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
  const areaTriangulo = (base, altura) => (base * altura) / 2;

  btnPerimTriangle.addEventListener("click", () => {
    let lado1 = document.getElementById("inputSide1"),
      lado2 = document.getElementById("inputSide2"),
      base = document.getElementById("inputBase");

    (lado1 = Number(lado1.value)),
      (lado2 = Number(lado2.value)),
      (base = Number(base.value));

    const result = `El perímetro del triángulo es: ${perimetroTriangulo(
      lado1,
      lado2,
      base
    )} cm`;
    valuesResult.innerHTML = result;
  });

  btnAreaTriangle.addEventListener("click", () => {
    let base = document.getElementById("inputBase"),
      altura = document.getElementById("inputHeight");

    (base = Number(base.value)), (altura = Number(altura.value));

    const result = `El área del triángulo es: ${areaTriangulo(
      base,
      altura
    )} cm\u00B2`;
    valuesResult.innerHTML = result;
  });

  const diametroCirculo = (radio) => radio * 2;
  const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
  const areaCirculo = (radio) => Math.PI * radio * radio;

  const calculateCircleProperties = () => {
    let radio = document.getElementById("inputRadio");
    radio = Number(radio.value);

    return radio;
  };

  btnDiamCircle.addEventListener("click", () => {
    const radio = calculateCircleProperties();

    const result = `El diámetro del círculo es: ${diametroCirculo(radio)} cm`;
    valuesResult.innerHTML = result;
  });

  btnPerimCircle.addEventListener("click", () => {
    const radio = calculateCircleProperties();

    const result = `El perímetro del círculo es: ${perimetroCirculo(radio)} cm`;
    valuesResult.innerHTML = result;
  });

  btnAreaCircle.addEventListener("click", () => {
    const radio = calculateCircleProperties();

    const result = `El área del círculo es: ${areaCirculo(radio)} cm\u00B2`;
    valuesResult.innerHTML = result;
  });
})();
