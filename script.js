document.getElementById('binomial-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    let aSquare = a * a;
    let bSquare = b * b;
    let twoAB = 2 * a * b;

    let resultText = `(${a} + ${b})² = ${aSquare} + ${twoAB} + ${bSquare} = ${aSquare + twoAB + bSquare}`;

    document.getElementById('result').innerHTML = `<h4 class="text-success">${resultText}</h4>`;

    // Update visualization
    document.getElementById('aSquare').style.width = `${(a / (a + b)) * 100}%`;
    document.getElementById('aSquare').style.height = `${(a / (a + b)) * 100}%`;
    document.getElementById('aSquare').textContent = `a² = ${aSquare}`;

    document.getElementById('bSquare').style.width = `${(b / (a + b)) * 100}%`;
    document.getElementById('bSquare').style.height = `${(b / (a + b)) * 100}%`;
    document.getElementById('bSquare').textContent = `b² = ${bSquare}`;

    document.getElementById('abRectangle1').textContent = `ab = ${a * b}`;
    document.getElementById('abRectangle2').textContent = `ab = ${a * b}`;

    // Show visualization section
    document.getElementById('visualization').classList.remove('d-none');
});