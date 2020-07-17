import { listToMap } from '@togglecorp/fujs';

export const NO_DATA = 'No data to display.';

export const organizationalUnitOptions = [
    { value: 0, label: "Nepal Red Cross HQS" },
    { value: 1, label: "NRCS District-Chapter" },
    { value: 2, label: "NRCS Sub-Chapter" },
    { value: 3, label: "Junior/Youth Red Cross Community" }
];

export const partnerOptions = [
    { value: 0, label: "Through NRCS HQS" },
    { value: 1, label: "Government agencies" },
    { value: 2, label: "INGO/NGO" },
    { value: 3, label: "Other" }
];

export const defaultSubactivityOptions = [];

export const activityOptions = [
    {
        value: 0,
        label: "Conduct training/orientation on COVID-19/ PPE and IPC measure",
        subactivityOptions: [
            {
                value: 0,
                label: "Training"
            },
            {
                value: 1,
                label: "Orientation"
            }
        ]
    },
    {
        value: 1,
        label: "Blood donation campaign",
        subactivityOptions: [
            {
                value: 0,
                label: "Donation Campaign"
            },
            {
                value: 1,
                label: "Door to door blood collection mechanism"
            }
        ]
    },
    {
        value: 2,
        label: "Establish health/help desk",
        subactivityOptions: [
            {
                value: 0,
                label: "Health Desk"
            },
            {
                value: 1,
                label: "Help Desk"
            }
        ]
    },
    {
        value: 3,
        label: "Distribute personal protective equipment to COVID-19 responders",
        subactivityOptions: [
            {
                value: 0,
                label: "Full Body PPE Set"
            },
            {
                value: 1,
                label: "Full Body Apron"
            },
            {
                value: 2,
                label: "Mask"
            },
            {
                value: 3,
                label: "N95 Mask"
            },
            {
                value: 4,
                label: "Disposable/examination gloves"
            },
            {
                value: 5,
                label: "Goggles/face shield"
            },
            {
                value: 6,
                label: "Rubber boot (Long tube rubber shoe)"
            },
            {
                value: 7,
                label: "Shoes with cover"
            },
            {
                value: 8,
                label: "Head cover"
            },
            {
                value: 9,
                label: "Other"
            }
        ]
    },
    {
        value: 4,
        label: "Support medical equipment and materials",
        subactivityOptions: [
            {
                value: 0,
                label: "First aid kit"
            },
            {
                value: 1,
                label: "PSS kit"
            },
            {
                value: 2,
                label: "Emergency Kit"
            },
            {
                value: 3,
                label: "Infrared thermometer"
            },
            {
                value: 4,
                label: "Ventilator"
            },
            {
                value: 5,
                label: "Liquid hand washing soap with pump"
            },
            {
                value: 6,
                label: "Hand Sanitizer"
            },
            {
                value: 7,
                label: "Disinfect solutions Hydrochloride"
            },
            {
                value: 8,
                label: "Disinfect sprayer"
            }
        ]
    },
    {
        value: 5,
        label: "Provide psychosocial support(PSS) training/orientation",
        subactivityOptions: [
            {
                value: 0,
                label: "Psychosocial support orientation"
            },
            {
                value: 1,
                label: "Psychosocial support training"
            }
        ]
    },
    {
        value: 6,
        label: "Upgrade the service of Ambulance",
        subactivityOptions: [
            {
                value: 0,
                label: "Material support"
            },
            {
                value: 1,
                label: "Compartment division"
            },
            {
                value: 2,
                label: "First aid kit"
            }
        ]
    },
    {
        value: 7,
        label: "Provide psychosocial first aid (PFA)training/orientation",
        subactivityOptions: [
            {
                value: 0,
                label: "Psychosocial first aid training"
            },
            {
                value: 1,
                label: "Psychosocial first aid orientation"
            }
        ]
    },
    {
        value: 8,
        label: "Conduct COVID-19  awareness activities for community (risk communication)",
        subactivityOptions: [
            {
                value: 0,
                label: "Miking"
            },
            {
                value: 1,
                label: "Rally"
            },
            {
                value: 2,
                label: "Street Drama"
            },
            {
                value: 3,
                label: "Door to door visit"
            },
            {
                value: 4,
                label: "Other"
            }
        ]
    },
    {
        value: 9,
        label: "Conduct Epidemic Control for Volunteers (ECV) training, orientation and mobilization",
        subactivityOptions: [
            {
                value: 0,
                label: "Training"
            },
            {
                value: 1,
                label: "Orientation"
            },
            {
                value: 2,
                label: "Mobilization"
            }
        ]
    },
    {
        value: 10,
        label: "Setup of temporary quarantine space",
        subactivityOptions: [
            {
                value: 0,
                label: "Blood bank employee"
            },
            {
                value: 1,
                label: "NRCS employee"
            },
            {
                value: 2,
                label: "Other"
            }
        ]
    },
    {
        value: 11,
        label: "Training to NRCS staff and volunteers on community based surveillance, contact tracing",
        subactivityOptions: [
            {
                value: 0,
                label: "Training"
            },
            {
                value: 1,
                label: "Orientation"
            }
        ]
    },
    {
        value: 12,
        label: "Broadcast radio programs and Public Service Announcement",
        subactivityOptions: [
            {
                value: 0,
                label: "COVID-19 related NRCS radio program"
            }
        ]
    },
    {
        value: 13,
        label: "COVID-19 preparedness and response operation assessment, surveys, evaluation",
        subactivityOptions: [
            {
                value: 0,
                label: "Evaluation"
            }
        ]
    },
    {
        value: 14,
        label: "Construction, repair and maintenance activity",
        subactivityOptions: [
            {
                value: 0,
                label: "Construction of hand washing station"
            },
            {
                value: 1,
                label: "Water supply connection"
            }
        ]
    },
    {
        value: 15,
        label: "Demonstration on hand washing activity",
        subactivityOptions: [
            {
                value: 0,
                label: "Demonstration on hand washing"
            }
        ]
    },
    {
        value: 16,
        label: "Distribute WASH materials",
        subactivityOptions: [
            {
                value: 0,
                label: "Soap"
            },
            {
                value: 1,
                label: "Hand Sanitizer"
            },
            {
                value: 2,
                label: "Bucket"
            },
            {
                value: 3,
                label: "Hygine Kit"
            },
            {
                value: 4,
                label: "Mug"
            }
        ]
    },
    {
        value: 17,
        label: "Distribute information,education,communication materials",
        subactivityOptions: [
            {
                value: 0,
                label: "Leaflet/Pamphlets(Health)"
            }
        ]
    },
    {
        value: 18,
        label: "Distribute personal protective equipment to COVID-19 responders",
        subactivityOptions: [
            {
                value: 0,
                label: "Full Body PPE Set"
            },
            {
                value: 1,
                label: "N95 Mask"
            },
            {
                value: 2,
                label: "Mask"
            }
        ]
    },
    {
        value: 19,
        label: "Provide non-food items to the families most affected by COVID-19",
        subactivityOptions: [
            {
                value: 0,
                label: "Blankets"
            },
            {
                value: 1,
                label: "Tarpaulin"
            }
        ]
    },
    {
        value: 20,
        label: "Provide shelter and non-food relief items to the families /people  affected by COVID-19",
        subactivityOptions: [
            {
                value: 0,
                label: "Blanket"
            },
            {
                value: 1,
                label: "Tarpaulin"
            },
            {
                value: 2,
                label: "Kitchen Set"
            }
        ]
    },
    {
        value: 21,
        label: "Staff and volunteer mobilization in COVID-19 preparedness and response operation (for all sectors)",
        subactivityOptions: [
            {
                value: 0,
                label: "Volunteer"
            },
            {
                value: 1,
                label: "Staff"
            }
        ]
    },
    {
        value: 22,
        label: "Support to establish/upgrade/expand quarantine facilities (in-kind and cash support as per local need and context)",
        subactivityOptions: [
            {
                value: 0,
                label: "In- kind support (materials)"
            }
        ]
    }
];

export const unitsOfMeasurementOptions = [
    {
        value: 0,
        label: 'Event'
    },
    {
        value: 1,
        label: 'Unit'
    },
    {
        value: 2,
        label: 'Piece'
    },
    {
        value: 3,
        label: 'Number'
    },
    {
        value: 4,
        label: 'Lump Sum'
    }
];

export const defaultDistrictOptions = [];

export const defaultMunicipalityOptions = [];

export const provinceOptions = [
    {
        value: 0,
        label: 'Province 1',
        districtOptions: [
            {
                value: 0,
                label: 'Bhojpur',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Aamchowk'
                    },
                    {
                        value: 1,
                        label: 'Arun'
                    },
                    {
                        value: 2,
                        label: 'Bhojpur'
                    },
                    {
                        value: 3,
                        label: 'Hatuwagadhi'
                    },
                    {
                        value: 4,
                        label: 'Pauwadungma'
                    },
                    {
                        value: 5,
                        label: 'Ramprasad Rai'
                    },
                    {
                        value: 6,
                        label: 'Salpasilichho'
                    },
                    {
                        value: 7,
                        label: 'Shadananda'
                    },
                    {
                        value: 8,
                        label: 'Temkemaiyung'
                    }
                ]
            },
            {
                value: 1,
                label: 'Dhankuta',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Chaubise'
                    },
                    {
                        value: 1,
                        label: 'Chhathar Jorpati'
                    },
                    {
                        value: 2,
                        label: 'Dhankuta'
                    },
                    {
                        value: 3,
                        label: 'Mahalaxmi'
                    },
                    {
                        value: 4,
                        label: 'Pakhribas'
                    },
                    {
                        value: 5,
                        label: 'Sahidbhumi'
                    },
                    {
                        value: 6,
                        label: 'Sangurigadhi'
                    }
                ]
            },
            {
                value: 2,
                label: 'Ilam',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Chulachuli'
                    },
                    {
                        value: 1,
                        label: 'Deumai'
                    },
                    {
                        value: 2,
                        label: 'Fakphokthum'
                    },
                    {
                        value: 3,
                        label: 'Illam'
                    },
                    {
                        value: 4,
                        label: 'Mai'
                    },
                    {
                        value: 5,
                        label: 'Maijogmai'
                    },
                    {
                        value: 6,
                        label: 'Mangsebung'
                    },
                    {
                        value: 7,
                        label: 'Rong'
                    },
                    {
                        value: 8,
                        label: 'Sandakpur'
                    },
                    {
                        value: 9,
                        label: 'Suryodaya'
                    }
                ]
            },
            {
                value: 3,
                label: 'Jhapa',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Arjundhara'
                    },
                    {
                        value: 1,
                        label: 'Barhadashi'
                    },
                    {
                        value: 2,
                        label: 'Bhadrapur'
                    },
                    {
                        value: 3,
                        label: 'Birtamod'
                    },
                    {
                        value: 4,
                        label: 'Buddhashanti'
                    },
                    {
                        value: 5,
                        label: 'Damak'
                    },
                    {
                        value: 6,
                        label: 'Gauradhaha'
                    },
                    {
                        value: 7,
                        label: 'Gauriganj'
                    },
                    {
                        value: 8,
                        label: 'Haldibari'
                    },
                    {
                        value: 9,
                        label: 'Jhapa'
                    },
                    {
                        value: 10,
                        label: 'Kamal'
                    },
                    {
                        value: 11,
                        label: 'Kankai'
                    },
                    {
                        value: 12,
                        label: 'Mechinagar'
                    },
                    {
                        value: 13,
                        label: 'Shivasataxi'
                    },
                    {
                        value: 14,
                        label: 'Kachankawal'
                    }
                ]
            },
            {
                value: 4,
                label: 'Khotang',
                municipalityOptions: []
            },
            {
                value: 5,
                label: 'Morang',
                municipalityOptions: []
            },
            {
                value: 6,
                label: 'Okhaldhunga',
                municipalityOptions: []
            },
            {
                value: 7,
                label: 'Panchthar',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Falelung'
                    },
                    {
                        value: 1,
                        label: 'Falgunanda'
                    },
                    {
                        value: 2,
                        label: 'Hilihang'
                    },
                    {
                        value: 3,
                        label: 'Kummayak'
                    },
                    {
                        value: 4,
                        label: 'Miklajung'
                    },
                    {
                        value: 5,
                        label: 'Phidim'
                    },
                    {
                        value: 6,
                        label: 'Tumbewa'
                    },
                    {
                        value: 7,
                        label: 'Yangwarak'
                    }
                ]
            },
            {
                value: 8,
                label: 'Sankhuwasabha',
                municipalityOptions: []
            },
            {
                value: 9,
                label: 'Solukhumbu',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Khumbupasanglahmu'
                    },
                    {
                        value: 1,
                        label: 'Likhupike'
                    },
                    {
                        value: 2,
                        label: 'Mahakulung'
                    },
                    {
                        value: 3,
                        label: 'Mapyadudhkoshi'
                    },
                    {
                        value: 4,
                        label: 'Nechasalyan'
                    },
                    {
                        value: 5,
                        label: 'Solududhakunda'
                    },
                    {
                        value: 6,
                        label: 'Sotang'
                    },
                    {
                        value: 7,
                        label: 'Thulung dudhkoshi'
                    }
                ]
            },
            {
                value: 10,
                label: 'Sunsari',
                municipalityOptions: []
            },
            {
                value: 11,
                label: 'Taplejung',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Aathrai Tribeni'
                    },
                    {
                        value: 1,
                        label: 'Maiwakhola'
                    },
                    {
                        value: 2,
                        label: 'Meringden'
                    },
                    {
                        value: 3,
                        label: 'Mikwakhola'
                    },
                    {
                        value: 4,
                        label: 'Pathivara Yangwarak'
                    },
                    {
                        value: 5,
                        label: 'Phaktanglung'
                    },
                    {
                        value: 6,
                        label: 'Phungling'
                    },
                    {
                        value: 7,
                        label: 'Sidingba'
                    },
                    {
                        value: 8,
                        label: 'Sirijangha'
                    }
                ]
            },
            {
                value: 12,
                label: 'Terhathum',
                municipalityOptions: []
            },
            {
                value: 13,
                label: 'Udayapur',
                municipalityOptions: []
            }
        ]
    },
    {
        value: 1,
        label: 'Province 2',
        districtOptions: [
            {
                value: 0,
                label: 'Bara',
                municipalityOptions: []
            },
            {
                value: 1,
                label: 'Dhanusha',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Aaurahi'
                    },
                    {
                        value: 1,
                        label: 'Bateshwor'
                    }
                ]
            }
        ]
    },
    {
        value: 2,
        label: 'Bagmati',
        districtOptions: [
            {
                value: 0,
                label: 'Bhaktapur',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bhaktapur'
                    },
                    {
                        value: 1,
                        label: 'Changunarayan'
                    },
                    {
                        value: 2,
                        label: 'Madhyapur Thimi'
                    },
                    {
                        value: 3,
                        label: 'Suryabinayak'
                    }
                ]
            },
            {
                value: 1,
                label: 'Chitawan',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 2,
                label: 'Dhading',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Benighat Rorang'
                    },
                    {
                        value: 1,
                        label: 'Dhunibesi'
                    },
                    {
                        value: 2,
                        label: 'Gajuri'
                    },
                    {
                        value: 3,
                        label: 'Galchi'
                    },
                    {
                        value: 4,
                        label: 'Gangajamuna'
                    },
                    {
                        value: 5,
                        label: 'Jwalamukhi'
                    },
                    {
                        value: 6,
                        label: 'Khaniyabash'
                    },
                    {
                        value: 7,
                        label: 'Netrawati'
                    },
                    {
                        value: 8,
                        label: 'Nilakantha'
                    },
                    {
                        value: 9,
                        label: 'Rubi Valley'
                    },
                    {
                        value: 10,
                        label: 'Siddhalek'
                    },
                    {
                        value: 11,
                        label: 'Thakre'
                    },
                    {
                        value: 12,
                        label: 'Tripura Sundari'
                    }
                ]
            },
            {
                value: 3,
                label: 'Dolakha',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 4,
                label: 'Kathmandu',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 5,
                label: 'Kavrepalanchok',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 6,
                label: 'Lalitpur',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 7,
                label: 'Makawanpur',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 8,
                label: 'Nuwakot',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Belkotgadhi'
                    },
                    {
                        value: 1,
                        label: 'Bidur'
                    },
                    {
                        value: 2,
                        label: 'Dupcheshwar'
                    },
                    {
                        value: 3,
                        label: 'Kakani'
                    },
                    {
                        value: 4,
                        label: 'Kispang'
                    },
                    {
                        value: 5,
                        label: 'Likhu'
                    },
                    {
                        value: 6,
                        label: 'Meghang'
                    },
                    {
                        value: 7,
                        label: 'Panchakanya'
                    },
                    {
                        value: 8,
                        label: 'Shivapuri'
                    },
                    {
                        value: 9,
                        label: 'Suryagadhi'
                    },
                    {
                        value: 10,
                        label: 'Tadi'
                    },
                    {
                        value: 11,
                        label: 'Tarkeshwar'
                    }
                ]
            },
            {
                value: 9,
                label: 'Ramechhap',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            },
            {
                value: 10,
                label: 'Rasuwa',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Gosaikunda'
                    },
                    {
                        value: 1,
                        label: 'Kalika'
                    },
                    {
                        value: 2,
                        label: 'Naukunda'
                    },
                    {
                        value: 3,
                        label: 'Parbati Kunda'
                    },
                    {
                        value: 4,
                        label: 'Uttargaya'
                    }
                ]
            },
            {
                value: 11,
                label: 'Sindhuli',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Dudhouli'
                    },
                    {
                        value: 1,
                        label: 'Ghanglekh'
                    },
                    {
                        value: 2,
                        label: 'Golanjor'
                    },
                    {
                        value: 3,
                        label: 'Hariharpurgadhi'
                    },
                    {
                        value: 4,
                        label: 'Kamalamai'
                    },
                    {
                        value: 5,
                        label: 'Marin'
                    },
                    {
                        value: 6,
                        label: 'Phikkal'
                    },
                    {
                        value: 7,
                        label: 'Sunkoshi'
                    },
                    {
                        value: 8,
                        label: 'Tinpatan'
                    }
                ]
            },
            {
                value: 12,
                label: 'Sindhupalchok',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bharatpur'
                    },
                    {
                        value: 1,
                        label: 'Ichchhyakamana'
                    }
                ]
            }
        ]
    },
    {
        value: 3,
        label: 'Gandaki',
        districtOptions: [
            {
                value: 0,
                label: 'Baglung',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Badigad'
                    },
                    {
                        value: 1,
                        label: 'Baglung'
                    }
                ]
            },
            {
                value: 1,
                label: 'Gorkha',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Aarughat'
                    },
                    {
                        value: 1,
                        label: 'Ajirkot'
                    }
                ]
            }
        ]
    },
    {
        value: 4,
        label: 'Province 5',
        districtOptions: [
            {
                value: 0,
                label: 'Arghakhanchi',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bhumekasthan'
                    },
                    {
                        value: 1,
                        label: 'Chhatradev'
                    }
                ]
            },
            {
                value: 1,
                label: 'Banke',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Baijanath'
                    },
                    {
                        value: 1,
                        label: 'Duduwa'
                    }
                ]
            }
        ]
    },
    {
        value: 5,
        label: 'Karnali',
        districtOptions: [
            {
                value: 0,
                label: 'Dailekh',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Aathabis'
                    },
                    {
                        value: 1,
                        label: 'Bhagawatimai'
                    }
                ]
            },
            {
                value: 1,
                label: 'Dolpa',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Chharka Tangsong'
                    },
                    {
                        value: 1,
                        label: 'Dolpo Buddha'
                    }
                ]
            }
        ]
    },
    {
        value: 6,
        label: 'Sudurpaschim',
        districtOptions: [
            {
                value: 0,
                label: 'Achham',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Bannigadhi Jayagadh'
                    },
                    {
                        value: 1,
                        label: 'Chaurpati'
                    }
                ]
            },
            {
                value: 1,
                label: 'Baitadi',
                municipalityOptions: [
                    {
                        value: 0,
                        label: 'Dasharathchanda'
                    },
                    {
                        value: 1,
                        label: 'Dilasaini'
                    }
                ]
            }
        ]
    }
];

export const deliveryPointOptions = [
    {
        value: 0,
        label: 'Community'
    },
    {
        value: 1,
        label: 'Institution'
    },
    {
        value: 2,
        label: 'Quarantine Site'
    },
    {
        value: 3,
        label: 'Port of entry'
    },
    {
        value: 4,
        label: 'Holding Center'
    },
    {
        value: 5,
        label: 'Isolation Center'
    },
    {
        value: 6,
        label: 'Office'
    },
    {
        value: 7,
        label: 'Organization'
    },
    {
        value: 8,
        label: 'Health service center'
    },
    {
        value: 9,
        label: 'Blood Transfusion Service'
    },
    {
        value: 10,
        label: 'Eye Care Center'
    },
    {
        value: 11,
        label: 'Ambulance service'
    },
    {
        value: 12,
        label: 'Health/Help-desk Service'
    },
    {
        value: 13,
        label: 'Central Warehouse'
    },
    {
        value: 14,
        label: 'Regional Warehouse'
    },
    {
        value: 15,
        label: 'Sub-Regional Warehouse'
    },
    {
        value: 16,
        label: 'Other'
    }
];

export const beneficiaryTypeOptions = [
    {
        value: 0,
        label: 'Individual'
    },
    {
        value: 1,
        label: 'Household'
    },
    {
        value: 2,
        label: 'NRCS volunteer'
    },
    {
        value: 3,
        label: 'NRCS Employee'
    },
    {
        value: 4,
        label: 'Other volunteer'
    },
    {
        value: 5,
        label: 'Government Staff'
    },
    {
        value: 6,
        label: 'Other'
    }
];

export const programmeTypeList = [
  {
    key: '0',
    title: 'Bilateral'
  },
  {
    key: '1',
    title: 'Multilateral'
  },
  {
    key: '2',
    title: 'Domestic',
  }
];

export const programmeTypes = listToMap(programmeTypeList, d => d.key, d => d.title);

export const sectorList = [
  {
    key: '0',
    title: 'Health and Care',
    color: '#66c2a5',
    inputValue: '0',
  },
  {
    key: '1',
    title: 'Water Sanitation and Hygiene Promotion',
    color: '#fc8d62',
    inputValue: '1',
  },
  {
    key: '2',
    title: 'Risk Communication and Community Engagement and Accountability',
    color: '#8da0cb',
    inputValue: '2',
  },
  {
    key: '3',
    title: 'Protection, Gender and Inclusion',
    color: '#e78ac3',
    inputValue: '3',
  },
  {
    key: '4',
    title: 'Shelter',
    color: '#a6d854',
    inputValue: '4',
  },
  {
    key: '5',
    title: 'Planning, Monitoring, Evaluation, Reporting and Information Management',
    color: '#ffd92f',
    inputValue: '5',
  },
  {
    key: '6',
    title: 'National Society Development',
    color: '#e5c494',
    inputValue: '6',
  },
  {
    key: '7',
    title: 'Logistics and information technology',
    color: '#b3b3b3',
    inputValue: '7',
  },
  {
    key: '8',
    title: 'Human Resources and duty of care',
    color: '#b3b3b3',
    inputValue: '8',
  },
];

export const secondarySectorList = sectorList;

export const sectors = listToMap(sectorList, d => d.key, d => d.title);
export const sectorInputValues = listToMap(sectorList, d => d.key, d => d.inputValue);

export const secondarySectors = listToMap(secondarySectorList, d => d.key, d => d.title);
export const secondarySectorInputValues = listToMap(secondarySectorList, d => d.key, d => d.inputValue);

export const statusList = [
  {
    key: '0',
    title: 'Planned'
  },
  {
    key: '1',
    title: 'Ongoing'
  },
  {
    key: '2',
    title: 'Completed'
  }
];

export const statuses = listToMap(statusList, d => d.key, d => d.title);

export const operationTypeList = [
  { value: '0', label: 'Programme' },
  { value: '1', label: 'Emergency operation' },
];

export const operationTypes = {
  0: 'Programme',
  1: 'Emergency Operation',
};

export const projectVisibilityList = [
  { value: 'public', label: 'Public' },
  { value: 'logged_in_user', label: 'Logged in user' },
  { value: 'ifrc_only', label: 'IFRC only' },
];
