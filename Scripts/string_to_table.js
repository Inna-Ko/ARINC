function checkCharacters(input) {
    let message = '';
    let messages = [];

    switch (input[0]) {
        case 'S': // Если первый символ 'S'
            messages.push("<b>S:</b> Standard [1]")
            if (input.length >= 5) { // Проверяем 5 символ
                switch (input[4]) {
                case 'A':
                    messages.push("<b>A:</b> MORA [5]")
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case 'S':
                            messages.push('<b>S:</b> Grid MORA (AS) [6] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')
                            if (input.length >= 16) {
                                messages.push('<b>' + input.substring(13,16) + ':</b> Starting Latitude [14-16] (<a href="References/5_141_Starting_Latitude.png" target="_blank">5.141</a>)')}
                            if (input.length >= 20) {
                                messages.push('<b>' + input.substring(16,20) + ':</b> Starting Longitude [17-20] (<a href="References/5_142_Starting_Longitude.png" target="_blank">5.142</a>)')}
                            if (input.length >= 33) {
                                messages.push('<b>' + input.substring(30,33) + ':</b> MORA 1 [31-33] (<a href="References/5_143_MORA.png" target="_blank">5.143</a>)')}
                            if (input.length >= 36) {
                                messages.push('<b>' + input.substring(33,36) + ':</b> MORA 2 [34-36] (<a href="References/5_143_MORA.png" target="_blank">5.143</a>)')}
                            if (input.length >= 39) {
                                messages.push('<b>' + input.substring(36,39) + ':</b> MORA 3 [37-39] (<a href="References/5_143_MORA.png" target="_blank">5.143</a>)')}
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'D':
                    messages.push("<b>5:</b> D - NAVAID")
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case ' ':
                            messages.push("<b>6:</b> Blank - VHF NAVAID (D)")
                            if (input.length >= 10) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> Airport ICAO Identifier [7-10] (<a href="References/5_6_Airport_Heliport_Identifier.png" target="_blank">5.6</a>)')}
                            if (input.length >= 12) {
                                messages.push("<b>" + input.substring(10,12) + ':</b> ICAO Code [11-12] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 17) {
                                messages.push("<b>" + input.substring(13,17) + ':</b> VOR Identifier [14-17] (<a href="References/5_33_VOR_NDB_Identifier.png" target="_blank">5.33</a>)')}
                            if (input.length >= 21) {
                                messages.push("<b>" + input.substring(19,21) + ':</b> ICAO Code [20-21] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 27) {
                                messages.push("<b>" + input.substring(22,27) + ':</b> VOR Frequency [23-27] (<a href="References/5_34_VOR_Frequency.png" target="_blank">5.34</a>)')}
                            if (input.length >= 32) {
                                messages.push("<b>" + input.substring(27,32) + ':</b> NAVAID Class [28-32] (<a href="References/5_35_NAVAID_Class.png" target="_blank">5.35</a>)')}
                            if (input.length >= 41) {
                                messages.push("<b>" + input.substring(32,41) + ':</b> VOR Latitude [33-41] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(41,51) + ':</b> VOR Longitude [42-51] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 55) {
                                messages.push("<b>" + input.substring(51,55) + ':</b> DME Identifier [52-55] (<a href="References/5_38_DME_Ident.png" target="_blank">5.38</a>)')}
                            if (input.length >= 64) {
                                messages.push("<b>" + input.substring(55,64) + ':</b> DME Latitude [56-64] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 74) {
                                messages.push("<b>" + input.substring(64,74) + ':</b> DME Longitude [65-74] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 79) {
                                messages.push("<b>" + input.substring(74,79) + ':</b> Station Declination [75-79] (<a href="References/5_66_Station_Declination.png" target="_blank">5.66</a>)')}
                            if (input.length >= 84) {
                                messages.push("<b>" + input.substring(79,84) + ':</b> DME Elevation [80-84] (<a href="References/5_40_DME_Elevation.png" target="_blank">5.40</a>)')}
                            if (input.length >= 85) {
                                messages.push("<b>" + input[84] + ':</b> Figure of Merit [85] (<a href="References/5_149_Figure_of_Merit.png" target="_blank">5.149</a>)')}
                            if (input.length >= 87) {
                                messages.push("<b>" + input.substring(85,87) + ':</b> ILS/DME Bias [86-87] (<a href="References/5_90_ILS_DME_Bias.png" target="_blank">5.90</a>)')}
                            if (input.length >= 90) {
                                messages.push("<b>" + input.substring(87,90) + ':</b> Frequency Protection [88-90] (<a href="References/5_150_Frequency_Protection.png" target="_blank">5.150</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input.substring(90,93) + ':</b> Datum Code [91-93] (<a href="References/5_197_Datum_Code.png" target="_blank">5.197</a>)')}
                            if (input.length >= 123) {
                                messages.push("<b>" + input.substring(93,123) + ':</b> VOR Name [94-123] (<a href="References/5_71_Name_Field.png" target="_blank">5.71</a>)')}
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