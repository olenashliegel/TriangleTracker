//Business logic
function isTriangle(sideLength1, sideLength2, sideLength3) {
  if (((sideLength1 + sideLength2) > sideLength3)
    && ((sideLength1 + sideLength3) > sideLength2)
    && ((sideLength2 + sideLength3) > sideLength1)) {
    return true;
  } else
    return false;
}
function isEmptyOrNull(sideLength) {
  if (sideLength === 0 || sideLength === null || isNaN(sideLength))
    return true;
  else
    return false;
}

function isNumberMoreThanZero(sideLength) {
  if (sideLength > 0)
    return true;
  else
    return false;
}

function checkTypeOfTriangle(sideLength1, sideLength2, sideLength3) {
  if ((sideLength1 === sideLength2) &&
    (sideLength1 === sideLength3))
    return "Triangle is Equilateral: all sides are equal";
  else if ((sideLength1 === sideLength2) ||
    (sideLength1 === sideLength3) ||
    (sideLength2 === sideLength3))
    return "Triangle is Isosceles: exactly 2 sides are equal";
  else
    return "Scalene: no sides are equal";
}

//UI logic

function displayErrors(sideLength1, sideLength2, sideLength3) {
  if (isEmptyOrNull(sideLength1) || !isNumberMoreThanZero(sideLength1)) {
    document.querySelector("p#side1Error").classList.remove("hidden");
  }
  if (isEmptyOrNull(sideLength2) || !isNumberMoreThanZero(sideLength2)) {
    document.querySelector("p#side2Error").classList.remove("hidden");
  }
  if (isEmptyOrNull(sideLength3) || !isNumberMoreThanZero(sideLength3)) {
    document.querySelector("p#side3Error").classList.remove("hidden");
  }
}

function resetErrorsAndResult() {
  document.querySelector("p#side3Error").classList.add("hidden");
  document.querySelector("p#side2Error").classList.add("hidden");
  document.querySelector("p#side1Error").classList.add("hidden");
  document.querySelector("div#resultDiv").classList.add("hidden");
  document.querySelector("button#clearResultButton").classList.add("hidden");
}

function resetForm() {
  resetErrorsAndResult();
  document.querySelector("input#side1").value = "";
  document.querySelector("input#side2").value = "";
  document.querySelector("input#side3").value = "";
}

function handleTriangleChecking(e) {
  e.preventDefault();
  resetErrorsAndResult();
  document.querySelector("button#clearResultButton").classList.remove("hidden");
  const sideLength1 = parseFloat(document.querySelector("input#side1").value);
  const sideLength2 = parseFloat(document.querySelector("input#side2").value);
  const sideLength3 = parseFloat(document.querySelector("input#side3").value);
  console.log(sideLength1, sideLength2, sideLength3);
  if (isEmptyOrNull(sideLength1) ||
    !isNumberMoreThanZero(sideLength1) ||
    isEmptyOrNull(sideLength2) ||
    !isNumberMoreThanZero(sideLength2) ||
    isEmptyOrNull(sideLength3) ||
    !isNumberMoreThanZero(sideLength3)) {
    displayErrors(sideLength1, sideLength2, sideLength3);
  } else {
    document.querySelector("div#resultDiv").classList.remove("hidden");
    if (!isTriangle(sideLength1, sideLength2, sideLength3)) {
      document.querySelector("p#result").innerText = "This is NOT a triangle";
    } else {
      document.querySelector("p#result").innerText = checkTypeOfTriangle(sideLength1, sideLength2, sideLength3);
    }
  }
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleTriangleChecking);
  document.querySelector("button#clearResultButton").addEventListener("click", resetForm);
});