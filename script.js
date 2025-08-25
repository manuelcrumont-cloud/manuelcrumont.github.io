function calculateHealth() {
    // Obtener los valores del formulario
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convertir cm a m
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;

    if (!weight || !height || !age) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Calcular el IMC (Índice de Masa Corporal)
    const bmi = weight / (height * height);

    // Determinar el estado nutricional en base al IMC
    let status = '';
    if (bmi < 18.5) {
        status = 'Bajo peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Sobrepeso';
    } else {
        status = 'Obesidad';
    }

    // Cálculo de la necesidad calórica diaria aproximada (Mifflin-St Jeor)
    let calories = 0;
    if (gender === 'male') {
        calories = 10 * weight + 6.25 * (height * 100) - 5 * age + 5;
    } else {
        calories = 10 * weight + 6.25 * (height * 100) - 5 * age - 161;
    }

    // Mostrar el resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Resultado</h3>
        <p><strong>IMC:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>Estado Nutricional:</strong> ${status}</p>
        <p><strong>Necesidad Calórica Diaria:</strong> ${calories.toFixed(2)} kcal</p>
    `;
    resultDiv.style.display = 'block';
}

