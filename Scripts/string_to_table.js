function convertString() {
    const input = document.getElementById('input-string').value;
    if (!input || input.trim().length === 0) return alert("Добавьте строку ARINC в текстовое поле");

    // Создаем первую строку с номерами символов
    let numberRow = '<tr>';
    for (let i = 0; i < input.length; i++) {
        numberRow += `<td>${i + 1}</td>`; // Добавляем номер символа в ячейку
    }
    numberRow += '</tr>';

    // Создаем вторую строку с самими символами
    let characterRow = '<tr>';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        characterRow += `<td>${char}</td>`; // Добавляем символ в ячейку
    }
    characterRow += '</tr>';

    // Собираем обе строки вместе и вставляем в таблицу
    const tableContent = `${numberRow}${characterRow}`;
    document.getElementById('result-table').innerHTML = tableContent;
}

function clearInput() {
    document.getElementById('input-string').value = ''; // Очищаем поле ввода
    document.getElementById('result-table').innerHTML = ''; // Очищаем таблицу
}