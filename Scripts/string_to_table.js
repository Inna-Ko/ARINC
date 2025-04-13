function checkCharacters(input) {
    let message = '';
    let messages = [];

    switch (input[0]) {
        case 'S': // Если первый символ 'S'
            messages.push("<b>S:</b> Standard [1]")
            if (input.length >= 4) {
                messages.push('<b>' + input.substring(1,4) + ':</b> Area Code [2-4] (<a href="References/Figure_5_2_Geographical_Area_Codes.png" target="_blank">World Codes</a>)')}
            if (input.length >= 5) { // Проверяем 5 символ
                switch (input[4]) {
                case 'A':
                    messages.push('<b>A:</b> MORA [5] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">Section and Subsection Codes</a>)')
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case 'S':
                            messages.push('<b>S:</b> Grid MORA (AS) [6] (<a href="Tables/AS_Grid_MORA.png" target="_blank">Grid MORA Primary Records</a>)')
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
                    messages.push('<b>D:</b> NAVAID [5] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">Section and Subsection Codes</a>)')
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case ' ':
                            messages.push('<b>Blank:</b> VHF NAVAID (D) [6] (<a href="Tables/D__VHF_NAVAID.png" target="_blank">VHF NAVAID Primary Records</a>)')
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
                            messages.push('<b>B:</b> NDB NAVAID (DB) [6] (<a href="Tables/DB_NDB_NAVAID.png" target="_blank">NDB NAVAID Primary Records</a>)')
                            if (input.length >= 10) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> Airport ICAO Identifier [7-10] (<a href="References/5_6_Airport_Heliport_Identifier.png" target="_blank">5.6</a>)')}
                            if (input.length >= 12) {
                                messages.push("<b>" + input.substring(10,12) + ':</b> ICAO Code [11-12] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 17) {
                                messages.push("<b>" + input.substring(13,17) + ':</b> NDB Identifier [14-17] (<a href="References/5_33_VOR_NDB_Identifier.png" target="_blank">5.33</a>)')}
                            if (input.length >= 21) {
                                messages.push("<b>" + input.substring(19,21) + ':</b> ICAO Code [20-21] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 27) {
                                messages.push("<b>" + input.substring(22,27) + ':</b> NDB Frequency [23-27] (<a href="References/5_34_VOR_Frequency.png" target="_blank">5.34</a>)')}
                            if (input.length >= 32) {
                                messages.push("<b>" + input.substring(27,32) + ':</b> NDB Class [28-32] (<a href="References/5_35_NAVAID_Class.png" target="_blank">5.35</a>)')}
                            if (input.length >= 41) {
                                messages.push("<b>" + input.substring(32,41) + ':</b> NDB Latitude [33-41] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(41,51) + ':</b> NDB Longitude [42-51] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 79) {
                                messages.push("<b>" + input.substring(74,79) + ':</b> Magnetic Variation [75-79] (<a href="References/5_39_Magnetic_Variation.png" target="_blank">5.39</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input.substring(90,93) + ':</b> Datum Code [91-93] (<a href="References/5_197_Datum_Code.png" target="_blank">5.197</a>)')}
                            if (input.length >= 123) {
                                messages.push("<b>" + input.substring(93,123) + ':</b> NDB Name [94-123] (<a href="References/5_71_Name_Field.png" target="_blank">5.71</a>)')}
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'E':
                    messages.push('<b>E:</b> Enroute [5] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">Section and Subsection Codes</a>)')
                    if (input.length >= 6) { // Проверяем 6 символ
                        switch (input[5]) {
                        case 'A':
                            messages.push('<b>A:</b> Waypoints (EA) [6] (<a href="Tables/EA_Waypoints.png" target="_blank">Waypoint Primary Records</a>)')
                            if (input.length >= 10) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> Region Code [7-10] (<a href="References/5_41_Region_Code.png" target="_blank">5.41</a>)')}
                            if (input.length >= 12) {
                                messages.push("<b>" + input.substring(10,12) + ':</b> ICAO Code [11-12] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 13) {
                                messages.push("<b>" + input[12] + ':</b> Subsection [13] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 18) {
                                messages.push("<b>" + input.substring(13,18) + ':</b> Waypoint Identifier [14-18] (<a href="References/5_13_Fix_Identifier.png" target="_blank">5.13</a>)')}
                            if (input.length >= 21) {
                                messages.push("<b>" + input.substring(19,21) + ':</b> ICAO Code [20-21] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 29) {
                                messages.push("<b>" + input.substring(26,29) + ':</b> Waypoint Type [27-29] (<a href="References/5_42_Waypoint_Type.png" target="_blank">5.42</a>)')}
                            if (input.length >= 31) {
                                messages.push("<b>" + input.substring(29,31) + ':</b> Waypoint Usage [30-31] (<a href="References/5_82_Waypoint_Usage.png" target="_blank">5.82</a>)')}
                            if (input.length >= 41) {
                                messages.push("<b>" + input.substring(32,41) + ':</b> Waypoint Latitude [33-41] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(41,51) + ':</b> Waypoint Longitude [42-51] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 79) {
                                messages.push("<b>" + input.substring(74,79) + ':</b> Dynamic Mag. Variation [75-79] (<a href="References/5_39_Magnetic_Variation.png" target="_blank">5.39</a>)')}
                            if (input.length >= 87) {
                                messages.push("<b>" + input.substring(84,87) + ':</b> Datum Code [85-87] (<a href="References/5_197_Datum_Code.png" target="_blank">5.197</a>)')}
                            if (input.length >= 98) {
                                messages.push("<b>" + input.substring(95,98) + ':</b> Name Format Indicator [96-98] (<a href="References/5_196_Name_Format_Indicator.png" target="_blank">5.196</a>)')}
                            if (input.length >= 123) {
                                messages.push("<b>" + input.substring(98,123) + ':</b> Waypoint Name / Description [99-123] (<a href="References/5_43_Waypoint_Name_Description.png" target="_blank">5.43</a>)')}
                            break;
                        case 'M':
                            messages.push('<b>M:</b> Airway Markers (EM) [6] (<a href="Tables/EM_Airways.png" target="_blank">Airway Marker Primary Records</a>)')
                            if (input.length >= 17) {
                                messages.push("<b>" + input.substring(13,17) + ':</b> Marker Identifier [14-17] (<a href="References/5_110_Marker_Ident.png" target="_blank">5.110</a>)')}
                            if (input.length >= 21) {
                                messages.push("<b>" + input.substring(19,21) + ':</b> ICAO Code [20-21] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 26) {
                                messages.push("<b>" + input.substring(22,26) + ':</b> Marker Code [23-26] (<a href="References/5_111_Marker_Code.png" target="_blank">5.111</a>)')}
                            if (input.length >= 28) {
                                messages.push("<b>" + input[27] + ':</b> Marker Shape [28] (<a href="References/5_112_Marker_Shape.png" target="_blank">5.112</a>)')}
                            if (input.length >= 29) {
                                messages.push("<b>" + input[28] + ':</b> Marker Power [29] (<a href="References/5_113_Marker_High_Low.png" target="_blank">5.113</a>)')}
                            if (input.length >= 41) {
                                messages.push("<b>" + input.substring(32,41) + ':</b> Marker Latitude [33-41] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(41,51) + ':</b> Marker Longitude [42-51] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 55) {
                                messages.push("<b>" + input.substring(51,55) + ':</b> Minor Axis [52-55] (<a href="References/5_100_Minor_Axis.png" target="_blank">5.100</a>)')}
                            if (input.length >= 79) {
                                messages.push("<b>" + input.substring(74,79) + ':</b> Magnetic Variation [75-79] (<a href="References/5_39_Magnetic_Variation.png" target="_blank">5.39</a>)')}
                            if (input.length >= 84) {
                                messages.push("<b>" + input.substring(79,84) + ':</b> Facility Elevation [80-84] (<a href="References/5_92_Facility_Elevation.png" target="_blank">5.92</a>)')}
                            if (input.length >= 87) {
                                messages.push("<b>" + input.substring(84,87) + ':</b> Datum Code [85-87] (<a href="References/5_197_Datum_Code.png" target="_blank">5.197</a>)')}
                            if (input.length >= 123) {
                                messages.push("<b>" + input.substring(93,123) + ':</b> Marker Name [94-123] (<a href="References/5_71_Name_Field.png" target="_blank">5.71</a>)')}
                            break;
                        case 'P':
                            messages.push('<b>P:</b> Holdings (EP) [6] (<a href="Tables/EP_Holding_Patterns.png" target="_blank">Holding Primary Records</a>)')
                            break;
                        case 'R':
                            messages.push('<b>R:</b> Enroute Airways (ER) [6] (<a href="Tables/ER_Enroute_Airways.png" target="_blank">Enroute Airways Records</a>)')
                            break;
                        case 'T':
                            messages.push('<b>T:</b> Preferred Routes (ET) [6] (<a href="Tables/ET_Preferred_Routes.png" target="_blank">Preferred Route Primary Records</a>)')
                            break;
                        case 'U':
                            messages.push('<b>U:</b> Airway Restrictions (EU) [6] (<a href="Tables/EU_Airway_Restrictions.png" target="_blank">Altitude Exclusion Primary Records</a>)')
                            break;
                        case 'V':
                            messages.push('<b>V:</b> Communications (EV) [6] (<a href="Tables/EV_Communications.png" target="_blank">Enroute Communications Primary Records</a>)')
                            break;
                        default:
                            messages.push("6 - ???")
                            break;
                        }
                    }
                    break;
                case 'H':
                    messages.push('<b>H:</b> Heliport [5] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">Section and Subsection Codes</a>)')
                    if (input.length >= 13) { // Проверяем 13 символ
                        messages.push('<b>' + input.substring(6,10) + ':</b> Region Code or Airport ICAO Identifier [7-10]')
                        messages.push('<b>' + input.substring(10,12) + ':</b> ICAO Code [11-12]')
                        switch (input[12]) {
                        case 'A':
                            messages.push('<b>A:</b> Heliports (HA) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'C':
                            messages.push('<b>C:</b> Terminal Waypoints (HC) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'D':
                            messages.push('<b>D:</b> SIDs (HD) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'E':
                            messages.push('<b>E:</b> STARs (HE) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'F':
                            messages.push('<b>F:</b> Approach Procedures (HF) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'S':
                            messages.push('<b>S:</b> MSA (HS) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'V':
                            messages.push('<b>V:</b> Communications (HV) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        default:
                            messages.push("13 - ???")
                            break;
                        }
                    }
                    break;
                case 'P':
                    messages.push('<b>P:</b> Airport [5] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">Section and Subsection Codes</a>)')
                    if (input.length >= 13) { // Проверяем 13 символ
                        messages.push('<b>' + input.substring(6,10) + ':</b> Region Code or Airport ICAO Identifier [7-10]')
                        messages.push('<b>' + input.substring(10,12) + ':</b> ICAO Code [11-12]')
                        switch (input[12]) {
                        case 'A':
                            messages.push('<b>A:</b> Airport Records (PA) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'B':
                            messages.push('<b>B:</b> Gates (PB) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'C':
                            messages.push('<b>C:</b> Terminal Waypoints (PC) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'D':
                            messages.push('<b>D:</b> SIDs (PD) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'E':
                            messages.push('<b>E:</b> STARs (PE) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'F':
                            messages.push('<b>F:</b> Approach Procedures (PF) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'G':
                            messages.push('<b>G:</b> Runways (PG) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'I':
                            messages.push('<b>I:</b> Localizer/Glide Slope (PI) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'L':
                            messages.push('<b>L:</b> MLS (PL) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'M':
                            messages.push('<b>M:</b> Localizer Marker (PM) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'P':
                            messages.push('<b>P:</b> Pathpoint (PP) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'R':
                            messages.push('<b>R:</b> Flight Planning ARR/DEP (PR) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'S':
                            messages.push('<b>S:</b> MSA (PS) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'T':
                            messages.push('<b>T:</b> MSA (PT) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        case 'V':
                            messages.push('<b>V:</b> Communications (PV) [13] (<a href="References/Figure_5_1_Sec_Subsec_Codes.png" target="_blank">5.5</a>)')
                            break;
                        default:
                            messages.push("13 - ???")
                            break;
                        }
                    }
                    break;
                case 'R':
                    messages.push('<b>R:</b> Company Routes [5]')
                    break;
                case 'T':
                    messages.push('<b>T:</b> Tables [5]')
                    break;
                case 'U':
                    messages.push('<b>U:</b> Airspace [5]')
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
            messages.push("1 символ не S и не T, это не строка из ARINC")
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