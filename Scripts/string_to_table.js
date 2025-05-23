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
                            if (input.length >= 10) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> Region Code [7-10] (<a href="References/5_41_Region_Code.png" target="_blank">5.41</a>)')}
                            if (input.length >= 12) {
                                messages.push("<b>" + input.substring(10,12) + ':</b> ICAO Code [11-12] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 29) {
                                messages.push("<b>" + input.substring(27,29) + ':</b> Duplicate Identifier [28-29] (<a href="References/5_114_Duplicate_Indicator.png" target="_blank">5.114</a>)')}
                            if (input.length >= 34) {
                                messages.push("<b>" + input.substring(29,34) + ':</b> Fix Identifier [30-34] (<a href="References/5_13_Fix_Identifier.png" target="_blank">5.13</a>)')}
                            if (input.length >= 36) {
                                messages.push("<b>" + input.substring(34,36) + ':</b> ICAO Code [35-36] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 37) {
                                messages.push("<b>" + input[36] + ':</b> Section Code [37] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 38) {
                                messages.push("<b>" + input[37] + ':</b> Subsection Code [38] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 43) {
                                messages.push("<b>" + input.substring(39,43) + ':</b> Inbound Holding Course [40-43] (<a href="References/5_62_Inbound_Holding_Course.png" target="_blank">5.62</a>)')}
                            if (input.length >= 44) {
                                messages.push("<b>" + input[43] + ':</b> Turn Direction [43] (<a href="References/5_63_Turn.png" target="_blank">5.63</a>)')}
                            if (input.length >= 47) {
                                messages.push("<b>" + input.substring(44,47) + ':</b> Leg Length [45-47] (<a href="References/5_64_Leg_Length.png" target="_blank">5.64, </a> <a href="References/Figure_5_10_Holding_Leg_Length.png" target="_blank">Figure 5.10 - Holding Length</a>)')}
                            if (input.length >= 49) {
                                messages.push("<b>" + input.substring(47,49) + ':</b> Leg Time [48-49] (<a href="References/5_65_Leg_Time.png" target="_blank">5.65, </a> <a href="References/Figure_5_10_Holding_Leg_Length.png" target="_blank">Figure 5.10 - Holding Length</a>)')}
                            if (input.length >= 54) {
                                messages.push("<b>" + input.substring(49,54) + ':</b> Minimum Altitude [50-54] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            if (input.length >= 59) {
                                messages.push("<b>" + input.substring(54,59) + ':</b> Maximum Altitude [55-59] (<a href="References/5_127_Maximum_Altitude.png" target="_blank">5.127</a>)')}
                            if (input.length >= 62) {
                                messages.push("<b>" + input.substring(59,62) + ':</b> Holding Speed [60-62] (<a href="References/5_175_Holding_Speed.png" target="_blank">5.175</a>)')}
                            if (input.length >= 123) {
                                messages.push("<b>" + input.substring(98,123) + ':</b> Notes [99-123] (<a href="References/5_60_Notes.png" target="_blank">5.60</a>)')}
                            break;
                        case 'R':
                            messages.push('<b>R:</b> Enroute Airways (ER) [6] (<a href="Tables/ER_Enroute_Airways.png" target="_blank">Enroute Airways Records</a>)')
                            if (input.length >= 18) {
                                messages.push("<b>" + input.substring(13,18) + ':</b> Route Identifier [14-18] (<a href="References/5_8_Route_Identifier.png" target="_blank">5.8</a>)')}
                            if (input.length >= 29) {
                                messages.push("<b>" + input.substring(25,29) + ':</b> Sequence Number [26-29] (<a href="References/5_12_Sequence_Number.png" target="_blank">5.12</a>)')}
                            if (input.length >= 34) {
                                messages.push("<b>" + input.substring(29,34) + ':</b> Fix Identifier [30-34] (<a href="References/5_13_Fix_Identifier.png" target="_blank">5.13</a>)')}
                            if (input.length >= 36) {
                                messages.push("<b>" + input.substring(34,36) + ':</b> ICAO Code [35-36] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 37) {
                                messages.push("<b>" + input[36] + ':</b> Section Code [37] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 38) {
                                messages.push("<b>" + input[37] + ':</b> Subsection Code [38] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 43) {
                                messages.push("<b>" + input.substring(39,43) + ':</b> Waypoint Description Code [40-43] (<a href="References/5_17_Waypoint_Description_Code.png" target="_blank">5.17</a>)')}
                            if (input.length >= 44) {
                                messages.push("<b>" + input[43] + ':</b> Boundary Code [44] (<a href="References/5_18_Boundary_Codes.png" target="_blank">5.18</a>)')}
                            if (input.length >= 45) {
                                messages.push("<b>" + input[44] + ':</b> Route Type [45] (<a href="References/5_7_Route_Type.png" target="_blank">5.7</a>)')}
                            if (input.length >= 46) {
                                messages.push("<b>" + input[45] + ':</b> Level [46] (<a href="References/5_19_Level.png" target="_blank">5.19</a>)')}
                            if (input.length >= 47) {
                                messages.push("<b>" + input[46] + ':</b> Direction Restriction [47] (<a href="References/5_115_Directional_Restriction.png" target="_blank">5.115</a>)')}
                            if (input.length >= 49) {
                                messages.push("<b>" + input.substring(47,49) + ':</b> Cruise Table Indicator [48-49] (<a href="References/5_134_Cruise_Table_Indicator.png" target="_blank">5.134</a>)')}
                            if (input.length >= 50) {
                                messages.push("<b>" + input[49] + ':</b> EU Indicator [50] (<a href="References/5_164_EU_Indicator.png" target="_blank">5.164</a>)')}
                            if (input.length >= 54) {
                                messages.push("<b>" + input.substring(50,54) + ':</b> Recommended NAVAID [51-54] (<a href="References/5_23_Recommended_NAVAID.png" target="_blank">5.23</a>)')}
                            if (input.length >= 56) {
                                messages.push("<b>" + input.substring(54,56) + ':</b> ICAO Code [55-56] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 59) {
                                messages.push("<b>" + input.substring(56,59) + ':</b> RNP [57-59] (<a href="References/5_211_RNP.png" target="_blank">5.211</a>)')}
                            if (input.length >= 66) {
                                messages.push("<b>" + input.substring(62,66) + ':</b> Theta [63-66] (<a href="References/5_24_Theta.png" target="_blank">5.24</a>)')}
                            if (input.length >= 70) {
                                messages.push("<b>" + input.substring(66,70) + ':</b> Rho [67-70] (<a href="References/5_25_Rho.png" target="_blank">5.25</a>)')}
                            if (input.length >= 74) {
                                messages.push("<b>" + input.substring(70,74) + ':</b> Outbound Magnetic Course [71-74] (<a href="References/5_26_Outbound_Magnetic_Course.png" target="_blank">5.26</a>)')}
                            if (input.length >= 78) {
                                messages.push("<b>" + input.substring(74,78) + ':</b> Route Distance From [75-78] (<a href="References/5_27_Route_Distance_From.png" target="_blank">5.27</a>)')}
                            if (input.length >= 82) {
                                messages.push("<b>" + input.substring(78,82) + ':</b> Inbound Magnetic Course [79-82] (<a href="References/5_28_inbound_Magnetic_Course.png" target="_blank">5.28</a>)')}
                            if (input.length >= 88) {
                                messages.push("<b>" + input.substring(83,88) + ':</b> Minimum Altitude [84-88] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input.substring(88,93) + ':</b> Minimum Altitude [89-93] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            if (input.length >= 98) {
                                messages.push("<b>" + input.substring(93,98) + ':</b> Maximum Altitude [94-98] (<a href="References/5_127_Maximum_Altitude.png" target="_blank">5.127</a>)')}
                            break;
                        case 'T':
                            messages.push('<b>T:</b> Preferred Routes (ET) [6] (<a href="Tables/ET_Preferred_Routes.png" target="_blank">Preferred Route Primary Records</a>)')
                            if (input.length >= 23) {
                                messages.push("<b>" + input.substring(13,23) + ':</b> Route Identifier [14-23] (<a href="References/5_8_Route_Identifier.png" target="_blank">5.8</a>)')}
                            if (input.length >= 25) {
                                messages.push("<b>" + input.substring(23,25) + ':</b> Preferred Route Use Indicator [24-25] (<a href="References/5_220_Pref_Route_Use_Indicator.png" target="_blank">5.220</a>)')}
                            if (input.length >= 29) {
                                messages.push("<b>" + input.substring(25,29) + ':</b> Sequence Number [26-29] (<a href="References/5_12_Sequence_Number.png" target="_blank">5.12</a>)')}
                            if (input.length >= 44) {
                                messages.push("<b>" + input.substring(39,44) + ':</b> To Fix Identifier [40-44] (<a href="References/5_83_To_Fix.png" target="_blank">5.83</a>)')}
                            if (input.length >= 46) {
                                messages.push("<b>" + input.substring(44,46) + ':</b> ICAO Code [45-46] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 47) {
                                messages.push("<b>" + input[46] + ':</b> Section Code [47] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 48) {
                                messages.push("<b>" + input[47] + ':</b> Subsection Code [48] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(48,51) + ':</b> Subsection Code [49-51] (<a href="References/5_77_VIA_Code.png" target="_blank">5.77</a>)')}
                            if (input.length >= 57) {
                                messages.push("<b>" + input.substring(51,57) + ':</b> SID/STAR/App/AWY Identifier [52-57] (<a href="References/5_78_SID_STAR_App_AWY.png" target="_blank">5.78</a>)')}
                            if (input.length >= 60) {
                                messages.push("<b>" + input.substring(57,60) + ':</b> Area Code [58-60] (<a href="References/5_3_Customer_Area_Code.png" target="_blank">5.3</a>)')}
                            if (input.length >= 61) {
                                messages.push("<b>" + input[60] + ':</b> Level [61] (<a href="References/5_19_Level.png" target="_blank">5.19</a>)')}
                            if (input.length >= 62) {
                                messages.push("<b>" + input[61] + ':</b> Route Type [62] (<a href="References/5_7_Route_Type.png" target="_blank">5.7</a>)')}
                            if (input.length >= 67) {
                                messages.push("<b>" + input.substring(62,67) + ':</b> Initial Airport / Fix [63-67] (<a href="References/5_194_Init_Term_Airport_Fix.png" target="_blank">5.194</a>)')}
                            if (input.length >= 69) {
                                messages.push("<b>" + input.substring(67,69) + ':</b> ICAO Code [68-69] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 70) {
                                messages.push("<b>" + input[69] + ':</b> Section Code [70] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 71) {
                                messages.push("<b>" + input[70] + ':</b> Subsection Code [71] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 76) {
                                messages.push("<b>" + input.substring(71,76) + ':</b> Terminus Airport / Fix [72-76] (<a href="References/5_194_Init_Term_Airport_Fix.png" target="_blank">5.194</a>)')}
                            if (input.length >= 78) {
                                messages.push("<b>" + input.substring(76,78) + ':</b> ICAO Code [77-78] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 79) {
                                messages.push("<b>" + input[78] + ':</b> Section Code [79] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 80) {
                                messages.push("<b>" + input[79] + ':</b> Subsection Code [80] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 85) {
                                messages.push("<b>" + input.substring(80,85) + ':</b> Minimum Altitude [81-85] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            if (input.length >= 90) {
                                messages.push("<b>" + input.substring(85,90) + ':</b> Maximum Altitude [86-90] (<a href="References/5_127_Maximum_Altitude.png" target="_blank">5.127</a>)')}
                            if (input.length >= 91) {
                                messages.push("<b>" + input[90] + ':</b> Time Code [91] (<a href="References/5_131_Time_Code.png" target="_blank">5.131</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input.substring(91,93) + ':</b> Aircraft Use Group [92-93] (<a href="References/5_221_Aircraft_Use_Group.png" target="_blank">5.221</a>)')}
                            if (input.length >= 94) {
                                messages.push("<b>" + input[93] + ':</b> Direction Restriction [94] (<a href="References/5_115_Directional_Restriction.png" target="_blank">5.115</a>)')}
                            if (input.length >= 95) {
                                messages.push("<b>" + input[94] + ':</b> Altitude Description [95] (<a href="References/5_29_Altitude_Description.png" target="_blank">5.29</a>)')}
                            if (input.length >= 100) {
                                messages.push("<b>" + input.substring(95,100) + ':</b> Altitude One [96-100] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            if (input.length >= 105) {
                                messages.push("<b>" + input.substring(100,105) + ':</b> Altitude One [101-105] (<a href="References/5_30_Altitude_Minimum.png" target="_blank">5.30</a>)')}
                            break;
                        case 'U':
                            messages.push('<b>U:</b> Airway Restrictions (EU) [6] (<a href="Tables/EU_Airway_Restrictions.png" target="_blank">Altitude Exclusion Primary Records</a>)')
                            if (input.length >= 11) {
                                messages.push("<b>" + input.substring(6,11) + ':</b> Route Identifier [7-11] (<a href="References/5_8_Route_Identifier.png" target="_blank">5.8</a>)')}
                            if (input.length >= 15) {
                                messages.push("<b>" + input.substring(12,15) + ':</b> Restriction Identifier [13-15] (<a href="References/5_154_Restriction_Identifier.png" target="_blank">5.154</a>)')}
                            if (input.length >= 17) {
                                messages.push("<b>" + input.substring(15,17) + ':</b> Restriction Type [16-17] (<a href="References/5_201_Restriction_Type.png" target="_blank">5.201</a>)')}
                            if (input.length >= 23) {
                                messages.push("<b>" + input.substring(18,23) + ':</b> Start Fix Identifier [19-23] (<a href="References/5_13_Fix_Identifier.png" target="_blank">5.13</a>)')}
                            if (input.length >= 25) {
                                messages.push("<b>" + input.substring(23,25) + ':</b> Start Fix ICAO Code [24-25] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                             if (input.length >= 26) {
                                messages.push("<b>" + input[25] + ':</b> Start Fix Section Code [26] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 27) {
                                messages.push("<b>" + input[26] + ':</b> Start Fix Subsection Code [27] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 32) {
                                messages.push("<b>" + input.substring(27,32) + ':</b> End Fix Identifier [28-32] (<a href="References/5_13_Fix_Identifier.png" target="_blank">5.13</a>)')}
                            if (input.length >= 34) {
                                messages.push("<b>" + input.substring(32,34) + ':</b> End Fix ICAO Code [33-34] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 35) {
                                messages.push("<b>" + input[34] + ':</b> End Fix Section Code [35] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 36) {
                                messages.push("<b>" + input[36] + ':</b> End Fix Subsection Code [36] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
                            if (input.length >= 44) {
                                messages.push("<b>" + input.substring(37,44) + ':</b> Start Date [38-44] (<a href="References/5_157_Restriction_Start_End_Date.png" target="_blank">5.157</a>)')}
                            if (input.length >= 51) {
                                messages.push("<b>" + input.substring(44,51) + ':</b> Start Date [45-51] (<a href="References/5_157_Restriction_Start_End_Date.png" target="_blank">5.157</a>)')}
                            if (input.length >= 52) {
                                messages.push("<b>" + input[51] + ':</b> Time Code [52] (<a href="References/5_131_Time_Code.png" target="_blank">5.131</a>)')}
                            if (input.length >= 53) {
                                messages.push("<b>" + input[52] + ':</b> Time Indicator [53] (<a href="References/5_138_Time_Indicator.png" target="_blank">5.138</a>)')}
                            if (input.length >= 63) {
                                messages.push("<b>" + input.substring(53,63) + ':</b> Time of Operation [54-63] (<a href="References/5_195_Time_of_Operation.png" target="_blank">5.195</a>)')}
                            if (input.length >= 73) {
                                messages.push("<b>" + input.substring(63,73) + ':</b> Time of Operation [64-73] (<a href="References/5_195_Time_of_Operation.png" target="_blank">5.195</a>)')}
                            if (input.length >= 83) {
                                messages.push("<b>" + input.substring(73,83) + ':</b> Time of Operation [74-83] (<a href="References/5_195_Time_of_Operation.png" target="_blank">5.195</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input.substring(83,93) + ':</b> Time of Operation [84-93] (<a href="References/5_195_Time_of_Operation.png" target="_blank">5.195</a>)')}
                            if (input.length >= 94) {
                                messages.push("<b>" + input[93] + ':</b> Exclusion Indicator [94] (<a href="References/5_202_Exclusion_Indicator.png" target="_blank">5.202</a>)')}
                            if (input.length >= 95) {
                                messages.push("<b>" + input[94] + ':</b> Units of Altitude [95] (<a href="References/5_160_Units_of_Altitude.png" target="_blank">5.160</a>)')}
                            if (input.length >= 98) {
                                messages.push("<b>" + input.substring(95,98) + ':</b> Restriction Altitude [96-98] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 99) {
                                messages.push("<b>" + input[98] + ':</b> Block Indicator [99] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 102) {
                                messages.push("<b>" + input.substring(99,102) + ':</b> Restriction Altitude [100-102] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 103) {
                                messages.push("<b>" + input[102] + ':</b> Block Indicator [103] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 106) {
                                messages.push("<b>" + input.substring(103,106) + ':</b> Restriction Altitude [104-106] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 107) {
                                messages.push("<b>" + input[106] + ':</b> Block Indicator [107] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 110) {
                                messages.push("<b>" + input.substring(108,110) + ':</b> Restriction Altitude [108-110] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 111) {
                                messages.push("<b>" + input[110] + ':</b> Block Indicator [111] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 114) {
                                messages.push("<b>" + input.substring(111,114) + ':</b> Restriction Altitude [112-114] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 115) {
                                messages.push("<b>" + input[114] + ':</b> Block Indicator [115] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 118) {
                                messages.push("<b>" + input.substring(115,118) + ':</b> Restriction Altitude [116-118] (<a href="References/5_161_Restriction_Altitude.png" target="_blank">5.161</a>)')}
                            if (input.length >= 119) {
                                messages.push("<b>" + input[118] + ':</b> Block Indicator [119] (<a href="References/5_203_Block_Indicator.png" target="_blank">5.203</a>)')}
                            break;
                        case 'V':
                            messages.push('<b>V:</b> Communications (EV) [6] (<a href="Tables/EV_Communications.png" target="_blank">Enroute Communications Primary Records</a>)')
                            if (input.length >= 10) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> FIR/RDO Identifier [7-10] (<a href="References/5_190_FIR_RDO_Identifier.png" target="_blank">5.190</a>)')}
                            if (input.length >= 14) {
                                messages.push("<b>" + input.substring(6,10) + ':</b> FIR/UIR Address [11-14] (<a href="References/5_151_FIR_UIR_Address.png" target="_blank">5.151</a>)')}
                            if (input.length >= 15) {
                                messages.push("<b>" + input[14] + ':</b> FIR/UIR Indicator [15] (<a href="References/5_117_FIR_UIR_Indicator.png" target="_blank">5.203</a>)')}
                            if (input.length >= 43) {
                                messages.push("<b>" + input.substring(18,43) + ':</b> Remote Name [19-43] (<a href="References/5_189_Remote_Site_Name.png" target="_blank">5.189</a>)')}
                            if (input.length >= 46) {
                                messages.push("<b>" + input.substring(43,46) + ':</b> Communications Type [44-46] (<a href="References/5_101_Communications_Type.png" target="_blank">5.101</a>)')}
                            if (input.length >= 53) {
                                messages.push("<b>" + input.substring(46,53) + ':</b> Communications Frequency [47-53] (<a href="References/5_103_Communications_Frequency.png" target="_blank">5.103</a>)')}
                            if (input.length >= 54) {
                                messages.push("<b>" + input[53] + ':</b> Guard/Transmit [54] (<a href="References/5_182_Guard_Transmit.png" target="_blank">5.182</a>)')}
                            if (input.length >= 55) {
                                messages.push("<b>" + input[54] + ':</b> Frequency Units [55] (<a href="References/5_104_Frequency_Units.png" target="_blank">5.104</a>)')}
                            if (input.length >= 59) {
                                messages.push("<b>" + input.substring(56,59) + ':</b> Service Indicator [57-59] (<a href="References/5_106_Service_Indicator.png" target="_blank">5.106</a>)')}
                            if (input.length >= 60) {
                                messages.push("<b>" + input[59] + ':</b> Radar Service [60] (<a href="References/5_102_Radar_Service.png" target="_blank">5.102</a>)')}
                            if (input.length >= 61) {
                                messages.push("<b>" + input[60] + ':</b> Modulation [61] (<a href="References/5_198_Modulation.png" target="_blank">5.198</a>)')}
                            if (input.length >= 62) {
                                messages.push("<b>" + input[61] + ':</b> Signal Emission [62] (<a href="References/5_199_Signal_Emission.png" target="_blank">5.199</a>)')}
                            if (input.length >= 71) {
                                messages.push("<b>" + input.substring(62,71) + ':</b> Latitude [63-71] (<a href="References/5_36_Latitude.png" target="_blank">5.36</a>)')}
                            if (input.length >= 81) {
                                messages.push("<b>" + input.substring(71,81) + ':</b> Longitude [72-81] (<a href="References/5_37_Longitude.png" target="_blank">5.37</a>)')}
                            if (input.length >= 86) {
                                messages.push("<b>" + input.substring(81,86) + ':</b> Magnetic Variation [82-86] (<a href="References/5_39_Magnetic_Variation.png" target="_blank">5.39</a>)')}
                            if (input.length >= 91) {
                                messages.push("<b>" + input.substring(86,91) + ':</b> Facility Elevation [87-91] (<a href="References/5_92_Facility_Elevation.png" target="_blank">5.92</a>)')}
                            if (input.length >= 92) {
                                messages.push("<b>" + input[91] + ':</b> H24 Indicator [92] (<a href="References/5_181_H24_Indicator.png" target="_blank">5.181</a>)')}
                            if (input.length >= 93) {
                                messages.push("<b>" + input[92] + ':</b> Altitude Description [93] (<a href="References/5_29_Altitude_Description.png" target="_blank">5.29</a>)')}
                            if (input.length >= 98) {
                                messages.push("<b>" + input.substring(93,98) + ':</b> Communication Altitude [94-98] (<a href="References/5_184_Communication_Altitude.png" target="_blank">5.184</a>)')}
                            if (input.length >= 103) {
                                messages.push("<b>" + input.substring(98,103) + ':</b> Communication Altitude [99-103] (<a href="References/5_184_Communication_Altitude.png" target="_blank">5.184</a>)')}
                            if (input.length >= 107) {
                                messages.push("<b>" + input.substring(103,107) + ':</b> Remote Facility [104-107] (<a href="References/5_200_Remote_facility.png" target="_blank">5.200</a>)')}
                            if (input.length >= 109) {
                                messages.push("<b>" + input.substring(107,109) + ':</b> ICAO Code [108-109] (<a href="References/5_14_ICAO_Code.png" target="_blank">5.14</a>)')}
                            if (input.length >= 110) {
                                messages.push("<b>" + input[109] + ':</b> Section Code [110] (<a href="References/5_4_Section_Code.png" target="_blank">5.4</a>)')}
                            if (input.length >= 111) {
                                messages.push("<b>" + input[110] + ':</b> Subsection Code [111] (<a href="References/5_5_Subsection_Code.png" target="_blank">5.5</a>)')}
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