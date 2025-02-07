
// Prototype de calculatrice en JavaScript

// Fonction pour ajouter des nombres ou des opérateurs à l'affichage
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
// Fonction pour effacer l'affichage
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Effectue le calcul
function calculate() {
  try {
    const displayValue = document.getElementById("display").value;
    const result = evaluateExpression(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Erreur";
  }
}
// Évalue l'expression mathématique
function evaluateExpression(expression) {
  const sanitizedExpression = expression
    .replace(/sqrt/g, "Math.sqrt")
    .replace(/log/g, "Math.log")
    .replace(/exp/g, "Math.exp")
    .replace(/sin/g, "Math.sin")
    .replace(/cos/g, "Math.cos")
    .replace(/tan/g, "Math.tan");

  return eval(sanitizedExpression);
}
