function checkCharacters(input) {
    let message = '';
    let messages = [];

    switch (input[0]) {
        case 'S': // Если первый символ 'S'
            messages.push("S: Standard [1]")
            if (input.length >= 5) { // Проверяем 5 символ
                switch (input[4]) {
                case 'A':
                    messages.push("A: MORA [5]")
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case 'S':
                            messages.push("S: Grid MORA (AS) [6]")
                            if (input.length >= 16) {
                                messages.push(input.substring(13,16) + ": Starting Latitude [14-16]")}
                            if (input.length >= 20) {
                                messages.push(input.substring(16,20) + ": Starting Longitude [17-20]")}
                            if (input.length >= 33) {
                                messages.push(input.substring(30,33) + ": MORA 1 [31-33]")}
                            if (input.length >= 36) {
                                messages.push(input.substring(33,36) + ": MORA 2 [34-36]")}
                            if (input.length >= 39) {
                                messages.push(input.substring(36,39) + ": MORA 3 [37-39]")}
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'D':
                    messages.push("5 - D - NAVAID")
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case ' ':
                            messages.push("6 - Blank - VHF NAVAID (D)")
                            break;
                        case 'B':
                            messages.push("6 - B - NDB NAVAID (DB)")
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'E':
                    messages.push("5 - E - Enroute")
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case 'A':
                            messages.push("6 - A - Waypoints (EA)")
                            break;
                        case 'M':
                            messages.push("6 - M - Airway Markers (EM)")
                            break;
                        case 'P':
                            messages.push("6 - P - Holdings (EP)")
                            break;
                        case 'R':
                            messages.push("6 - R - Enroute Airways (ER)")
                            break;
                        case 'T':
                            messages.push("6 - T - Preferred Routes (ET)")
                            break;
                        case 'U':
                            messages.push("6 - U - Airway Restrictions (EU)")
                            break;
                        case 'V':
                            messages.push("6 - V - Communications (EV)")
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'H':
                    messages.push("5 - H - Heliport")
                    break;
                case 'P':
                    messages.push("5 - P - Airport")
                    break;
                case 'R':
                    messages.push("5 - R - Company Routes")
                    break;
                case 'T':
                    messages.push("5 - T - Tables")
                    break;
                case 'U':
                    messages.push("5 - U - Airspace")
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