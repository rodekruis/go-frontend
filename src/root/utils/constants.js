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
    { value: 1, label: "Government Agencies" },
    { value: 2, label: "INGO/NGO" },
    { value: 3, label: "Other" }
];

export const activityOptions = [
    {
        value: 0,
        label: "Conduct training/orientation on COVID-19 / PPE and IPC measure"
    },
    {
        value: 1,
        label: "Blood donation campaign"
    },
    {
        value: 2,
        label: "Establish health/help desk"
    },
    {
        value: 3,
        label: "Distribute personal protective equipment to COVID-19 responders"
    },
    {
        value: 4,
        label: "Support medical equipment and materials"
    },
    {
        value: 5,
        label: "Provide psychosocial support(PSS) training/orientation"
    },
    {
        value: 6,
        label: "Upgrade the service of Ambulance"
    },
    {
        value: 7,
        label: "Provide psychosocial first aid (PFA)training/orientation"
    },
    {
        value: 8,
        label: "Conduct COVID-19  awareness activities for community (risk communication)"
    },
    {
        value: 9,
        label: "Conduct Epidemic Control for Volunteers (ECV) training, orientation and mobilization"
    },
    {
        value: 10,
        label: "Setup of temporary quarantine space"
    },
    {
        value: 11,
        label: "Training to NRCS staff and volunteers on community based surveillance, contact tracing"
    },
    {
        value: 12,
        label: "Broadcast radio programs and Public Service Announcement"
    },
    {
        value: 13,
        label: "COVID-19 preparedness and response operation assessment, surveys, evaluation"
    },
    {
        value: 14,
        label: "Construction, repair and maintenance activity"
    },
    {
        value: 15,
        label: "Demonstration on hand washing activity"
    },
    {
        value: 16,
        label: "Distribute WASH materials"
    },
    {
        value: 17,
        label: "Distribute information,education,communication materials"
    },
    {
        value: 18,
        label: "Provide non-food items to the families most affected by COVID-19"
    },
    {
        value: 19,
        label: "Provide shelter and non-food relief items to the families /people  affected by COVID-19"
    },
    {
        value: 20,
        label: "Staff and volunteer mobilization in COVID-19 preparedness and response operation (for all sectors)"
    },
    {
        value: 21,
        label: "Support to establish/upgrade/expand quarantine facilities (in-kind and cash support as per local need and context)"
    }
];

export const subactivityOptions = [
    {
        value: 0,
        label: "Training",
        activityLabel: [
            "Conduct training/orientation on COVID-19/ PPE and IPC measure",
            "Conduct Epidemic Control for Volunteers (ECV) training, orientation and mobilization",
            "Training to NRCS staff and volunteers on community based surveillance, contact tracing",
        ],
        activityValue: [0, 9, 11],
    },
    {
        value: 1,
        label: "Orientation",
        activityLabel: [
            "Conduct training/orientation on COVID-19/ PPE and IPC measure",
            "Conduct Epidemic Control for Volunteers (ECV) training, orientation and mobilization",
            "Training to NRCS staff and volunteers on community based surveillance, contact tracing",
        ],
        activityValue: [0, 9, 11],
    },
    {
        value: 2,
        label: "Donation Campaign",
        activityLabel: ["Blood donation campaign"],
        activityValue: [1],
    },
    {
        value: 3,
        label: "Door to door blood collection mechanism",
        activityLabel: ["Blood donation campaign"],
        activityValue: [1],
    },
    {
        value: 4,
        label: "Health Desk",
        activityLabel: ["Establish health/help desk"],
        activityValue: [2],
    },
    {
        value: 5,
        label: "Help Desk",
        activityLabel: ["Establish health/help desk"],
        activityValue: [2],
    },
    {
        value: 6,
        label: "Full Body PPE Set",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 7,
        label: "Full Body Apron",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 8,
        label: "Mask",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 9,
        label: "N95 Mask",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 10,
        label: "Disposable/examination gloves",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 11,
        label: "Goggles/face shield",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 12,
        label: "Rubber boot (Long tube rubber shoe)",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 13,
        label: "Shoes with cover",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 14,
        label: "Head cover",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
        ],
        activityValue: [3],
    },
    {
        value: 15,
        label: "Other",
        activityLabel: [
            "Distribute personal protective equipment to COVID-19 responders",
            "Conduct COVID-19  awareness activities for community (risk communication)",
            "Setup of temporary quarantine space",
        ],
        activityValue: [3, 8, 10],
    },
    {
        value: 16,
        label: "First aid kit",
        activityLabel: [
            "Support medical equipment and materials",
            "Upgrade the service of Ambulance",
        ],
        activityValue: [4, 6],
    },
    {
        value: 17,
        label: "PSS kit",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 18,
        label: "Emergency Kit",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 19,
        label: "Infrared thermometer",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 20,
        label: "Ventilator",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 21,
        label: "Liquid hand washing soap with pump",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 22,
        label: "Hand Sanitizer",
        activityLabel: [
            "Support medical equipment and materials",
            "Distribute WASH materials",
        ],
        activityValue: [4, 16],
    },
    {
        value: 23,
        label: "Disinfect solutions Hydrochloride",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 24,
        label: "Disinfect sprayer",
        activityLabel: ["Support medical equipment and materials"],
        activityValue: [4],
    },
    {
        value: 25,
        label: "Psychosocial support orientation",
        activityLabel: [
            "Provide psychosocial support(PSS) training/orientation",
        ],
        activityValue: [5],
    },
    {
        value: 26,
        label: "Psychosocial support training",
        activityLabel: [
            "Provide psychosocial support(PSS) training/orientation",
        ],
        activityValue: [5],
    },
    {
        value: 27,
        label: "Material support",
        activityLabel: ["Upgrade the service of Ambulance"],
        activityValue: [6],
    },
    {
        value: 28,
        label: "Compartment division",
        activityLabel: ["Upgrade the service of Ambulance"],
        activityValue: [6],
    },
    {
        value: 29,
        label: "Psychosocial first aid training",
        activityLabel: [
            "Provide psychosocial first aid (PFA)training/orientation",
        ],
        activityValue: [7],
    },
    {
        value: 30,
        label: "Psychosocial first aid orientation",
        activityLabel: [
            "Provide psychosocial first aid (PFA)training/orientation",
        ],
        activityValue: [7],
    },
    {
        value: 31,
        label: "Miking",
        activityLabel: [
            "Conduct COVID-19  awareness activities for community (risk communication)",
        ],
        activityValue: [8],
    },
    {
        value: 32,
        label: "Rally",
        activityLabel: [
            "Conduct COVID-19  awareness activities for community (risk communication)",
        ],
        activityValue: [8],
    },
    {
        value: 33,
        label: "Street Drama",
        activityLabel: [
            "Conduct COVID-19  awareness activities for community (risk communication)",
        ],
        activityValue: [8],
    },
    {
        value: 34,
        label: "Door to door visit",
        activityLabel: [
            "Conduct COVID-19  awareness activities for community (risk communication)",
        ],
        activityValue: [8],
    },
    {
        value: 35,
        label: "Mobilization",
        activityLabel: [
            "Conduct Epidemic Control for Volunteers (ECV) training, orientation and mobilization",
        ],
        activityValue: [9],
    },
    {
        value: 36,
        label: "Blood bank employee",
        activityLabel: ["Setup of temporary quarantine space"],
        activityValue: [10],
    },
    {
        value: 37,
        label: "NRCS employee",
        activityLabel: ["Setup of temporary quarantine space"],
        activityValue: [10],
    },
    {
        value: 38,
        label: "COVID-19 related NRCS radio program",
        activityLabel: [
            "Broadcast radio programs and Public Service Announcement",
        ],
        activityValue: [12],
    },
    {
        value: 39,
        label: "Evaluation",
        activityLabel: [
            "COVID-19 preparedness and response operation assessment, surveys, evaluation",
        ],
        activityValue: [13],
    },
    {
        value: 40,
        label: "Construction of hand washing station",
        activityLabel: ["Construction, repair and maintenance activity"],
        activityValue: [14],
    },
    {
        value: 41,
        label: "Water supply connection",
        activityLabel: ["Construction, repair and maintenance activity"],
        activityValue: [14],
    },
    {
        value: 42,
        label: "Demonstration on hand washing",
        activityLabel: ["Demonstration on hand washing activity"],
        activityValue: [15],
    },
    {
        value: 43,
        label: "Soap",
        activityLabel: ["Distribute WASH materials"],
        activityValue: [16],
    },
    {
        value: 44,
        label: "Bucket",
        activityLabel: ["Distribute WASH materials"],
        activityValue: [16],
    },
    {
        value: 45,
        label: "Hygiene Kit",
        activityLabel: ["Distribute WASH materials"],
        activityValue: [16],
    },
    {
        value: 46,
        label: "Mug",
        activityLabel: ["Distribute WASH materials"],
        activityValue: [16],
    },
    {
        value: 47,
        label: "Leaflet/Pamphlets(Health)",
        activityLabel: [
            "Distribute information,education,communication materials",
        ],
        activityValue: [17],
    },
    {
        value: 48,
        label: "Blankets",
        activityLabel: [
            "Provide non-food items to the families most affected by COVID-19",
        ],
        activityValue: [18],
    },
    {
        value: 49,
        label: "Tarpaulin",
        activityLabel: [
            "Provide non-food items to the families most affected by COVID-19",
            "Provide shelter and non-food relief items to the families /people  affected by COVID-19",
        ],
        activityValue: [18, 19],
    },
    {
        value: 50,
        label: "Blanket",
        activityLabel: [
            "Provide shelter and non-food relief items to the families /people  affected by COVID-19",
        ],
        activityValue: [19],
    },
    {
        value: 51,
        label: "Kitchen Set",
        activityLabel: [
            "Provide shelter and non-food relief items to the families /people  affected by COVID-19",
        ],
        activityValue: [19],
    },
    {
        value: 52,
        label: "Volunteer",
        activityLabel: [
            "Staff and volunteer mobilization in COVID-19 preparedness and response operation (for all sectors)",
        ],
        activityValue: [20],
    },
    {
        value: 53,
        label: "Staff",
        activityLabel: [
            "Staff and volunteer mobilization in COVID-19 preparedness and response operation (for all sectors)",
        ],
        activityValue: [20],
    },
    {
        value: 54,
        label: "In- kind support (materials)",
        activityLabel: [
            "Support to establish/upgrade/expand quarantine facilities (in-kind and cash support as per local need and context)",
        ],
        activityValue: [21],
    },
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

export const provinceOptions = [
    { "value": 0, "label": "Province 1" },
    { "value": 1, "label": "Province 2" },
    { "value": 2, "label": "Bagmati" },
    { "value": 3, "label": "Gandaki" },
    { "value": 4, "label": "Province 5" },
    { "value": 5, "label": "Karnali" },
    { "value": 6, "label": "Sudurpaschim" }
];

export const districtOptions = [
    {
        "value": 0,
        "label": "Bhojpur",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 1,
        "label": "Dhankuta",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 2,
        "label": "Ilam",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 3,
        "label": "Jhapa",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 4,
        "label": "Khotang",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 5,
        "label": "Morang",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 6,
        "label": "Okhaldhunga",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 7,
        "label": "Panchthar",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 8,
        "label": "Sankhuwasabha",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 9,
        "label": "Solukhumbu",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 10,
        "label": "Sunsari",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 11,
        "label": "Taplejung",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 12,
        "label": "Terhathum",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 13,
        "label": "Udayapur",
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 14,
        "label": "Bara",
        "provinceValue": [1],
        "provinceLabel": ["Province 2"]
    },
    {
        "value": 15,
        "label": "Dhanusha",
        "provinceValue": [1],
        "provinceLabel": ["Province 2"]
    },
    {
        "value": 16,
        "label": "Bhaktapur",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 17,
        "label": "Chitawan",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 18,
        "label": "Dhading",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 19,
        "label": "Dolakha",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 20,
        "label": "Kathmandu",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 21,
        "label": "Kavrepalanchok",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 22,
        "label": "Lalitpur",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 23,
        "label": "Makawanpur",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 24,
        "label": "Nuwakot",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 25,
        "label": "Ramechhap",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 26,
        "label": "Rasuwa",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 27,
        "label": "Sindhuli",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 28,
        "label": "Sindhupalchok",
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 29,
        "label": "Baglung",
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 30,
        "label": "Gorkha",
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 31,
        "label": "Arghakhanchi",
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 32,
        "label": "Banke",
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 33,
        "label": "Dailekh",
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 34,
        "label": "Dolpa",
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 35,
        "label": "Achham",
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
    },
    {
        "value": 36,
        "label": "Baitadi",
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
    }
];

export const municipalityOptions = [
    {
        "value": 0,
        "label": "Aamchowk",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 1,
        "label": "Arun",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 2,
        "label": "Bhojpur",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 3,
        "label": "Hatuwagadhi",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 4,
        "label": "Pauwadungma",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 5,
        "label": "Ramprasad Rai",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 6,
        "label": "Salpasilichho",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 7,
        "label": "Shadananda",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 8,
        "label": "Temkemaiyung",
        "districtValue": [0],
        "districtLabel": ["Bhojpur"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 9,
        "label": "Chaubise",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 10,
        "label": "Chhathar Jorpati",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 11,
        "label": "Dhankuta",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 12,
        "label": "Mahalaxmi",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 13,
        "label": "Pakhribas",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 14,
        "label": "Sahidbhumi",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 15,
        "label": "Sangurigadhi",
        "districtValue": [1],
        "districtLabel": ["Dhankuta"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 16,
        "label": "Chulachuli",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 17,
        "label": "Deumai",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 18,
        "label": "Fakphokthum",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 19,
        "label": "Illam",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 20,
        "label": "Mai",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 21,
        "label": "Maijogmai",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 22,
        "label": "Mangsebung",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 23,
        "label": "Rong",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 24,
        "label": "Sandakpur",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 25,
        "label": "Suryodaya",
        "districtValue": [2],
        "districtLabel": ["Ilam"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 26,
        "label": "Arjundhara",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 27,
        "label": "Barhadashi",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 28,
        "label": "Bhadrapur",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 29,
        "label": "Birtamod",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 30,
        "label": "Buddhashanti",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 31,
        "label": "Damak",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 32,
        "label": "Gauradhaha",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 33,
        "label": "Gauriganj",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 34,
        "label": "Haldibari",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 35,
        "label": "Jhapa",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 36,
        "label": "Kamal",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 37,
        "label": "Kankai",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 38,
        "label": "Mechinagar",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 39,
        "label": "Shivasataxi",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 40,
        "label": "Kachankawal",
        "districtValue": [3],
        "districtLabel": ["Jhapa"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 41,
        "label": "Falelung",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 42,
        "label": "Falgunanda",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 43,
        "label": "Hilihang",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 44,
        "label": "Kummayak",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 45,
        "label": "Miklajung",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 46,
        "label": "Phidim",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 47,
        "label": "Tumbewa",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 48,
        "label": "Yangwarak",
        "districtValue": [7],
        "districtLabel": ["Panchthar"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 49,
        "label": "Khumbupasanglahmu",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 50,
        "label": "Likhupike",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 51,
        "label": "Mahakulung",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 52,
        "label": "Mapyadudhkoshi",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 53,
        "label": "Nechasalyan",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 54,
        "label": "Solududhakunda",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 55,
        "label": "Sotang",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 56,
        "label": "Thulung dudhkoshi",
        "districtValue": [9],
        "districtLabel": ["Solukhumbu"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 57,
        "label": "Aathrai Tribeni",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 58,
        "label": "Maiwakhola",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 59,
        "label": "Meringden",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 60,
        "label": "Mikwakhola",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 61,
        "label": "Pathivara Yangwarak",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 62,
        "label": "Phaktanglung",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 63,
        "label": "Phungling",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 64,
        "label": "Sidingba",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 65,
        "label": "Sirijangha",
        "districtValue": [11],
        "districtLabel": ["Taplejung"],
        "provinceValue": [0],
        "provinceLabel": ["Province 1"]
    },
    {
        "value": 66,
        "label": "Aaurahi",
        "districtValue": [1],
        "districtLabel": ["Dhanusha"],
        "provinceValue": [1],
        "provinceLabel": ["Province 2"]
    },
    {
        "value": 67,
        "label": "Bateshwor",
        "districtValue": [1],
        "districtLabel": ["Dhanusha"],
        "provinceValue": [1],
        "provinceLabel": ["Province 2"]
    },
    {
        "value": 68,
        "label": "Bhaktapur",
        "districtValue": [0],
        "districtLabel": ["Bhaktapur"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 69,
        "label": "Changunarayan",
        "districtValue": [0],
        "districtLabel": ["Bhaktapur"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 70,
        "label": "Madhyapur Thimi",
        "districtValue": [0],
        "districtLabel": ["Bhaktapur"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 71,
        "label": "Suryabinayak",
        "districtValue": [0],
        "districtLabel": ["Bhaktapur"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 72,
        "label": "Bharatpur",
        "districtValue": [1, 3, 4, 5, 6, 7, 9, 12],
        "districtLabel": [
            "Chitawan",
            "Dolakha",
            "Kathmandu",
            "Kavrepalanchok",
            "Lalitpur",
            "Makawanpur",
            "Ramechhap",
            "Sindhupalchok"
        ],
        "provinceValue": [2, 2, 2, 2, 2, 2, 2, 2],
        "provinceLabel": [
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati"
        ]
    },
    {
        "value": 73,
        "label": "Ichchhyakamana",
        "districtValue": [1, 3, 4, 5, 6, 7, 9, 12],
        "districtLabel": [
            "Chitawan",
            "Dolakha",
            "Kathmandu",
            "Kavrepalanchok",
            "Lalitpur",
            "Makawanpur",
            "Ramechhap",
            "Sindhupalchok"
        ],
        "provinceValue": [2, 2, 2, 2, 2, 2, 2, 2],
        "provinceLabel": [
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati",
            "Bagmati"
        ]
    },
    {
        "value": 74,
        "label": "Benighat Rorang",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 75,
        "label": "Dhunibesi",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 76,
        "label": "Gajuri",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 77,
        "label": "Galchi",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 78,
        "label": "Gangajamuna",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 79,
        "label": "Jwalamukhi",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 80,
        "label": "Khaniyabash",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 81,
        "label": "Netrawati",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 82,
        "label": "Nilakantha",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 83,
        "label": "Rubi Valley",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 84,
        "label": "Siddhalek",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 85,
        "label": "Thakre",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 86,
        "label": "Tripura Sundari",
        "districtValue": [2],
        "districtLabel": ["Dhading"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 87,
        "label": "Belkotgadhi",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 88,
        "label": "Bidur",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 89,
        "label": "Dupcheshwar",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 90,
        "label": "Kakani",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 91,
        "label": "Kispang",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 92,
        "label": "Likhu",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 93,
        "label": "Meghang",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 94,
        "label": "Panchakanya",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 95,
        "label": "Shivapuri",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 96,
        "label": "Suryagadhi",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 97,
        "label": "Tadi",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 98,
        "label": "Tarkeshwar",
        "districtValue": [8],
        "districtLabel": ["Nuwakot"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 99,
        "label": "Gosaikunda",
        "districtValue": [10],
        "districtLabel": ["Rasuwa"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 100,
        "label": "Kalika",
        "districtValue": [10],
        "districtLabel": ["Rasuwa"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 101,
        "label": "Naukunda",
        "districtValue": [10],
        "districtLabel": ["Rasuwa"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 102,
        "label": "Parbati Kunda",
        "districtValue": [10],
        "districtLabel": ["Rasuwa"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 103,
        "label": "Uttargaya",
        "districtValue": [10],
        "districtLabel": ["Rasuwa"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 104,
        "label": "Dudhouli",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 105,
        "label": "Ghanglekh",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 106,
        "label": "Golanjor",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 107,
        "label": "Hariharpurgadhi",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 108,
        "label": "Kamalamai",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 109,
        "label": "Marin",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 110,
        "label": "Phikkal",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 111,
        "label": "Sunkoshi",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 112,
        "label": "Tinpatan",
        "districtValue": [11],
        "districtLabel": ["Sindhuli"],
        "provinceValue": [2],
        "provinceLabel": ["Bagmati"]
    },
    {
        "value": 113,
        "label": "Badigad",
        "districtValue": [0],
        "districtLabel": ["Baglung"],
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 114,
        "label": "Baglung",
        "districtValue": [0],
        "districtLabel": ["Baglung"],
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 115,
        "label": "Aarughat",
        "districtValue": [1],
        "districtLabel": ["Gorkha"],
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 116,
        "label": "Ajirkot",
        "districtValue": [1],
        "districtLabel": ["Gorkha"],
        "provinceValue": [3],
        "provinceLabel": ["Gandaki"]
    },
    {
        "value": 117,
        "label": "Bhumekasthan",
        "districtValue": [0],
        "districtLabel": ["Arghakhanchi"],
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 118,
        "label": "Chhatradev",
        "districtValue": [0],
        "districtLabel": ["Arghakhanchi"],
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 119,
        "label": "Baijanath",
        "districtValue": [1],
        "districtLabel": ["Banke"],
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 120,
        "label": "Duduwa",
        "districtValue": [1],
        "districtLabel": ["Banke"],
        "provinceValue": [4],
        "provinceLabel": ["Province 5"]
    },
    {
        "value": 121,
        "label": "Aathabis",
        "districtValue": [0],
        "districtLabel": ["Dailekh"],
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 122,
        "label": "Bhagawatimai",
        "districtValue": [0],
        "districtLabel": ["Dailekh"],
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 123,
        "label": "Chharka Tangsong",
        "districtValue": [1],
        "districtLabel": ["Dolpa"],
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 124,
        "label": "Dolpo Buddha",
        "districtValue": [1],
        "districtLabel": ["Dolpa"],
        "provinceValue": [5],
        "provinceLabel": ["Karnali"]
    },
    {
        "value": 125,
        "label": "Bannigadhi Jayagadh",
        "districtValue": [0],
        "districtLabel": ["Achham"],
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
    },
    {
        "value": 126,
        "label": "Chaurpati",
        "districtValue": [0],
        "districtLabel": ["Achham"],
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
    },
    {
        "value": 127,
        "label": "Dasharathchanda",
        "districtValue": [1],
        "districtLabel": ["Baitadi"],
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
    },
    {
        "value": 128,
        "label": "Dilasaini",
        "districtValue": [1],
        "districtLabel": ["Baitadi"],
        "provinceValue": [6],
        "provinceLabel": ["Sudurpaschim"]
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
        label: 'Port of Entry'
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
        label: 'Health Service Center'
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
        label: 'Ambulance Service'
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
        label: 'NRCS Volunteer'
    },
    {
        value: 3,
        label: 'NRCS Employee'
    },
    {
        value: 4,
        label: 'Other Volunteer'
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
