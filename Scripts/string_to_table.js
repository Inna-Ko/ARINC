function checkCharacters(input) {
    let message = '';
    let messages = [];

    switch (input[0]) {
        case 'S': // Если первый символ 'S', продолжаем проверку
            messages.push("1 - S - Standard")
            if (input.length >= 5) { // Проверяем пятый символ
                switch (input[4]) {
                case 'A':
                    messages.push("5 - A - MORA")
                    break;
                case 'D':
                    messages.push("5 - D - NAVAID")
                    break;
                case 'E':
                    messages.push("5 - E - Enroute")
                    break;
                case 'H':
                    messages.push("5 - H - Heliport")
                    break;
                default:
                    messages.push("5 - ???")
                    break;
                }
            }
            break;
        case 'T':
            messages.push("1 - T - Tailored")
            break;
        default:
            messages.push("1 - ???")
            break;
    }

    message = messages.join('<br>'); // Объединяем сообщения с переносом строки
    return message;
}

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

    // Обрабатываем строку для комментариев
    const message = checkCharacters(input);
    document.getElementById('message').innerHTML = message;
}

function clearInput() {
    document.getElementById('input-string').value = ''; // Очищаем поле ввода
    document.getElementById('result-table').innerHTML = ''; // Очищаем таблицу
    document.getElementById('message').innerHTML = ''; // Очищаем текстовую расшифровку
}