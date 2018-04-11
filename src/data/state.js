const data = {
    product: {
        selected: {
            id: 104582,
                name: 'FRIDAY',
                insuranceTermsDescr: 'Test',
                description: '',
                branche: {
                id: '100052',
                    code: 'PERSONAUTO',
                    groupCode: 'MR'
            },
            targetAudiences: [
                'Private',
                'Business'
            ],
                allowedPaymentIntervalsInMonths: [
                1,
                3,
                6,
                12
            ],
                options: [
                {
                    items: [
                        {
                            key: 'Fahrzeug aus der Liste wählen',
                            value: 'Fahrzeug aus der Liste wählen'
                        },
                        {
                            key: 'Daten vom Fahrzeugschein eingeben',
                            value: 'Daten vom Fahrzeugschein eingeben'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_1_KENTEKE',
                    questionText: 'Welches Fahrzeug möchtest du versichern?',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '7118',
                            value: '7118'
                        }
                    ],
                    type: 'String',
                    value: '7118',
                    id: 'OB_2_KENTEKE',
                    questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                    guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Daten'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    regex: {
                        pattern: '^\\d{4}$',
                        message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                        options: ''
                    },
                    isRelevant: false
                },
                {
                    items: [
                        {
                            key: 'AFO',
                            value: 'AFO'
                        }
                    ],
                    type: 'String',
                    value: 'AFO',
                    id: 'OB_3_KENTEKE',
                    questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                    guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Daten'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    regex: {
                        pattern: '^[a-zA-Z\\d]{3}$',
                        message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                        options: ''
                    },
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'ALFA ROMEO',
                            value: 'ALFA ROMEO'
                        },
                        {
                            key: 'ALPINA',
                            value: 'ALPINA'
                        },
                        {
                            key: 'AUDI',
                            value: 'AUDI'
                        },
                        {
                            key: 'BENTLEY',
                            value: 'BENTLEY'
                        },
                        {
                            key: 'BMW',
                            value: 'BMW'
                        },
                        {
                            key: 'CADILLAC',
                            value: 'CADILLAC'
                        },
                        {
                            key: 'CHEVROLET',
                            value: 'CHEVROLET'
                        },
                        {
                            key: 'CHRYSLER',
                            value: 'CHRYSLER'
                        },
                        {
                            key: 'CITROEN',
                            value: 'CITROEN'
                        },
                        {
                            key: 'CORVETTE',
                            value: 'CORVETTE'
                        },
                        {
                            key: 'DACIA',
                            value: 'DACIA'
                        },
                        {
                            key: 'DAEWOO',
                            value: 'DAEWOO'
                        },
                        {
                            key: 'DAIHATSU',
                            value: 'DAIHATSU'
                        },
                        {
                            key: 'DODGE',
                            value: 'DODGE'
                        },
                        {
                            key: 'FERRARI',
                            value: 'FERRARI'
                        },
                        {
                            key: 'FIAT',
                            value: 'FIAT'
                        },
                        {
                            key: 'FORD',
                            value: 'FORD'
                        },
                        {
                            key: 'HONDA',
                            value: 'HONDA'
                        },
                        {
                            key: 'HYUNDAI',
                            value: 'HYUNDAI'
                        },
                        {
                            key: 'INFINITI',
                            value: 'INFINITI'
                        },
                        {
                            key: 'IVECO',
                            value: 'IVECO'
                        },
                        {
                            key: 'JAGUAR',
                            value: 'JAGUAR'
                        },
                        {
                            key: 'JEEP',
                            value: 'JEEP'
                        },
                        {
                            key: 'KIA',
                            value: 'KIA'
                        },
                        {
                            key: 'LADA',
                            value: 'LADA'
                        },
                        {
                            key: 'LANCIA',
                            value: 'LANCIA'
                        },
                        {
                            key: 'LAND ROVER',
                            value: 'LAND ROVER'
                        },
                        {
                            key: 'LANDWIND',
                            value: 'LANDWIND'
                        },
                        {
                            key: 'LEXUS',
                            value: 'LEXUS'
                        },
                        {
                            key: 'MASERATI',
                            value: 'MASERATI'
                        },
                        {
                            key: 'MAYBACH',
                            value: 'MAYBACH'
                        },
                        {
                            key: 'MAZDA',
                            value: 'MAZDA'
                        },
                        {
                            key: 'MCLAREN',
                            value: 'MCLAREN'
                        },
                        {
                            key: 'MERCEDES-BENZ',
                            value: 'MERCEDES-BENZ'
                        },
                        {
                            key: 'MG',
                            value: 'MG'
                        },
                        {
                            key: 'MINI (BMW)',
                            value: 'MINI (BMW)'
                        },
                        {
                            key: 'MITSUBISHI',
                            value: 'MITSUBISHI'
                        },
                        {
                            key: 'NISSAN',
                            value: 'NISSAN'
                        },
                        {
                            key: 'OPEL',
                            value: 'OPEL'
                        },
                        {
                            key: 'PEUGEOT',
                            value: 'PEUGEOT'
                        },
                        {
                            key: 'PORSCHE',
                            value: 'PORSCHE'
                        },
                        {
                            key: 'RENAULT',
                            value: 'RENAULT'
                        },
                        {
                            key: 'ROLLS ROYCE',
                            value: 'ROLLS ROYCE'
                        },
                        {
                            key: 'ROVER',
                            value: 'ROVER'
                        },
                        {
                            key: 'SAAB',
                            value: 'SAAB'
                        },
                        {
                            key: 'SANTANA',
                            value: 'SANTANA'
                        },
                        {
                            key: 'SEAT',
                            value: 'SEAT'
                        },
                        {
                            key: 'SKODA',
                            value: 'SKODA'
                        },
                        {
                            key: 'SMART',
                            value: 'SMART'
                        },
                        {
                            key: 'SSANGYONG',
                            value: 'SSANGYONG'
                        },
                        {
                            key: 'SUBARU',
                            value: 'SUBARU'
                        },
                        {
                            key: 'SUZUKI',
                            value: 'SUZUKI'
                        },
                        {
                            key: 'TATA',
                            value: 'TATA'
                        },
                        {
                            key: 'TESLA',
                            value: 'TESLA'
                        },
                        {
                            key: 'TOYOTA',
                            value: 'TOYOTA'
                        },
                        {
                            key: 'VOLKSWAGEN (VW)',
                            value: 'VOLKSWAGEN (VW)'
                        },
                        {
                            key: 'VOLVO',
                            value: 'VOLVO'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_1_MERK',
                    questionText: 'Von welcher Marke ist dein Fahrzeug?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Liste'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '2 (Limousine)',
                            value: '2 (Limousine)'
                        },
                        {
                            key: '3 (Limousine)',
                            value: '3 (Limousine)'
                        },
                        {
                            key: '5 (Kombi)',
                            value: '5 (Kombi)'
                        },
                        {
                            key: '6 (Kombi)',
                            value: '6 (Kombi)'
                        },
                        {
                            key: '6 (Limousine)',
                            value: '6 (Limousine)'
                        },
                        {
                            key: 'CX-3 (Geschlossen)',
                            value: 'CX-3 (Geschlossen)'
                        },
                        {
                            key: 'CX-5 (Geschlossen)',
                            value: 'CX-5 (Geschlossen)'
                        },
                        {
                            key: 'CX-7 (Geschlossen)',
                            value: 'CX-7 (Geschlossen)'
                        },
                        {
                            key: 'MPV (Kombi)',
                            value: 'MPV (Kombi)'
                        },
                        {
                            key: 'MX 5 (Roadster)',
                            value: 'MX 5 (Roadster)'
                        },
                        {
                            key: 'Premacy (Kombi)',
                            value: 'Premacy (Kombi)'
                        },
                        {
                            key: 'RX-8 (Coupe)',
                            value: 'RX-8 (Coupe)'
                        },
                        {
                            key: 'Tribute (Geschlossen)',
                            value: 'Tribute (Geschlossen)'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_1_MODEL',
                    questionText: 'Welches Modell hast du?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Liste'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '1.8 (120 PS/88 KW)',
                            value: '1.8 (120 PS/88 KW)'
                        },
                        {
                            key: '1.8 MZR (120 PS/88 KW)',
                            value: '1.8 MZR (120 PS/88 KW)'
                        },
                        {
                            key: '2.0 (141 PS/104 KW)',
                            value: '2.0 (141 PS/104 KW)'
                        },
                        {
                            key: '2.0 (147 PS/108 KW)',
                            value: '2.0 (147 PS/108 KW)'
                        },
                        {
                            key: '2.0 Aut. (147 PS/108 KW)',
                            value: '2.0 Aut. (147 PS/108 KW)'
                        },
                        {
                            key: '2.0 CD (121 PS/89 KW)',
                            value: '2.0 CD (121 PS/89 KW)'
                        },
                        {
                            key: '2.0 CD (136 PS/100 KW)',
                            value: '2.0 CD (136 PS/100 KW)'
                        },
                        {
                            key: '2.0 CD DPF (121 PS/89 KW)',
                            value: '2.0 CD DPF (121 PS/89 KW)'
                        },
                        {
                            key: '2.0 CD DPF (140 PS/103 KW)',
                            value: '2.0 CD DPF (140 PS/103 KW)'
                        },
                        {
                            key: '2.0 CD DPF (143 PS/105 KW)',
                            value: '2.0 CD DPF (143 PS/105 KW)'
                        },
                        {
                            key: '2.0 MZR (155 PS/114 KW)',
                            value: '2.0 MZR (155 PS/114 KW)'
                        },
                        {
                            key: '2.0 SKYACTIV-G (145 PS/107 KW)',
                            value: '2.0 SKYACTIV-G (145 PS/107 KW)'
                        },
                        {
                            key: '2.0 SKYACTIV-G (165 PS/121 KW)',
                            value: '2.0 SKYACTIV-G (165 PS/121 KW)'
                        },
                        {
                            key: '2.0 SKYACTIV-G Aut. (165 PS/121 KW)',
                            value: '2.0 SKYACTIV-G Aut. (165 PS/121 KW)'
                        },
                        {
                            key: '2.2 CD DPF (125 PS/92 KW)',
                            value: '2.2 CD DPF (125 PS/92 KW)'
                        },
                        {
                            key: '2.2 CD DPF (163 PS/120 KW)',
                            value: '2.2 CD DPF (163 PS/120 KW)'
                        },
                        {
                            key: '2.2 CD DPF (185 PS/136 KW)',
                            value: '2.2 CD DPF (185 PS/136 KW)'
                        },
                        {
                            key: '2.2 SKYACTIV-D (150 PS/110 KW)',
                            value: '2.2 SKYACTIV-D (150 PS/110 KW)'
                        },
                        {
                            key: '2.2 SKYACTIV-D (175 PS/129 KW)',
                            value: '2.2 SKYACTIV-D (175 PS/129 KW)'
                        },
                        {
                            key: '2.2 SKYACTIV-D Aut. (150 PS/110 KW)',
                            value: '2.2 SKYACTIV-D Aut. (150 PS/110 KW)'
                        },
                        {
                            key: '2.2 SKYACTIV-D Aut. (175 PS/129 KW)',
                            value: '2.2 SKYACTIV-D Aut. (175 PS/129 KW)'
                        },
                        {
                            key: '2.3 (166 PS/122 KW)',
                            value: '2.3 (166 PS/122 KW)'
                        },
                        {
                            key: '2.3 Aut. (166 PS/122 KW)',
                            value: '2.3 Aut. (166 PS/122 KW)'
                        },
                        {
                            key: '2.5 (170 PS/125 KW)',
                            value: '2.5 (170 PS/125 KW)'
                        },
                        {
                            key: '2.5 SKYACTIV-G (192 PS/141 KW)',
                            value: '2.5 SKYACTIV-G (192 PS/141 KW)'
                        },
                        {
                            key: '6 (260 PS/191 KW)',
                            value: '6 (260 PS/191 KW)'
                        },
                        {
                            key: 'SKYACTIV-D 150 Drive i-ELOOP (150 PS/110 KW)',
                            value: 'SKYACTIV-D 150 Drive i-ELOOP (150 PS/110 KW)'
                        },
                        {
                            key: 'SKYACTIV-D 150 i-ELOOP (150 PS/110 KW)',
                            value: 'SKYACTIV-D 150 i-ELOOP (150 PS/110 KW)'
                        },
                        {
                            key: 'SKYACTIV-D 175 Drive i-ELOOP (175 PS/129 KW)',
                            value: 'SKYACTIV-D 175 Drive i-ELOOP (175 PS/129 KW)'
                        },
                        {
                            key: 'SKYACTIV-D 175 i-ELOOP (175 PS/129 KW)',
                            value: 'SKYACTIV-D 175 i-ELOOP (175 PS/129 KW)'
                        },
                        {
                            key: 'SKYACTIV-G 145 (145 PS/107 KW)',
                            value: 'SKYACTIV-G 145 (145 PS/107 KW)'
                        },
                        {
                            key: 'SKYACTIV-G 165 (165 PS/121 KW)',
                            value: 'SKYACTIV-G 165 (165 PS/121 KW)'
                        },
                        {
                            key: 'SKYACTIV-G 165 Aut. (165 PS/121 KW)',
                            value: 'SKYACTIV-G 165 Aut. (165 PS/121 KW)'
                        },
                        {
                            key: 'SKYACTIV-G 165 i-ELOOP (165 PS/121 KW)',
                            value: 'SKYACTIV-G 165 i-ELOOP (165 PS/121 KW)'
                        },
                        {
                            key: 'SKYACTIV-G 192 Drive i-ELOOP (192 PS/141 KW)',
                            value: 'SKYACTIV-G 192 Drive i-ELOOP (192 PS/141 KW)'
                        },
                        {
                            key: 'Sport 1.8 (120 PS/88 KW)',
                            value: 'Sport 1.8 (120 PS/88 KW)'
                        },
                        {
                            key: 'Sport 2.0 (141 PS/104 KW)',
                            value: 'Sport 2.0 (141 PS/104 KW)'
                        },
                        {
                            key: 'Sport 2.0 (147 PS/108 KW)',
                            value: 'Sport 2.0 (147 PS/108 KW)'
                        },
                        {
                            key: 'Sport 2.0 Aut. (147 PS/108 KW)',
                            value: 'Sport 2.0 Aut. (147 PS/108 KW)'
                        },
                        {
                            key: 'Sport 2.0 CD (121 PS/89 KW)',
                            value: 'Sport 2.0 CD (121 PS/89 KW)'
                        },
                        {
                            key: 'Sport 2.0 CD (136 PS/100 KW)',
                            value: 'Sport 2.0 CD (136 PS/100 KW)'
                        },
                        {
                            key: 'Sport 2.0 CD DPF (121 PS/89 KW)',
                            value: 'Sport 2.0 CD DPF (121 PS/89 KW)'
                        },
                        {
                            key: 'Sport 2.0 CD DPF (140 PS/103 KW)',
                            value: 'Sport 2.0 CD DPF (140 PS/103 KW)'
                        },
                        {
                            key: 'Sport 2.0 CD DPF (143 PS/105 KW)',
                            value: 'Sport 2.0 CD DPF (143 PS/105 KW)'
                        },
                        {
                            key: 'Sport 2.0 MZR DISI (155 PS/114 KW)',
                            value: 'Sport 2.0 MZR DISI (155 PS/114 KW)'
                        },
                        {
                            key: 'Sport 2.0 MZR DISI Aut. (155 PS/114 KW)',
                            value: 'Sport 2.0 MZR DISI Aut. (155 PS/114 KW)'
                        },
                        {
                            key: 'Sport 2.2 CD DPF (125 PS/92 KW)',
                            value: 'Sport 2.2 CD DPF (125 PS/92 KW)'
                        },
                        {
                            key: 'Sport 2.2 CD DPF (129 PS/95 KW)',
                            value: 'Sport 2.2 CD DPF (129 PS/95 KW)'
                        },
                        {
                            key: 'Sport 2.2 CD DPF (163 PS/120 KW)',
                            value: 'Sport 2.2 CD DPF (163 PS/120 KW)'
                        },
                        {
                            key: 'Sport 2.2 CD DPF (180 PS/132 KW)',
                            value: 'Sport 2.2 CD DPF (180 PS/132 KW)'
                        },
                        {
                            key: 'Sport 2.2 CD DPF (185 PS/136 KW)',
                            value: 'Sport 2.2 CD DPF (185 PS/136 KW)'
                        },
                        {
                            key: 'Sport 2.3 (166 PS/122 KW)',
                            value: 'Sport 2.3 (166 PS/122 KW)'
                        },
                        {
                            key: 'Sport 2.3 Aut. (166 PS/122 KW)',
                            value: 'Sport 2.3 Aut. (166 PS/122 KW)'
                        },
                        {
                            key: 'Sport 2.5 (170 PS/125 KW)',
                            value: 'Sport 2.5 (170 PS/125 KW)'
                        },
                        {
                            key: 'Sport 2.5 MZR (170 PS/125 KW)',
                            value: 'Sport 2.5 MZR (170 PS/125 KW)'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_1_TYPE',
                    questionText: 'Welchen Motor hast du?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Liste'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 1,
                    maxValue: 12,
                    type: 'Integer',
                    value: null,
                    id: 'OB_3_AFGDL1',
                    questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 1900,
                    maxValue: 2017,
                    type: 'Integer',
                    value: null,
                    id: 'OB_1_AFGDL1',
                    questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Ich will meine Versicherung wechseln',
                            value: 'Ich will meine Versicherung wechseln'
                        },
                        {
                            key: 'Ich habe keine Versicherung',
                            value: 'Ich habe keine Versicherung'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XO_1_VERZEKERDESOM',
                    questionText: 'Was trifft auf dich zu?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 1,
                    maxValue: 12,
                    type: 'Integer',
                    value: null,
                    id: 'OB_4_AFGDL1',
                    questionText: 'Seit wann besitzt du das Auto?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 1900,
                    maxValue: 2017,
                    type: 'Integer',
                    value: null,
                    id: 'OB_6_AFGDL1',
                    questionText: 'Seit wann besitzt du das Auto?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XO_1_VERZEKERDESOM',
                            operator: 'IsContaining',
                            value: 'will meine'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '2191',
                            value: '2191'
                        }
                    ],
                    type: 'Selection',
                    value: '2191',
                    id: 'OB_1_GEBRUIK',
                    questionText: 'Hubraum',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'OB_1_GEBRUIK',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        },
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    type: 'Integer',
                    value: '150',
                    id: 'OB_1_HorsePower',
                    questionText: 'PS',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Liste'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Diesel',
                            value: 'Diesel'
                        }
                    ],
                    type: 'Selection',
                    value: 'Diesel',
                    id: 'OB_1_BRANSTO',
                    questionText: 'Kraftstoff',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    type: 'Integer',
                    value: null,
                    id: 'OB_2_TYPE',
                    questionText: 'Typklasse Haftpflicht',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_2_TYPE',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    type: 'Integer',
                    value: 0,
                    id: 'OB_5_TYPE',
                    questionText: 'TDE Ins Full',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_5_TYPE',
                            operator: 'IsEqualTo',
                            value: '0'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    type: 'Integer',
                    value: 0,
                    id: 'OB_6_TYPE',
                    questionText: 'TDE Ins Part',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_6_TYPE',
                            operator: 'IsEqualTo',
                            value: '0'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'bis 3.000 km',
                            value: 'bis 3.000 km'
                        },
                        {
                            key: 'bis 6.000 km',
                            value: 'bis 6.000 km'
                        },
                        {
                            key: 'bis 9.000 km',
                            value: 'bis 9.000 km'
                        },
                        {
                            key: 'bis 12.000 km',
                            value: 'bis 12.000 km'
                        },
                        {
                            key: 'bis 15.000 km',
                            value: 'bis 15.000 km'
                        },
                        {
                            key: 'bis 20.000 km',
                            value: 'bis 20.000 km'
                        },
                        {
                            key: 'bis 25.000 km',
                            value: 'bis 25.000 km'
                        },
                        {
                            key: 'bis 30.000 km',
                            value: 'bis 30.000 km'
                        },
                        {
                            key: 'mehr als 30.000 km',
                            value: 'mehr als 30.000 km'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_2_GEBRUIK',
                    questionText: 'Wie viele Kilometer fährst du durchschnittlich pro Jahr?',
                    guideText: '<p><i>Folgende Informationen können dir helfen, die richtige Jahresfahrleistung zu wählen:</i></p>\n<ul>\n\t<li>Grundsätzlich fahren Menschen, die <b>auf dem Land leben</b>, <b>mehr Kilometer pro Jahr</b> als Menschen in der Stadt.</li>\n\t<li>Fahrer, die das Auto nur <b>gelegentlich für Ausflüge oder zum Einkaufen</b> nutzen, sollten mit einer Jahresfahrleistung von <b>bis zu 6.000 km</b> rechnen.</li>\n\t<li>Fahrer, die mit dem Auto <b>regelmaßig die gleiche Strecke zur Arbeit</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 12.000 km</b> rechnen.</li>\n\t<li>Fahrer, die das Auto regelmaßig für die Arbeit und Freizeit nutzen und <b>oft weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 20.000 km</b> rechnen.</li>\n\t<li>Fahrer, die <b>regelmaßig weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 30.000 km</b> rechnen.</li>\n</ul>',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 1900,
                    maxValue: 2000,
                    type: 'Integer',
                    value: null,
                    id: 'VZ_1_LEEFTYD',
                    questionText: 'In welchem Jahr wurdest du geboren?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    maxLength: 40,
                    regex: {
                        options: 'IgnoreCase',
                        pattern: '^\\d{5}$',
                        resourceKey: {
                            className: 'Resource_Customer',
                            propertyName: 'ZipCodeRegExMessage'
                        },
                        message: 'Ungültige Eingabe (12345)'
                    },
                    type: 'String',
                    value: '',
                    id: 'OB_1_PCODE',
                    questionText: 'Wie lautet deine Postleitzahl?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'SF-Klasse auswählen',
                            value: 'SF-Klasse auswählen'
                        },
                        {
                            key: 'Dies ist meine erste KFZ-Versicherung',
                            value: 'Dies ist meine erste KFZ-Versicherung'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'RI_2_SCHDVR',
                    questionText: 'Wie lautet die Schadenfreiheitsklasse (SF- Klasse) deiner KFZ- Haftpflicht-Versicherung?',
                    guideText: '<p>Die Schadenfreiheitsklasse (SF-Klasse) zeigt an, wie viele Jahre du unfallfrei Auto gefahren bist.</p>\n<p>Mit jedem schadenfreien Jahr verbessert sich deine SF-Klasse - und damit verringert sich auch meist die Höhe deiner Versicherungsprämie.</p>\n<p>Wechselst du deine Versicherung, sprechen wir uns mit deinem letzten Versicherer ab und übernehmen deine bestehende SF-Klasse. Damit wir für unser Angebot nicht auf die Rückmeldung deines letzten Versicherers warten müssen, brauchen wir die Information bereits jetzt von dir.</p>\n',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'M',
                            value: 'M'
                        },
                        {
                            key: '0',
                            value: '0'
                        },
                        {
                            key: 'S',
                            value: 'S'
                        },
                        {
                            key: 'SF1/2',
                            value: 'SF1/2'
                        },
                        {
                            key: 'SF1',
                            value: 'SF1'
                        },
                        {
                            key: 'SF2',
                            value: 'SF2'
                        },
                        {
                            key: 'SF3',
                            value: 'SF3'
                        },
                        {
                            key: 'SF4',
                            value: 'SF4'
                        },
                        {
                            key: 'SF5',
                            value: 'SF5'
                        },
                        {
                            key: 'SF6',
                            value: 'SF6'
                        },
                        {
                            key: 'SF7',
                            value: 'SF7'
                        },
                        {
                            key: 'SF8',
                            value: 'SF8'
                        },
                        {
                            key: 'SF9',
                            value: 'SF9'
                        },
                        {
                            key: 'SF10',
                            value: 'SF10'
                        },
                        {
                            key: 'SF11',
                            value: 'SF11'
                        },
                        {
                            key: 'SF12',
                            value: 'SF12'
                        },
                        {
                            key: 'SF13',
                            value: 'SF13'
                        },
                        {
                            key: 'SF14',
                            value: 'SF14'
                        },
                        {
                            key: 'SF15',
                            value: 'SF15'
                        },
                        {
                            key: 'SF16',
                            value: 'SF16'
                        },
                        {
                            key: 'SF17',
                            value: 'SF17'
                        },
                        {
                            key: 'SF18',
                            value: 'SF18'
                        },
                        {
                            key: 'SF19',
                            value: 'SF19'
                        },
                        {
                            key: 'SF20',
                            value: 'SF20'
                        },
                        {
                            key: 'SF21',
                            value: 'SF21'
                        },
                        {
                            key: 'SF22',
                            value: 'SF22'
                        },
                        {
                            key: 'SF23',
                            value: 'SF23'
                        },
                        {
                            key: 'SF24',
                            value: 'SF24'
                        },
                        {
                            key: 'SF25',
                            value: 'SF25'
                        },
                        {
                            key: 'SF26',
                            value: 'SF26'
                        },
                        {
                            key: 'SF27',
                            value: 'SF27'
                        },
                        {
                            key: 'SF28',
                            value: 'SF28'
                        },
                        {
                            key: 'SF29',
                            value: 'SF29'
                        },
                        {
                            key: 'SF30',
                            value: 'SF30'
                        },
                        {
                            key: 'SF31',
                            value: 'SF31'
                        },
                        {
                            key: 'SF32',
                            value: 'SF32'
                        },
                        {
                            key: 'SF33',
                            value: 'SF33'
                        },
                        {
                            key: 'SF34',
                            value: 'SF34'
                        },
                        {
                            key: 'SF35',
                            value: 'SF35'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'RI_3_SCHDVR',
                    questionText: 'Wähle deine Schadenfreiheitsklasse für die KFZ-Haftpflicht-Versicherung',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'RI_2_SCHDVR',
                            operator: 'IsContaining',
                            value: 'SF-Klasse auswählen'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    maxLength: 40,
                    regex: null,
                    type: 'String',
                    value: '',
                    id: 'RI_4_SCHDVR',
                    questionText: 'Schadenfreiheitsklasse Vollkasko (SF)',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'RI_4_SCHDVR',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    maxLength: 40,
                    regex: null,
                    type: 'String',
                    value: '',
                    id: 'OB_2_AFGDL1',
                    questionText: 'Jahr der Erstversicherung\n',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_2_AFGDL1',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'BS_1_INCIDENT',
                    questionText: 'Hast du jemals einen Schaden selbst verursacht?\n',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'RI_2_SCHDVR',
                            operator: 'IsContaining',
                            value: 'nein'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: '1800-01-01T00:00:00+01:00',
                    maxValue: '9999-12-31T23:59:59.9999999+01:00',
                    type: 'DateTime',
                    value: null,
                    id: 'RI_1_8SCHADE',
                    questionText: 'Wann war dein letzter selbst verursachter Schaden?',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'BS_1_INCIDENT',
                            operator: 'IsContaining',
                            value: 'ja'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    maxLength: 40,
                    regex: null,
                    type: 'String',
                    value: '',
                    id: 'DG_2_BMPERC',
                    questionText: 'Voraussichtliche SF-Klasse',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'DG_2_BMPERC',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_11_DEKOMS',
                    questionText: 'Prämie Haftpflicht',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_11_DEKOMS',
                            operator: 'IsLargerThen',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_12_DEKOMS',
                    questionText: 'Prämie Teilkasko',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_12_DEKOMS',
                            operator: 'IsLargerThen',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_13_DEKOMS',
                    questionText: 'Prämie Teilkasko Plus',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_13_DEKOMS',
                            operator: 'IsLargerThen',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_14_DEKOMS',
                    questionText: 'Prämie Vollkasko',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_14_DEKOMS',
                            operator: 'IsLargerThen',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Treffen Sie Ihre Wahl',
                            value: 'Treffen Sie Ihre Wahl'
                        },
                        {
                            key: 'Haftpflicht',
                            value: 'Haftpflicht'
                        },
                        {
                            key: 'Teilkasko',
                            value: 'Teilkasko'
                        },
                        {
                            key: 'Teilkasko Plus',
                            value: 'Teilkasko Plus'
                        },
                        {
                            key: 'Vollkasko',
                            value: 'Vollkasko'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_2_DEKOMS',
                    questionText: 'Deckung',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_26_DEKOMS',
                    questionText: 'Weitere Fahrer',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_20_DEKOMS',
                    questionText: 'Freie Werkstattwahl',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XD_2_DEKOMS',
                            operator: 'IsContaining',
                            value: 'kasko'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_21_DEKOMS',
                    questionText: 'Rabattschutz',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_22_DEKOMS',
                    questionText: 'Fahrerschutz',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_23_DEKOMS',
                    questionText: 'Schutzbrief Inland',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XD_2_DEKOMS',
                            operator: 'IsContaining',
                            value: 'kasko'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'XD_24_DEKOMS',
                    questionText: 'Reisepaket Ausland',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XD_2_DEKOMS',
                            operator: 'IsContaining',
                            value: 'kasko'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 17,
                    maxValue: 110,
                    type: 'Integer',
                    value: 0,
                    id: 'VZ_2_LEEFTYD',
                    questionText: 'Jüngster Fahrer',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XD_26_DEKOMS',
                            operator: 'IsContaining',
                            value: 'ja'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 17,
                    maxValue: 110,
                    type: 'Integer',
                    value: 0,
                    id: 'VZ_3_LEEFTYD',
                    questionText: 'Ältester Fahrer',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'XD_26_DEKOMS',
                            operator: 'IsContaining',
                            value: 'ja'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Decimal',
                    value: 32790,
                    id: 'OB_1_NWE',
                    questionText: 'Ungefährer Neuwert des Fahrzeugs',
                    guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                    isMandatory: true,
                    isReadonly: true,
                    optionRules: [],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'DA_6_ERB',
                    questionText: 'Selbstbeteiligung Vollkasko',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'DA_6_ERB',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'DA_2_ERB',
                    questionText: 'Selbstbeteiligung Teilkasko',
                    guideText: '<b>Selbstbeteiligung Teilkasko</b><br/>\nWarum muss bei einer Vollkaskoversicherung auch die Selbstbeteiligung Teilkasko festgelegt werden?\nIhr gewünschter Versicherungsschutz deckt Vollkasko- inkl. Teilkaskoschäden. Sie können die Selbstbeteiligung dabei jeweils individuell festlegen.',
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'DA_2_ERB',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'IK_1_AMBTENR',
                    questionText: 'Beamtenstatus',
                    guideText: '<b>Beamtenstatus</b><br/>\nFür die Berufsgruppe Beamte wird ein Rabatt gewährt.',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'IK_1_AMBTENR',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nur privat (inkl. Arbeitsweg)',
                            value: 'Nur privat (inkl. Arbeitsweg)'
                        },
                        {
                            key: 'Privat und gewerblich',
                            value: 'Privat und gewerblich'
                        },
                        {
                            key: 'Nur gewerblich',
                            value: 'Nur gewerblich'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_3_GEBRUIK',
                    questionText: 'Nutzung des Fahrzeugs',
                    guideText: '<b>Nutzung des Fahrzeugs</b><br/>\nAktuell versichern wir nur Fahrzeuge mit privater Nutzung.<br/>\n<br/>\nWas ist gewerblich?<br/>\nWird das Fahrzeug für berufliche Fahrten verwendet (z.B. Lieferdienst oder Kundenbesuche), handelt es sich um eine gewerbliche Nutzung. Die Fahrt zwischen Wohnung und Arbeitsstelle gilt als private Nutzung.\n',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_3_GEBRUIK',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: 'Nein',
                            value: 'Nein'
                        },
                        {
                            key: 'Ja',
                            value: 'Ja'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'OB_1_AANTKW',
                    questionText: 'Nachträgliches Tuning',
                    guideText: '<b>Nachträgliches Tuning</b><br/>\n',
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_AANTKW',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '-82% (Trede 39)',
                            value: '-82% (Trede 39)'
                        },
                        {
                            key: '-79% (Trede 38)',
                            value: '-79% (Trede 38)'
                        },
                        {
                            key: '-79% (Trede 37)',
                            value: '-79% (Trede 37)'
                        },
                        {
                            key: '-79% (Trede 36)',
                            value: '-79% (Trede 36)'
                        },
                        {
                            key: '-78% (Trede 35)',
                            value: '-78% (Trede 35)'
                        },
                        {
                            key: '-78% (Trede 34)',
                            value: '-78% (Trede 34)'
                        },
                        {
                            key: '-78% (Trede 33)',
                            value: '-78% (Trede 33)'
                        },
                        {
                            key: '-77% (Trede 32)',
                            value: '-77% (Trede 32)'
                        },
                        {
                            key: '-77% (Trede 31)',
                            value: '-77% (Trede 31)'
                        },
                        {
                            key: '-76% (Trede 30)',
                            value: '-76% (Trede 30)'
                        },
                        {
                            key: '-76% (Trede 29)',
                            value: '-76% (Trede 29)'
                        },
                        {
                            key: '-75% (Trede 28)',
                            value: '-75% (Trede 28)'
                        },
                        {
                            key: '-75% (Trede 27)',
                            value: '-75% (Trede 27)'
                        },
                        {
                            key: '-74% (Trede 26)',
                            value: '-74% (Trede 26)'
                        },
                        {
                            key: '-74% (Trede 25)',
                            value: '-74% (Trede 25)'
                        },
                        {
                            key: '-73% (Trede 24)',
                            value: '-73% (Trede 24)'
                        },
                        {
                            key: '-73% (Trede 23)',
                            value: '-73% (Trede 23)'
                        },
                        {
                            key: '-72% (Trede 22)',
                            value: '-72% (Trede 22)'
                        },
                        {
                            key: '-71% (Trede 21)',
                            value: '-71% (Trede 21)'
                        },
                        {
                            key: '-70% (Trede 20)',
                            value: '-70% (Trede 20)'
                        },
                        {
                            key: '-70% (Trede 19)',
                            value: '-70% (Trede 19)'
                        },
                        {
                            key: '-69% (Trede 18)',
                            value: '-69% (Trede 18)'
                        },
                        {
                            key: '-68% (Trede 17)',
                            value: '-68% (Trede 17)'
                        },
                        {
                            key: '-67% (Trede 16)',
                            value: '-67% (Trede 16)'
                        },
                        {
                            key: '-65% (Trede 15)',
                            value: '-65% (Trede 15)'
                        },
                        {
                            key: '-64% (Trede 14)',
                            value: '-64% (Trede 14)'
                        },
                        {
                            key: '-62% (Trede 13)',
                            value: '-62% (Trede 13)'
                        },
                        {
                            key: '-61% (Trede 12)',
                            value: '-61% (Trede 12)'
                        },
                        {
                            key: '-59% (Trede 11)',
                            value: '-59% (Trede 11)'
                        },
                        {
                            key: '-57% (Trede 10)',
                            value: '-57% (Trede 10)'
                        },
                        {
                            key: '-54% (Trede 9)',
                            value: '-54% (Trede 9)'
                        },
                        {
                            key: '-52% (Trede 8)',
                            value: '-52% (Trede 8)'
                        },
                        {
                            key: '-48% (Trede 7)',
                            value: '-48% (Trede 7)'
                        },
                        {
                            key: '-45% (Trede 6)',
                            value: '-45% (Trede 6)'
                        },
                        {
                            key: '-40% (Trede 5)',
                            value: '-40% (Trede 5)'
                        },
                        {
                            key: '-28% (Trede 4)',
                            value: '-28% (Trede 4)'
                        },
                        {
                            key: '-14% (Trede 3)',
                            value: '-14% (Trede 3)'
                        },
                        {
                            key: '-6% (Trede 2)',
                            value: '-6% (Trede 2)'
                        },
                        {
                            key: '35% (Trede 1)',
                            value: '35% (Trede 1)'
                        }
                    ],
                    type: 'Selection',
                    value: '-82% (Trede 39)',
                    id: 'DG_1_BMPERC',
                    questionText: 'SF Klasse',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'DG_1_BMPERC',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_15_DEKOMS',
                    questionText: 'Prämie Freie Werkstattwahl',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_15_DEKOMS',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_16_DEKOMS',
                    questionText: 'Prämie Rabattschutz',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_16_DEKOMS',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_17_DEKOMS',
                    questionText: 'Prämie Fahrerschutzversicherung',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_17_DEKOMS',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_18_DEKOMS',
                    questionText: 'Prämie Schutzbrief Inland',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_18_DEKOMS',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    currencySign: '€',
                    minValue: 0,
                    maxValue: null,
                    precision: 2,
                    type: 'Currency',
                    value: 0,
                    id: 'XD_19_DEKOMS',
                    questionText: 'Prämie Reisepaket Ausland',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: true,
                    optionRules: [
                        {
                            id: 'XD_19_DEKOMS',
                            operator: 'IsNotEqualTo',
                            value: '0,00'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: 0,
                    maxValue: null,
                    type: 'Integer',
                    value: 0,
                    id: 'RI_1_SCHDVR',
                    questionText: 'Fictieve SVJ',
                    guideText: null,
                    isMandatory: false,
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'RI_1_SCHDVR',
                            operator: 'IsEqualTo',
                            value: 'onzichtbaar'
                        }
                    ],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    minValue: '2017-07-11T00:00:00+02:00',
                    maxValue: null,
                    type: 'DateTime',
                    value: '11.07.2017',
                    id: 'Contract_1_DateStart',
                    questionText: 'Anfangsdatum',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    items: [
                        {
                            key: '1',
                            value: 'Pro Monat'
                        },
                        {
                            key: '3',
                            value: 'Vierteljährlich'
                        },
                        {
                            key: '6',
                            value: 'Pro Halbjahr'
                        },
                        {
                            key: '12',
                            value: 'Jährlich'
                        }
                    ],
                    type: 'Selection',
                    value: null,
                    id: 'Contract_1_PaymentInterval',
                    questionText: 'Zahlungsintervall',
                    guideText: null,
                    isMandatory: true,
                    isReadonly: false,
                    optionRules: [],
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: true
                },
                {
                    type: 'String',
                    id: 'RI_0_SCHDVR',
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'RI_2_SCHDVR',
                            operator: 'IsContaining',
                            value: 'erste'
                        }
                    ],
                    questionText: 'Deine voraussichtliche Schadenfreiheitsklasse',
                    value: 'SF 1/2',
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: false
                },
                {
                    type: 'String',
                    id: 'OB_0_KENTEKE',
                    isReadonly: false,
                    optionRules: [
                        {
                            id: 'OB_1_KENTEKE',
                            operator: 'IsContaining',
                            value: 'Daten'
                        }
                    ],
                    value: 'test',
                    questionText: 'Dein Fahrzeug',
                    optionUses: [
                        'Calculation',
                        'SaveProduct'
                    ],
                    isRelevant: false
                }
            ],
                insuranceDocuments: [
                {
                    url: 'https://webapi.friday.de/DIVPublic/voorwaarden/Allgemeinebedingungen.pdf',
                    type: 'generalTerms',
                    caption: 'Allgemeine Bedingungen'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/Allgemeinebedingungen.pdf',
                    type: 'generalTerms',
                    caption: 'Allgemeine Bedingungen'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/Voorwaarden/Verbraucherschutzdokumente.pdf',
                    type: 'productTerms',
                    caption: 'Verbraucherschutzdokumente'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/Verbraucherschutzdokumente.pdf',
                    type: 'productTerms',
                    caption: 'Verbraucherschutzdokumente'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/Voorwaarden/Sondervertragsregelungen.pdf',
                    type: 'productTerms',
                    caption: 'Sondervertragsregelungen'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/Sondervertragsregelungen.pdf',
                    type: 'productTerms',
                    caption: 'Sondervertragsregelungen'
                },
                {
                    url: 'https://webapi.friday.de/DIVPublic/ConfirmationStatement.aspx?InstanceId=270',
                    type: 'confirmationStatement',
                    caption: 'Bestätigung Erklärung'
                }
            ],
                pool: {
                name: 'FRIDAY',
                    poolPartners: [
                    {
                        name: 'Hasselhoff',
                        percentage: 100
                    }
                ]
            },
            signee: {
                signText: '',
                    signNameCompany: '',
                    signPlace: 'Berlin'
            },
            lookupDataServiceDefinitions: [
                {
                    service: {
                        url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax.HsnTsn/YearHsnTsnStep?parameters=entity:OB isHsnTsn:True powerRangeGroup:1 vehType:10 langCode:DEDE entitySequenceNumber:1',
                        name: 'DIV.LookupService.Vehicle.DE.Eurotax.HsnTsn_OB_True_1_10_DEDE_1',
                        step: 'YearHsnTsnStep'
                    },
                    inputIds: [
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'AFGDL1'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 2,
                            subEntity: 'KENTEKE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 3,
                            subEntity: 'KENTEKE'
                        }
                    ],
                    outputIds: [
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'MERK'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'MODEL'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'TYPE_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'AFGDL1'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'HorsePower'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'HorsePower_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'BRANSTO'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'BRANSTO_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'NWE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'OBJSRT'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 3,
                            subEntity: 'KENTEKE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 2,
                            subEntity: 'KENTEKE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 5,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 6,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 2,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 4,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 3,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'GEBRUIK'
                        }
                    ]
                },
                {
                    service: {
                        url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax/ModelsByMakeStep?parameters=langCode:DEDE vehType:10 entitySequenceNumber:1 entity:OB powerRangeGroup:1',
                        name: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                        step: 'ModelsByMakeStep'
                    },
                    inputIds: [
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'MERK'
                        }
                    ],
                    outputIds: [
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'MERK'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'MODEL'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'TYPE_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'AFGDL1'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'HorsePower'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'HorsePower_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'BRANSTO'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'BRANSTO_SELECTION'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'NWE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'OBJSRT'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 3,
                            subEntity: 'KENTEKE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 2,
                            subEntity: 'KENTEKE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 5,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 6,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 2,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 4,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 3,
                            subEntity: 'TYPE'
                        },
                        {
                            entity: 'OB',
                            entitySequenceNumber: 1,
                            subEntity: 'GEBRUIK'
                        }
                    ]
                }
            ]
        },
        list: [
            {
                id: 104577,
                name: 'Dekking Alpha Fahrerschutzversicherung',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104575,
                name: 'Dekking Alpha Freie Werkstattwahl',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104571,
                name: 'Dekking Alpha Haftplicht',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104576,
                name: 'Dekking Alpha Rabattschutz',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104579,
                name: 'Dekking Alpha Reisepaket Ausland',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104578,
                name: 'Dekking Alpha Schutzbrief Inland',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104572,
                name: 'Dekking Alpha Teilkasko',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104573,
                name: 'Dekking Alpha Teilkasko Plus',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104574,
                name: 'Dekking Alpha Vollkasko',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104580,
                name: 'Dekking Alpha Weitere Fahrer',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104582,
                name: 'FRIDAY',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104570,
                name: 'FRIDAY_Old_20170619',
                productGroup: 'PERSONAUTO'
            },
            {
                id: 104581,
                name: 'Has',
                productGroup: 'PERSONAUTO'
            }
        ]
    },
    form: {
        calculation: {
            values: {
                XO_1_VERZEKERDESOM: 'Ich will meine Versicherung wechseln',
                    OB_6_AFGDL1: '2004',
                    OB_1_KENTEKE: 'Fahrzeug aus der Liste wählen',
                    OB_2_KENTEKE: '7118',
                    OB_0_KENTEKE: 'test',
                    OB_1_MERK: 'MAZDA',
                    OB_1_MODEL: '6 (Limousine)',
                    OB_1_TYPE: '2.2 SKYACTIV-D Aut. (150 PS/110 KW)',
                    OB_1_AFGDL1: '2017',
                    OB_2_GEBRUIK: 'bis 3.000 km',
                    VZ_1_LEEFTYD: '1985',
                    OB_1_PCODE: '12345',
                    RI_2_SCHDVR: 'SF-Klasse auswählen',
                    RI_3_SCHDVR: 'SF2',
                    RI_0_SCHDVR: 'SF 1/2',
                    OB_4_AFGDL1: '05',
                    OB_3_AFGDL1: '05',
                    OB_3_KENTEKE: 'AFO',
                    OB_1_BRANSTO: 'Diesel',
                    OB_1_HorsePower: '150',
                    OB_1_GEBRUIK: '2191',
                    OB_1_NWE: '32790'
            },
            initial: {
                XO_1_VERZEKERDESOM: null,
                    OB_6_AFGDL1: null,
                    OB_1_KENTEKE: null,
                    OB_2_KENTEKE: '',
                    OB_0_KENTEKE: 'test',
                    OB_1_MERK: null,
                    OB_1_MODEL: null,
                    OB_1_TYPE: '',
                    OB_1_AFGDL1: null,
                    OB_2_GEBRUIK: null,
                    VZ_1_LEEFTYD: null,
                    OB_1_PCODE: '',
                    RI_2_SCHDVR: null,
                    RI_3_SCHDVR: null,
                    RI_0_SCHDVR: 'SF 1/2'
            },
            registeredFields: [
                {
                    name: 'XO_1_VERZEKERDESOM',
                    type: 'Field'
                },
                {
                    name: 'OB_6_AFGDL1',
                    type: 'Field'
                },
                {
                    name: 'OB_4_AFGDL1',
                    type: 'Field'
                },
                {
                    name: 'OB_1_KENTEKE',
                    type: 'Field'
                },
                {
                    name: 'OB_1_MERK',
                    type: 'Field'
                },
                {
                    name: 'OB_1_MODEL',
                    type: 'Field'
                },
                {
                    name: 'OB_1_TYPE',
                    type: 'Field'
                },
                {
                    name: 'OB_1_AFGDL1',
                    type: 'Field'
                },
                {
                    name: 'OB_3_AFGDL1',
                    type: 'Field'
                },
                {
                    name: 'OB_2_GEBRUIK',
                    type: 'Field'
                },
                {
                    name: 'VZ_1_LEEFTYD',
                    type: 'Field'
                },
                {
                    name: 'OB_1_PCODE',
                    type: 'Field'
                },
                {
                    name: 'RI_2_SCHDVR',
                    type: 'Field'
                },
                {
                    name: 'RI_3_SCHDVR',
                    type: 'Field'
                }
            ],
                fields: {
                VZ_1_LEEFTYD: {
                    visited: true,
                        touched: true
                },
                OB_1_PCODE: {
                    visited: true,
                        touched: true
                }
            },
            anyTouched: true
        }
    },
    auth: {
        user: null,
            loginErrorMessage: '',
            resetPasswordErrorMessage: '',
            isLoginLoading: false,
            isRegisterByEmailLoading: false,
            isVerifyEmailLoading: false,
            isPasswordResetLoading: false,
            isPasswordResetDone: false,
            registrationEmail: '',
            verifyEmail: '',
            emailVerified: false
    },
    customer: {
        paymentMethods: [],
            isLoadingPaymentMethod: false
    },
    stepper: {
        activeStepIndex: 0,
            currentQuestionIndex: 12,
            helpScreen: {
            isOpen: false,
                content: '',
                title: ''
        },
        steps: [
            {
                type: 'calculation',
                questionIds: [
                    'XO_1_VERZEKERDESOM',
                    'OB_6_AFGDL1',
                    'OB_1_KENTEKE',
                    'OB_2_KENTEKE',
                    'OB_0_KENTEKE',
                    'OB_1_MERK',
                    'OB_1_MODEL',
                    'OB_1_TYPE',
                    'OB_1_AFGDL1',
                    'OB_2_GEBRUIK',
                    'VZ_1_LEEFTYD',
                    'OB_1_PCODE',
                    'RI_2_SCHDVR',
                    'RI_3_SCHDVR',
                    'RI_0_SCHDVR'
                ],
                options: [
                    {
                        items: [
                            {
                                key: 'Fahrzeug aus der Liste wählen',
                                value: 'Fahrzeug aus der Liste wählen'
                            },
                            {
                                key: 'Daten vom Fahrzeugschein eingeben',
                                value: 'Daten vom Fahrzeugschein eingeben'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_KENTEKE',
                        questionText: 'Welches Fahrzeug möchtest du versichern?',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 4,
                        regex: {
                            pattern: '^\\d{4}$',
                            message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                            options: ''
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_2_KENTEKE',
                        questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                        guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    },
                    {
                        maxLength: 3,
                        regex: {
                            pattern: '^[a-zA-Z\\d]{3}$',
                            message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                            options: ''
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_3_KENTEKE',
                        questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                        guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'ALFA ROMEO',
                                value: 'ALFA ROMEO'
                            },
                            {
                                key: 'ALPINA',
                                value: 'ALPINA'
                            },
                            {
                                key: 'AUDI',
                                value: 'AUDI'
                            },
                            {
                                key: 'BENTLEY',
                                value: 'BENTLEY'
                            },
                            {
                                key: 'BMW',
                                value: 'BMW'
                            },
                            {
                                key: 'CADILLAC',
                                value: 'CADILLAC'
                            },
                            {
                                key: 'CHEVROLET',
                                value: 'CHEVROLET'
                            },
                            {
                                key: 'CHRYSLER',
                                value: 'CHRYSLER'
                            },
                            {
                                key: 'CITROEN',
                                value: 'CITROEN'
                            },
                            {
                                key: 'CORVETTE',
                                value: 'CORVETTE'
                            },
                            {
                                key: 'DACIA',
                                value: 'DACIA'
                            },
                            {
                                key: 'DAEWOO',
                                value: 'DAEWOO'
                            },
                            {
                                key: 'DAIHATSU',
                                value: 'DAIHATSU'
                            },
                            {
                                key: 'DODGE',
                                value: 'DODGE'
                            },
                            {
                                key: 'FERRARI',
                                value: 'FERRARI'
                            },
                            {
                                key: 'FIAT',
                                value: 'FIAT'
                            },
                            {
                                key: 'FORD',
                                value: 'FORD'
                            },
                            {
                                key: 'HONDA',
                                value: 'HONDA'
                            },
                            {
                                key: 'HYUNDAI',
                                value: 'HYUNDAI'
                            },
                            {
                                key: 'INFINITI',
                                value: 'INFINITI'
                            },
                            {
                                key: 'IVECO',
                                value: 'IVECO'
                            },
                            {
                                key: 'JAGUAR',
                                value: 'JAGUAR'
                            },
                            {
                                key: 'JEEP',
                                value: 'JEEP'
                            },
                            {
                                key: 'KIA',
                                value: 'KIA'
                            },
                            {
                                key: 'LADA',
                                value: 'LADA'
                            },
                            {
                                key: 'LANCIA',
                                value: 'LANCIA'
                            },
                            {
                                key: 'LAND ROVER',
                                value: 'LAND ROVER'
                            },
                            {
                                key: 'LANDWIND',
                                value: 'LANDWIND'
                            },
                            {
                                key: 'LEXUS',
                                value: 'LEXUS'
                            },
                            {
                                key: 'MASERATI',
                                value: 'MASERATI'
                            },
                            {
                                key: 'MAYBACH',
                                value: 'MAYBACH'
                            },
                            {
                                key: 'MAZDA',
                                value: 'MAZDA'
                            },
                            {
                                key: 'MCLAREN',
                                value: 'MCLAREN'
                            },
                            {
                                key: 'MERCEDES-BENZ',
                                value: 'MERCEDES-BENZ'
                            },
                            {
                                key: 'MG',
                                value: 'MG'
                            },
                            {
                                key: 'MINI (BMW)',
                                value: 'MINI (BMW)'
                            },
                            {
                                key: 'MITSUBISHI',
                                value: 'MITSUBISHI'
                            },
                            {
                                key: 'NISSAN',
                                value: 'NISSAN'
                            },
                            {
                                key: 'OPEL',
                                value: 'OPEL'
                            },
                            {
                                key: 'PEUGEOT',
                                value: 'PEUGEOT'
                            },
                            {
                                key: 'PORSCHE',
                                value: 'PORSCHE'
                            },
                            {
                                key: 'RENAULT',
                                value: 'RENAULT'
                            },
                            {
                                key: 'ROLLS ROYCE',
                                value: 'ROLLS ROYCE'
                            },
                            {
                                key: 'ROVER',
                                value: 'ROVER'
                            },
                            {
                                key: 'SAAB',
                                value: 'SAAB'
                            },
                            {
                                key: 'SANTANA',
                                value: 'SANTANA'
                            },
                            {
                                key: 'SEAT',
                                value: 'SEAT'
                            },
                            {
                                key: 'SKODA',
                                value: 'SKODA'
                            },
                            {
                                key: 'SMART',
                                value: 'SMART'
                            },
                            {
                                key: 'SSANGYONG',
                                value: 'SSANGYONG'
                            },
                            {
                                key: 'SUBARU',
                                value: 'SUBARU'
                            },
                            {
                                key: 'SUZUKI',
                                value: 'SUZUKI'
                            },
                            {
                                key: 'TATA',
                                value: 'TATA'
                            },
                            {
                                key: 'TESLA',
                                value: 'TESLA'
                            },
                            {
                                key: 'TOYOTA',
                                value: 'TOYOTA'
                            },
                            {
                                key: 'VOLKSWAGEN (VW)',
                                value: 'VOLKSWAGEN (VW)'
                            },
                            {
                                key: 'VOLVO',
                                value: 'VOLVO'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_MERK',
                        questionText: 'Von welcher Marke ist dein Fahrzeug?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '',
                                value: ''
                            },
                            {
                                key: '_',
                                value: '_'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_MODEL',
                        questionText: 'Welches Modell hast du?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 100,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_1_TYPE',
                        questionText: 'Welchen Motor hast du?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1,
                        maxValue: 12,
                        type: 'Integer',
                        value: null,
                        id: 'OB_3_AFGDL1',
                        questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2017,
                        type: 'Integer',
                        value: null,
                        id: 'OB_1_AFGDL1',
                        questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Ich will meine Versicherung wechseln',
                                value: 'Ich will meine Versicherung wechseln'
                            },
                            {
                                key: 'Ich habe keine Versicherung',
                                value: 'Ich habe keine Versicherung'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XO_1_VERZEKERDESOM',
                        questionText: 'Was trifft auf dich zu?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1,
                        maxValue: 12,
                        type: 'Integer',
                        value: null,
                        id: 'OB_4_AFGDL1',
                        questionText: 'Seit wann besitzt du das Auto?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2017,
                        type: 'Integer',
                        value: null,
                        id: 'OB_6_AFGDL1',
                        questionText: 'Seit wann besitzt du das Auto?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XO_1_VERZEKERDESOM',
                                operator: 'IsContaining',
                                value: 'will meine'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_1_GEBRUIK',
                        questionText: 'Hubraum',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_GEBRUIK',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            },
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_1_HorsePower',
                        questionText: 'PS',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Diesel',
                                value: 'Diesel'
                            },
                            {
                                key: 'Benzin',
                                value: 'Benzin'
                            },
                            {
                                key: 'Elektro/Hybrid',
                                value: 'Elektro/Hybrid'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_BRANSTO',
                        questionText: 'Kraftstoff',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: null,
                        id: 'OB_2_TYPE',
                        questionText: 'Typklasse Haftpflicht',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_2_TYPE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_5_TYPE',
                        questionText: 'TDE Ins Full',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_5_TYPE',
                                operator: 'IsEqualTo',
                                value: '0'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_6_TYPE',
                        questionText: 'TDE Ins Part',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_6_TYPE',
                                operator: 'IsEqualTo',
                                value: '0'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'bis 3.000 km',
                                value: 'bis 3.000 km'
                            },
                            {
                                key: 'bis 6.000 km',
                                value: 'bis 6.000 km'
                            },
                            {
                                key: 'bis 9.000 km',
                                value: 'bis 9.000 km'
                            },
                            {
                                key: 'bis 12.000 km',
                                value: 'bis 12.000 km'
                            },
                            {
                                key: 'bis 15.000 km',
                                value: 'bis 15.000 km'
                            },
                            {
                                key: 'bis 20.000 km',
                                value: 'bis 20.000 km'
                            },
                            {
                                key: 'bis 25.000 km',
                                value: 'bis 25.000 km'
                            },
                            {
                                key: 'bis 30.000 km',
                                value: 'bis 30.000 km'
                            },
                            {
                                key: 'mehr als 30.000 km',
                                value: 'mehr als 30.000 km'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_2_GEBRUIK',
                        questionText: 'Wie viele Kilometer fährst du durchschnittlich pro Jahr?',
                        guideText: '<p><i>Folgende Informationen können dir helfen, die richtige Jahresfahrleistung zu wählen:</i></p>\n<ul>\n\t<li>Grundsätzlich fahren Menschen, die <b>auf dem Land leben</b>, <b>mehr Kilometer pro Jahr</b> als Menschen in der Stadt.</li>\n\t<li>Fahrer, die das Auto nur <b>gelegentlich für Ausflüge oder zum Einkaufen</b> nutzen, sollten mit einer Jahresfahrleistung von <b>bis zu 6.000 km</b> rechnen.</li>\n\t<li>Fahrer, die mit dem Auto <b>regelmaßig die gleiche Strecke zur Arbeit</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 12.000 km</b> rechnen.</li>\n\t<li>Fahrer, die das Auto regelmaßig für die Arbeit und Freizeit nutzen und <b>oft weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 20.000 km</b> rechnen.</li>\n\t<li>Fahrer, die <b>regelmaßig weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 30.000 km</b> rechnen.</li>\n</ul>',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2000,
                        type: 'Integer',
                        value: null,
                        id: 'VZ_1_LEEFTYD',
                        questionText: 'In welchem Jahr wurdest du geboren?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: {
                            options: 'IgnoreCase',
                            pattern: '^\\d{5}$',
                            resourceKey: {
                                className: 'Resource_Customer',
                                propertyName: 'ZipCodeRegExMessage'
                            },
                            message: 'Ungültige Eingabe (12345)'
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_1_PCODE',
                        questionText: 'Wie lautet deine Postleitzahl?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'SF-Klasse auswählen',
                                value: 'SF-Klasse auswählen'
                            },
                            {
                                key: 'Dies ist meine erste KFZ-Versicherung',
                                value: 'Dies ist meine erste KFZ-Versicherung'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'RI_2_SCHDVR',
                        questionText: 'Wie lautet die Schadenfreiheitsklasse (SF- Klasse) deiner KFZ- Haftpflicht-Versicherung?',
                        guideText: '<p>Die Schadenfreiheitsklasse (SF-Klasse) zeigt an, wie viele Jahre du unfallfrei Auto gefahren bist.</p>\n<p>Mit jedem schadenfreien Jahr verbessert sich deine SF-Klasse - und damit verringert sich auch meist die Höhe deiner Versicherungsprämie.</p>\n<p>Wechselst du deine Versicherung, sprechen wir uns mit deinem letzten Versicherer ab und übernehmen deine bestehende SF-Klasse. Damit wir für unser Angebot nicht auf die Rückmeldung deines letzten Versicherers warten müssen, brauchen wir die Information bereits jetzt von dir.</p>\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'M',
                                value: 'M'
                            },
                            {
                                key: '0',
                                value: '0'
                            },
                            {
                                key: 'S',
                                value: 'S'
                            },
                            {
                                key: 'SF1/2',
                                value: 'SF1/2'
                            },
                            {
                                key: 'SF1',
                                value: 'SF1'
                            },
                            {
                                key: 'SF2',
                                value: 'SF2'
                            },
                            {
                                key: 'SF3',
                                value: 'SF3'
                            },
                            {
                                key: 'SF4',
                                value: 'SF4'
                            },
                            {
                                key: 'SF5',
                                value: 'SF5'
                            },
                            {
                                key: 'SF6',
                                value: 'SF6'
                            },
                            {
                                key: 'SF7',
                                value: 'SF7'
                            },
                            {
                                key: 'SF8',
                                value: 'SF8'
                            },
                            {
                                key: 'SF9',
                                value: 'SF9'
                            },
                            {
                                key: 'SF10',
                                value: 'SF10'
                            },
                            {
                                key: 'SF11',
                                value: 'SF11'
                            },
                            {
                                key: 'SF12',
                                value: 'SF12'
                            },
                            {
                                key: 'SF13',
                                value: 'SF13'
                            },
                            {
                                key: 'SF14',
                                value: 'SF14'
                            },
                            {
                                key: 'SF15',
                                value: 'SF15'
                            },
                            {
                                key: 'SF16',
                                value: 'SF16'
                            },
                            {
                                key: 'SF17',
                                value: 'SF17'
                            },
                            {
                                key: 'SF18',
                                value: 'SF18'
                            },
                            {
                                key: 'SF19',
                                value: 'SF19'
                            },
                            {
                                key: 'SF20',
                                value: 'SF20'
                            },
                            {
                                key: 'SF21',
                                value: 'SF21'
                            },
                            {
                                key: 'SF22',
                                value: 'SF22'
                            },
                            {
                                key: 'SF23',
                                value: 'SF23'
                            },
                            {
                                key: 'SF24',
                                value: 'SF24'
                            },
                            {
                                key: 'SF25',
                                value: 'SF25'
                            },
                            {
                                key: 'SF26',
                                value: 'SF26'
                            },
                            {
                                key: 'SF27',
                                value: 'SF27'
                            },
                            {
                                key: 'SF28',
                                value: 'SF28'
                            },
                            {
                                key: 'SF29',
                                value: 'SF29'
                            },
                            {
                                key: 'SF30',
                                value: 'SF30'
                            },
                            {
                                key: 'SF31',
                                value: 'SF31'
                            },
                            {
                                key: 'SF32',
                                value: 'SF32'
                            },
                            {
                                key: 'SF33',
                                value: 'SF33'
                            },
                            {
                                key: 'SF34',
                                value: 'SF34'
                            },
                            {
                                key: 'SF35',
                                value: 'SF35'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'RI_3_SCHDVR',
                        questionText: 'Wähle deine Schadenfreiheitsklasse für die KFZ-Haftpflicht-Versicherung',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'SF-Klasse auswählen'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'RI_4_SCHDVR',
                        questionText: 'Schadenfreiheitsklasse Vollkasko (SF)',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_4_SCHDVR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_2_AFGDL1',
                        questionText: 'Jahr der Erstversicherung\n',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_2_AFGDL1',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'BS_1_INCIDENT',
                        questionText: 'Hast du jemals einen Schaden selbst verursacht?\n',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'nein'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: '1800-01-01T00:00:00+01:00',
                        maxValue: '9999-12-31T23:59:59.9999999+01:00',
                        type: 'DateTime',
                        value: null,
                        id: 'RI_1_8SCHADE',
                        questionText: 'Wann war dein letzter selbst verursachter Schaden?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'BS_1_INCIDENT',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'DG_2_BMPERC',
                        questionText: 'Voraussichtliche SF-Klasse',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DG_2_BMPERC',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_11_DEKOMS',
                        questionText: 'Prämie Haftpflicht',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_11_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_12_DEKOMS',
                        questionText: 'Prämie Teilkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_12_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_13_DEKOMS',
                        questionText: 'Prämie Teilkasko Plus',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_13_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_14_DEKOMS',
                        questionText: 'Prämie Vollkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_14_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Treffen Sie Ihre Wahl',
                                value: 'Treffen Sie Ihre Wahl'
                            },
                            {
                                key: 'Haftpflicht',
                                value: 'Haftpflicht'
                            },
                            {
                                key: 'Teilkasko',
                                value: 'Teilkasko'
                            },
                            {
                                key: 'Teilkasko Plus',
                                value: 'Teilkasko Plus'
                            },
                            {
                                key: 'Vollkasko',
                                value: 'Vollkasko'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_2_DEKOMS',
                        questionText: 'Deckung',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_26_DEKOMS',
                        questionText: 'Weitere Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_20_DEKOMS',
                        questionText: 'Freie Werkstattwahl',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_21_DEKOMS',
                        questionText: 'Rabattschutz',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_22_DEKOMS',
                        questionText: 'Fahrerschutz',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_23_DEKOMS',
                        questionText: 'Schutzbrief Inland',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_24_DEKOMS',
                        questionText: 'Reisepaket Ausland',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 17,
                        maxValue: 110,
                        type: 'Integer',
                        value: 0,
                        id: 'VZ_2_LEEFTYD',
                        questionText: 'Jüngster Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_26_DEKOMS',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 17,
                        maxValue: 110,
                        type: 'Integer',
                        value: 0,
                        id: 'VZ_3_LEEFTYD',
                        questionText: 'Ältester Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_26_DEKOMS',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Decimal',
                        value: 0,
                        id: 'OB_1_NWE',
                        questionText: 'Ungefährer Neuwert des Fahrzeugs',
                        guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'DA_6_ERB',
                        questionText: 'Selbstbeteiligung Vollkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DA_6_ERB',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'DA_2_ERB',
                        questionText: 'Selbstbeteiligung Teilkasko',
                        guideText: '<b>Selbstbeteiligung Teilkasko</b><br/>\nWarum muss bei einer Vollkaskoversicherung auch die Selbstbeteiligung Teilkasko festgelegt werden?\nIhr gewünschter Versicherungsschutz deckt Vollkasko- inkl. Teilkaskoschäden. Sie können die Selbstbeteiligung dabei jeweils individuell festlegen.',
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DA_2_ERB',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'IK_1_AMBTENR',
                        questionText: 'Beamtenstatus',
                        guideText: '<b>Beamtenstatus</b><br/>\nFür die Berufsgruppe Beamte wird ein Rabatt gewährt.',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'IK_1_AMBTENR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nur privat (inkl. Arbeitsweg)',
                                value: 'Nur privat (inkl. Arbeitsweg)'
                            },
                            {
                                key: 'Privat und gewerblich',
                                value: 'Privat und gewerblich'
                            },
                            {
                                key: 'Nur gewerblich',
                                value: 'Nur gewerblich'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_3_GEBRUIK',
                        questionText: 'Nutzung des Fahrzeugs',
                        guideText: '<b>Nutzung des Fahrzeugs</b><br/>\nAktuell versichern wir nur Fahrzeuge mit privater Nutzung.<br/>\n<br/>\nWas ist gewerblich?<br/>\nWird das Fahrzeug für berufliche Fahrten verwendet (z.B. Lieferdienst oder Kundenbesuche), handelt es sich um eine gewerbliche Nutzung. Die Fahrt zwischen Wohnung und Arbeitsstelle gilt als private Nutzung.\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_3_GEBRUIK',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_AANTKW',
                        questionText: 'Nachträgliches Tuning',
                        guideText: '<b>Nachträgliches Tuning</b><br/>\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_AANTKW',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '-82% (Trede 39)',
                                value: '-82% (Trede 39)'
                            },
                            {
                                key: '-79% (Trede 38)',
                                value: '-79% (Trede 38)'
                            },
                            {
                                key: '-79% (Trede 37)',
                                value: '-79% (Trede 37)'
                            },
                            {
                                key: '-79% (Trede 36)',
                                value: '-79% (Trede 36)'
                            },
                            {
                                key: '-78% (Trede 35)',
                                value: '-78% (Trede 35)'
                            },
                            {
                                key: '-78% (Trede 34)',
                                value: '-78% (Trede 34)'
                            },
                            {
                                key: '-78% (Trede 33)',
                                value: '-78% (Trede 33)'
                            },
                            {
                                key: '-77% (Trede 32)',
                                value: '-77% (Trede 32)'
                            },
                            {
                                key: '-77% (Trede 31)',
                                value: '-77% (Trede 31)'
                            },
                            {
                                key: '-76% (Trede 30)',
                                value: '-76% (Trede 30)'
                            },
                            {
                                key: '-76% (Trede 29)',
                                value: '-76% (Trede 29)'
                            },
                            {
                                key: '-75% (Trede 28)',
                                value: '-75% (Trede 28)'
                            },
                            {
                                key: '-75% (Trede 27)',
                                value: '-75% (Trede 27)'
                            },
                            {
                                key: '-74% (Trede 26)',
                                value: '-74% (Trede 26)'
                            },
                            {
                                key: '-74% (Trede 25)',
                                value: '-74% (Trede 25)'
                            },
                            {
                                key: '-73% (Trede 24)',
                                value: '-73% (Trede 24)'
                            },
                            {
                                key: '-73% (Trede 23)',
                                value: '-73% (Trede 23)'
                            },
                            {
                                key: '-72% (Trede 22)',
                                value: '-72% (Trede 22)'
                            },
                            {
                                key: '-71% (Trede 21)',
                                value: '-71% (Trede 21)'
                            },
                            {
                                key: '-70% (Trede 20)',
                                value: '-70% (Trede 20)'
                            },
                            {
                                key: '-70% (Trede 19)',
                                value: '-70% (Trede 19)'
                            },
                            {
                                key: '-69% (Trede 18)',
                                value: '-69% (Trede 18)'
                            },
                            {
                                key: '-68% (Trede 17)',
                                value: '-68% (Trede 17)'
                            },
                            {
                                key: '-67% (Trede 16)',
                                value: '-67% (Trede 16)'
                            },
                            {
                                key: '-65% (Trede 15)',
                                value: '-65% (Trede 15)'
                            },
                            {
                                key: '-64% (Trede 14)',
                                value: '-64% (Trede 14)'
                            },
                            {
                                key: '-62% (Trede 13)',
                                value: '-62% (Trede 13)'
                            },
                            {
                                key: '-61% (Trede 12)',
                                value: '-61% (Trede 12)'
                            },
                            {
                                key: '-59% (Trede 11)',
                                value: '-59% (Trede 11)'
                            },
                            {
                                key: '-57% (Trede 10)',
                                value: '-57% (Trede 10)'
                            },
                            {
                                key: '-54% (Trede 9)',
                                value: '-54% (Trede 9)'
                            },
                            {
                                key: '-52% (Trede 8)',
                                value: '-52% (Trede 8)'
                            },
                            {
                                key: '-48% (Trede 7)',
                                value: '-48% (Trede 7)'
                            },
                            {
                                key: '-45% (Trede 6)',
                                value: '-45% (Trede 6)'
                            },
                            {
                                key: '-40% (Trede 5)',
                                value: '-40% (Trede 5)'
                            },
                            {
                                key: '-28% (Trede 4)',
                                value: '-28% (Trede 4)'
                            },
                            {
                                key: '-14% (Trede 3)',
                                value: '-14% (Trede 3)'
                            },
                            {
                                key: '-6% (Trede 2)',
                                value: '-6% (Trede 2)'
                            },
                            {
                                key: '35% (Trede 1)',
                                value: '35% (Trede 1)'
                            }
                        ],
                        type: 'Selection',
                        value: '-82% (Trede 39)',
                        id: 'DG_1_BMPERC',
                        questionText: 'SF Klasse',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DG_1_BMPERC',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_15_DEKOMS',
                        questionText: 'Prämie Freie Werkstattwahl',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_15_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_16_DEKOMS',
                        questionText: 'Prämie Rabattschutz',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_16_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_17_DEKOMS',
                        questionText: 'Prämie Fahrerschutzversicherung',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_17_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_18_DEKOMS',
                        questionText: 'Prämie Schutzbrief Inland',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_18_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_19_DEKOMS',
                        questionText: 'Prämie Reisepaket Ausland',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_19_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'RI_1_SCHDVR',
                        questionText: 'Fictieve SVJ',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_1_SCHDVR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: '2017-07-11T00:00:00+02:00',
                        maxValue: null,
                        type: 'DateTime',
                        value: '11.07.2017',
                        id: 'Contract_1_DateStart',
                        questionText: 'Anfangsdatum',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '1',
                                value: 'Pro Monat'
                            },
                            {
                                key: '3',
                                value: 'Vierteljährlich'
                            },
                            {
                                key: '6',
                                value: 'Pro Halbjahr'
                            },
                            {
                                key: '12',
                                value: 'Jährlich'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'Contract_1_PaymentInterval',
                        questionText: 'Zahlungsintervall',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        type: 'String',
                        id: 'RI_0_SCHDVR',
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'erste'
                            }
                        ],
                        questionText: 'Deine voraussichtliche Schadenfreiheitsklasse',
                        value: 'SF 1/2',
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    },
                    {
                        type: 'String',
                        id: 'OB_0_KENTEKE',
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        value: 'test',
                        questionText: 'Dein Fahrzeug',
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    }
                ],
                stepIndex: 0,
                isOpen: true
            },
            {
                type: 'saveContract',
                questionIds: [
                    'XD_2_DEKOMS',
                    'XD_21_DEKOMS'
                ],
                options: [
                    {
                        items: [
                            {
                                key: 'Fahrzeug aus der Liste wählen',
                                value: 'Fahrzeug aus der Liste wählen'
                            },
                            {
                                key: 'Daten vom Fahrzeugschein eingeben',
                                value: 'Daten vom Fahrzeugschein eingeben'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_KENTEKE',
                        questionText: 'Welches Fahrzeug möchtest du versichern?',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 4,
                        regex: {
                            pattern: '^\\d{4}$',
                            message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                            options: ''
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_2_KENTEKE',
                        questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                        guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    },
                    {
                        maxLength: 3,
                        regex: {
                            pattern: '^[a-zA-Z\\d]{3}$',
                            message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                            options: ''
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_3_KENTEKE',
                        questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                        guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'ALFA ROMEO',
                                value: 'ALFA ROMEO'
                            },
                            {
                                key: 'ALPINA',
                                value: 'ALPINA'
                            },
                            {
                                key: 'AUDI',
                                value: 'AUDI'
                            },
                            {
                                key: 'BENTLEY',
                                value: 'BENTLEY'
                            },
                            {
                                key: 'BMW',
                                value: 'BMW'
                            },
                            {
                                key: 'CADILLAC',
                                value: 'CADILLAC'
                            },
                            {
                                key: 'CHEVROLET',
                                value: 'CHEVROLET'
                            },
                            {
                                key: 'CHRYSLER',
                                value: 'CHRYSLER'
                            },
                            {
                                key: 'CITROEN',
                                value: 'CITROEN'
                            },
                            {
                                key: 'CORVETTE',
                                value: 'CORVETTE'
                            },
                            {
                                key: 'DACIA',
                                value: 'DACIA'
                            },
                            {
                                key: 'DAEWOO',
                                value: 'DAEWOO'
                            },
                            {
                                key: 'DAIHATSU',
                                value: 'DAIHATSU'
                            },
                            {
                                key: 'DODGE',
                                value: 'DODGE'
                            },
                            {
                                key: 'FERRARI',
                                value: 'FERRARI'
                            },
                            {
                                key: 'FIAT',
                                value: 'FIAT'
                            },
                            {
                                key: 'FORD',
                                value: 'FORD'
                            },
                            {
                                key: 'HONDA',
                                value: 'HONDA'
                            },
                            {
                                key: 'HYUNDAI',
                                value: 'HYUNDAI'
                            },
                            {
                                key: 'INFINITI',
                                value: 'INFINITI'
                            },
                            {
                                key: 'IVECO',
                                value: 'IVECO'
                            },
                            {
                                key: 'JAGUAR',
                                value: 'JAGUAR'
                            },
                            {
                                key: 'JEEP',
                                value: 'JEEP'
                            },
                            {
                                key: 'KIA',
                                value: 'KIA'
                            },
                            {
                                key: 'LADA',
                                value: 'LADA'
                            },
                            {
                                key: 'LANCIA',
                                value: 'LANCIA'
                            },
                            {
                                key: 'LAND ROVER',
                                value: 'LAND ROVER'
                            },
                            {
                                key: 'LANDWIND',
                                value: 'LANDWIND'
                            },
                            {
                                key: 'LEXUS',
                                value: 'LEXUS'
                            },
                            {
                                key: 'MASERATI',
                                value: 'MASERATI'
                            },
                            {
                                key: 'MAYBACH',
                                value: 'MAYBACH'
                            },
                            {
                                key: 'MAZDA',
                                value: 'MAZDA'
                            },
                            {
                                key: 'MCLAREN',
                                value: 'MCLAREN'
                            },
                            {
                                key: 'MERCEDES-BENZ',
                                value: 'MERCEDES-BENZ'
                            },
                            {
                                key: 'MG',
                                value: 'MG'
                            },
                            {
                                key: 'MINI (BMW)',
                                value: 'MINI (BMW)'
                            },
                            {
                                key: 'MITSUBISHI',
                                value: 'MITSUBISHI'
                            },
                            {
                                key: 'NISSAN',
                                value: 'NISSAN'
                            },
                            {
                                key: 'OPEL',
                                value: 'OPEL'
                            },
                            {
                                key: 'PEUGEOT',
                                value: 'PEUGEOT'
                            },
                            {
                                key: 'PORSCHE',
                                value: 'PORSCHE'
                            },
                            {
                                key: 'RENAULT',
                                value: 'RENAULT'
                            },
                            {
                                key: 'ROLLS ROYCE',
                                value: 'ROLLS ROYCE'
                            },
                            {
                                key: 'ROVER',
                                value: 'ROVER'
                            },
                            {
                                key: 'SAAB',
                                value: 'SAAB'
                            },
                            {
                                key: 'SANTANA',
                                value: 'SANTANA'
                            },
                            {
                                key: 'SEAT',
                                value: 'SEAT'
                            },
                            {
                                key: 'SKODA',
                                value: 'SKODA'
                            },
                            {
                                key: 'SMART',
                                value: 'SMART'
                            },
                            {
                                key: 'SSANGYONG',
                                value: 'SSANGYONG'
                            },
                            {
                                key: 'SUBARU',
                                value: 'SUBARU'
                            },
                            {
                                key: 'SUZUKI',
                                value: 'SUZUKI'
                            },
                            {
                                key: 'TATA',
                                value: 'TATA'
                            },
                            {
                                key: 'TESLA',
                                value: 'TESLA'
                            },
                            {
                                key: 'TOYOTA',
                                value: 'TOYOTA'
                            },
                            {
                                key: 'VOLKSWAGEN (VW)',
                                value: 'VOLKSWAGEN (VW)'
                            },
                            {
                                key: 'VOLVO',
                                value: 'VOLVO'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_MERK',
                        questionText: 'Von welcher Marke ist dein Fahrzeug?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '',
                                value: ''
                            },
                            {
                                key: '_',
                                value: '_'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_MODEL',
                        questionText: 'Welches Modell hast du?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 100,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_1_TYPE',
                        questionText: 'Welchen Motor hast du?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1,
                        maxValue: 12,
                        type: 'Integer',
                        value: null,
                        id: 'OB_3_AFGDL1',
                        questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2017,
                        type: 'Integer',
                        value: null,
                        id: 'OB_1_AFGDL1',
                        questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Ich will meine Versicherung wechseln',
                                value: 'Ich will meine Versicherung wechseln'
                            },
                            {
                                key: 'Ich habe keine Versicherung',
                                value: 'Ich habe keine Versicherung'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XO_1_VERZEKERDESOM',
                        questionText: 'Was trifft auf dich zu?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1,
                        maxValue: 12,
                        type: 'Integer',
                        value: null,
                        id: 'OB_4_AFGDL1',
                        questionText: 'Seit wann besitzt du das Auto?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2017,
                        type: 'Integer',
                        value: null,
                        id: 'OB_6_AFGDL1',
                        questionText: 'Seit wann besitzt du das Auto?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XO_1_VERZEKERDESOM',
                                operator: 'IsContaining',
                                value: 'will meine'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_1_GEBRUIK',
                        questionText: 'Hubraum',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_GEBRUIK',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            },
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_1_HorsePower',
                        questionText: 'PS',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Liste'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Diesel',
                                value: 'Diesel'
                            },
                            {
                                key: 'Benzin',
                                value: 'Benzin'
                            },
                            {
                                key: 'Elektro/Hybrid',
                                value: 'Elektro/Hybrid'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_BRANSTO',
                        questionText: 'Kraftstoff',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: null,
                        id: 'OB_2_TYPE',
                        questionText: 'Typklasse Haftpflicht',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_2_TYPE',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_5_TYPE',
                        questionText: 'TDE Ins Full',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_5_TYPE',
                                operator: 'IsEqualTo',
                                value: '0'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'OB_6_TYPE',
                        questionText: 'TDE Ins Part',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_6_TYPE',
                                operator: 'IsEqualTo',
                                value: '0'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'bis 3.000 km',
                                value: 'bis 3.000 km'
                            },
                            {
                                key: 'bis 6.000 km',
                                value: 'bis 6.000 km'
                            },
                            {
                                key: 'bis 9.000 km',
                                value: 'bis 9.000 km'
                            },
                            {
                                key: 'bis 12.000 km',
                                value: 'bis 12.000 km'
                            },
                            {
                                key: 'bis 15.000 km',
                                value: 'bis 15.000 km'
                            },
                            {
                                key: 'bis 20.000 km',
                                value: 'bis 20.000 km'
                            },
                            {
                                key: 'bis 25.000 km',
                                value: 'bis 25.000 km'
                            },
                            {
                                key: 'bis 30.000 km',
                                value: 'bis 30.000 km'
                            },
                            {
                                key: 'mehr als 30.000 km',
                                value: 'mehr als 30.000 km'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_2_GEBRUIK',
                        questionText: 'Wie viele Kilometer fährst du durchschnittlich pro Jahr?',
                        guideText: '<p><i>Folgende Informationen können dir helfen, die richtige Jahresfahrleistung zu wählen:</i></p>\n<ul>\n\t<li>Grundsätzlich fahren Menschen, die <b>auf dem Land leben</b>, <b>mehr Kilometer pro Jahr</b> als Menschen in der Stadt.</li>\n\t<li>Fahrer, die das Auto nur <b>gelegentlich für Ausflüge oder zum Einkaufen</b> nutzen, sollten mit einer Jahresfahrleistung von <b>bis zu 6.000 km</b> rechnen.</li>\n\t<li>Fahrer, die mit dem Auto <b>regelmaßig die gleiche Strecke zur Arbeit</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 12.000 km</b> rechnen.</li>\n\t<li>Fahrer, die das Auto regelmaßig für die Arbeit und Freizeit nutzen und <b>oft weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 20.000 km</b> rechnen.</li>\n\t<li>Fahrer, die <b>regelmaßig weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 30.000 km</b> rechnen.</li>\n</ul>',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 1900,
                        maxValue: 2000,
                        type: 'Integer',
                        value: null,
                        id: 'VZ_1_LEEFTYD',
                        questionText: 'In welchem Jahr wurdest du geboren?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: {
                            options: 'IgnoreCase',
                            pattern: '^\\d{5}$',
                            resourceKey: {
                                className: 'Resource_Customer',
                                propertyName: 'ZipCodeRegExMessage'
                            },
                            message: 'Ungültige Eingabe (12345)'
                        },
                        type: 'String',
                        value: '',
                        id: 'OB_1_PCODE',
                        questionText: 'Wie lautet deine Postleitzahl?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'SF-Klasse auswählen',
                                value: 'SF-Klasse auswählen'
                            },
                            {
                                key: 'Dies ist meine erste KFZ-Versicherung',
                                value: 'Dies ist meine erste KFZ-Versicherung'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'RI_2_SCHDVR',
                        questionText: 'Wie lautet die Schadenfreiheitsklasse (SF- Klasse) deiner KFZ- Haftpflicht-Versicherung?',
                        guideText: '<p>Die Schadenfreiheitsklasse (SF-Klasse) zeigt an, wie viele Jahre du unfallfrei Auto gefahren bist.</p>\n<p>Mit jedem schadenfreien Jahr verbessert sich deine SF-Klasse - und damit verringert sich auch meist die Höhe deiner Versicherungsprämie.</p>\n<p>Wechselst du deine Versicherung, sprechen wir uns mit deinem letzten Versicherer ab und übernehmen deine bestehende SF-Klasse. Damit wir für unser Angebot nicht auf die Rückmeldung deines letzten Versicherers warten müssen, brauchen wir die Information bereits jetzt von dir.</p>\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'M',
                                value: 'M'
                            },
                            {
                                key: '0',
                                value: '0'
                            },
                            {
                                key: 'S',
                                value: 'S'
                            },
                            {
                                key: 'SF1/2',
                                value: 'SF1/2'
                            },
                            {
                                key: 'SF1',
                                value: 'SF1'
                            },
                            {
                                key: 'SF2',
                                value: 'SF2'
                            },
                            {
                                key: 'SF3',
                                value: 'SF3'
                            },
                            {
                                key: 'SF4',
                                value: 'SF4'
                            },
                            {
                                key: 'SF5',
                                value: 'SF5'
                            },
                            {
                                key: 'SF6',
                                value: 'SF6'
                            },
                            {
                                key: 'SF7',
                                value: 'SF7'
                            },
                            {
                                key: 'SF8',
                                value: 'SF8'
                            },
                            {
                                key: 'SF9',
                                value: 'SF9'
                            },
                            {
                                key: 'SF10',
                                value: 'SF10'
                            },
                            {
                                key: 'SF11',
                                value: 'SF11'
                            },
                            {
                                key: 'SF12',
                                value: 'SF12'
                            },
                            {
                                key: 'SF13',
                                value: 'SF13'
                            },
                            {
                                key: 'SF14',
                                value: 'SF14'
                            },
                            {
                                key: 'SF15',
                                value: 'SF15'
                            },
                            {
                                key: 'SF16',
                                value: 'SF16'
                            },
                            {
                                key: 'SF17',
                                value: 'SF17'
                            },
                            {
                                key: 'SF18',
                                value: 'SF18'
                            },
                            {
                                key: 'SF19',
                                value: 'SF19'
                            },
                            {
                                key: 'SF20',
                                value: 'SF20'
                            },
                            {
                                key: 'SF21',
                                value: 'SF21'
                            },
                            {
                                key: 'SF22',
                                value: 'SF22'
                            },
                            {
                                key: 'SF23',
                                value: 'SF23'
                            },
                            {
                                key: 'SF24',
                                value: 'SF24'
                            },
                            {
                                key: 'SF25',
                                value: 'SF25'
                            },
                            {
                                key: 'SF26',
                                value: 'SF26'
                            },
                            {
                                key: 'SF27',
                                value: 'SF27'
                            },
                            {
                                key: 'SF28',
                                value: 'SF28'
                            },
                            {
                                key: 'SF29',
                                value: 'SF29'
                            },
                            {
                                key: 'SF30',
                                value: 'SF30'
                            },
                            {
                                key: 'SF31',
                                value: 'SF31'
                            },
                            {
                                key: 'SF32',
                                value: 'SF32'
                            },
                            {
                                key: 'SF33',
                                value: 'SF33'
                            },
                            {
                                key: 'SF34',
                                value: 'SF34'
                            },
                            {
                                key: 'SF35',
                                value: 'SF35'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'RI_3_SCHDVR',
                        questionText: 'Wähle deine Schadenfreiheitsklasse für die KFZ-Haftpflicht-Versicherung',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'SF-Klasse auswählen'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'RI_4_SCHDVR',
                        questionText: 'Schadenfreiheitsklasse Vollkasko (SF)',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_4_SCHDVR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'OB_2_AFGDL1',
                        questionText: 'Jahr der Erstversicherung\n',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_2_AFGDL1',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'BS_1_INCIDENT',
                        questionText: 'Hast du jemals einen Schaden selbst verursacht?\n',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'nein'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: '1800-01-01T00:00:00+01:00',
                        maxValue: '9999-12-31T23:59:59.9999999+01:00',
                        type: 'DateTime',
                        value: null,
                        id: 'RI_1_8SCHADE',
                        questionText: 'Wann war dein letzter selbst verursachter Schaden?',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'BS_1_INCIDENT',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        maxLength: 40,
                        regex: null,
                        type: 'String',
                        value: '',
                        id: 'DG_2_BMPERC',
                        questionText: 'Voraussichtliche SF-Klasse',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DG_2_BMPERC',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_11_DEKOMS',
                        questionText: 'Prämie Haftpflicht',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_11_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_12_DEKOMS',
                        questionText: 'Prämie Teilkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_12_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_13_DEKOMS',
                        questionText: 'Prämie Teilkasko Plus',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_13_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_14_DEKOMS',
                        questionText: 'Prämie Vollkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_14_DEKOMS',
                                operator: 'IsLargerThen',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Treffen Sie Ihre Wahl',
                                value: 'Treffen Sie Ihre Wahl'
                            },
                            {
                                key: 'Haftpflicht',
                                value: 'Haftpflicht'
                            },
                            {
                                key: 'Teilkasko',
                                value: 'Teilkasko'
                            },
                            {
                                key: 'Teilkasko Plus',
                                value: 'Teilkasko Plus'
                            },
                            {
                                key: 'Vollkasko',
                                value: 'Vollkasko'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_2_DEKOMS',
                        questionText: 'Deckung',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_26_DEKOMS',
                        questionText: 'Weitere Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_20_DEKOMS',
                        questionText: 'Freie Werkstattwahl',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_21_DEKOMS',
                        questionText: 'Rabattschutz',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_22_DEKOMS',
                        questionText: 'Fahrerschutz',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_23_DEKOMS',
                        questionText: 'Schutzbrief Inland',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'XD_24_DEKOMS',
                        questionText: 'Reisepaket Ausland',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_2_DEKOMS',
                                operator: 'IsContaining',
                                value: 'kasko'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 17,
                        maxValue: 110,
                        type: 'Integer',
                        value: 0,
                        id: 'VZ_2_LEEFTYD',
                        questionText: 'Jüngster Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_26_DEKOMS',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 17,
                        maxValue: 110,
                        type: 'Integer',
                        value: 0,
                        id: 'VZ_3_LEEFTYD',
                        questionText: 'Ältester Fahrer',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'XD_26_DEKOMS',
                                operator: 'IsContaining',
                                value: 'ja'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Decimal',
                        value: 0,
                        id: 'OB_1_NWE',
                        questionText: 'Ungefährer Neuwert des Fahrzeugs',
                        guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'DA_6_ERB',
                        questionText: 'Selbstbeteiligung Vollkasko',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DA_6_ERB',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'DA_2_ERB',
                        questionText: 'Selbstbeteiligung Teilkasko',
                        guideText: '<b>Selbstbeteiligung Teilkasko</b><br/>\nWarum muss bei einer Vollkaskoversicherung auch die Selbstbeteiligung Teilkasko festgelegt werden?\nIhr gewünschter Versicherungsschutz deckt Vollkasko- inkl. Teilkaskoschäden. Sie können die Selbstbeteiligung dabei jeweils individuell festlegen.',
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DA_2_ERB',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'IK_1_AMBTENR',
                        questionText: 'Beamtenstatus',
                        guideText: '<b>Beamtenstatus</b><br/>\nFür die Berufsgruppe Beamte wird ein Rabatt gewährt.',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'IK_1_AMBTENR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nur privat (inkl. Arbeitsweg)',
                                value: 'Nur privat (inkl. Arbeitsweg)'
                            },
                            {
                                key: 'Privat und gewerblich',
                                value: 'Privat und gewerblich'
                            },
                            {
                                key: 'Nur gewerblich',
                                value: 'Nur gewerblich'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_3_GEBRUIK',
                        questionText: 'Nutzung des Fahrzeugs',
                        guideText: '<b>Nutzung des Fahrzeugs</b><br/>\nAktuell versichern wir nur Fahrzeuge mit privater Nutzung.<br/>\n<br/>\nWas ist gewerblich?<br/>\nWird das Fahrzeug für berufliche Fahrten verwendet (z.B. Lieferdienst oder Kundenbesuche), handelt es sich um eine gewerbliche Nutzung. Die Fahrt zwischen Wohnung und Arbeitsstelle gilt als private Nutzung.\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_3_GEBRUIK',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: 'Nein',
                                value: 'Nein'
                            },
                            {
                                key: 'Ja',
                                value: 'Ja'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'OB_1_AANTKW',
                        questionText: 'Nachträgliches Tuning',
                        guideText: '<b>Nachträgliches Tuning</b><br/>\n',
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_AANTKW',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '-82% (Trede 39)',
                                value: '-82% (Trede 39)'
                            },
                            {
                                key: '-79% (Trede 38)',
                                value: '-79% (Trede 38)'
                            },
                            {
                                key: '-79% (Trede 37)',
                                value: '-79% (Trede 37)'
                            },
                            {
                                key: '-79% (Trede 36)',
                                value: '-79% (Trede 36)'
                            },
                            {
                                key: '-78% (Trede 35)',
                                value: '-78% (Trede 35)'
                            },
                            {
                                key: '-78% (Trede 34)',
                                value: '-78% (Trede 34)'
                            },
                            {
                                key: '-78% (Trede 33)',
                                value: '-78% (Trede 33)'
                            },
                            {
                                key: '-77% (Trede 32)',
                                value: '-77% (Trede 32)'
                            },
                            {
                                key: '-77% (Trede 31)',
                                value: '-77% (Trede 31)'
                            },
                            {
                                key: '-76% (Trede 30)',
                                value: '-76% (Trede 30)'
                            },
                            {
                                key: '-76% (Trede 29)',
                                value: '-76% (Trede 29)'
                            },
                            {
                                key: '-75% (Trede 28)',
                                value: '-75% (Trede 28)'
                            },
                            {
                                key: '-75% (Trede 27)',
                                value: '-75% (Trede 27)'
                            },
                            {
                                key: '-74% (Trede 26)',
                                value: '-74% (Trede 26)'
                            },
                            {
                                key: '-74% (Trede 25)',
                                value: '-74% (Trede 25)'
                            },
                            {
                                key: '-73% (Trede 24)',
                                value: '-73% (Trede 24)'
                            },
                            {
                                key: '-73% (Trede 23)',
                                value: '-73% (Trede 23)'
                            },
                            {
                                key: '-72% (Trede 22)',
                                value: '-72% (Trede 22)'
                            },
                            {
                                key: '-71% (Trede 21)',
                                value: '-71% (Trede 21)'
                            },
                            {
                                key: '-70% (Trede 20)',
                                value: '-70% (Trede 20)'
                            },
                            {
                                key: '-70% (Trede 19)',
                                value: '-70% (Trede 19)'
                            },
                            {
                                key: '-69% (Trede 18)',
                                value: '-69% (Trede 18)'
                            },
                            {
                                key: '-68% (Trede 17)',
                                value: '-68% (Trede 17)'
                            },
                            {
                                key: '-67% (Trede 16)',
                                value: '-67% (Trede 16)'
                            },
                            {
                                key: '-65% (Trede 15)',
                                value: '-65% (Trede 15)'
                            },
                            {
                                key: '-64% (Trede 14)',
                                value: '-64% (Trede 14)'
                            },
                            {
                                key: '-62% (Trede 13)',
                                value: '-62% (Trede 13)'
                            },
                            {
                                key: '-61% (Trede 12)',
                                value: '-61% (Trede 12)'
                            },
                            {
                                key: '-59% (Trede 11)',
                                value: '-59% (Trede 11)'
                            },
                            {
                                key: '-57% (Trede 10)',
                                value: '-57% (Trede 10)'
                            },
                            {
                                key: '-54% (Trede 9)',
                                value: '-54% (Trede 9)'
                            },
                            {
                                key: '-52% (Trede 8)',
                                value: '-52% (Trede 8)'
                            },
                            {
                                key: '-48% (Trede 7)',
                                value: '-48% (Trede 7)'
                            },
                            {
                                key: '-45% (Trede 6)',
                                value: '-45% (Trede 6)'
                            },
                            {
                                key: '-40% (Trede 5)',
                                value: '-40% (Trede 5)'
                            },
                            {
                                key: '-28% (Trede 4)',
                                value: '-28% (Trede 4)'
                            },
                            {
                                key: '-14% (Trede 3)',
                                value: '-14% (Trede 3)'
                            },
                            {
                                key: '-6% (Trede 2)',
                                value: '-6% (Trede 2)'
                            },
                            {
                                key: '35% (Trede 1)',
                                value: '35% (Trede 1)'
                            }
                        ],
                        type: 'Selection',
                        value: '-82% (Trede 39)',
                        id: 'DG_1_BMPERC',
                        questionText: 'SF Klasse',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'DG_1_BMPERC',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_15_DEKOMS',
                        questionText: 'Prämie Freie Werkstattwahl',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_15_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_16_DEKOMS',
                        questionText: 'Prämie Rabattschutz',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_16_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_17_DEKOMS',
                        questionText: 'Prämie Fahrerschutzversicherung',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_17_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_18_DEKOMS',
                        questionText: 'Prämie Schutzbrief Inland',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_18_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        currencySign: '€',
                        minValue: 0,
                        maxValue: null,
                        precision: 2,
                        type: 'Currency',
                        value: 0,
                        id: 'XD_19_DEKOMS',
                        questionText: 'Prämie Reisepaket Ausland',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: true,
                        optionRules: [
                            {
                                id: 'XD_19_DEKOMS',
                                operator: 'IsNotEqualTo',
                                value: '0,00'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: 0,
                        maxValue: null,
                        type: 'Integer',
                        value: 0,
                        id: 'RI_1_SCHDVR',
                        questionText: 'Fictieve SVJ',
                        guideText: null,
                        isMandatory: false,
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_1_SCHDVR',
                                operator: 'IsEqualTo',
                                value: 'onzichtbaar'
                            }
                        ],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        minValue: '2017-07-11T00:00:00+02:00',
                        maxValue: null,
                        type: 'DateTime',
                        value: '11.07.2017',
                        id: 'Contract_1_DateStart',
                        questionText: 'Anfangsdatum',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        items: [
                            {
                                key: '1',
                                value: 'Pro Monat'
                            },
                            {
                                key: '3',
                                value: 'Vierteljährlich'
                            },
                            {
                                key: '6',
                                value: 'Pro Halbjahr'
                            },
                            {
                                key: '12',
                                value: 'Jährlich'
                            }
                        ],
                        type: 'Selection',
                        value: null,
                        id: 'Contract_1_PaymentInterval',
                        questionText: 'Zahlungsintervall',
                        guideText: null,
                        isMandatory: true,
                        isReadonly: false,
                        optionRules: [],
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: true
                    },
                    {
                        type: 'String',
                        id: 'RI_0_SCHDVR',
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'RI_2_SCHDVR',
                                operator: 'IsContaining',
                                value: 'erste'
                            }
                        ],
                        questionText: 'Deine voraussichtliche Schadenfreiheitsklasse',
                        value: 'SF 1/2',
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    },
                    {
                        type: 'String',
                        id: 'OB_0_KENTEKE',
                        isReadonly: false,
                        optionRules: [
                            {
                                id: 'OB_1_KENTEKE',
                                operator: 'IsContaining',
                                value: 'Daten'
                            }
                        ],
                        value: 'test',
                        questionText: 'Dein Fahrzeug',
                        optionUses: [
                            'Calculation',
                            'SaveProduct'
                        ],
                        isRelevant: false
                    }
                ],
                stepIndex: 1,
                isOpen: false
            },
            {
                type: 'customer',
                questionIds: [
                    'Private_1_Email',
                    'Private_1_Password',
                    'Private_1_FirstName',
                    'Private_1_StreetName',
                    'Private_1_DateBirth',
                    'Private_1_Iban'
                ],
                stepIndex: 2,
                isOpen: false
            },
            {
                type: 'closing',
                stepIndex: 3,
                isOpen: false
            }
        ]
    },
    calculation: {
        fetching: false,
            calculationFailed: false,
            isExistingInsuranceChecked: true
    },
    paymentMethod: {
        selected: {}
    },
    contract: {
        isLoadingCalculation: false,
            isLoadingContractDetails: false,
            isLoadingContractEditDetails: false,
            isSigningContract: false,
            isLoadingList: false,
            isEditFailed: false,
            isFinalizingHasselhoffFlow: false
    },
    progress: {
        percent: 92.3076923076923,
            targetValue: 13,
            currentValue: 12
    },
    incident: {
        isListLoading: false
    },
    fnol: {},
    routing: {
        locationBeforeTransitions: {
            pathname: '/',
                search: '',
                hash: '',
                action: 'POP',
                key: null,
                query: {}
        }
    },
    config: {
        productConfig: {
            productName: 'FRIDAY',
                quote: {
                car: {
                    details: [
                        'OB_1_MERK',
                        'OB_1_MODEL',
                        'OB_1_TYPE'
                    ],
                        year: 'OB_1_AFGDL1',
                        mileage: 'OB_2_GEBRUIK'
                },
                customer: {
                    yearOfBirth: 'VZ_1_LEEFTYD',
                        postCode: 'OB_1_PCODE'
                },
                sf: {
                    decision: 'RI_2_SCHDVR',
                        'class': 'RI_3_SCHDVR',
                        firstInsurance: 'RI_0_SCHDVR'
                }
            },
            offering: {
                coverage: {
                    selection: 'XD_2_DEKOMS',
                        premiums: [
                        'XD_11_DEKOMS',
                        'XD_12_DEKOMS',
                        'XD_13_DEKOMS',
                        'XD_14_DEKOMS'
                    ]
                },
                additionalCoverages: {
                    options: [
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/Rabattschutz',
                            description: 'Ein Schaden pro Jahr ist „frei“. Wir verzichten auf die Erhöhung deiner Prämie.',
                            id: 'XD_21_DEKOMS',
                            premiumName: 'Dekking Rabattschutz'
                        },
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/FreieWerkstattwahl',
                            description: 'Wir lassen dir freie Wahl, wo du deine Reparaturen durchführen lässt – wählst du diese Option nicht, dann beauftragen wir eine Werkstatt aus unserem Partnernetzwerk.',
                            id: 'XD_20_DEKOMS',
                            premiumName: 'Dekking Freie Werkstattwahl'
                        },
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/Fahrerschutz',
                            description: 'Schutz bei Personenschäden des Fahrers bei selbst verschuldeten Unfällen.',
                            id: 'XD_22_DEKOMS',
                            premiumName: 'Dekking Fahrerschutzversicherung'
                        },
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/SchutzbriefInland',
                            description: 'Dein Schutzengel bei Pannen in Deutschland – Pannen- und Unfallhilfe im Fall der Fälle.',
                            id: 'XD_23_DEKOMS',
                            premiumName: 'Dekking Schutzbrief Inland'
                        },
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/ReisepaketAusland',
                            description: 'Profitiere auch im Ausland von unserer Pannen- und Unfallhilfe.',
                            id: 'XD_24_DEKOMS',
                            premiumName: 'Dekking Reisepaket Ausland'
                        },
                        {
                            contentComponentPath: './HasselhoffHelpers/AdditionalDetails/WeitereFahrer',
                            description: 'Hier kannst du zusätzliche Fahrer in deine Versicherung einschließen.',
                            id: 'XD_26_DEKOMS',
                            premiumName: 'Dekking Weitere Fahrer'
                        },
                        {
                            description: 'Ehe- oder Lebenspartner/in mit gemeinsamer Wohnadresse sind bei uns immer mitversichert.',
                            id: '-1'
                        }
                    ],
                        additionalDriversAgeOptions: [
                        'VZ_2_LEEFTYD',
                        'VZ_3_LEEFTYD'
                    ],
                        additionalDriversSelectionOption: 'XD_26_DEKOMS'
                }
            },
            contract: {
                customer: {
                    name: [
                        'Private_1_FirstName',
                        'Private_1_LastName'
                    ],
                        address: [
                        'Private_1_StreetName',
                        'Private_1_HouseNumber',
                        'Private_1_HouseNumberSuffix',
                        'Private_1_ZipCode'
                    ],
                        birthdate: 'Private_1_DateBirth'
                },
                contact: {
                    email: 'Private_1_Email'
                },
                payment: {
                    iban: 'Private_1_Iban'
                }
            },
            guideTextTitle: {
                OB_2_GEBRUIK: 'Jahresfahrleistung',
                    RI_2_SCHDVR: 'Schadenfreiheitsklasse'
            },
            questionTextOverride: {
                Private_1_FirstName: 'Wie lautet dein Vorname?',
                    Private_1_LastName: 'Wie lautet dein Familienname?',
                    Private_1_DateBirth: 'Wann ist dein Geburtstag?'
            },
            extraText: {
                RI_2_SCHDVR: 'Diese findest du in der letzten Rechnung deiner aktuellen KFZ-Versicherung.',
                    OB_2_GEBRUIK: 'Mehr als die Hälfte aller Autofahrer wählen eine Fahrleistung zwischen 3.000 und 12.000 km pro Jahr.'
            },
            hintText: {
                OB_1_MERK: 'z.B. Mercedes, BMW, o.Ä.',
                    OB_1_MODEL: 'Auswahl filtern',
                    OB_4_AFGDL1: 'z.B. 05',
                    OB_3_AFGDL1: 'z.B. 05',
                    OB_6_AFGDL1: 'z.B. 2004',
                    OB_1_AFGDL1: 'z.B. 2017',
                    OB_2_KENTEKE: 'z.B. 0005',
                    OB_3_KENTEKE: 'z.B. AIW',
                    VZ_1_LEEFTYD: 'z.B. 1985',
                    OB_1_PCODE: 'z.B. 12345',
                    Private_1_FirstName: 'z.B. Max',
                    Private_1_LastName: 'z.B. Mustermann',
                    Private_1_StreetName: 'z.B. Hauptstraße',
                    Private_1_HouseNumber: 'z.B. 6a',
                    Private_1_ZipCode: 'z.B. 12345',
                    VZ_2_LEEFTYD: 'z.B. 25',
                    VZ_3_LEEFTYD: 'z.B. 57'
            },
            flow: {
                steps: [
                    {
                        type: 'calculation',
                        questionIds: [
                            'XO_1_VERZEKERDESOM',
                            'OB_6_AFGDL1',
                            'OB_1_KENTEKE',
                            'OB_2_KENTEKE',
                            'OB_0_KENTEKE',
                            'OB_1_MERK',
                            'OB_1_MODEL',
                            'OB_1_TYPE',
                            'OB_1_AFGDL1',
                            'OB_2_GEBRUIK',
                            'VZ_1_LEEFTYD',
                            'OB_1_PCODE',
                            'RI_2_SCHDVR',
                            'RI_3_SCHDVR',
                            'RI_0_SCHDVR'
                        ],
                        options: [
                            {
                                items: [
                                    {
                                        key: 'Fahrzeug aus der Liste wählen',
                                        value: 'Fahrzeug aus der Liste wählen'
                                    },
                                    {
                                        key: 'Daten vom Fahrzeugschein eingeben',
                                        value: 'Daten vom Fahrzeugschein eingeben'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_KENTEKE',
                                questionText: 'Welches Fahrzeug möchtest du versichern?',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 4,
                                regex: {
                                    pattern: '^\\d{4}$',
                                    message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_2_KENTEKE',
                                questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                                guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            },
                            {
                                maxLength: 3,
                                regex: {
                                    pattern: '^[a-zA-Z\\d]{3}$',
                                    message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_3_KENTEKE',
                                questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                                guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'ALFA ROMEO',
                                        value: 'ALFA ROMEO'
                                    },
                                    {
                                        key: 'ALPINA',
                                        value: 'ALPINA'
                                    },
                                    {
                                        key: 'AUDI',
                                        value: 'AUDI'
                                    },
                                    {
                                        key: 'BENTLEY',
                                        value: 'BENTLEY'
                                    },
                                    {
                                        key: 'BMW',
                                        value: 'BMW'
                                    },
                                    {
                                        key: 'CADILLAC',
                                        value: 'CADILLAC'
                                    },
                                    {
                                        key: 'CHEVROLET',
                                        value: 'CHEVROLET'
                                    },
                                    {
                                        key: 'CHRYSLER',
                                        value: 'CHRYSLER'
                                    },
                                    {
                                        key: 'CITROEN',
                                        value: 'CITROEN'
                                    },
                                    {
                                        key: 'CORVETTE',
                                        value: 'CORVETTE'
                                    },
                                    {
                                        key: 'DACIA',
                                        value: 'DACIA'
                                    },
                                    {
                                        key: 'DAEWOO',
                                        value: 'DAEWOO'
                                    },
                                    {
                                        key: 'DAIHATSU',
                                        value: 'DAIHATSU'
                                    },
                                    {
                                        key: 'DODGE',
                                        value: 'DODGE'
                                    },
                                    {
                                        key: 'FERRARI',
                                        value: 'FERRARI'
                                    },
                                    {
                                        key: 'FIAT',
                                        value: 'FIAT'
                                    },
                                    {
                                        key: 'FORD',
                                        value: 'FORD'
                                    },
                                    {
                                        key: 'HONDA',
                                        value: 'HONDA'
                                    },
                                    {
                                        key: 'HYUNDAI',
                                        value: 'HYUNDAI'
                                    },
                                    {
                                        key: 'INFINITI',
                                        value: 'INFINITI'
                                    },
                                    {
                                        key: 'IVECO',
                                        value: 'IVECO'
                                    },
                                    {
                                        key: 'JAGUAR',
                                        value: 'JAGUAR'
                                    },
                                    {
                                        key: 'JEEP',
                                        value: 'JEEP'
                                    },
                                    {
                                        key: 'KIA',
                                        value: 'KIA'
                                    },
                                    {
                                        key: 'LADA',
                                        value: 'LADA'
                                    },
                                    {
                                        key: 'LANCIA',
                                        value: 'LANCIA'
                                    },
                                    {
                                        key: 'LAND ROVER',
                                        value: 'LAND ROVER'
                                    },
                                    {
                                        key: 'LANDWIND',
                                        value: 'LANDWIND'
                                    },
                                    {
                                        key: 'LEXUS',
                                        value: 'LEXUS'
                                    },
                                    {
                                        key: 'MASERATI',
                                        value: 'MASERATI'
                                    },
                                    {
                                        key: 'MAYBACH',
                                        value: 'MAYBACH'
                                    },
                                    {
                                        key: 'MAZDA',
                                        value: 'MAZDA'
                                    },
                                    {
                                        key: 'MCLAREN',
                                        value: 'MCLAREN'
                                    },
                                    {
                                        key: 'MERCEDES-BENZ',
                                        value: 'MERCEDES-BENZ'
                                    },
                                    {
                                        key: 'MG',
                                        value: 'MG'
                                    },
                                    {
                                        key: 'MINI (BMW)',
                                        value: 'MINI (BMW)'
                                    },
                                    {
                                        key: 'MITSUBISHI',
                                        value: 'MITSUBISHI'
                                    },
                                    {
                                        key: 'NISSAN',
                                        value: 'NISSAN'
                                    },
                                    {
                                        key: 'OPEL',
                                        value: 'OPEL'
                                    },
                                    {
                                        key: 'PEUGEOT',
                                        value: 'PEUGEOT'
                                    },
                                    {
                                        key: 'PORSCHE',
                                        value: 'PORSCHE'
                                    },
                                    {
                                        key: 'RENAULT',
                                        value: 'RENAULT'
                                    },
                                    {
                                        key: 'ROLLS ROYCE',
                                        value: 'ROLLS ROYCE'
                                    },
                                    {
                                        key: 'ROVER',
                                        value: 'ROVER'
                                    },
                                    {
                                        key: 'SAAB',
                                        value: 'SAAB'
                                    },
                                    {
                                        key: 'SANTANA',
                                        value: 'SANTANA'
                                    },
                                    {
                                        key: 'SEAT',
                                        value: 'SEAT'
                                    },
                                    {
                                        key: 'SKODA',
                                        value: 'SKODA'
                                    },
                                    {
                                        key: 'SMART',
                                        value: 'SMART'
                                    },
                                    {
                                        key: 'SSANGYONG',
                                        value: 'SSANGYONG'
                                    },
                                    {
                                        key: 'SUBARU',
                                        value: 'SUBARU'
                                    },
                                    {
                                        key: 'SUZUKI',
                                        value: 'SUZUKI'
                                    },
                                    {
                                        key: 'TATA',
                                        value: 'TATA'
                                    },
                                    {
                                        key: 'TESLA',
                                        value: 'TESLA'
                                    },
                                    {
                                        key: 'TOYOTA',
                                        value: 'TOYOTA'
                                    },
                                    {
                                        key: 'VOLKSWAGEN (VW)',
                                        value: 'VOLKSWAGEN (VW)'
                                    },
                                    {
                                        key: 'VOLVO',
                                        value: 'VOLVO'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_MERK',
                                questionText: 'Von welcher Marke ist dein Fahrzeug?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '',
                                        value: ''
                                    },
                                    {
                                        key: '_',
                                        value: '_'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_MODEL',
                                questionText: 'Welches Modell hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 100,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_1_TYPE',
                                questionText: 'Welchen Motor hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1,
                                maxValue: 12,
                                type: 'Integer',
                                value: null,
                                id: 'OB_3_AFGDL1',
                                questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2017,
                                type: 'Integer',
                                value: null,
                                id: 'OB_1_AFGDL1',
                                questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Ich will meine Versicherung wechseln',
                                        value: 'Ich will meine Versicherung wechseln'
                                    },
                                    {
                                        key: 'Ich habe keine Versicherung',
                                        value: 'Ich habe keine Versicherung'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XO_1_VERZEKERDESOM',
                                questionText: 'Was trifft auf dich zu?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1,
                                maxValue: 12,
                                type: 'Integer',
                                value: null,
                                id: 'OB_4_AFGDL1',
                                questionText: 'Seit wann besitzt du das Auto?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2017,
                                type: 'Integer',
                                value: null,
                                id: 'OB_6_AFGDL1',
                                questionText: 'Seit wann besitzt du das Auto?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XO_1_VERZEKERDESOM',
                                        operator: 'IsContaining',
                                        value: 'will meine'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_1_GEBRUIK',
                                questionText: 'Hubraum',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_GEBRUIK',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    },
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_1_HorsePower',
                                questionText: 'PS',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Diesel',
                                        value: 'Diesel'
                                    },
                                    {
                                        key: 'Benzin',
                                        value: 'Benzin'
                                    },
                                    {
                                        key: 'Elektro/Hybrid',
                                        value: 'Elektro/Hybrid'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_BRANSTO',
                                questionText: 'Kraftstoff',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: null,
                                id: 'OB_2_TYPE',
                                questionText: 'Typklasse Haftpflicht',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_2_TYPE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_5_TYPE',
                                questionText: 'TDE Ins Full',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_5_TYPE',
                                        operator: 'IsEqualTo',
                                        value: '0'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_6_TYPE',
                                questionText: 'TDE Ins Part',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_6_TYPE',
                                        operator: 'IsEqualTo',
                                        value: '0'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'bis 3.000 km',
                                        value: 'bis 3.000 km'
                                    },
                                    {
                                        key: 'bis 6.000 km',
                                        value: 'bis 6.000 km'
                                    },
                                    {
                                        key: 'bis 9.000 km',
                                        value: 'bis 9.000 km'
                                    },
                                    {
                                        key: 'bis 12.000 km',
                                        value: 'bis 12.000 km'
                                    },
                                    {
                                        key: 'bis 15.000 km',
                                        value: 'bis 15.000 km'
                                    },
                                    {
                                        key: 'bis 20.000 km',
                                        value: 'bis 20.000 km'
                                    },
                                    {
                                        key: 'bis 25.000 km',
                                        value: 'bis 25.000 km'
                                    },
                                    {
                                        key: 'bis 30.000 km',
                                        value: 'bis 30.000 km'
                                    },
                                    {
                                        key: 'mehr als 30.000 km',
                                        value: 'mehr als 30.000 km'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_2_GEBRUIK',
                                questionText: 'Wie viele Kilometer fährst du durchschnittlich pro Jahr?',
                                guideText: '<p><i>Folgende Informationen können dir helfen, die richtige Jahresfahrleistung zu wählen:</i></p>\n<ul>\n\t<li>Grundsätzlich fahren Menschen, die <b>auf dem Land leben</b>, <b>mehr Kilometer pro Jahr</b> als Menschen in der Stadt.</li>\n\t<li>Fahrer, die das Auto nur <b>gelegentlich für Ausflüge oder zum Einkaufen</b> nutzen, sollten mit einer Jahresfahrleistung von <b>bis zu 6.000 km</b> rechnen.</li>\n\t<li>Fahrer, die mit dem Auto <b>regelmaßig die gleiche Strecke zur Arbeit</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 12.000 km</b> rechnen.</li>\n\t<li>Fahrer, die das Auto regelmaßig für die Arbeit und Freizeit nutzen und <b>oft weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 20.000 km</b> rechnen.</li>\n\t<li>Fahrer, die <b>regelmaßig weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 30.000 km</b> rechnen.</li>\n</ul>',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2000,
                                type: 'Integer',
                                value: null,
                                id: 'VZ_1_LEEFTYD',
                                questionText: 'In welchem Jahr wurdest du geboren?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: {
                                    options: 'IgnoreCase',
                                    pattern: '^\\d{5}$',
                                    resourceKey: {
                                        className: 'Resource_Customer',
                                        propertyName: 'ZipCodeRegExMessage'
                                    },
                                    message: 'Ungültige Eingabe (12345)'
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_1_PCODE',
                                questionText: 'Wie lautet deine Postleitzahl?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'SF-Klasse auswählen',
                                        value: 'SF-Klasse auswählen'
                                    },
                                    {
                                        key: 'Dies ist meine erste KFZ-Versicherung',
                                        value: 'Dies ist meine erste KFZ-Versicherung'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'RI_2_SCHDVR',
                                questionText: 'Wie lautet die Schadenfreiheitsklasse (SF- Klasse) deiner KFZ- Haftpflicht-Versicherung?',
                                guideText: '<p>Die Schadenfreiheitsklasse (SF-Klasse) zeigt an, wie viele Jahre du unfallfrei Auto gefahren bist.</p>\n<p>Mit jedem schadenfreien Jahr verbessert sich deine SF-Klasse - und damit verringert sich auch meist die Höhe deiner Versicherungsprämie.</p>\n<p>Wechselst du deine Versicherung, sprechen wir uns mit deinem letzten Versicherer ab und übernehmen deine bestehende SF-Klasse. Damit wir für unser Angebot nicht auf die Rückmeldung deines letzten Versicherers warten müssen, brauchen wir die Information bereits jetzt von dir.</p>\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'M',
                                        value: 'M'
                                    },
                                    {
                                        key: '0',
                                        value: '0'
                                    },
                                    {
                                        key: 'S',
                                        value: 'S'
                                    },
                                    {
                                        key: 'SF1/2',
                                        value: 'SF1/2'
                                    },
                                    {
                                        key: 'SF1',
                                        value: 'SF1'
                                    },
                                    {
                                        key: 'SF2',
                                        value: 'SF2'
                                    },
                                    {
                                        key: 'SF3',
                                        value: 'SF3'
                                    },
                                    {
                                        key: 'SF4',
                                        value: 'SF4'
                                    },
                                    {
                                        key: 'SF5',
                                        value: 'SF5'
                                    },
                                    {
                                        key: 'SF6',
                                        value: 'SF6'
                                    },
                                    {
                                        key: 'SF7',
                                        value: 'SF7'
                                    },
                                    {
                                        key: 'SF8',
                                        value: 'SF8'
                                    },
                                    {
                                        key: 'SF9',
                                        value: 'SF9'
                                    },
                                    {
                                        key: 'SF10',
                                        value: 'SF10'
                                    },
                                    {
                                        key: 'SF11',
                                        value: 'SF11'
                                    },
                                    {
                                        key: 'SF12',
                                        value: 'SF12'
                                    },
                                    {
                                        key: 'SF13',
                                        value: 'SF13'
                                    },
                                    {
                                        key: 'SF14',
                                        value: 'SF14'
                                    },
                                    {
                                        key: 'SF15',
                                        value: 'SF15'
                                    },
                                    {
                                        key: 'SF16',
                                        value: 'SF16'
                                    },
                                    {
                                        key: 'SF17',
                                        value: 'SF17'
                                    },
                                    {
                                        key: 'SF18',
                                        value: 'SF18'
                                    },
                                    {
                                        key: 'SF19',
                                        value: 'SF19'
                                    },
                                    {
                                        key: 'SF20',
                                        value: 'SF20'
                                    },
                                    {
                                        key: 'SF21',
                                        value: 'SF21'
                                    },
                                    {
                                        key: 'SF22',
                                        value: 'SF22'
                                    },
                                    {
                                        key: 'SF23',
                                        value: 'SF23'
                                    },
                                    {
                                        key: 'SF24',
                                        value: 'SF24'
                                    },
                                    {
                                        key: 'SF25',
                                        value: 'SF25'
                                    },
                                    {
                                        key: 'SF26',
                                        value: 'SF26'
                                    },
                                    {
                                        key: 'SF27',
                                        value: 'SF27'
                                    },
                                    {
                                        key: 'SF28',
                                        value: 'SF28'
                                    },
                                    {
                                        key: 'SF29',
                                        value: 'SF29'
                                    },
                                    {
                                        key: 'SF30',
                                        value: 'SF30'
                                    },
                                    {
                                        key: 'SF31',
                                        value: 'SF31'
                                    },
                                    {
                                        key: 'SF32',
                                        value: 'SF32'
                                    },
                                    {
                                        key: 'SF33',
                                        value: 'SF33'
                                    },
                                    {
                                        key: 'SF34',
                                        value: 'SF34'
                                    },
                                    {
                                        key: 'SF35',
                                        value: 'SF35'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'RI_3_SCHDVR',
                                questionText: 'Wähle deine Schadenfreiheitsklasse für die KFZ-Haftpflicht-Versicherung',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'SF-Klasse auswählen'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'RI_4_SCHDVR',
                                questionText: 'Schadenfreiheitsklasse Vollkasko (SF)',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_4_SCHDVR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_2_AFGDL1',
                                questionText: 'Jahr der Erstversicherung\n',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_2_AFGDL1',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'BS_1_INCIDENT',
                                questionText: 'Hast du jemals einen Schaden selbst verursacht?\n',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'nein'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: '1800-01-01T00:00:00+01:00',
                                maxValue: '9999-12-31T23:59:59.9999999+01:00',
                                type: 'DateTime',
                                value: null,
                                id: 'RI_1_8SCHADE',
                                questionText: 'Wann war dein letzter selbst verursachter Schaden?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'BS_1_INCIDENT',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'DG_2_BMPERC',
                                questionText: 'Voraussichtliche SF-Klasse',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DG_2_BMPERC',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_11_DEKOMS',
                                questionText: 'Prämie Haftpflicht',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_11_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_12_DEKOMS',
                                questionText: 'Prämie Teilkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_12_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_13_DEKOMS',
                                questionText: 'Prämie Teilkasko Plus',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_13_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_14_DEKOMS',
                                questionText: 'Prämie Vollkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_14_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Treffen Sie Ihre Wahl',
                                        value: 'Treffen Sie Ihre Wahl'
                                    },
                                    {
                                        key: 'Haftpflicht',
                                        value: 'Haftpflicht'
                                    },
                                    {
                                        key: 'Teilkasko',
                                        value: 'Teilkasko'
                                    },
                                    {
                                        key: 'Teilkasko Plus',
                                        value: 'Teilkasko Plus'
                                    },
                                    {
                                        key: 'Vollkasko',
                                        value: 'Vollkasko'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_2_DEKOMS',
                                questionText: 'Deckung',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_26_DEKOMS',
                                questionText: 'Weitere Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_20_DEKOMS',
                                questionText: 'Freie Werkstattwahl',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_21_DEKOMS',
                                questionText: 'Rabattschutz',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_22_DEKOMS',
                                questionText: 'Fahrerschutz',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_23_DEKOMS',
                                questionText: 'Schutzbrief Inland',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_24_DEKOMS',
                                questionText: 'Reisepaket Ausland',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 17,
                                maxValue: 110,
                                type: 'Integer',
                                value: 0,
                                id: 'VZ_2_LEEFTYD',
                                questionText: 'Jüngster Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_26_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 17,
                                maxValue: 110,
                                type: 'Integer',
                                value: 0,
                                id: 'VZ_3_LEEFTYD',
                                questionText: 'Ältester Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_26_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Decimal',
                                value: 0,
                                id: 'OB_1_NWE',
                                questionText: 'Ungefährer Neuwert des Fahrzeugs',
                                guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'DA_6_ERB',
                                questionText: 'Selbstbeteiligung Vollkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DA_6_ERB',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'DA_2_ERB',
                                questionText: 'Selbstbeteiligung Teilkasko',
                                guideText: '<b>Selbstbeteiligung Teilkasko</b><br/>\nWarum muss bei einer Vollkaskoversicherung auch die Selbstbeteiligung Teilkasko festgelegt werden?\nIhr gewünschter Versicherungsschutz deckt Vollkasko- inkl. Teilkaskoschäden. Sie können die Selbstbeteiligung dabei jeweils individuell festlegen.',
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DA_2_ERB',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'IK_1_AMBTENR',
                                questionText: 'Beamtenstatus',
                                guideText: '<b>Beamtenstatus</b><br/>\nFür die Berufsgruppe Beamte wird ein Rabatt gewährt.',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'IK_1_AMBTENR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nur privat (inkl. Arbeitsweg)',
                                        value: 'Nur privat (inkl. Arbeitsweg)'
                                    },
                                    {
                                        key: 'Privat und gewerblich',
                                        value: 'Privat und gewerblich'
                                    },
                                    {
                                        key: 'Nur gewerblich',
                                        value: 'Nur gewerblich'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_3_GEBRUIK',
                                questionText: 'Nutzung des Fahrzeugs',
                                guideText: '<b>Nutzung des Fahrzeugs</b><br/>\nAktuell versichern wir nur Fahrzeuge mit privater Nutzung.<br/>\n<br/>\nWas ist gewerblich?<br/>\nWird das Fahrzeug für berufliche Fahrten verwendet (z.B. Lieferdienst oder Kundenbesuche), handelt es sich um eine gewerbliche Nutzung. Die Fahrt zwischen Wohnung und Arbeitsstelle gilt als private Nutzung.\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_3_GEBRUIK',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_AANTKW',
                                questionText: 'Nachträgliches Tuning',
                                guideText: '<b>Nachträgliches Tuning</b><br/>\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_AANTKW',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '-82% (Trede 39)',
                                        value: '-82% (Trede 39)'
                                    },
                                    {
                                        key: '-79% (Trede 38)',
                                        value: '-79% (Trede 38)'
                                    },
                                    {
                                        key: '-79% (Trede 37)',
                                        value: '-79% (Trede 37)'
                                    },
                                    {
                                        key: '-79% (Trede 36)',
                                        value: '-79% (Trede 36)'
                                    },
                                    {
                                        key: '-78% (Trede 35)',
                                        value: '-78% (Trede 35)'
                                    },
                                    {
                                        key: '-78% (Trede 34)',
                                        value: '-78% (Trede 34)'
                                    },
                                    {
                                        key: '-78% (Trede 33)',
                                        value: '-78% (Trede 33)'
                                    },
                                    {
                                        key: '-77% (Trede 32)',
                                        value: '-77% (Trede 32)'
                                    },
                                    {
                                        key: '-77% (Trede 31)',
                                        value: '-77% (Trede 31)'
                                    },
                                    {
                                        key: '-76% (Trede 30)',
                                        value: '-76% (Trede 30)'
                                    },
                                    {
                                        key: '-76% (Trede 29)',
                                        value: '-76% (Trede 29)'
                                    },
                                    {
                                        key: '-75% (Trede 28)',
                                        value: '-75% (Trede 28)'
                                    },
                                    {
                                        key: '-75% (Trede 27)',
                                        value: '-75% (Trede 27)'
                                    },
                                    {
                                        key: '-74% (Trede 26)',
                                        value: '-74% (Trede 26)'
                                    },
                                    {
                                        key: '-74% (Trede 25)',
                                        value: '-74% (Trede 25)'
                                    },
                                    {
                                        key: '-73% (Trede 24)',
                                        value: '-73% (Trede 24)'
                                    },
                                    {
                                        key: '-73% (Trede 23)',
                                        value: '-73% (Trede 23)'
                                    },
                                    {
                                        key: '-72% (Trede 22)',
                                        value: '-72% (Trede 22)'
                                    },
                                    {
                                        key: '-71% (Trede 21)',
                                        value: '-71% (Trede 21)'
                                    },
                                    {
                                        key: '-70% (Trede 20)',
                                        value: '-70% (Trede 20)'
                                    },
                                    {
                                        key: '-70% (Trede 19)',
                                        value: '-70% (Trede 19)'
                                    },
                                    {
                                        key: '-69% (Trede 18)',
                                        value: '-69% (Trede 18)'
                                    },
                                    {
                                        key: '-68% (Trede 17)',
                                        value: '-68% (Trede 17)'
                                    },
                                    {
                                        key: '-67% (Trede 16)',
                                        value: '-67% (Trede 16)'
                                    },
                                    {
                                        key: '-65% (Trede 15)',
                                        value: '-65% (Trede 15)'
                                    },
                                    {
                                        key: '-64% (Trede 14)',
                                        value: '-64% (Trede 14)'
                                    },
                                    {
                                        key: '-62% (Trede 13)',
                                        value: '-62% (Trede 13)'
                                    },
                                    {
                                        key: '-61% (Trede 12)',
                                        value: '-61% (Trede 12)'
                                    },
                                    {
                                        key: '-59% (Trede 11)',
                                        value: '-59% (Trede 11)'
                                    },
                                    {
                                        key: '-57% (Trede 10)',
                                        value: '-57% (Trede 10)'
                                    },
                                    {
                                        key: '-54% (Trede 9)',
                                        value: '-54% (Trede 9)'
                                    },
                                    {
                                        key: '-52% (Trede 8)',
                                        value: '-52% (Trede 8)'
                                    },
                                    {
                                        key: '-48% (Trede 7)',
                                        value: '-48% (Trede 7)'
                                    },
                                    {
                                        key: '-45% (Trede 6)',
                                        value: '-45% (Trede 6)'
                                    },
                                    {
                                        key: '-40% (Trede 5)',
                                        value: '-40% (Trede 5)'
                                    },
                                    {
                                        key: '-28% (Trede 4)',
                                        value: '-28% (Trede 4)'
                                    },
                                    {
                                        key: '-14% (Trede 3)',
                                        value: '-14% (Trede 3)'
                                    },
                                    {
                                        key: '-6% (Trede 2)',
                                        value: '-6% (Trede 2)'
                                    },
                                    {
                                        key: '35% (Trede 1)',
                                        value: '35% (Trede 1)'
                                    }
                                ],
                                type: 'Selection',
                                value: '-82% (Trede 39)',
                                id: 'DG_1_BMPERC',
                                questionText: 'SF Klasse',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DG_1_BMPERC',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_15_DEKOMS',
                                questionText: 'Prämie Freie Werkstattwahl',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_15_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_16_DEKOMS',
                                questionText: 'Prämie Rabattschutz',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_16_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_17_DEKOMS',
                                questionText: 'Prämie Fahrerschutzversicherung',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_17_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_18_DEKOMS',
                                questionText: 'Prämie Schutzbrief Inland',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_18_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_19_DEKOMS',
                                questionText: 'Prämie Reisepaket Ausland',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_19_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'RI_1_SCHDVR',
                                questionText: 'Fictieve SVJ',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_1_SCHDVR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: '2017-07-11T00:00:00+02:00',
                                maxValue: null,
                                type: 'DateTime',
                                value: '11.07.2017',
                                id: 'Contract_1_DateStart',
                                questionText: 'Anfangsdatum',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '1',
                                        value: 'Pro Monat'
                                    },
                                    {
                                        key: '3',
                                        value: 'Vierteljährlich'
                                    },
                                    {
                                        key: '6',
                                        value: 'Pro Halbjahr'
                                    },
                                    {
                                        key: '12',
                                        value: 'Jährlich'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'Contract_1_PaymentInterval',
                                questionText: 'Zahlungsintervall',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                type: 'String',
                                id: 'RI_0_SCHDVR',
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'erste'
                                    }
                                ],
                                questionText: 'Deine voraussichtliche Schadenfreiheitsklasse',
                                value: 'SF 1/2',
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            },
                            {
                                type: 'String',
                                id: 'OB_0_KENTEKE',
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                value: 'test',
                                questionText: 'Dein Fahrzeug',
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            }
                        ]
                    },
                    {
                        type: 'saveContract',
                        questionIds: [
                            'XD_2_DEKOMS',
                            'XD_21_DEKOMS'
                        ],
                        options: [
                            {
                                items: [
                                    {
                                        key: 'Fahrzeug aus der Liste wählen',
                                        value: 'Fahrzeug aus der Liste wählen'
                                    },
                                    {
                                        key: 'Daten vom Fahrzeugschein eingeben',
                                        value: 'Daten vom Fahrzeugschein eingeben'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_KENTEKE',
                                questionText: 'Welches Fahrzeug möchtest du versichern?',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 4,
                                regex: {
                                    pattern: '^\\d{4}$',
                                    message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_2_KENTEKE',
                                questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                                guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            },
                            {
                                maxLength: 3,
                                regex: {
                                    pattern: '^[a-zA-Z\\d]{3}$',
                                    message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_3_KENTEKE',
                                questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                                guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'ALFA ROMEO',
                                        value: 'ALFA ROMEO'
                                    },
                                    {
                                        key: 'ALPINA',
                                        value: 'ALPINA'
                                    },
                                    {
                                        key: 'AUDI',
                                        value: 'AUDI'
                                    },
                                    {
                                        key: 'BENTLEY',
                                        value: 'BENTLEY'
                                    },
                                    {
                                        key: 'BMW',
                                        value: 'BMW'
                                    },
                                    {
                                        key: 'CADILLAC',
                                        value: 'CADILLAC'
                                    },
                                    {
                                        key: 'CHEVROLET',
                                        value: 'CHEVROLET'
                                    },
                                    {
                                        key: 'CHRYSLER',
                                        value: 'CHRYSLER'
                                    },
                                    {
                                        key: 'CITROEN',
                                        value: 'CITROEN'
                                    },
                                    {
                                        key: 'CORVETTE',
                                        value: 'CORVETTE'
                                    },
                                    {
                                        key: 'DACIA',
                                        value: 'DACIA'
                                    },
                                    {
                                        key: 'DAEWOO',
                                        value: 'DAEWOO'
                                    },
                                    {
                                        key: 'DAIHATSU',
                                        value: 'DAIHATSU'
                                    },
                                    {
                                        key: 'DODGE',
                                        value: 'DODGE'
                                    },
                                    {
                                        key: 'FERRARI',
                                        value: 'FERRARI'
                                    },
                                    {
                                        key: 'FIAT',
                                        value: 'FIAT'
                                    },
                                    {
                                        key: 'FORD',
                                        value: 'FORD'
                                    },
                                    {
                                        key: 'HONDA',
                                        value: 'HONDA'
                                    },
                                    {
                                        key: 'HYUNDAI',
                                        value: 'HYUNDAI'
                                    },
                                    {
                                        key: 'INFINITI',
                                        value: 'INFINITI'
                                    },
                                    {
                                        key: 'IVECO',
                                        value: 'IVECO'
                                    },
                                    {
                                        key: 'JAGUAR',
                                        value: 'JAGUAR'
                                    },
                                    {
                                        key: 'JEEP',
                                        value: 'JEEP'
                                    },
                                    {
                                        key: 'KIA',
                                        value: 'KIA'
                                    },
                                    {
                                        key: 'LADA',
                                        value: 'LADA'
                                    },
                                    {
                                        key: 'LANCIA',
                                        value: 'LANCIA'
                                    },
                                    {
                                        key: 'LAND ROVER',
                                        value: 'LAND ROVER'
                                    },
                                    {
                                        key: 'LANDWIND',
                                        value: 'LANDWIND'
                                    },
                                    {
                                        key: 'LEXUS',
                                        value: 'LEXUS'
                                    },
                                    {
                                        key: 'MASERATI',
                                        value: 'MASERATI'
                                    },
                                    {
                                        key: 'MAYBACH',
                                        value: 'MAYBACH'
                                    },
                                    {
                                        key: 'MAZDA',
                                        value: 'MAZDA'
                                    },
                                    {
                                        key: 'MCLAREN',
                                        value: 'MCLAREN'
                                    },
                                    {
                                        key: 'MERCEDES-BENZ',
                                        value: 'MERCEDES-BENZ'
                                    },
                                    {
                                        key: 'MG',
                                        value: 'MG'
                                    },
                                    {
                                        key: 'MINI (BMW)',
                                        value: 'MINI (BMW)'
                                    },
                                    {
                                        key: 'MITSUBISHI',
                                        value: 'MITSUBISHI'
                                    },
                                    {
                                        key: 'NISSAN',
                                        value: 'NISSAN'
                                    },
                                    {
                                        key: 'OPEL',
                                        value: 'OPEL'
                                    },
                                    {
                                        key: 'PEUGEOT',
                                        value: 'PEUGEOT'
                                    },
                                    {
                                        key: 'PORSCHE',
                                        value: 'PORSCHE'
                                    },
                                    {
                                        key: 'RENAULT',
                                        value: 'RENAULT'
                                    },
                                    {
                                        key: 'ROLLS ROYCE',
                                        value: 'ROLLS ROYCE'
                                    },
                                    {
                                        key: 'ROVER',
                                        value: 'ROVER'
                                    },
                                    {
                                        key: 'SAAB',
                                        value: 'SAAB'
                                    },
                                    {
                                        key: 'SANTANA',
                                        value: 'SANTANA'
                                    },
                                    {
                                        key: 'SEAT',
                                        value: 'SEAT'
                                    },
                                    {
                                        key: 'SKODA',
                                        value: 'SKODA'
                                    },
                                    {
                                        key: 'SMART',
                                        value: 'SMART'
                                    },
                                    {
                                        key: 'SSANGYONG',
                                        value: 'SSANGYONG'
                                    },
                                    {
                                        key: 'SUBARU',
                                        value: 'SUBARU'
                                    },
                                    {
                                        key: 'SUZUKI',
                                        value: 'SUZUKI'
                                    },
                                    {
                                        key: 'TATA',
                                        value: 'TATA'
                                    },
                                    {
                                        key: 'TESLA',
                                        value: 'TESLA'
                                    },
                                    {
                                        key: 'TOYOTA',
                                        value: 'TOYOTA'
                                    },
                                    {
                                        key: 'VOLKSWAGEN (VW)',
                                        value: 'VOLKSWAGEN (VW)'
                                    },
                                    {
                                        key: 'VOLVO',
                                        value: 'VOLVO'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_MERK',
                                questionText: 'Von welcher Marke ist dein Fahrzeug?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '',
                                        value: ''
                                    },
                                    {
                                        key: '_',
                                        value: '_'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_MODEL',
                                questionText: 'Welches Modell hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 100,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_1_TYPE',
                                questionText: 'Welchen Motor hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1,
                                maxValue: 12,
                                type: 'Integer',
                                value: null,
                                id: 'OB_3_AFGDL1',
                                questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2017,
                                type: 'Integer',
                                value: null,
                                id: 'OB_1_AFGDL1',
                                questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Ich will meine Versicherung wechseln',
                                        value: 'Ich will meine Versicherung wechseln'
                                    },
                                    {
                                        key: 'Ich habe keine Versicherung',
                                        value: 'Ich habe keine Versicherung'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XO_1_VERZEKERDESOM',
                                questionText: 'Was trifft auf dich zu?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1,
                                maxValue: 12,
                                type: 'Integer',
                                value: null,
                                id: 'OB_4_AFGDL1',
                                questionText: 'Seit wann besitzt du das Auto?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2017,
                                type: 'Integer',
                                value: null,
                                id: 'OB_6_AFGDL1',
                                questionText: 'Seit wann besitzt du das Auto?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XO_1_VERZEKERDESOM',
                                        operator: 'IsContaining',
                                        value: 'will meine'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_1_GEBRUIK',
                                questionText: 'Hubraum',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_GEBRUIK',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    },
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_1_HorsePower',
                                questionText: 'PS',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Diesel',
                                        value: 'Diesel'
                                    },
                                    {
                                        key: 'Benzin',
                                        value: 'Benzin'
                                    },
                                    {
                                        key: 'Elektro/Hybrid',
                                        value: 'Elektro/Hybrid'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_BRANSTO',
                                questionText: 'Kraftstoff',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: null,
                                id: 'OB_2_TYPE',
                                questionText: 'Typklasse Haftpflicht',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_2_TYPE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_5_TYPE',
                                questionText: 'TDE Ins Full',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_5_TYPE',
                                        operator: 'IsEqualTo',
                                        value: '0'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'OB_6_TYPE',
                                questionText: 'TDE Ins Part',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_6_TYPE',
                                        operator: 'IsEqualTo',
                                        value: '0'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'bis 3.000 km',
                                        value: 'bis 3.000 km'
                                    },
                                    {
                                        key: 'bis 6.000 km',
                                        value: 'bis 6.000 km'
                                    },
                                    {
                                        key: 'bis 9.000 km',
                                        value: 'bis 9.000 km'
                                    },
                                    {
                                        key: 'bis 12.000 km',
                                        value: 'bis 12.000 km'
                                    },
                                    {
                                        key: 'bis 15.000 km',
                                        value: 'bis 15.000 km'
                                    },
                                    {
                                        key: 'bis 20.000 km',
                                        value: 'bis 20.000 km'
                                    },
                                    {
                                        key: 'bis 25.000 km',
                                        value: 'bis 25.000 km'
                                    },
                                    {
                                        key: 'bis 30.000 km',
                                        value: 'bis 30.000 km'
                                    },
                                    {
                                        key: 'mehr als 30.000 km',
                                        value: 'mehr als 30.000 km'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_2_GEBRUIK',
                                questionText: 'Wie viele Kilometer fährst du durchschnittlich pro Jahr?',
                                guideText: '<p><i>Folgende Informationen können dir helfen, die richtige Jahresfahrleistung zu wählen:</i></p>\n<ul>\n\t<li>Grundsätzlich fahren Menschen, die <b>auf dem Land leben</b>, <b>mehr Kilometer pro Jahr</b> als Menschen in der Stadt.</li>\n\t<li>Fahrer, die das Auto nur <b>gelegentlich für Ausflüge oder zum Einkaufen</b> nutzen, sollten mit einer Jahresfahrleistung von <b>bis zu 6.000 km</b> rechnen.</li>\n\t<li>Fahrer, die mit dem Auto <b>regelmaßig die gleiche Strecke zur Arbeit</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 12.000 km</b> rechnen.</li>\n\t<li>Fahrer, die das Auto regelmaßig für die Arbeit und Freizeit nutzen und <b>oft weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 20.000 km</b> rechnen.</li>\n\t<li>Fahrer, die <b>regelmaßig weite Strecken</b> fahren, sollten mit einer Jahresfahrleistung von <b>bis zu 30.000 km</b> rechnen.</li>\n</ul>',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 1900,
                                maxValue: 2000,
                                type: 'Integer',
                                value: null,
                                id: 'VZ_1_LEEFTYD',
                                questionText: 'In welchem Jahr wurdest du geboren?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: {
                                    options: 'IgnoreCase',
                                    pattern: '^\\d{5}$',
                                    resourceKey: {
                                        className: 'Resource_Customer',
                                        propertyName: 'ZipCodeRegExMessage'
                                    },
                                    message: 'Ungültige Eingabe (12345)'
                                },
                                type: 'String',
                                value: '',
                                id: 'OB_1_PCODE',
                                questionText: 'Wie lautet deine Postleitzahl?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'SF-Klasse auswählen',
                                        value: 'SF-Klasse auswählen'
                                    },
                                    {
                                        key: 'Dies ist meine erste KFZ-Versicherung',
                                        value: 'Dies ist meine erste KFZ-Versicherung'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'RI_2_SCHDVR',
                                questionText: 'Wie lautet die Schadenfreiheitsklasse (SF- Klasse) deiner KFZ- Haftpflicht-Versicherung?',
                                guideText: '<p>Die Schadenfreiheitsklasse (SF-Klasse) zeigt an, wie viele Jahre du unfallfrei Auto gefahren bist.</p>\n<p>Mit jedem schadenfreien Jahr verbessert sich deine SF-Klasse - und damit verringert sich auch meist die Höhe deiner Versicherungsprämie.</p>\n<p>Wechselst du deine Versicherung, sprechen wir uns mit deinem letzten Versicherer ab und übernehmen deine bestehende SF-Klasse. Damit wir für unser Angebot nicht auf die Rückmeldung deines letzten Versicherers warten müssen, brauchen wir die Information bereits jetzt von dir.</p>\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'M',
                                        value: 'M'
                                    },
                                    {
                                        key: '0',
                                        value: '0'
                                    },
                                    {
                                        key: 'S',
                                        value: 'S'
                                    },
                                    {
                                        key: 'SF1/2',
                                        value: 'SF1/2'
                                    },
                                    {
                                        key: 'SF1',
                                        value: 'SF1'
                                    },
                                    {
                                        key: 'SF2',
                                        value: 'SF2'
                                    },
                                    {
                                        key: 'SF3',
                                        value: 'SF3'
                                    },
                                    {
                                        key: 'SF4',
                                        value: 'SF4'
                                    },
                                    {
                                        key: 'SF5',
                                        value: 'SF5'
                                    },
                                    {
                                        key: 'SF6',
                                        value: 'SF6'
                                    },
                                    {
                                        key: 'SF7',
                                        value: 'SF7'
                                    },
                                    {
                                        key: 'SF8',
                                        value: 'SF8'
                                    },
                                    {
                                        key: 'SF9',
                                        value: 'SF9'
                                    },
                                    {
                                        key: 'SF10',
                                        value: 'SF10'
                                    },
                                    {
                                        key: 'SF11',
                                        value: 'SF11'
                                    },
                                    {
                                        key: 'SF12',
                                        value: 'SF12'
                                    },
                                    {
                                        key: 'SF13',
                                        value: 'SF13'
                                    },
                                    {
                                        key: 'SF14',
                                        value: 'SF14'
                                    },
                                    {
                                        key: 'SF15',
                                        value: 'SF15'
                                    },
                                    {
                                        key: 'SF16',
                                        value: 'SF16'
                                    },
                                    {
                                        key: 'SF17',
                                        value: 'SF17'
                                    },
                                    {
                                        key: 'SF18',
                                        value: 'SF18'
                                    },
                                    {
                                        key: 'SF19',
                                        value: 'SF19'
                                    },
                                    {
                                        key: 'SF20',
                                        value: 'SF20'
                                    },
                                    {
                                        key: 'SF21',
                                        value: 'SF21'
                                    },
                                    {
                                        key: 'SF22',
                                        value: 'SF22'
                                    },
                                    {
                                        key: 'SF23',
                                        value: 'SF23'
                                    },
                                    {
                                        key: 'SF24',
                                        value: 'SF24'
                                    },
                                    {
                                        key: 'SF25',
                                        value: 'SF25'
                                    },
                                    {
                                        key: 'SF26',
                                        value: 'SF26'
                                    },
                                    {
                                        key: 'SF27',
                                        value: 'SF27'
                                    },
                                    {
                                        key: 'SF28',
                                        value: 'SF28'
                                    },
                                    {
                                        key: 'SF29',
                                        value: 'SF29'
                                    },
                                    {
                                        key: 'SF30',
                                        value: 'SF30'
                                    },
                                    {
                                        key: 'SF31',
                                        value: 'SF31'
                                    },
                                    {
                                        key: 'SF32',
                                        value: 'SF32'
                                    },
                                    {
                                        key: 'SF33',
                                        value: 'SF33'
                                    },
                                    {
                                        key: 'SF34',
                                        value: 'SF34'
                                    },
                                    {
                                        key: 'SF35',
                                        value: 'SF35'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'RI_3_SCHDVR',
                                questionText: 'Wähle deine Schadenfreiheitsklasse für die KFZ-Haftpflicht-Versicherung',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'SF-Klasse auswählen'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'RI_4_SCHDVR',
                                questionText: 'Schadenfreiheitsklasse Vollkasko (SF)',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_4_SCHDVR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'OB_2_AFGDL1',
                                questionText: 'Jahr der Erstversicherung\n',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_2_AFGDL1',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'BS_1_INCIDENT',
                                questionText: 'Hast du jemals einen Schaden selbst verursacht?\n',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'nein'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: '1800-01-01T00:00:00+01:00',
                                maxValue: '9999-12-31T23:59:59.9999999+01:00',
                                type: 'DateTime',
                                value: null,
                                id: 'RI_1_8SCHADE',
                                questionText: 'Wann war dein letzter selbst verursachter Schaden?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'BS_1_INCIDENT',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                maxLength: 40,
                                regex: null,
                                type: 'String',
                                value: '',
                                id: 'DG_2_BMPERC',
                                questionText: 'Voraussichtliche SF-Klasse',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DG_2_BMPERC',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_11_DEKOMS',
                                questionText: 'Prämie Haftpflicht',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_11_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_12_DEKOMS',
                                questionText: 'Prämie Teilkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_12_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_13_DEKOMS',
                                questionText: 'Prämie Teilkasko Plus',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_13_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_14_DEKOMS',
                                questionText: 'Prämie Vollkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_14_DEKOMS',
                                        operator: 'IsLargerThen',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Treffen Sie Ihre Wahl',
                                        value: 'Treffen Sie Ihre Wahl'
                                    },
                                    {
                                        key: 'Haftpflicht',
                                        value: 'Haftpflicht'
                                    },
                                    {
                                        key: 'Teilkasko',
                                        value: 'Teilkasko'
                                    },
                                    {
                                        key: 'Teilkasko Plus',
                                        value: 'Teilkasko Plus'
                                    },
                                    {
                                        key: 'Vollkasko',
                                        value: 'Vollkasko'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_2_DEKOMS',
                                questionText: 'Deckung',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_26_DEKOMS',
                                questionText: 'Weitere Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_20_DEKOMS',
                                questionText: 'Freie Werkstattwahl',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_21_DEKOMS',
                                questionText: 'Rabattschutz',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_22_DEKOMS',
                                questionText: 'Fahrerschutz',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_23_DEKOMS',
                                questionText: 'Schutzbrief Inland',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'XD_24_DEKOMS',
                                questionText: 'Reisepaket Ausland',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_2_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'kasko'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 17,
                                maxValue: 110,
                                type: 'Integer',
                                value: 0,
                                id: 'VZ_2_LEEFTYD',
                                questionText: 'Jüngster Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_26_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 17,
                                maxValue: 110,
                                type: 'Integer',
                                value: 0,
                                id: 'VZ_3_LEEFTYD',
                                questionText: 'Ältester Fahrer',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'XD_26_DEKOMS',
                                        operator: 'IsContaining',
                                        value: 'ja'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Decimal',
                                value: 0,
                                id: 'OB_1_NWE',
                                questionText: 'Ungefährer Neuwert des Fahrzeugs',
                                guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'DA_6_ERB',
                                questionText: 'Selbstbeteiligung Vollkasko',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DA_6_ERB',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'DA_2_ERB',
                                questionText: 'Selbstbeteiligung Teilkasko',
                                guideText: '<b>Selbstbeteiligung Teilkasko</b><br/>\nWarum muss bei einer Vollkaskoversicherung auch die Selbstbeteiligung Teilkasko festgelegt werden?\nIhr gewünschter Versicherungsschutz deckt Vollkasko- inkl. Teilkaskoschäden. Sie können die Selbstbeteiligung dabei jeweils individuell festlegen.',
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DA_2_ERB',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'IK_1_AMBTENR',
                                questionText: 'Beamtenstatus',
                                guideText: '<b>Beamtenstatus</b><br/>\nFür die Berufsgruppe Beamte wird ein Rabatt gewährt.',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'IK_1_AMBTENR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nur privat (inkl. Arbeitsweg)',
                                        value: 'Nur privat (inkl. Arbeitsweg)'
                                    },
                                    {
                                        key: 'Privat und gewerblich',
                                        value: 'Privat und gewerblich'
                                    },
                                    {
                                        key: 'Nur gewerblich',
                                        value: 'Nur gewerblich'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_3_GEBRUIK',
                                questionText: 'Nutzung des Fahrzeugs',
                                guideText: '<b>Nutzung des Fahrzeugs</b><br/>\nAktuell versichern wir nur Fahrzeuge mit privater Nutzung.<br/>\n<br/>\nWas ist gewerblich?<br/>\nWird das Fahrzeug für berufliche Fahrten verwendet (z.B. Lieferdienst oder Kundenbesuche), handelt es sich um eine gewerbliche Nutzung. Die Fahrt zwischen Wohnung und Arbeitsstelle gilt als private Nutzung.\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_3_GEBRUIK',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: 'Nein',
                                        value: 'Nein'
                                    },
                                    {
                                        key: 'Ja',
                                        value: 'Ja'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'OB_1_AANTKW',
                                questionText: 'Nachträgliches Tuning',
                                guideText: '<b>Nachträgliches Tuning</b><br/>\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_AANTKW',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '-82% (Trede 39)',
                                        value: '-82% (Trede 39)'
                                    },
                                    {
                                        key: '-79% (Trede 38)',
                                        value: '-79% (Trede 38)'
                                    },
                                    {
                                        key: '-79% (Trede 37)',
                                        value: '-79% (Trede 37)'
                                    },
                                    {
                                        key: '-79% (Trede 36)',
                                        value: '-79% (Trede 36)'
                                    },
                                    {
                                        key: '-78% (Trede 35)',
                                        value: '-78% (Trede 35)'
                                    },
                                    {
                                        key: '-78% (Trede 34)',
                                        value: '-78% (Trede 34)'
                                    },
                                    {
                                        key: '-78% (Trede 33)',
                                        value: '-78% (Trede 33)'
                                    },
                                    {
                                        key: '-77% (Trede 32)',
                                        value: '-77% (Trede 32)'
                                    },
                                    {
                                        key: '-77% (Trede 31)',
                                        value: '-77% (Trede 31)'
                                    },
                                    {
                                        key: '-76% (Trede 30)',
                                        value: '-76% (Trede 30)'
                                    },
                                    {
                                        key: '-76% (Trede 29)',
                                        value: '-76% (Trede 29)'
                                    },
                                    {
                                        key: '-75% (Trede 28)',
                                        value: '-75% (Trede 28)'
                                    },
                                    {
                                        key: '-75% (Trede 27)',
                                        value: '-75% (Trede 27)'
                                    },
                                    {
                                        key: '-74% (Trede 26)',
                                        value: '-74% (Trede 26)'
                                    },
                                    {
                                        key: '-74% (Trede 25)',
                                        value: '-74% (Trede 25)'
                                    },
                                    {
                                        key: '-73% (Trede 24)',
                                        value: '-73% (Trede 24)'
                                    },
                                    {
                                        key: '-73% (Trede 23)',
                                        value: '-73% (Trede 23)'
                                    },
                                    {
                                        key: '-72% (Trede 22)',
                                        value: '-72% (Trede 22)'
                                    },
                                    {
                                        key: '-71% (Trede 21)',
                                        value: '-71% (Trede 21)'
                                    },
                                    {
                                        key: '-70% (Trede 20)',
                                        value: '-70% (Trede 20)'
                                    },
                                    {
                                        key: '-70% (Trede 19)',
                                        value: '-70% (Trede 19)'
                                    },
                                    {
                                        key: '-69% (Trede 18)',
                                        value: '-69% (Trede 18)'
                                    },
                                    {
                                        key: '-68% (Trede 17)',
                                        value: '-68% (Trede 17)'
                                    },
                                    {
                                        key: '-67% (Trede 16)',
                                        value: '-67% (Trede 16)'
                                    },
                                    {
                                        key: '-65% (Trede 15)',
                                        value: '-65% (Trede 15)'
                                    },
                                    {
                                        key: '-64% (Trede 14)',
                                        value: '-64% (Trede 14)'
                                    },
                                    {
                                        key: '-62% (Trede 13)',
                                        value: '-62% (Trede 13)'
                                    },
                                    {
                                        key: '-61% (Trede 12)',
                                        value: '-61% (Trede 12)'
                                    },
                                    {
                                        key: '-59% (Trede 11)',
                                        value: '-59% (Trede 11)'
                                    },
                                    {
                                        key: '-57% (Trede 10)',
                                        value: '-57% (Trede 10)'
                                    },
                                    {
                                        key: '-54% (Trede 9)',
                                        value: '-54% (Trede 9)'
                                    },
                                    {
                                        key: '-52% (Trede 8)',
                                        value: '-52% (Trede 8)'
                                    },
                                    {
                                        key: '-48% (Trede 7)',
                                        value: '-48% (Trede 7)'
                                    },
                                    {
                                        key: '-45% (Trede 6)',
                                        value: '-45% (Trede 6)'
                                    },
                                    {
                                        key: '-40% (Trede 5)',
                                        value: '-40% (Trede 5)'
                                    },
                                    {
                                        key: '-28% (Trede 4)',
                                        value: '-28% (Trede 4)'
                                    },
                                    {
                                        key: '-14% (Trede 3)',
                                        value: '-14% (Trede 3)'
                                    },
                                    {
                                        key: '-6% (Trede 2)',
                                        value: '-6% (Trede 2)'
                                    },
                                    {
                                        key: '35% (Trede 1)',
                                        value: '35% (Trede 1)'
                                    }
                                ],
                                type: 'Selection',
                                value: '-82% (Trede 39)',
                                id: 'DG_1_BMPERC',
                                questionText: 'SF Klasse',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'DG_1_BMPERC',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_15_DEKOMS',
                                questionText: 'Prämie Freie Werkstattwahl',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_15_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_16_DEKOMS',
                                questionText: 'Prämie Rabattschutz',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_16_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_17_DEKOMS',
                                questionText: 'Prämie Fahrerschutzversicherung',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_17_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_18_DEKOMS',
                                questionText: 'Prämie Schutzbrief Inland',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_18_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                currencySign: '€',
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Currency',
                                value: 0,
                                id: 'XD_19_DEKOMS',
                                questionText: 'Prämie Reisepaket Ausland',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'XD_19_DEKOMS',
                                        operator: 'IsNotEqualTo',
                                        value: '0,00'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 0,
                                id: 'RI_1_SCHDVR',
                                questionText: 'Fictieve SVJ',
                                guideText: null,
                                isMandatory: false,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_1_SCHDVR',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                minValue: '2017-07-11T00:00:00+02:00',
                                maxValue: null,
                                type: 'DateTime',
                                value: '11.07.2017',
                                id: 'Contract_1_DateStart',
                                questionText: 'Anfangsdatum',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                items: [
                                    {
                                        key: '1',
                                        value: 'Pro Monat'
                                    },
                                    {
                                        key: '3',
                                        value: 'Vierteljährlich'
                                    },
                                    {
                                        key: '6',
                                        value: 'Pro Halbjahr'
                                    },
                                    {
                                        key: '12',
                                        value: 'Jährlich'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: 'Contract_1_PaymentInterval',
                                questionText: 'Zahlungsintervall',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: true
                            },
                            {
                                type: 'String',
                                id: 'RI_0_SCHDVR',
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'RI_2_SCHDVR',
                                        operator: 'IsContaining',
                                        value: 'erste'
                                    }
                                ],
                                questionText: 'Deine voraussichtliche Schadenfreiheitsklasse',
                                value: 'SF 1/2',
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            },
                            {
                                type: 'String',
                                id: 'OB_0_KENTEKE',
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                value: 'test',
                                questionText: 'Dein Fahrzeug',
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                isRelevant: false
                            }
                        ]
                    },
                    {
                        type: 'customer',
                        questionIds: [
                            'Private_1_Email',
                            'Private_1_Password',
                            'Private_1_FirstName',
                            'Private_1_StreetName',
                            'Private_1_DateBirth',
                            'Private_1_Iban'
                        ]
                    },
                    {
                        type: 'closing'
                    }
                ]
            }
        }
    },
    productFlow: {
        lookupDataGroups: [
            {
                groupName: 'DIV.LookupService.Vehicle.DE.Eurotax.HsnTsn_OB_True_1_10_DEDE_1',
                steps: [
                    {
                        service: {
                            url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax.HsnTsn/YearHsnTsnStep?parameters=entity:OB isHsnTsn:True powerRangeGroup:1 vehType:10 langCode:DEDE entitySequenceNumber:1',
                            name: 'DIV.LookupService.Vehicle.DE.Eurotax.HsnTsn_OB_True_1_10_DEDE_1',
                            step: 'YearHsnTsnStep'
                        },
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'AFGDL1'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'KENTEKE'
                            }
                        ],
                        outputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'AFGDL1'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'HorsePower'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'HorsePower_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'BRANSTO'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'BRANSTO_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'NWE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'OBJSRT'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 5,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 6,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 4,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'GEBRUIK'
                            }
                        ]
                    }
                ]
            },
            {
                groupName: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                steps: [
                    {
                        service: {
                            url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax/ModelsByMakeStep?parameters=langCode:DEDE vehType:10 entitySequenceNumber:1 entity:OB powerRangeGroup:1',
                            name: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                            step: 'ModelsByMakeStep'
                        },
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            }
                        ],
                        outputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'AFGDL1'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'HorsePower'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'HorsePower_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'BRANSTO'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'BRANSTO_SELECTION'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'NWE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'OBJSRT'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 5,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 6,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 4,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'GEBRUIK'
                            }
                        ]
                    },
                    {
                        service: {
                            url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax/MotorByMakeAndModelStep?parameters=langCode:DEDE vehType:10 entitySequenceNumber:1 entity:OB powerRangeGroup:1',
                            name: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                            step: 'MotorByMakeAndModelStep'
                        },
                        additionalOptions: [
                            {
                                items: [
                                    {
                                        key: '2 (Limousine)',
                                        value: '2 (Limousine)'
                                    },
                                    {
                                        key: '3 (Limousine)',
                                        value: '3 (Limousine)'
                                    },
                                    {
                                        key: '5 (Kombi)',
                                        value: '5 (Kombi)'
                                    },
                                    {
                                        key: '6 (Kombi)',
                                        value: '6 (Kombi)'
                                    },
                                    {
                                        key: '6 (Limousine)',
                                        value: '6 (Limousine)'
                                    },
                                    {
                                        key: 'CX-3 (Geschlossen)',
                                        value: 'CX-3 (Geschlossen)'
                                    },
                                    {
                                        key: 'CX-5 (Geschlossen)',
                                        value: 'CX-5 (Geschlossen)'
                                    },
                                    {
                                        key: 'CX-7 (Geschlossen)',
                                        value: 'CX-7 (Geschlossen)'
                                    },
                                    {
                                        key: 'MPV (Kombi)',
                                        value: 'MPV (Kombi)'
                                    },
                                    {
                                        key: 'MX 5 (Roadster)',
                                        value: 'MX 5 (Roadster)'
                                    },
                                    {
                                        key: 'Premacy (Kombi)',
                                        value: 'Premacy (Kombi)'
                                    },
                                    {
                                        key: 'RX-8 (Coupe)',
                                        value: 'RX-8 (Coupe)'
                                    },
                                    {
                                        key: 'Tribute (Geschlossen)',
                                        value: 'Tribute (Geschlossen)'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'MODEL'
                                },
                                questionText: 'Welches Modell hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            }
                        ],
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            }
                        ],
                        answers: {}
                    },
                    {
                        service: {
                            url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax/YearStep?parameters=langCode:DEDE vehType:10 entitySequenceNumber:1 entity:OB powerRangeGroup:1',
                            name: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                            step: 'YearStep'
                        },
                        additionalOptions: [
                            {
                                items: [
                                    {
                                        key: '1.8 (120 PS/88 KW)',
                                        value: '1.8 (120 PS/88 KW)'
                                    },
                                    {
                                        key: '1.8 MZR (120 PS/88 KW)',
                                        value: '1.8 MZR (120 PS/88 KW)'
                                    },
                                    {
                                        key: '2.0 (141 PS/104 KW)',
                                        value: '2.0 (141 PS/104 KW)'
                                    },
                                    {
                                        key: '2.0 (147 PS/108 KW)',
                                        value: '2.0 (147 PS/108 KW)'
                                    },
                                    {
                                        key: '2.0 Aut. (147 PS/108 KW)',
                                        value: '2.0 Aut. (147 PS/108 KW)'
                                    },
                                    {
                                        key: '2.0 CD (121 PS/89 KW)',
                                        value: '2.0 CD (121 PS/89 KW)'
                                    },
                                    {
                                        key: '2.0 CD (136 PS/100 KW)',
                                        value: '2.0 CD (136 PS/100 KW)'
                                    },
                                    {
                                        key: '2.0 CD DPF (121 PS/89 KW)',
                                        value: '2.0 CD DPF (121 PS/89 KW)'
                                    },
                                    {
                                        key: '2.0 CD DPF (140 PS/103 KW)',
                                        value: '2.0 CD DPF (140 PS/103 KW)'
                                    },
                                    {
                                        key: '2.0 CD DPF (143 PS/105 KW)',
                                        value: '2.0 CD DPF (143 PS/105 KW)'
                                    },
                                    {
                                        key: '2.0 MZR (155 PS/114 KW)',
                                        value: '2.0 MZR (155 PS/114 KW)'
                                    },
                                    {
                                        key: '2.0 SKYACTIV-G (145 PS/107 KW)',
                                        value: '2.0 SKYACTIV-G (145 PS/107 KW)'
                                    },
                                    {
                                        key: '2.0 SKYACTIV-G (165 PS/121 KW)',
                                        value: '2.0 SKYACTIV-G (165 PS/121 KW)'
                                    },
                                    {
                                        key: '2.0 SKYACTIV-G Aut. (165 PS/121 KW)',
                                        value: '2.0 SKYACTIV-G Aut. (165 PS/121 KW)'
                                    },
                                    {
                                        key: '2.2 CD DPF (125 PS/92 KW)',
                                        value: '2.2 CD DPF (125 PS/92 KW)'
                                    },
                                    {
                                        key: '2.2 CD DPF (163 PS/120 KW)',
                                        value: '2.2 CD DPF (163 PS/120 KW)'
                                    },
                                    {
                                        key: '2.2 CD DPF (185 PS/136 KW)',
                                        value: '2.2 CD DPF (185 PS/136 KW)'
                                    },
                                    {
                                        key: '2.2 SKYACTIV-D (150 PS/110 KW)',
                                        value: '2.2 SKYACTIV-D (150 PS/110 KW)'
                                    },
                                    {
                                        key: '2.2 SKYACTIV-D (175 PS/129 KW)',
                                        value: '2.2 SKYACTIV-D (175 PS/129 KW)'
                                    },
                                    {
                                        key: '2.2 SKYACTIV-D Aut. (150 PS/110 KW)',
                                        value: '2.2 SKYACTIV-D Aut. (150 PS/110 KW)'
                                    },
                                    {
                                        key: '2.2 SKYACTIV-D Aut. (175 PS/129 KW)',
                                        value: '2.2 SKYACTIV-D Aut. (175 PS/129 KW)'
                                    },
                                    {
                                        key: '2.3 (166 PS/122 KW)',
                                        value: '2.3 (166 PS/122 KW)'
                                    },
                                    {
                                        key: '2.3 Aut. (166 PS/122 KW)',
                                        value: '2.3 Aut. (166 PS/122 KW)'
                                    },
                                    {
                                        key: '2.5 (170 PS/125 KW)',
                                        value: '2.5 (170 PS/125 KW)'
                                    },
                                    {
                                        key: '2.5 SKYACTIV-G (192 PS/141 KW)',
                                        value: '2.5 SKYACTIV-G (192 PS/141 KW)'
                                    },
                                    {
                                        key: '6 (260 PS/191 KW)',
                                        value: '6 (260 PS/191 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-D 150 Drive i-ELOOP (150 PS/110 KW)',
                                        value: 'SKYACTIV-D 150 Drive i-ELOOP (150 PS/110 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-D 150 i-ELOOP (150 PS/110 KW)',
                                        value: 'SKYACTIV-D 150 i-ELOOP (150 PS/110 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-D 175 Drive i-ELOOP (175 PS/129 KW)',
                                        value: 'SKYACTIV-D 175 Drive i-ELOOP (175 PS/129 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-D 175 i-ELOOP (175 PS/129 KW)',
                                        value: 'SKYACTIV-D 175 i-ELOOP (175 PS/129 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-G 145 (145 PS/107 KW)',
                                        value: 'SKYACTIV-G 145 (145 PS/107 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-G 165 (165 PS/121 KW)',
                                        value: 'SKYACTIV-G 165 (165 PS/121 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-G 165 Aut. (165 PS/121 KW)',
                                        value: 'SKYACTIV-G 165 Aut. (165 PS/121 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-G 165 i-ELOOP (165 PS/121 KW)',
                                        value: 'SKYACTIV-G 165 i-ELOOP (165 PS/121 KW)'
                                    },
                                    {
                                        key: 'SKYACTIV-G 192 Drive i-ELOOP (192 PS/141 KW)',
                                        value: 'SKYACTIV-G 192 Drive i-ELOOP (192 PS/141 KW)'
                                    },
                                    {
                                        key: 'Sport 1.8 (120 PS/88 KW)',
                                        value: 'Sport 1.8 (120 PS/88 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 (141 PS/104 KW)',
                                        value: 'Sport 2.0 (141 PS/104 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 (147 PS/108 KW)',
                                        value: 'Sport 2.0 (147 PS/108 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 Aut. (147 PS/108 KW)',
                                        value: 'Sport 2.0 Aut. (147 PS/108 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 CD (121 PS/89 KW)',
                                        value: 'Sport 2.0 CD (121 PS/89 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 CD (136 PS/100 KW)',
                                        value: 'Sport 2.0 CD (136 PS/100 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 CD DPF (121 PS/89 KW)',
                                        value: 'Sport 2.0 CD DPF (121 PS/89 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 CD DPF (140 PS/103 KW)',
                                        value: 'Sport 2.0 CD DPF (140 PS/103 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 CD DPF (143 PS/105 KW)',
                                        value: 'Sport 2.0 CD DPF (143 PS/105 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 MZR DISI (155 PS/114 KW)',
                                        value: 'Sport 2.0 MZR DISI (155 PS/114 KW)'
                                    },
                                    {
                                        key: 'Sport 2.0 MZR DISI Aut. (155 PS/114 KW)',
                                        value: 'Sport 2.0 MZR DISI Aut. (155 PS/114 KW)'
                                    },
                                    {
                                        key: 'Sport 2.2 CD DPF (125 PS/92 KW)',
                                        value: 'Sport 2.2 CD DPF (125 PS/92 KW)'
                                    },
                                    {
                                        key: 'Sport 2.2 CD DPF (129 PS/95 KW)',
                                        value: 'Sport 2.2 CD DPF (129 PS/95 KW)'
                                    },
                                    {
                                        key: 'Sport 2.2 CD DPF (163 PS/120 KW)',
                                        value: 'Sport 2.2 CD DPF (163 PS/120 KW)'
                                    },
                                    {
                                        key: 'Sport 2.2 CD DPF (180 PS/132 KW)',
                                        value: 'Sport 2.2 CD DPF (180 PS/132 KW)'
                                    },
                                    {
                                        key: 'Sport 2.2 CD DPF (185 PS/136 KW)',
                                        value: 'Sport 2.2 CD DPF (185 PS/136 KW)'
                                    },
                                    {
                                        key: 'Sport 2.3 (166 PS/122 KW)',
                                        value: 'Sport 2.3 (166 PS/122 KW)'
                                    },
                                    {
                                        key: 'Sport 2.3 Aut. (166 PS/122 KW)',
                                        value: 'Sport 2.3 Aut. (166 PS/122 KW)'
                                    },
                                    {
                                        key: 'Sport 2.5 (170 PS/125 KW)',
                                        value: 'Sport 2.5 (170 PS/125 KW)'
                                    },
                                    {
                                        key: 'Sport 2.5 MZR (170 PS/125 KW)',
                                        value: 'Sport 2.5 MZR (170 PS/125 KW)'
                                    }
                                ],
                                type: 'Selection',
                                value: null,
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'TYPE'
                                },
                                questionText: 'Welchen Motor hast du?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            }
                        ],
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE'
                            }
                        ],
                        answers: {}
                    },
                    {
                        service: {
                            url: 'https://webapi.friday.de/divwebapi/api/Products/104582/LookupData/DIV.LookupService.Vehicle.DE.Eurotax/VehicleTypeInformationStep?parameters=langCode:DEDE vehType:10 entitySequenceNumber:1 entity:OB powerRangeGroup:1',
                            name: 'DIV.LookupService.Vehicle.DE.Eurotax_DEDE_10_1_OB_1',
                            step: 'VehicleTypeInformationStep'
                        },
                        additionalOptions: [
                            {
                                minValue: 1900,
                                maxValue: 2017,
                                type: 'Integer',
                                value: null,
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'AFGDL1'
                                },
                                questionText: 'Wann wurde das Fahrzeug erstmals zugelassen?',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            }
                        ],
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'AFGDL1'
                            }
                        ],
                        answers: {}
                    },
                    {
                        additionalOptions: [
                            {
                                items: [
                                    {
                                        key: '7118',
                                        value: '7118'
                                    }
                                ],
                                type: 'String',
                                value: '7118',
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 2,
                                    subEntity: 'KENTEKE'
                                },
                                questionText: 'Herstellernummer (HSN) (ohne führende Nullen)',
                                guideText: '<b>Herstellernummer (HSN)</b><br/>\nDie HSN steht in Feld 2.1 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                regex: {
                                    pattern: '^\\d{4}$',
                                    message: 'Die HSN ist eine vierstellige Nummber. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                }
                            },
                            {
                                items: [
                                    {
                                        key: 'AFO',
                                        value: 'AFO'
                                    }
                                ],
                                type: 'String',
                                value: 'AFO',
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 3,
                                    subEntity: 'KENTEKE'
                                },
                                questionText: 'Typschlüsselnummer (TSN) (dreistellig)',
                                guideText: '<b>Typschlüsselnummer (TSN)</b><br/>\nDie TSN steht in Feld 2.2 der Zulassungspapiere\n',
                                isMandatory: true,
                                isReadonly: false,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Daten'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ],
                                regex: {
                                    pattern: '^[a-zA-Z\\d]{3}$',
                                    message: 'Wir benötigen drei Zeichen der TSN. Dies sind normalerweise drei Buchstben oder drei Ziffern. Bitte überprüfe deine Eingabe.',
                                    options: ''
                                }
                            },
                            {
                                items: [
                                    {
                                        key: 'Diesel',
                                        value: 'Diesel'
                                    }
                                ],
                                type: 'Selection',
                                value: 'Diesel',
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'BRANSTO'
                                },
                                questionText: 'Kraftstoff',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                type: 'Integer',
                                value: 150,
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'HorsePower'
                                },
                                questionText: 'PS',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsContaining',
                                        value: 'Liste'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            },
                            {
                                items: [
                                    {
                                        key: '2191',
                                        value: '2191'
                                    }
                                ],
                                type: 'Selection',
                                value: '2191',
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'GEBRUIK'
                                },
                                questionText: 'Hubraum',
                                guideText: null,
                                isMandatory: true,
                                isReadonly: true,
                                optionRules: [
                                    {
                                        id: 'OB_1_GEBRUIK',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    },
                                    {
                                        id: 'OB_1_KENTEKE',
                                        operator: 'IsEqualTo',
                                        value: 'onzichtbaar'
                                    }
                                ],
                                optionUses: [
                                    'Calculation',
                                    'SaveProduct'
                                ]
                            },
                            {
                                minValue: 0,
                                maxValue: null,
                                precision: 2,
                                type: 'Decimal',
                                value: 32790,
                                id: {
                                    entity: 'OB',
                                    entitySequenceNumber: 1,
                                    subEntity: 'NWE'
                                },
                                questionText: 'Ungefährer Neuwert des Fahrzeugs',
                                guideText: '<b>Ungefährer Neuwert des Fahrzeugs</b><br/>\nGeben Sie den Listenneupreis inklusive Sonderausstattung an. Ist Ihnen der genaue Preis nicht bekannt, genügt auch eine Schätzung\n',
                                isMandatory: true,
                                isReadonly: true,
                                optionRules: [],
                                optionUses: [
                                    'SaveProduct'
                                ]
                            }
                        ],
                        inputIds: [
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MERK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'MODEL'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'TYPE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'AFGDL1'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 2,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 3,
                                subEntity: 'KENTEKE'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'BRANSTO'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'HorsePower'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'GEBRUIK'
                            },
                            {
                                entity: 'OB',
                                entitySequenceNumber: 1,
                                subEntity: 'NWE'
                            }
                        ],
                        answers: {
                            OB_2_KENTEKE: '7118',
                            OB_3_KENTEKE: 'AFO',
                            OB_1_BRANSTO: 'Diesel',
                            OB_1_HorsePower: 150,
                            OB_1_GEBRUIK: '2191',
                            OB_1_NWE: 32790
                        }
                    }
                ]
            }
        ]
    },
    payment: {
        isValidIban: false,
            isVerifyIbanLoading: false,
            verifyIbanError: null
    },
    hsnTsn: {
        isLoading: false,
            isSuccessful: true
    },
    productLookupData: {
        isFetchingData: false
    }
}
