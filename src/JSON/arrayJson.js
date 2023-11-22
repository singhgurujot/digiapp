export const usersData = {
  Count: 1,
  Items: [
    {
      deleted: {
        BOOL: false,
      },
      visibleFloors: {
        SS: ["none"],
      },
      role: {
        S: "user",
      },
      lastName: {
        S: "SK",
      },
      userId: {
        S: "2ba8aab7-ad4e-4d92-b82a-54253e912de1",
      },
      createdAt: {
        N: "1687817275470",
      },
      email: {
        S: "skumar.34@outlook.com",
      },
      phone: {
        S: "3374999288",
      },
      clientId: {
        S: "HealthCare",
      },
      firstName: {
        S: "Sravan",
      },
    },
  ],
  ScannedCount: 1,
};

export const superUsersData = {
  Count: 1,
  Items: [
    {
      deleted: {
        BOOL: false,
      },
      visibleFloors: {
        SS: ["none"],
      },
      role: {
        S: "superuser",
      },
      lastName: {
        S: "SK",
      },
      userId: {
        S: "2ba8aab7-ad4e-4d92-b82a-54253e912de1",
      },
      createdAt: {
        N: "1687817275470",
      },
      email: {
        S: "skumar.34@outlook.com",
      },
      phone: {
        S: "3374999288",
      },
      clientId: {
        S: "HealthCare",
      },
      firstName: {
        S: "Sravan",
      },
    },
  ],
  ScannedCount: 1,
};

export const adminUsersData = {
  Count: 1,
  Items: [
    {
      deleted: {
        BOOL: false,
      },
      visibleFloors: {
        SS: ["none"],
      },
      role: {
        S: "admin",
      },
      lastName: {
        S: "SK",
      },
      userId: {
        S: "2ba8aab7-ad4e-4d92-b82a-54253e912de1",
      },
      createdAt: {
        N: "1687817275470",
      },
      email: {
        S: "skumar.34@outlook.com",
      },
      phone: {
        S: "3374999288",
      },
      clientId: {
        S: "HealthCare",
      },
      firstName: {
        S: "Sravan",
      },
    },
  ],
  ScannedCount: 1,
};

export const managerUsersData = {
  Count: 1,
  Items: [
    {
      deleted: {
        BOOL: false,
      },
      visibleFloors: {
        SS: ["none"],
      },
      role: {
        S: "manager",
      },
      lastName: {
        S: "SK",
      },
      userId: {
        S: "2ba8aab7-ad4e-4d92-b82a-54253e912de1",
      },
      createdAt: {
        N: "1687817275470",
      },
      email: {
        S: "skumar.34@outlook.com",
      },
      phone: {
        S: "3374999288",
      },
      clientId: {
        S: "HealthCare",
      },
      firstName: {
        S: "Sravan",
      },
    },
  ],
  ScannedCount: 1,
};

export const clientDetailsForSuperUser = [
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: [
        "Garage",
        "General Storage",
        "Instrument Lab",
        "Material Storage",
        "Metals Laboratory",
        "Microbiology",
        "Sample Receiving",
        "Server Room",
        "Training Laboratory",
        "Volatile Laboratory",
        "Water Laboratory",
      ],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "olathe-lab",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Olathe Lab",
    },
    clientId: {
      S: "OlatheLab",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Clinic"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "summit",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Summit Pediatrics",
    },
    clientId: {
      S: "Summit",
    },
  },
  {
    begin: {
      S: "2022-12-13",
    },
    floors: {
      SS: ["floor 1", "floor 2", "floor 3", "floor 4"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "HCSHuston",
    },
    createdAt: {
      N: "1670957152728",
    },
    name: {
      S: "HCSHuston",
    },
    clientId: {
      S: "HCSHuston",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Main Hospital"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "loring",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Loring",
    },
    clientId: {
      S: "Loring",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Main"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "hamburg",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "George C. Grape Comunity Hospital",
    },
    clientId: {
      S: "Hamburg",
    },
  },
  {
    begin: {
      S: "2022-03-17",
    },
    floors: {
      SS: ["FMS Clinic", "IT Server Room", "Pharmacy"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "lexington",
    },
    createdAt: {
      N: "1647475200000",
    },
    name: {
      S: "Lexington Regional Health Center",
    },
    clientId: {
      S: "Lexington",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Main Office"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "healthcare",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "HealthCare Solutions",
    },
    clientId: {
      S: "HealthCare",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Pharmacy"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "casscounty",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Cass County",
    },
    clientId: {
      S: "CassCounty",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Main"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "marc",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Mid-America Rheumatology Consultants",
    },
    clientId: {
      S: "MARC",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Kitchen"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "auburn",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Auburn",
    },
    clientId: {
      S: "Auburn",
    },
  },
  {
    begin: {
      S: "2023-06-30",
    },
    floors: {
      SS: ["Floor1", "Floor2"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "client-template",
    },
    createdAt: {
      N: "1688162600174",
    },
    name: {
      S: "Client Templace Inc.",
    },
    clientId: {
      S: "ClientTemplate",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Pharmacy"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "heartland",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Heartland Pathology",
    },
    clientId: {
      S: "Heartland",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: [
        "Cardiac Rehab",
        "DCH Family Center",
        "ER",
        "Kitchen",
        "Laboratory",
        "OR",
        "Panora Clinic",
        "Perry Clinic",
        "Pharmacy",
      ],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "dallascounty",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Dallas County Hospital",
    },
    clientId: {
      S: "DallasCounty",
    },
  },
  {
    begin: {
      S: "2022-03-17",
    },
    floors: {
      SS: ["Distribution", "Warehouse"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "vistarkc",
    },
    createdAt: {
      N: "1647475200000",
    },
    name: {
      S: "Vistar Kansas City",
    },
    clientId: {
      S: "VistarKC",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Admin Bldg", "Clinic", "Dietary", "Pharmacy"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "ellsworthcounty",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Ellsworth County Medical Center",
    },
    clientId: {
      S: "Ellsworth",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: [
        "Clinic",
        "Dietary",
        "Emergency",
        "Laboratory",
        "Nursing",
        "Pharmacy",
        "Surgery",
      ],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "smithcounty",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Smith County Memorial Hospital",
    },
    clientId: {
      S: "SmithCounty",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: [
        "Aurora Clinic",
        "Clay Clinic",
        "Cleanroom Suite",
        "Harvard Clinic",
        "Hospital Nursing",
        "Laboratory",
        "MCC Nursing",
        "Pharmacy",
        "Surgery",
      ],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "aurora",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Memorial Community Health",
    },
    clientId: {
      S: "Aurora",
    },
  },
  {
    begin: {
      S: "2022-09-13",
    },
    floors: {
      SS: ["floor 1", "floor 2"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "HCSHustonv1",
    },
    createdAt: {
      N: "1663027200000",
    },
    name: {
      S: "HCSHustonv1",
    },
    clientId: {
      S: "HCSHustonv1",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Pharmacy"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "olathehealth",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Olathe Health Cancer Center",
    },
    clientId: {
      S: "OlatheMedical",
    },
  },
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: [
        "Ante-Room",
        "IT",
        "Laboratory",
        "Main",
        "Negative-Room",
        "Pharmacy",
        "Positive-Room",
        "ServerRoom-1st Floor",
        "ServerRoom-2nd Floor",
      ],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "drvince",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Dr. Vince Clinical Research",
    },
    clientId: {
      S: "DrVince",
    },
  },
];

export const clientDetailsForOther = [
  {
    begin: {
      S: "2020-12-01",
    },
    floors: {
      SS: ["Main Office"],
    },
    deleted: {
      BOOL: false,
    },
    slug: {
      S: "healthcare",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "HealthCare Solutions",
    },
    clientId: {
      S: "HealthCare",
    },
  },
];

export const senserData = [
  {
    rangeMin: {
      N: "10",
    },
    unit: {
      S: "WC",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1688089478947",
    },
    txid: {
      S: "2585526_0",
    },
    lastHeartbeat: {
      N: "0",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1688089478947",
    },
    name: {
      S: "Test123",
    },
    clientId: {
      S: "HealthCare",
    },
    coef: {
      N: "1",
    },
    deleted: {
      BOOL: true,
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "0",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "20",
    },
    onHold: {
      BOOL: true,
    },
  },
  {
    rangeMin: {
      N: "35",
    },
    unit: {
      S: "%",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1606780800000",
    },
    txid: {
      S: "12935612_1",
    },
    lastHeartbeat: {
      N: "1688731756952",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Warehouse Humidity",
    },
    clientId: {
      S: "HealthCare",
    },
    deleted: {
      BOOL: false,
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "55.326995849609375",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "65",
    },
    onHold: {
      BOOL: false,
    },
  },
  {
    escalationsTimeout: {
      L: [],
    },
    rangeMin: {
      N: "32",
    },
    unit: {
      S: "C",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1687818135145",
    },
    txid: {
      S: "10582984_1",
    },
    lastHeartbeat: {
      N: "1688731677632",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Incubator",
    },
    clientId: {
      S: "HealthCare",
    },
    deleted: {
      BOOL: false,
    },
    escalations: {
      L: [
        {
          S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
        },
      ],
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "90.05071258544922",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "40",
    },
    onHold: {
      BOOL: false,
    },
  },
  {
    escalationsTimeout: {
      L: [],
    },
    rangeMin: {
      N: "30",
    },
    unit: {
      S: "F",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1687608084907",
    },
    txid: {
      S: "12935612_0",
    },
    lastHeartbeat: {
      N: "1688731756952",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Warehouse Temperature",
    },
    clientId: {
      S: "HealthCare",
    },
    deleted: {
      BOOL: false,
    },
    escalations: {
      L: [
        {
          S: "bad83326-5fed-4d03-a349-dbbba87a9956",
        },
      ],
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "75.07400512695312",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "90",
    },
    onHold: {
      BOOL: false,
    },
  },
  {
    escalationsTimeout: {
      L: [
        {
          S: "bad83326-5fed-4d03-a349-dbbba87a9956",
        },
      ],
    },
    rangeMin: {
      N: "-0.04",
    },
    unit: {
      S: "WC",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1687971252302",
    },
    txid: {
      S: "10540289_0",
    },
    lastHeartbeat: {
      N: "1671644476009",
    },
    alarmType: {
      S: "timeout",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Pressure Probe",
    },
    positive: {
      BOOL: false,
    },
    clientId: {
      S: "HealthCare",
    },
    coef: {
      N: "0",
    },
    deleted: {
      BOOL: false,
    },
    escalations: {
      L: [
        {
          S: "bad83326-5fed-4d03-a349-dbbba87a9956",
        },
        {
          S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
        },
      ],
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: true,
    },
    heartbeat: {
      N: "-9999",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "-0.01",
    },
    onHold: {
      BOOL: true,
    },
  },
  {
    escalationsTimeout: {
      L: [],
    },
    rangeMin: {
      N: "30",
    },
    unit: {
      S: "F",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1606780800000",
    },
    txid: {
      S: "3027268_0",
    },
    lastHeartbeat: {
      N: "1688731828340",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Server Room Ambient",
    },
    clientId: {
      S: "HealthCare",
    },
    coef: {
      N: "0",
    },
    deleted: {
      BOOL: false,
    },
    escalations: {
      L: [
        {
          S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
        },
        {
          S: "",
        },
      ],
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "73.2203369140625",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "80",
    },
    onHold: {
      BOOL: false,
    },
  },
  {
    rangeMin: {
      N: "36",
    },
    unit: {
      S: "F",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1606780800000",
    },
    txid: {
      S: "9147185_1",
    },
    lastHeartbeat: {
      N: "1688731925946",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Air Probe Refrigerator",
    },
    clientId: {
      S: "HealthCare",
    },
    deleted: {
      BOOL: false,
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "43.81288528442383",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "50",
    },
    onHold: {
      BOOL: false,
    },
  },
  {
    rangeMin: {
      N: "29",
    },
    unit: {
      S: "F",
    },
    location: {
      S: "Main Office",
    },
    modifiedAt: {
      N: "1606780800000",
    },
    txid: {
      S: "6556404_1",
    },
    lastHeartbeat: {
      N: "1688731819027",
    },
    alarmType: {
      S: "none",
    },
    createdAt: {
      N: "1606780800000",
    },
    name: {
      S: "Glycol Probe Refrigerator",
    },
    clientId: {
      S: "HealthCare",
    },
    deleted: {
      BOOL: false,
    },
    gateway: {
      S: "HealthCareSolutions",
    },
    hasEscalation: {
      BOOL: false,
    },
    heartbeat: {
      N: "32.2297248840332",
    },
    alarmOn: {
      BOOL: false,
    },
    rangeMax: {
      N: "37",
    },
    onHold: {
      BOOL: false,
    },
  },
];

export const pcOptions = [
  // {value: 'all', name: 'All'},
  { value: "channel1", name: "0.5 µm" },
  { value: "channel2", name: "0.7 µm" },
  { value: "channel3", name: "1 µm" },
  { value: "channel4", name: "5 µm" },
];

export const particularCounterData = {
  Count: 2,
  Items: [
    {
      escalationsTimeout: {
        L: [
          {
            S: "b934f3f6-7511-42ae-95cf-8945fac4974b",
          },
        ],
      },
      heartbeats: {
        M: {
          channel1: {
            N: "1",
          },
          channel2: {
            N: "0",
          },
          channel3: {
            N: "0",
          },
          channel4: {
            N: "0",
          },
        },
      },
      unit: {
        S: "µm",
      },
      location: {
        S: "Positive-Room",
      },
      txid: {
        S: "PC65102141004",
      },
      lastHeartbeat: {
        N: "1687816637514",
      },
      alarmType: {
        S: "none",
      },
      particleSizes: {
        M: {
          channel1: {
            N: "0.5",
          },
          channel2: {
            N: "0.7",
          },
          channel3: {
            N: "1",
          },
          channel4: {
            N: "5",
          },
        },
      },
      createdAt: {
        N: "0",
      },
      name: {
        S: "TSI Particle Counter",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "b934f3f6-7511-42ae-95cf-8945fac4974b",
          },
        ],
      },
      schedule: {
        M: {
          weekday: {
            S: "00:00-23:59",
          },
          sunday: {
            S: "00:00-23:59",
          },
          saturday: {
            S: "00:00-23:59",
          },
          interval: {
            S: "35",
          },
          timezone: {
            S: "CST",
          },
        },
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "20000",
      },
      onHold: {
        BOOL: true,
      },
      rangeMaxAll: {
        M: {
          channel1: {
            N: "3520",
          },
          channel2: {
            N: "50000",
          },
          channel3: {
            N: "20000",
          },
          channel4: {
            N: "500",
          },
        },
      },
      type: {
        S: "PC",
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      heartbeats: {
        M: {
          channel1: {
            N: "25345",
          },
          channel2: {
            N: "4942",
          },
          channel3: {
            N: "1830",
          },
          channel4: {
            N: "21",
          },
        },
      },
      unit: {
        S: "µm",
      },
      location: {
        S: "Kitchen",
      },
      txid: {
        S: "PC_TEST_0001",
      },
      lastHeartbeat: {
        N: "1661958097455",
      },
      alarmType: {
        S: "none",
      },
      particleSizes: {
        M: {
          channel1: {
            N: "0.5",
          },
          channel2: {
            N: "0.7",
          },
          channel3: {
            N: "1",
          },
          channel4: {
            N: "5",
          },
        },
      },
      createdAt: {
        N: "0",
      },
      name: {
        S: "TSI Particle Counter",
      },
      clientId: {
        S: "Auburn",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [],
      },
      schedule: {
        M: {
          weekday: {
            S: "08:00-18:00",
          },
          sunday: {
            S: "08:00-18:00",
          },
          saturday: {
            S: "08:00-18:00",
          },
          interval: {
            N: "180",
          },
          timezone: {
            S: "CST",
          },
        },
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "1830",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "20000",
      },
      onHold: {
        BOOL: true,
      },
      rangeMaxAll: {
        M: {
          channel1: {
            N: "100000",
          },
          channel2: {
            N: "50000",
          },
          channel3: {
            N: "20000",
          },
          channel4: {
            N: "50",
          },
        },
      },
      type: {
        S: "PC",
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      heartbeats: {
        M: {
          channel1: {
            N: "25345",
          },
          channel2: {
            N: "4942",
          },
          channel3: {
            N: "1830",
          },
          channel4: {
            N: "21",
          },
        },
      },
      unit: {
        S: "µm",
      },
      location: {
        S: "Pharmacy",
      },
      txid: {
        S: "PC_TEST_0001",
      },
      lastHeartbeat: {
        N: "1661958097455",
      },
      alarmType: {
        S: "none",
      },
      particleSizes: {
        M: {
          channel1: {
            N: "0.5",
          },
          channel2: {
            N: "0.7",
          },
          channel3: {
            N: "1",
          },
          channel4: {
            N: "5",
          },
        },
      },
      createdAt: {
        N: "0",
      },
      name: {
        S: "TSI Particle Counter",
      },
      clientId: {
        S: "Auburn",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [],
      },
      schedule: {
        M: {
          weekday: {
            S: "08:00-18:00",
          },
          sunday: {
            S: "08:00-18:00",
          },
          saturday: {
            S: "08:00-18:00",
          },
          interval: {
            N: "180",
          },
          timezone: {
            S: "CST",
          },
        },
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "1830",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "20000",
      },
      onHold: {
        BOOL: true,
      },
      rangeMaxAll: {
        M: {
          channel1: {
            N: "100000",
          },
          channel2: {
            N: "50000",
          },
          channel3: {
            N: "20000",
          },
          channel4: {
            N: "50",
          },
        },
      },
      type: {
        S: "PC",
      },
    },
  ],
  ScannedCount: 4,
};

export const allSensorData = {
  Count: 238,
  Items: [
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "33",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "ER",
      },
      modifiedAt: {
        N: "1689427928608",
      },
      txid: {
        S: "12151657_1",
      },
      lastHeartbeat: {
        N: "1693846969956",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "E.R. Food Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "fd8d89b9-3db2-48b8-a6ca-fabaa142d043",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "33.73106002807617",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8592851b-b340-4dce-ac72-e9a841facdfa",
          },
        ],
      },
      rangeMin: {
        N: "58",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1689014488214",
      },
      txid: {
        S: "10583134_0",
      },
      lastHeartbeat: {
        N: "1688459265277",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Ambient Temperature",
      },
      clientId: {
        S: "Hamburg",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "ae9d3875-2f57-4ce3-be39-295c20a67764",
          },
        ],
      },
      gateway: {
        S: "Hamburg",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "64.17500305175781",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "78",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12151478_1",
      },
      lastHeartbeat: {
        N: "1693847092859",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab TemPure",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a9b257b-c422-492a-bc39-6d2f4e7d4e96",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.103607177734375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-50",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1667390460050",
      },
      txid: {
        S: "10582968_1",
      },
      lastHeartbeat: {
        N: "1693847144650",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.23369216918945312",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-15",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "852e3593-ced4-492b-b754-0a14c36bc3fd",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Hospital",
      },
      modifiedAt: {
        N: "1685718022208",
      },
      txid: {
        S: "9147169_1",
      },
      lastHeartbeat: {
        N: "1693847075367",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Patient Fridge",
      },
      clientId: {
        S: "Loring",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "936d7382-23f0-4d0f-9dce-21b778e2e289",
          },
        ],
      },
      gateway: {
        S: "Loring",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.29233932495117",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-30",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "OR",
      },
      modifiedAt: {
        N: "1684959298544",
      },
      txid: {
        S: "12151649_1",
      },
      lastHeartbeat: {
        N: "1693847013585",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "OR Meds Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7a88b586-bf3e-44cf-a344-7e4fb5e9fbe0",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-18.961124420166016",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "20.5",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692719753455",
      },
      txid: {
        S: "3276954_0",
      },
      lastHeartbeat: {
        N: "1693846868657",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Storage Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "72.15925598144531",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "20.5",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1668260414099",
      },
      txid: {
        S: "2348241_0",
      },
      lastHeartbeat: {
        N: "1693847127597",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Temperature ",
      },
      clientId: {
        S: "DrVince",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "71.82284545898438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692718986015",
      },
      txid: {
        S: "2726359_1",
      },
      lastHeartbeat: {
        N: "1693847080358",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692196062000",
      },
      name: {
        S: "ER Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "51.218788146972656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1682432636015",
      },
      txid: {
        S: "13261661_1",
      },
      lastHeartbeat: {
        N: "1693847076338",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Blood Bank Fridge",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.48125076293945",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "6",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Microbiology",
      },
      modifiedAt: {
        N: "1689798426215",
      },
      txid: {
        S: "12674169_1",
      },
      lastHeartbeat: {
        N: "1693847046850",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 9",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.84330368041992",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "6",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229804676",
      },
      txid: {
        S: "3277006_1",
      },
      lastHeartbeat: {
        N: "1693847147872",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clean Room Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "41.148590087890625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692132296062",
      },
      txid: {
        S: "2820451_1",
      },
      lastHeartbeat: {
        N: "1693846908544",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Pharmacy Back Fridge",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.94951248168945",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Hospital Nursing",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "10583126_1",
      },
      lastHeartbeat: {
        N: "1693847080900",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Nursing Med Rm Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "791a8c93-affb-4c2f-8eec-b76ed7b3dc2d",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.49217987060547",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "85",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Nursing",
      },
      modifiedAt: {
        N: "1678291518832",
      },
      txid: {
        S: "13261663_1",
      },
      lastHeartbeat: {
        N: "1693847150065",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "BW #3 ",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a94cbba-b4a1-4ec0-9c99-8805e97f691a",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "129.296630859375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "130",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "a9d3777b-9393-4ba7-83b0-64fd6467e43e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1530565_1",
      },
      lastHeartbeat: {
        N: "1693847118113",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Fridge",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a9d3777b-9393-4ba7-83b0-64fd6467e43e",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.21989822387695",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "18",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229761044",
      },
      txid: {
        S: "3277004_0",
      },
      lastHeartbeat: {
        N: "1693847127098",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Neg. Room Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "71.80842590332031",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "15",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "2348245_0",
      },
      lastHeartbeat: {
        N: "1693847168013",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Phleb Room Temp.",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "66.95436096191406",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "25",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-20",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261659_1",
      },
      lastHeartbeat: {
        N: "1693846931799",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Walk-In Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7366ec78-85ed-4fc3-8789-41099be167e3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-8.311721801757812",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "10",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Kitchen",
      },
      txid: {
        S: "1231456_0",
      },
      lastHeartbeat: {
        N: "0",
      },
      name: {
        S: "fakeSensor",
      },
      clientId: {
        S: "fakeClient",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      heartbeat: {
        N: "0",
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "-22",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1669680143847",
      },
      txid: {
        S: "13260246_1",
      },
      lastHeartbeat: {
        N: "1693847149287",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Freezer",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "399ee540-357c-4a2a-bc4d-b8b80ff5d135",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-6.69384765625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-36",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "DCH Family Center",
      },
      modifiedAt: {
        N: "1692909734924",
      },
      txid: {
        S: "12674063_1",
      },
      lastHeartbeat: {
        N: "1693846923428",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1688269504932",
      },
      name: {
        S: "Lab Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f67c72fb-5432-4b5c-af4d-040f3e475552",
          },
        ],
      },
      gateway: {
        S: "DallasCountyDCHFamily",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "6.032936096191406",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-7",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "0",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Surgery",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13262118_1",
      },
      lastHeartbeat: {
        N: "1693847009035",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "FW #1 (Upper)",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2637543f-dd69-4206-a312-e70b6be0ca14",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "105.2522201538086",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "108",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Bertrand",
      },
      modifiedAt: {
        N: "1692719240597",
      },
      txid: {
        S: "4128644_0",
      },
      lastHeartbeat: {
        N: "1693635300310",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1691084539403",
      },
      name: {
        S: "Bertrand Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "LexingtonBertrand",
      },
      heartbeat: {
        N: "68.90079498291016",
      },
      hasEscalation: {
        BOOL: true,
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "77",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "d98b28ea-36eb-4003-af1d-5fcdca540f7a",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Emergency",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261602_1",
      },
      lastHeartbeat: {
        N: "1693847167451",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "ED Med Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d98b28ea-36eb-4003-af1d-5fcdca540f7a",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "41.15221405029297",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "35",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935612_1",
      },
      lastHeartbeat: {
        N: "1693846906074",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Warehouse Humidity",
      },
      clientId: {
        S: "HealthCare",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "53.947120666503906",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "65",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "65699d89-23cd-49f5-a6ea-7c92fffc5fa4",
          },
        ],
      },
      rangeMin: {
        N: "69",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1686318015745",
      },
      txid: {
        S: "2725782_0",
      },
      lastHeartbeat: {
        N: "1693847134204",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1678464736846",
      },
      name: {
        S: "Laboratory Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "65699d89-23cd-49f5-a6ea-7c92fffc5fa4",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "70.35800170898438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "76",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "65699d89-23cd-49f5-a6ea-7c92fffc5fa4",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1693151323210",
      },
      txid: {
        S: "2725782_1",
      },
      lastHeartbeat: {
        N: "1693847134204",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1678464756297",
      },
      name: {
        S: "Laboratory Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "65699d89-23cd-49f5-a6ea-7c92fffc5fa4",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.352447509765625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "59",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "-20",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692719184380",
      },
      txid: {
        S: "2821678_1",
      },
      lastHeartbeat: {
        N: "1693846896465",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Pharmacy Freezer",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.49066162109375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.4",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Sample Receiving",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12674178_1",
      },
      lastHeartbeat: {
        N: "1693847075339",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 13 LEFT",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.04792404174805",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.4",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "621054d0-968f-4817-84be-3e7ced3ac204",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1680665299958",
      },
      txid: {
        S: "13261594_1",
      },
      lastHeartbeat: {
        N: "1693846848811",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Vaccine Fridge #2 Nurse Station",
      },
      clientId: {
        S: "Summit",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d551eadf-78d7-4076-a53e-7845b7188815",
          },
        ],
      },
      gateway: {
        S: "Summit",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.98991775512695",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "40",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "IT",
      },
      modifiedAt: {
        N: "1686839360289",
      },
      txid: {
        S: "2726333_1",
      },
      lastHeartbeat: {
        N: "1693846896327",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1670972287781",
      },
      name: {
        S: "Server Room 1st Floor Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1b63c0db-0b57-4422-ba43-7ec701356b8f",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "49.93568420410156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "70",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "505457b5-e352-4418-9e9b-e631a3144172",
          },
        ],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692718943974",
      },
      txid: {
        S: "2726097_0",
      },
      lastHeartbeat: {
        N: "1693847066278",
      },
      createdAt: {
        N: "1692225655338",
      },
      name: {
        S: "OR Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "66.86599731445312",
      },
      rangeMax: {
        N: "75",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "OR",
      },
      modifiedAt: {
        N: "1685569102229",
      },
      txid: {
        S: "12151641_1",
      },
      lastHeartbeat: {
        N: "1693846970988",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "OR Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7a88b586-bf3e-44cf-a344-7e4fb5e9fbe0",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.10532760620117",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "44",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Elwood",
      },
      modifiedAt: {
        N: "1692280818158",
      },
      txid: {
        S: "3959464_1",
      },
      lastHeartbeat: {
        N: "1693846890451",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692280818158",
      },
      name: {
        S: "Elwood Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "LexingtonElwood",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "36.29724884033203",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935598_1",
      },
      lastHeartbeat: {
        N: "1693847039950",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Humidity",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "54.88911819458008",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1739889_1",
      },
      lastHeartbeat: {
        N: "1693847089649",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Main Pharmacy Humidity",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "58cf5dee-89a6-433c-8d08-079405614bc5",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "50.514190673828125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      rangeMin: {
        N: "-22",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Warehouse",
      },
      modifiedAt: {
        N: "1647475200000",
      },
      txid: {
        S: "2585491_1",
      },
      lastHeartbeat: {
        N: "1693846979763",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "New Freezer ( West Freezer )",
      },
      clientId: {
        S: "VistarKC",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      gateway: {
        S: "VistarKC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-8.03692626953125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "18",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Water Laboratory",
      },
      modifiedAt: {
        N: "1689803973130",
      },
      txid: {
        S: "12674193_1",
      },
      lastHeartbeat: {
        N: "1693846882277",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. # 3 TOP",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "65.08268737792969",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "20",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Harvard Clinic",
      },
      modifiedAt: {
        N: "1693584337111",
      },
      txid: {
        S: "12151637_1",
      },
      lastHeartbeat: {
        N: "1693847148331",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Harvard Clinic Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a5d01743-71c3-4c07-a031-3d3099bd9978",
          },
        ],
      },
      gateway: {
        S: "AuroraHarvard",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "70.15798950195312",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "-28",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "6474025_1",
      },
      lastHeartbeat: {
        N: "1693847155895",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Veggie Freezer",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-15.88555908203125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "10",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13381419_1",
      },
      lastHeartbeat: {
        N: "1693846988834",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "RHC Samples #2 Fridge ",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.620018005371094",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "50",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "IT",
      },
      modifiedAt: {
        N: "1671650520288",
      },
      txid: {
        S: "2726404_0",
      },
      lastHeartbeat: {
        N: "1693846884692",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1670972328115",
      },
      name: {
        S: "Server Room 2nd Floor Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1b63c0db-0b57-4422-ba43-7ec701356b8f",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "74.08399963378906",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "89",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261590_1",
      },
      lastHeartbeat: {
        N: "1693846892587",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "34.3874397277832",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "65",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935598_0",
      },
      lastHeartbeat: {
        N: "1693847039950",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Temperature",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "70.87999725341797",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "75",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "31",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "OR",
      },
      modifiedAt: {
        N: "1686342588025",
      },
      txid: {
        S: "12151693_1",
      },
      lastHeartbeat: {
        N: "1693847168379",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ambulatory Services ",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "30.2037353515625",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Emergency",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "2820042_1",
      },
      lastHeartbeat: {
        N: "1693846947687",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "ER Food Fridge NEW",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "9a738db6-7f30-4df1-98e1-075713ba6437",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "36.35756301879883",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692641554796",
      },
      txid: {
        S: "1603415_1",
      },
      lastHeartbeat: {
        N: "1693847151259",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692395524079",
      },
      name: {
        S: "Ante Room",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "AuburnOlathe",
      },
      coef: {
        N: "-0.05",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.10610848367214203",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.2",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13465581_1",
      },
      lastHeartbeat: {
        N: "1693847004463",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "RHC Vaccine Fridge ",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.424835205078125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-36",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "DCH Family Center",
      },
      modifiedAt: {
        N: "1692909750529",
      },
      txid: {
        S: "12674201_1",
      },
      lastHeartbeat: {
        N: "1693847058017",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1688269435378",
      },
      name: {
        S: "Medication Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f67c72fb-5432-4b5c-af4d-040f3e475552",
          },
        ],
      },
      gateway: {
        S: "DallasCountyDCHFamily",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "3.012298583984375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "35.5",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Aurora Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13260565_1",
      },
      lastHeartbeat: {
        N: "1693846981124",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Aurora Clinic Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "4a05a775-ad27-40aa-8cd4-60dc2cfb47a3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.767799377441406",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "-20",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "FMS Clinic",
      },
      modifiedAt: {
        N: "1692718908460",
      },
      txid: {
        S: "2585489_1",
      },
      lastHeartbeat: {
        N: "1693846948906",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692225146557",
      },
      name: {
        S: "FMS Freezer",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-3.1980514526367188",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "77f6ea7d-86cd-4e05-b05b-36421754e973",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Admin Bldg",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "2463989_1",
      },
      lastHeartbeat: {
        N: "1693847123895",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Infection Control Fridge",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "77f6ea7d-86cd-4e05-b05b-36421754e973",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "41.338104248046875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693587599168",
      },
      txid: {
        S: "1603183_0",
      },
      lastHeartbeat: {
        N: "1693847141589",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1693420637434",
      },
      name: {
        S: "Ante Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "AuburnLTC",
      },
      coef: {
        N: "-0.15",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.12893903851509095",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.15",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1685481636646",
      },
      txid: {
        S: "1752401_1",
      },
      lastHeartbeat: {
        N: "1693847026763",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Humidity",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "59.035186767578125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13467029_1",
      },
      lastHeartbeat: {
        N: "1693846903309",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "RHC Allergy/Medication Fridge ",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.88090133666992",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1664797449205",
      },
      txid: {
        S: "123456_1",
      },
      lastHeartbeat: {
        N: "0",
      },
      createdAt: {
        N: "1664797449205",
      },
      name: {
        S: "Test Sensor",
      },
      clientId: {
        S: "Auburn",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "auburn",
      },
      heartbeat: {
        N: "0",
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "1",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "DCH Family Center",
      },
      modifiedAt: {
        N: "1692753428447",
      },
      txid: {
        S: "13467033_1",
      },
      lastHeartbeat: {
        N: "1693846913090",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1688269360091",
      },
      name: {
        S: "Vaccine Refrigerator",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f67c72fb-5432-4b5c-af4d-040f3e475552",
          },
        ],
      },
      gateway: {
        S: "DallasCountyDCHFamily",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "32.42676544189453",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "18.4",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Water Laboratory",
      },
      modifiedAt: {
        N: "1693251820855",
      },
      txid: {
        S: "12674221_1",
      },
      lastHeartbeat: {
        N: "1693846874977",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. # 1 BOTTOM",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "67.73605346679688",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "20.4",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "0",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "10582972_1",
      },
      lastHeartbeat: {
        N: "1693847039557",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Fridge #1",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a9b257b-c422-492a-bc39-6d2f4e7d4e96",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.2277946472168",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "9",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692155479000",
      },
      txid: {
        S: "2585458_1",
      },
      lastHeartbeat: {
        N: "1693847022948",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692155479000",
      },
      name: {
        S: "Hazardous Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "39.730804443359375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "FMS Clinic",
      },
      modifiedAt: {
        N: "1692719060150",
      },
      txid: {
        S: "2726718_1",
      },
      lastHeartbeat: {
        N: "1693847146644",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692197113109",
      },
      name: {
        S: "FMS Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "47.5383186340332",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "15",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Server Room",
      },
      modifiedAt: {
        N: "1666552430607",
      },
      txid: {
        S: "4303967_1",
      },
      lastHeartbeat: {
        N: "1693847159161",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ambient Humidity",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "53.56890869140625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "70",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "25",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1678129876092",
      },
      txid: {
        S: "12935602_1",
      },
      lastHeartbeat: {
        N: "1693847056817",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Laboratory Humidity",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e2c7c4df-cd94-4952-b2cb-0faa97fee545",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "48.773231506347656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "63",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "4bdee3e4-9a2f-4b03-bd92-29d1e02ce2f7",
          },
        ],
      },
      rangeMin: {
        N: "61",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261598_0",
      },
      lastHeartbeat: {
        N: "1693846871622",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clinical Trial Cabinet",
      },
      clientId: {
        S: "OlatheMedical",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "6aa83788-0d07-4da7-871e-4f4754adea7e",
          },
        ],
      },
      gateway: {
        S: "OlatheMedical",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "72.05000305175781",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "77",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "32",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147158_1",
      },
      lastHeartbeat: {
        N: "1693847166499",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Walk-In Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "30.157812118530273",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "34",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1690849341224",
      },
      txid: {
        S: "10582984_1",
      },
      lastHeartbeat: {
        N: "1693846874854",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Incubator",
      },
      clientId: {
        S: "HealthCare",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
          },
        ],
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "90.04972839355469",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Surgery",
      },
      modifiedAt: {
        N: "1671730394661",
      },
      txid: {
        S: "13260982_1",
      },
      lastHeartbeat: {
        N: "1693846960213",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Surgery Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "225c8e25-fc93-4d78-bedb-a8a0ee941a53",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.94929122924805",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13381847_1",
      },
      lastHeartbeat: {
        N: "1693847080395",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "RHC Sample Pickup",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "071e1c4d-aa2f-4508-928a-f79fbf3b8e86",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.224578857421875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "28",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1692067908230",
      },
      txid: {
        S: "16438424_1",
      },
      lastHeartbeat: {
        N: "1693847127160",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Line Fridge",
      },
      clientId: {
        S: "Ellsworth",
      },
      coef: {
        N: "-1",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.32677459716797",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "45",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "4bdee3e4-9a2f-4b03-bd92-29d1e02ce2f7",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13260569_1",
      },
      lastHeartbeat: {
        N: "1693847060181",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Non-Hazardous Small Fridge",
      },
      clientId: {
        S: "OlatheMedical",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "c7162f51-197d-498e-90b6-2c06ca0f70fc",
          },
        ],
      },
      gateway: {
        S: "OlatheMedical",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "43.36848831176758",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935578_1",
      },
      lastHeartbeat: {
        N: "1693846877929",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Humidity",
      },
      clientId: {
        S: "CassCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      gateway: {
        S: "CassCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "61.91365432739258",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1692580735408",
      },
      txid: {
        S: "9147154_1",
      },
      lastHeartbeat: {
        N: "1693847080514",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "M/S Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-11.178546905517578",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "10",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1680270180670",
      },
      txid: {
        S: "13262115_1",
      },
      lastHeartbeat: {
        N: "1693847073739",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Dietary Fridge #1",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "4608cc17-32ed-4f0d-b8aa-ae5477bd0c83",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "35.90404510498047",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Elwood",
      },
      modifiedAt: {
        N: "1693272507486",
      },
      txid: {
        S: "3849863_0",
      },
      lastHeartbeat: {
        N: "1693847022170",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692226671576",
      },
      name: {
        S: "Elwood Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "LexingtonElwood",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "70.72227478027344",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "77",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "-80",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1832402_1",
      },
      lastHeartbeat: {
        N: "1693847011449",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ultra Cold Freezer",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "78ddd572-6cfb-4e8a-8d33-1f9f75c2effe",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-98.33644104003906",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692718871958",
      },
      txid: {
        S: "2551626_1",
      },
      lastHeartbeat: {
        N: "1693846911861",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692195182172",
      },
      name: {
        S: "Nurse Station Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.057701110839844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Bertrand",
      },
      modifiedAt: {
        N: "1692719254599",
      },
      txid: {
        S: "4128644_1",
      },
      lastHeartbeat: {
        N: "1693635300310",
      },
      createdAt: {
        N: "1691084520262",
      },
      alarmType: {
        S: "timeout",
      },
      name: {
        S: "Bertrand Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "LexingtonBertrand",
      },
      heartbeat: {
        N: "48.873199462890625",
      },
      hasEscalation: {
        BOOL: true,
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.1",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Volatile Laboratory",
      },
      modifiedAt: {
        N: "1689798439964",
      },
      txid: {
        S: "12674071_1",
      },
      lastHeartbeat: {
        N: "1693847109148",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. #8",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "36.89875030517578",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.1",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "844af926-7114-4031-89cc-4593664d6560",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147189_1",
      },
      lastHeartbeat: {
        N: "1693847031830",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "X-Ray",
      },
      clientId: {
        S: "MARC",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "b98650d4-cb34-4d21-a6a6-e63613d612d6",
          },
        ],
      },
      gateway: {
        S: "MARC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "42.01881790161133",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8592851b-b340-4dce-ac72-e9a841facdfa",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1689014473086",
      },
      txid: {
        S: "10583138_1",
      },
      lastHeartbeat: {
        N: "1688526717932",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "ER1 Fridge",
      },
      clientId: {
        S: "Hamburg",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "ae9d3875-2f57-4ce3-be39-295c20a67764",
          },
        ],
      },
      gateway: {
        S: "Hamburg",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "45.44232177734375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1687608084907",
      },
      txid: {
        S: "12935612_0",
      },
      lastHeartbeat: {
        N: "1693846906074",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Warehouse Temperature",
      },
      clientId: {
        S: "HealthCare",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "bad83326-5fed-4d03-a349-dbbba87a9956",
          },
        ],
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "82.39999389648438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "90",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1681390815212",
      },
      txid: {
        S: "2585131_1",
      },
      lastHeartbeat: {
        N: "1693846901069",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Dietary Fridge #2B",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7366ec78-85ed-4fc3-8789-41099be167e3",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.55897903442383",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "-0.086",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1693488371050",
      },
      txid: {
        S: "1603413_0",
      },
      lastHeartbeat: {
        N: "1693847160900",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Pressure",
      },
      positive: {
        BOOL: false,
      },
      clientId: {
        S: "DrVince",
      },
      coef: {
        N: "0.00693725",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-0.0673577641429901",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.1",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Perry Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13881171_1",
      },
      lastHeartbeat: {
        N: "1693847158714",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Vaccine Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a7c87bf8-345a-4b54-9929-6a0334272c75",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.5538444519043",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "40",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "IT",
      },
      modifiedAt: {
        N: "1686839367833",
      },
      txid: {
        S: "2726404_1",
      },
      lastHeartbeat: {
        N: "1693846884692",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1670972353173",
      },
      name: {
        S: "Server Room 2nd Floor Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1b63c0db-0b57-4422-ba43-7ec701356b8f",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "52.270599365234375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "70",
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Elwood",
      },
      modifiedAt: {
        N: "1692719159525",
      },
      txid: {
        S: "3849863_1",
      },
      lastHeartbeat: {
        N: "1693847022170",
      },
      createdAt: {
        N: "1692226711295",
      },
      name: {
        S: "Elwood Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "LexingtonElwood",
      },
      heartbeat: {
        N: "43.75957489013672",
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-35",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1680266278401",
      },
      txid: {
        S: "12151645_1",
      },
      lastHeartbeat: {
        N: "1693846879127",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Freezer #2",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a9b257b-c422-492a-bc39-6d2f4e7d4e96",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-2.1266098022460938",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "85",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Surgery",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261655_1",
      },
      lastHeartbeat: {
        N: "1693847043649",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "BW #1 (Lower)",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2637543f-dd69-4206-a312-e70b6be0ca14",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "129.51333618164062",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "131",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "20.5",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1665685678664",
      },
      txid: {
        S: "3276634_0",
      },
      lastHeartbeat: {
        N: "1693847078364",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "DTR Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "72.05352783203125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692718806884",
      },
      txid: {
        S: "2348221_1",
      },
      lastHeartbeat: {
        N: "1693847120036",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Pharmacy Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "49.990234375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "a9d3777b-9393-4ba7-83b0-64fd6467e43e",
          },
        ],
      },
      rangeMin: {
        N: "-58",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1530497_1",
      },
      lastHeartbeat: {
        N: "1693847154982",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Freezer",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a9d3777b-9393-4ba7-83b0-64fd6467e43e",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-10.386295318603516",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1685740805287",
      },
      txid: {
        S: "2585315_1",
      },
      lastHeartbeat: {
        N: "1693847149414",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1667962800000",
      },
      name: {
        S: "Retail Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7366ec78-85ed-4fc3-8789-41099be167e3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "67.9360580444336",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-36",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Perry Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13881257_1",
      },
      lastHeartbeat: {
        N: "1693847129048",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Chest Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a7c87bf8-345a-4b54-9929-6a0334272c75",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-12.664505004882812",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "35",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Microbiology",
      },
      modifiedAt: {
        N: "1689803352851",
      },
      txid: {
        S: "12674174_1",
      },
      lastHeartbeat: {
        N: "1693847129641",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. # 19 BOTTOM",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "96.28622436523438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "36",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "32",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1691773312273",
      },
      txid: {
        S: "9147154_0",
      },
      lastHeartbeat: {
        N: "1693847080514",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "MS Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "35.599998474121094",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "-50",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Sample Receiving",
      },
      modifiedAt: {
        N: "1668798401158",
      },
      txid: {
        S: "12674217_1",
      },
      lastHeartbeat: {
        N: "1693847111945",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Freezer",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-11.592620849609375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "66",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1647475200000",
      },
      txid: {
        S: "2348221_0",
      },
      lastHeartbeat: {
        N: "1693847120036",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Pharmacy Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "70.24166870117188",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "77",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13262117_1",
      },
      lastHeartbeat: {
        N: "1693846940513",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Walk-In Cooler",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "4608cc17-32ed-4f0d-b8aa-ae5477bd0c83",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "37.168296813964844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1684449696738",
      },
      txid: {
        S: "1752144_0",
      },
      lastHeartbeat: {
        N: "1693846895658",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Temperature",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "63.78799819946289",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Bertrand",
      },
      modifiedAt: {
        N: "1692280735324",
      },
      txid: {
        S: "3959662_1",
      },
      lastHeartbeat: {
        N: "1693635250223",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1692280735324",
      },
      name: {
        S: "Bertrand Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "LexingtonElwood",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "40.117469787597656",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-50",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1678126514190",
      },
      txid: {
        S: "13261641_1",
      },
      lastHeartbeat: {
        N: "1693847003893",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Omnicell Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "94e06e87-ecd1-4cf5-adb2-7d933915e3da",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-9.259757995605469",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-19",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "-0.03",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1685481539798",
      },
      txid: {
        S: "1603013_0",
      },
      lastHeartbeat: {
        N: "1693847139296",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Aurora Negative Pressure",
      },
      positive: {
        BOOL: false,
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0.009",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "0358d888-e061-464e-bba2-389cc778df15",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-0.023735362648963934",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-0.01",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-40",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261657_1",
      },
      lastHeartbeat: {
        N: "1693847049434",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Chem Cardinal Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e2c7c4df-cd94-4952-b2cb-0faa97fee545",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-25.50249481201172",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-20",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.4",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Sample Receiving",
      },
      modifiedAt: {
        N: "1677017687103",
      },
      txid: {
        S: "12674189_1",
      },
      lastHeartbeat: {
        N: "1693847054810",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 17 RIGHT",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.9684944152832",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.4",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692225586415",
      },
      txid: {
        S: "2585552_1",
      },
      lastHeartbeat: {
        N: "1693846932396",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692225586415",
      },
      name: {
        S: "OR Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "41.984100341796875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1678126466835",
      },
      txid: {
        S: "13261653_1",
      },
      lastHeartbeat: {
        N: "1693846928622",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "OmniCell Refrigerator ",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "94e06e87-ecd1-4cf5-adb2-7d933915e3da",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.184486389160156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "852e3593-ced4-492b-b754-0a14c36bc3fd",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Hospital",
      },
      modifiedAt: {
        N: "1685718030750",
      },
      txid: {
        S: "9147238_1",
      },
      lastHeartbeat: {
        N: "1693846866296",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Surgery Fridge",
      },
      clientId: {
        S: "Loring",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7f019902-54dd-414e-b688-6e99472b70d6",
          },
        ],
      },
      gateway: {
        S: "Loring",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "40.28847122192383",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "-20",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "6473880_1",
      },
      lastHeartbeat: {
        N: "1693846964008",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Meat Freezer",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-7.246925354003906",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "7",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "26",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1690370647119",
      },
      txid: {
        S: "10582960_1",
      },
      lastHeartbeat: {
        N: "1693847066388",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pass-Through Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "29.496601104736328",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1688140708632",
      },
      txid: {
        S: "2820388_1",
      },
      lastHeartbeat: {
        N: "1693846875309",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "ED Fridge",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "34.77553176879883",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      rangeMin: {
        N: "31",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Warehouse",
      },
      modifiedAt: {
        N: "1668200820968",
      },
      txid: {
        S: "2585623_1",
      },
      lastHeartbeat: {
        N: "1693847139510",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Dock Cooler",
      },
      clientId: {
        S: "VistarKC",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      gateway: {
        S: "VistarKC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "33.29243087768555",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "38",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "50",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693403425060",
      },
      txid: {
        S: "3849945_0",
      },
      lastHeartbeat: {
        N: "1693847111431",
      },
      createdAt: {
        N: "1693403425060",
      },
      name: {
        S: "Ante Room Temperature",
      },
      clientId: {
        S: "AuburnLTC",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      heartbeat: {
        N: "64.79165649414062",
      },
      rangeMax: {
        N: "80",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13190801_0",
      },
      lastHeartbeat: {
        N: "1693847089702",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Temperature",
      },
      clientId: {
        S: "CassCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      gateway: {
        S: "CassCounty",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "63.86000061035156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "72",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "-53",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Aurora Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "10582976_1",
      },
      lastHeartbeat: {
        N: "1693847138126",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Aurora Clinic Freezer",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "4a05a775-ad27-40aa-8cd4-60dc2cfb47a3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-23.191192626953125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147165_1",
      },
      lastHeartbeat: {
        N: "1693846965484",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Cooks Fridge",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "32.75410079956055",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "45",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1685481546006",
      },
      txid: {
        S: "1751812_1",
      },
      lastHeartbeat: {
        N: "1693846961603",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Humidity",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "62.991233825683594",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "34",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Panora Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "14078941_1",
      },
      lastHeartbeat: {
        N: "1693847142055",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Vaccine Ref.",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d84c873e-4901-41cd-afe1-12564c092463",
          },
        ],
      },
      gateway: {
        S: "DallasCountyPanora",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.8854866027832",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "44",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "bad83326-5fed-4d03-a349-dbbba87a9956",
          },
        ],
      },
      rangeMin: {
        N: "-0.04",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1687971252302",
      },
      txid: {
        S: "10540289_0",
      },
      lastHeartbeat: {
        N: "1671644476009",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pressure Probe",
      },
      positive: {
        BOOL: false,
      },
      clientId: {
        S: "HealthCare",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "bad83326-5fed-4d03-a349-dbbba87a9956",
          },
          {
            S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
          },
        ],
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "-9999",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-0.01",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.3",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Sample Receiving",
      },
      modifiedAt: {
        N: "1689798462524",
      },
      txid: {
        S: "12674160_1",
      },
      lastHeartbeat: {
        N: "1693846976777",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 12 LEFT",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.12644577026367",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.3",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "5",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681394854533",
      },
      txid: {
        S: "12935532_1",
      },
      lastHeartbeat: {
        N: "1693846924251",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Humidity",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "78ddd572-6cfb-4e8a-8d33-1f9f75c2effe",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "52.04800033569336",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "-0.03",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1673066993649",
      },
      txid: {
        S: "1603377_1",
      },
      lastHeartbeat: {
        N: "1693847128621",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "CassCounty",
      },
      coef: {
        N: "-0.02",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-0.013883706629276276",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-0.01",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "-10",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1664797102220",
      },
      txid: {
        S: "1631197_1",
      },
      lastHeartbeat: {
        N: "1686102914405",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Freezer",
      },
      clientId: {
        S: "Auburn",
      },
      coef: {
        N: "10",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [],
      },
      gateway: {
        S: "auburn",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "77.1656723022461",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "35",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "34.6",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Microbiology",
      },
      modifiedAt: {
        N: "1689794753820",
      },
      txid: {
        S: "12674059_1",
      },
      lastHeartbeat: {
        N: "1693847165677",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. #5 TOP",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "94.89662170410156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "35.6",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-35",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1669135445132",
      },
      txid: {
        S: "13881821_1",
      },
      lastHeartbeat: {
        N: "1669133845235",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Out of Service-In 06 Mechanical Room",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-20.308624267578125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "10",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "50",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "IT",
      },
      modifiedAt: {
        N: "1671650482715",
      },
      txid: {
        S: "2726333_0",
      },
      lastHeartbeat: {
        N: "1693846896327",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1670972265680",
      },
      name: {
        S: "Server Room 1st Floor Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1b63c0db-0b57-4422-ba43-7ec701356b8f",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "77.88199615478516",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "89",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692196512167",
      },
      txid: {
        S: "2726359_0",
      },
      lastHeartbeat: {
        N: "1693847080358",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692196030623",
      },
      name: {
        S: "ER Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "72.80599975585938",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "78",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "33.5",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1689097365892",
      },
      txid: {
        S: "2463093_1",
      },
      lastHeartbeat: {
        N: "1693847047696",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "BD Incubator",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "93.84797668457031",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "36.5",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-32",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Perry Clinic",
      },
      modifiedAt: {
        N: "1666635213722",
      },
      txid: {
        S: "14078758_1",
      },
      lastHeartbeat: {
        N: "1693846950324",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab. Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a7c87bf8-345a-4b54-9929-6a0334272c75",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "3.5403575897216797",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-7",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "68",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1684370401522",
      },
      txid: {
        S: "12935532_0",
      },
      lastHeartbeat: {
        N: "1693846924251",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Temperature",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "78ddd572-6cfb-4e8a-8d33-1f9f75c2effe",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "73.27400207519531",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "77",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12151470_1",
      },
      lastHeartbeat: {
        N: "1693847156678",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Walk In Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.3328990936279297",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "10",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "3027268_0",
      },
      lastHeartbeat: {
        N: "1693847152417",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Server Room Ambient",
      },
      clientId: {
        S: "HealthCare",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f0d13292-1cf2-4ef3-abc5-24c7bc0046d8",
          },
          {
            S: "",
          },
        ],
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "73.4429931640625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "80",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.8",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Metals Laboratory",
      },
      modifiedAt: {
        N: "1691098263003",
      },
      txid: {
        S: "12674140_1",
      },
      lastHeartbeat: {
        N: "1693846882569",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 10",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.140830993652344",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.8",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      rangeMin: {
        N: "31",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Warehouse",
      },
      modifiedAt: {
        N: "1668701715926",
      },
      txid: {
        S: "1832850_1",
      },
      lastHeartbeat: {
        N: "1693846987976",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Old Cooler ( East Cooler ) ",
      },
      clientId: {
        S: "VistarKC",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      gateway: {
        S: "VistarKC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "33.85712814331055",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "38",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      rangeMin: {
        N: "-22",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Warehouse",
      },
      modifiedAt: {
        N: "1647475200000",
      },
      txid: {
        S: "2585488_1",
      },
      lastHeartbeat: {
        N: "1693846948431",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Old Freezer ( East Freezer)",
      },
      clientId: {
        S: "VistarKC",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      gateway: {
        S: "VistarKC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-9.58182144165039",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "1.8",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "General Storage",
      },
      modifiedAt: {
        N: "1689792226336",
      },
      txid: {
        S: "12673884_1",
      },
      lastHeartbeat: {
        N: "1693846925488",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. #14",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.93959426879883",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "5.8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-36",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Panora Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "14078953_1",
      },
      lastHeartbeat: {
        N: "1693847074268",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab. Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d84c873e-4901-41cd-afe1-12564c092463",
          },
        ],
      },
      gateway: {
        S: "DallasCountyPanora",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-13.603477478027344",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1684449714753",
      },
      txid: {
        S: "1751812_0",
      },
      lastHeartbeat: {
        N: "1693846961603",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Temperature",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "65.552001953125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "34.8",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Microbiology",
      },
      modifiedAt: {
        N: "1689794773087",
      },
      txid: {
        S: "12674177_1",
      },
      lastHeartbeat: {
        N: "1693846929264",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. # 5 BOTTOM",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "95.09657287597656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "35.8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "DCH Family Center",
      },
      modifiedAt: {
        N: "1692909761399",
      },
      txid: {
        S: "13467009_1",
      },
      lastHeartbeat: {
        N: "1693847146410",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1688269469191",
      },
      name: {
        S: "Lab Refrigerator",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f67c72fb-5432-4b5c-af4d-040f3e475552",
          },
        ],
      },
      gateway: {
        S: "DallasCountyDCHFamily",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.36760711669922",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "4bdee3e4-9a2f-4b03-bd92-29d1e02ce2f7",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147173_1",
      },
      lastHeartbeat: {
        N: "1693846869981",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Hazardous Fridge",
      },
      clientId: {
        S: "OlatheMedical",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "6aa83788-0d07-4da7-871e-4f4754adea7e",
          },
        ],
      },
      gateway: {
        S: "OlatheMedical",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "36.73219680786133",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-40",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261606_1",
      },
      lastHeartbeat: {
        N: "1693846916777",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Blood Bank Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-22.105934143066406",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-18.1",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "91f3f8a8-9cf1-4103-99df-807461acd57c",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Admin Bldg",
      },
      modifiedAt: {
        N: "1669060614287",
      },
      txid: {
        S: "1739807_1",
      },
      lastHeartbeat: {
        N: "1693846931976",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Server Room Humidity",
      },
      clientId: {
        S: "Ellsworth",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "91f3f8a8-9cf1-4103-99df-807461acd57c",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "50.5462760925293",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "65",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Perry Clinic",
      },
      modifiedAt: {
        N: "1689793970549",
      },
      txid: {
        S: "14078754_1",
      },
      lastHeartbeat: {
        N: "1693847065438",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab. Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a7c87bf8-345a-4b54-9929-6a0334272c75",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.92510986328125",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "9",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693403370540",
      },
      txid: {
        S: "4128602_1",
      },
      lastHeartbeat: {
        N: "1693846978301",
      },
      createdAt: {
        N: "1693403370540",
      },
      name: {
        S: "IV Room Humidity",
      },
      clientId: {
        S: "AuburnLTC",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      heartbeat: {
        N: "51.230873107910156",
      },
      rangeMax: {
        N: "70",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12856415_1",
      },
      lastHeartbeat: {
        N: "1693847059336",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "HPDX Right Ref.",
      },
      clientId: {
        S: "Heartland",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      gateway: {
        S: "Heartland",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.92403030395508",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "FMS Clinic",
      },
      modifiedAt: {
        N: "1692719042512",
      },
      txid: {
        S: "2726718_0",
      },
      lastHeartbeat: {
        N: "1693847146644",
      },
      createdAt: {
        N: "1692197084491",
      },
      name: {
        S: "FMS Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "71.65399169921875",
      },
      rangeMax: {
        N: "77",
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692719220912",
      },
      txid: {
        S: "4128172_1",
      },
      lastHeartbeat: {
        N: "1693846883427",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692155396884",
      },
      name: {
        S: "Hazardous Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "48.35131072998047",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "90",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Emergency",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261645_1",
      },
      lastHeartbeat: {
        N: "1693846995617",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Fluid Warmer",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "9a738db6-7f30-4df1-98e1-075713ba6437",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "103.95319366455078",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "105",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692640599179",
      },
      txid: {
        S: "2726696_1",
      },
      lastHeartbeat: {
        N: "1693847051230",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692640599179",
      },
      name: {
        S: "Ante Room Humidity",
      },
      clientId: {
        S: "AuburnOlathe",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      heartbeat: {
        N: "50.2894287109375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8592851b-b340-4dce-ac72-e9a841facdfa",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1689014477074",
      },
      txid: {
        S: "9147177_1",
      },
      lastHeartbeat: {
        N: "1688714956765",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pyxis Fridge",
      },
      clientId: {
        S: "Hamburg",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "ae9d3875-2f57-4ce3-be39-295c20a67764",
          },
        ],
      },
      gateway: {
        S: "Hamburg",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "39.623634338378906",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-0.1",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1691207367903",
      },
      txid: {
        S: "13019171_0",
      },
      lastHeartbeat: {
        N: "1693847146517",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Pressure",
      },
      positive: {
        BOOL: false,
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "-0.005",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-0.03728332102298737",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-0.025",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13260986_1",
      },
      lastHeartbeat: {
        N: "1693846921537",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Chem Cardinal Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e2c7c4df-cd94-4952-b2cb-0faa97fee545",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "41.11920166015625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "852e3593-ced4-492b-b754-0a14c36bc3fd",
          },
        ],
      },
      rangeMin: {
        N: "35",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Hospital",
      },
      modifiedAt: {
        N: "1685718026735",
      },
      txid: {
        S: "9147181_1",
      },
      lastHeartbeat: {
        N: "1693847089617",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "OPC Fridge",
      },
      clientId: {
        S: "Loring",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7f019902-54dd-414e-b688-6e99472b70d6",
          },
        ],
      },
      gateway: {
        S: "Loring",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "42.01178741455078",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "0.02",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692656776717",
      },
      txid: {
        S: "1603377_0",
      },
      lastHeartbeat: {
        N: "1693847128621",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Pressure",
      },
      positive: {
        BOOL: false,
      },
      clientId: {
        S: "CassCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      gateway: {
        S: "CassCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.1113893985748291",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.15",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "1",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Perry Clinic",
      },
      modifiedAt: {
        N: "1668544984661",
      },
      txid: {
        S: "13881159_1",
      },
      lastHeartbeat: {
        N: "1668531519043",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Spare in 06 Mech. Rm",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a7c87bf8-345a-4b54-9929-6a0334272c75",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "54.9603271484375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "9",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      rangeMin: {
        N: "31",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Warehouse",
      },
      modifiedAt: {
        N: "1647475200000",
      },
      txid: {
        S: "2585487_1",
      },
      lastHeartbeat: {
        N: "1693847035648",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "New Dollar Tree Cooler ( West Cooler )",
      },
      clientId: {
        S: "VistarKC",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1a2ee041-36b6-48b0-9fa1-be1f0c5360d7",
          },
        ],
      },
      gateway: {
        S: "VistarKC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "36.11613845825195",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "38",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "MCC Nursing",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1530318_1",
      },
      lastHeartbeat: {
        N: "1693847038894",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "MCC Med Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "c337090b-756d-47d2-81d7-cdef35bb2da0",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "41.002197265625",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "40",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1689792792291",
      },
      txid: {
        S: "9147185_1",
      },
      lastHeartbeat: {
        N: "1693847122027",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Air Probe Refrigerator",
      },
      clientId: {
        S: "HealthCare",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "44.56907272338867",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "50",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692719018265",
      },
      txid: {
        S: "2726691_0",
      },
      lastHeartbeat: {
        N: "1693846990732",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692195240382",
      },
      name: {
        S: "Nurse Station Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "73.12999725341797",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "77",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-35",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1680865593535",
      },
      txid: {
        S: "10582980_1",
      },
      lastHeartbeat: {
        N: "1693847141218",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Freezer #1",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a9b257b-c422-492a-bc39-6d2f4e7d4e96",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-3.7707138061523438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-12",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "-25",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "2463108_1",
      },
      lastHeartbeat: {
        N: "1693847129033",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Chem TRUE Freezer",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "a178be7f-402f-4f39-8e9c-fe0519bb0b89",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-3.0312538146972656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "-9",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-0.5",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Panora Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "14078947_1",
      },
      lastHeartbeat: {
        N: "1693846922074",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab. Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d84c873e-4901-41cd-afe1-12564c092463",
          },
        ],
      },
      gateway: {
        S: "DallasCountyPanora",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "30.88384437561035",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935578_0",
      },
      lastHeartbeat: {
        N: "1693846877929",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Temperature",
      },
      clientId: {
        S: "CassCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      gateway: {
        S: "CassCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "66.52400207519531",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "72",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      rangeMin: {
        N: "-30",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1687465709698",
      },
      txid: {
        S: "13467025_1",
      },
      lastHeartbeat: {
        N: "1693846975346",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "HPDX -20 Freezer",
      },
      clientId: {
        S: "Heartland",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      gateway: {
        S: "Heartland",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "76.47732543945312",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "-15",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261589_1",
      },
      lastHeartbeat: {
        N: "1693846871129",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Dietary Fridge #3",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7366ec78-85ed-4fc3-8789-41099be167e3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "33.307151794433594",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13260250_1",
      },
      lastHeartbeat: {
        N: "1693846933207",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "78ddd572-6cfb-4e8a-8d33-1f9f75c2effe",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.613853454589844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "0.7",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Instrument Lab",
      },
      modifiedAt: {
        N: "1689798513129",
      },
      txid: {
        S: "12674156_1",
      },
      lastHeartbeat: {
        N: "1693847108042",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 11",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "36.50016403198242",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "4.7",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7cf8b44f-efa4-4cd3-8b0d-1708610a41e7",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1667573054731",
      },
      txid: {
        S: "13381330_1",
      },
      lastHeartbeat: {
        N: "1693846946829",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "RHC Samples #1 Fridge ",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7cf8b44f-efa4-4cd3-8b0d-1708610a41e7",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "42.58356857299805",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "32",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "16324117_1",
      },
      lastHeartbeat: {
        N: "1693847013941",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Retail Cooler",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "f7e07858-dc66-4976-9e21-5ddd8b89876a",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.191566467285156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "40",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Hospital Nursing",
      },
      modifiedAt: {
        N: "1685655055380",
      },
      txid: {
        S: "10582964_1",
      },
      lastHeartbeat: {
        N: "1693846943674",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "ER Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "791a8c93-affb-4c2f-8eec-b76ed7b3dc2d",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "38.53252410888672",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1671547114625",
      },
      txid: {
        S: "1603003_0",
      },
      lastHeartbeat: {
        N: "1693847150947",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "DrVince",
      },
      coef: {
        N: "-0.0564713",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.0473720164358139",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.1",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "0",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Metals Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "2820392_1",
      },
      lastHeartbeat: {
        N: "1693846942964",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Metals Block",
      },
      clientId: {
        S: "OlatheLab",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      heartbeat: {
        N: "73.14176940917969",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "150",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692640624732",
      },
      txid: {
        S: "2726696_0",
      },
      lastHeartbeat: {
        N: "1693847051230",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692640624732",
      },
      name: {
        S: "Ante Room Temperature",
      },
      clientId: {
        S: "AuburnOlathe",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      heartbeat: {
        N: "70.14199829101562",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "74",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "30",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147146_1",
      },
      lastHeartbeat: {
        N: "1693847018229",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "3 Door Fridge",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "32.71746063232422",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "45",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229792608",
      },
      txid: {
        S: "3276634_1",
      },
      lastHeartbeat: {
        N: "1693847078364",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "DTR Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "42.814979553222656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "34",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12856434_1",
      },
      lastHeartbeat: {
        N: "1693846930338",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Double Door Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "399ee540-357c-4a2a-bc4d-b8b80ff5d135",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "36.7373046875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Nursing",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13260990_1",
      },
      lastHeartbeat: {
        N: "1693847111886",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Med Floor Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "4b7aa352-fc8b-4414-a681-07a6896d608e",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.004364013671875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1684449737502",
      },
      txid: {
        S: "1752401_0",
      },
      lastHeartbeat: {
        N: "1693847026763",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Temperature",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "66.41600036621094",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "23",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "FMS Clinic",
      },
      modifiedAt: {
        N: "1693481635461",
      },
      txid: {
        S: "2549766_1",
      },
      lastHeartbeat: {
        N: "1693846938697",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692214888772",
      },
      name: {
        S: "FMS Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "23.45148468017578",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692640571328",
      },
      txid: {
        S: "2726086_1",
      },
      lastHeartbeat: {
        N: "1693847066518",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692640571328",
      },
      name: {
        S: "IV Room Humidity",
      },
      clientId: {
        S: "AuburnOlathe",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      heartbeat: {
        N: "52.04800033569336",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1688020876126",
      },
      txid: {
        S: "3277004_1",
      },
      lastHeartbeat: {
        N: "1693847127098",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Neg. Room Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "47.196128845214844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Clay Clinic",
      },
      modifiedAt: {
        N: "1686183570985",
      },
      txid: {
        S: "13261586_1",
      },
      lastHeartbeat: {
        N: "1693847144403",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clay Center Clinic Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "228614ec-377b-4feb-bf05-8d3ce1dcf9c1",
          },
        ],
      },
      gateway: {
        S: "AuroraClay",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "44.51897430419922",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "4bdee3e4-9a2f-4b03-bd92-29d1e02ce2f7",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "9147430_1",
      },
      lastHeartbeat: {
        N: "1693847155926",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Non-Hazardous Fridge",
      },
      clientId: {
        S: "OlatheMedical",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "6aa83788-0d07-4da7-871e-4f4754adea7e",
          },
        ],
      },
      gateway: {
        S: "OlatheMedical",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "34.861167907714844",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12151590_1",
      },
      lastHeartbeat: {
        N: "1693847126889",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Chemo Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "58cf5dee-89a6-433c-8d08-079405614bc5",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.54157638549805",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "35.1",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Microbiology",
      },
      modifiedAt: {
        N: "1689803418102",
      },
      txid: {
        S: "12674144_1",
      },
      lastHeartbeat: {
        N: "1693846934837",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "INC. # 19 TOP",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "95.98042297363281",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "36.1",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "104.2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Water Laboratory",
      },
      modifiedAt: {
        N: "1689803977036",
      },
      txid: {
        S: "12674209_1",
      },
      lastHeartbeat: {
        N: "1693847163949",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Oven",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7c9eac15-2053-4c9d-9db0-bc6c2331f541",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "221.62924194335938",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "106.2",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "621054d0-968f-4817-84be-3e7ced3ac204",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1680665306115",
      },
      txid: {
        S: "6474131_1",
      },
      lastHeartbeat: {
        N: "1693846690163",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Vaccine Fridge #1 Break Room ",
      },
      clientId: {
        S: "Summit",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "d551eadf-78d7-4076-a53e-7845b7188815",
          },
        ],
      },
      gateway: {
        S: "Summit",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.07341384887695",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692158463773",
      },
      txid: {
        S: "4128172_0",
      },
      lastHeartbeat: {
        N: "1693846883427",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692155330192",
      },
      name: {
        S: "Hazardous Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "72.27459716796875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "73",
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692719028652",
      },
      txid: {
        S: "2726691_1",
      },
      lastHeartbeat: {
        N: "1693846990732",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692195267079",
      },
      name: {
        S: "Nurse Station Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "43.252479553222656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Clinic",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261441_1",
      },
      lastHeartbeat: {
        N: "1693846957385",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clinic Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "94e06e87-ecd1-4cf5-adb2-7d933915e3da",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.05805206298828",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "7.8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "0",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Water Laboratory",
      },
      modifiedAt: {
        N: "1689803991505",
      },
      txid: {
        S: "13260561_1",
      },
      lastHeartbeat: {
        N: "1693846908672",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "TKN Block",
      },
      clientId: {
        S: "OlatheLab",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "69.19393920898438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "400",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Surgery",
      },
      modifiedAt: {
        N: "1678133403341",
      },
      txid: {
        S: "13261582_1",
      },
      lastHeartbeat: {
        N: "1693846937208",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Surgery Med Fridge",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05bf6728-b334-425f-9586-39a762246167",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "42.423500061035156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "90062bca-1182-49b5-9b78-74d7a6135746",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13190801_1",
      },
      lastHeartbeat: {
        N: "1693847089702",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Negative Room Humidity",
      },
      clientId: {
        S: "CassCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "16fe6e20-91a7-4d18-a450-436c0b87e8d3",
          },
        ],
      },
      gateway: {
        S: "CassCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "66.76385498046875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Nursing",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13261649_1",
      },
      lastHeartbeat: {
        N: "1693847164118",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Nursing Refrigerator",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a94cbba-b4a1-4ec0-9c99-8805e97f691a",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.897239685058594",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "-21",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692535937221",
      },
      txid: {
        S: "12151661_1",
      },
      lastHeartbeat: {
        N: "1693846962102",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Freezer",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "58cf5dee-89a6-433c-8d08-079405614bc5",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-13.95583724975586",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "9",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1684251684541",
      },
      txid: {
        S: "1603003_1",
      },
      lastHeartbeat: {
        N: "1693847150947",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clean Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "DrVince",
      },
      coef: {
        N: "-0.12000058",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.15035813148109436",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.2",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "852e3593-ced4-492b-b754-0a14c36bc3fd",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Hospital",
      },
      modifiedAt: {
        N: "1685718041935",
      },
      txid: {
        S: "9147426_1",
      },
      lastHeartbeat: {
        N: "1693847135745",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Fridge",
      },
      clientId: {
        S: "Loring",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7f019902-54dd-414e-b688-6e99472b70d6",
          },
        ],
      },
      gateway: {
        S: "Loring",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.28926467895508",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Surgery",
      },
      modifiedAt: {
        N: "1678133366504",
      },
      txid: {
        S: "13262114_1",
      },
      lastHeartbeat: {
        N: "1693847015479",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "PACU Fridge",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2637543f-dd69-4206-a312-e70b6be0ca14",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.8509407043457",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693499015113",
      },
      txid: {
        S: "1603183_1",
      },
      lastHeartbeat: {
        N: "1693847141589",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1693420648318",
      },
      name: {
        S: "IV Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "AuburnLTC",
      },
      coef: {
        N: "-0.09",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      heartbeat: {
        N: "0.07265085339546204",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.1",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229656036",
      },
      txid: {
        S: "2348241_1",
      },
      lastHeartbeat: {
        N: "1693847127597",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "40.24214553833008",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "14",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229712554",
      },
      txid: {
        S: "3277006_0",
      },
      lastHeartbeat: {
        N: "1693847147872",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clean Room Temperature ",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "68.01649475097656",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "4bdee3e4-9a2f-4b03-bd92-29d1e02ce2f7",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1631200_1",
      },
      lastHeartbeat: {
        N: "1693847148069",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Clinical Trial Fridge",
      },
      clientId: {
        S: "OlatheMedical",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "6aa83788-0d07-4da7-871e-4f4754adea7e",
          },
        ],
      },
      gateway: {
        S: "OlatheMedical",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "39.81671905517578",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "IT Server Room",
      },
      modifiedAt: {
        N: "1692716059598",
      },
      txid: {
        S: "2287018_1",
      },
      lastHeartbeat: {
        N: "1693846979023",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Server Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "9e250599-b3a5-402a-be73-2cd75df0493b",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "44.84303665161133",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "65",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "15",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1672143519091",
      },
      txid: {
        S: "2348245_1",
      },
      lastHeartbeat: {
        N: "1693847168013",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Phleb Room Hum.",
      },
      clientId: {
        S: "SmithCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "59.507896423339844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "67",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "91f3f8a8-9cf1-4103-99df-807461acd57c",
          },
        ],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Admin Bldg",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1739807_0",
      },
      lastHeartbeat: {
        N: "1693846931976",
      },
      alarmType: {
        S: "timeout",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Server Room Temperature",
      },
      clientId: {
        S: "Ellsworth",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "91f3f8a8-9cf1-4103-99df-807461acd57c",
          },
        ],
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "68.57600402832031",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "75",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1739889_0",
      },
      lastHeartbeat: {
        N: "1693847089649",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Main Pharmacy Temperature",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "58cf5dee-89a6-433c-8d08-079405614bc5",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "73.00399780273438",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "25",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "65",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1666970163576",
      },
      txid: {
        S: "12935600_0",
      },
      lastHeartbeat: {
        N: "1693846933779",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Temperature",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "73.43600463867188",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "78",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "0.02",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1685481561384",
      },
      txid: {
        S: "1603004_0",
      },
      lastHeartbeat: {
        N: "1693847163966",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0.015",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "0358d888-e061-464e-bba2-389cc778df15",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.023763983845710754",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.1",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229773876",
      },
      txid: {
        S: "3276962_1",
      },
      lastHeartbeat: {
        N: "1693847142221",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      heartbeat: {
        N: "39.81333923339844",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      rangeMin: {
        N: "-20",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Dietary",
      },
      modifiedAt: {
        N: "1692050946758",
      },
      txid: {
        S: "12674075_1",
      },
      lastHeartbeat: {
        N: "1693846875878",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1670435162883",
      },
      name: {
        S: "I.C. Freezer",
      },
      clientId: {
        S: "Ellsworth",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "37be49a7-7e7c-4d93-a4a7-4b1edf9ca640",
          },
        ],
      },
      gateway: {
        S: "Ellsworth",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "-6.981853485107422",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "7",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935600_1",
      },
      lastHeartbeat: {
        N: "1693846933779",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Humidity",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "50.2894287109375",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1833018_1",
      },
      lastHeartbeat: {
        N: "1693847030924",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Hazardous Fridge",
      },
      clientId: {
        S: "Aurora",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "43.49922561645508",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "29",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Office",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "6556404_1",
      },
      lastHeartbeat: {
        N: "1693846941370",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Glycol Probe Refrigerator",
      },
      clientId: {
        S: "HealthCare",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "HealthCareSolutions",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "32.41709518432617",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "37",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "2.2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Material Storage",
      },
      modifiedAt: {
        N: "1689798414777",
      },
      txid: {
        S: "12674173_1",
      },
      lastHeartbeat: {
        N: "1693847141187",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "REF. # 16",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.925315856933594",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "6.2",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "844af926-7114-4031-89cc-4593664d6560",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "16075177_1",
      },
      lastHeartbeat: {
        N: "1693846899218",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Louise",
      },
      clientId: {
        S: "MARC",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "b98650d4-cb34-4d21-a6a6-e63613d612d6",
          },
        ],
      },
      gateway: {
        S: "MARC",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.82045364379883",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      rangeMin: {
        N: "2",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "13467021_1",
      },
      lastHeartbeat: {
        N: "1693846875232",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "HPDX Left Ref.",
      },
      clientId: {
        S: "Heartland",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "e332faf0-f1cf-4bfc-8741-c4e2361b2073",
          },
        ],
      },
      gateway: {
        S: "Heartland",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "37.712013244628906",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1685481551581",
      },
      txid: {
        S: "1752144_1",
      },
      lastHeartbeat: {
        N: "1693846895658",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Humidity",
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "05158adf-f73a-4353-927b-8df032b59ec3",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "63.55702209472656",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      rangeMin: {
        N: "0.025",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692641537144",
      },
      txid: {
        S: "1603415_0",
      },
      lastHeartbeat: {
        N: "1693847151259",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692395442410",
      },
      name: {
        S: "Positive IV Room",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "AuburnOlathe",
      },
      coef: {
        N: "-0.065",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      heartbeat: {
        N: "0.14487749099731445",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.2",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229783131",
      },
      txid: {
        S: "3276954_1",
      },
      lastHeartbeat: {
        N: "1693846868657",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Storage Humidity",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "35.90220260620117",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "60",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693403349912",
      },
      txid: {
        S: "4128602_0",
      },
      lastHeartbeat: {
        N: "1693846978301",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1693403349912",
      },
      name: {
        S: "IV Room Temperature",
      },
      clientId: {
        S: "AuburnLTC",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      heartbeat: {
        N: "67.05528259277344",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "80",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692795990769",
      },
      txid: {
        S: "2585529_1",
      },
      lastHeartbeat: {
        N: "1693847130658",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692155203652",
      },
      name: {
        S: "Pharmacy Front Refrigerator",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "96d9c5bd-e675-4d90-b0c0-5139b9eb0d81",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "37.3282585144043",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9a738db6-7f30-4df1-98e1-075713ba6437",
          },
        ],
      },
      rangeMin: {
        N: "70",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Emergency",
      },
      modifiedAt: {
        N: "1689684592940",
      },
      txid: {
        S: "13260974_1",
      },
      lastHeartbeat: {
        N: "1693847140552",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "BW #6",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "9a738db6-7f30-4df1-98e1-075713ba6437",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "128.4026641845703",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "130",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "IT Server Room",
      },
      modifiedAt: {
        N: "1692798151814",
      },
      txid: {
        S: "2287018_0",
      },
      lastHeartbeat: {
        N: "1693846979023",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1647475200000",
      },
      name: {
        S: "Server Room Temperature",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "505457b5-e352-4418-9e9b-e631a3144172",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "66.94955444335938",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "72",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "8d8b07fe-0351-45e9-8c05-fa95c419b62e",
          },
        ],
      },
      rangeMin: {
        N: "0.02",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Cleanroom Suite",
      },
      modifiedAt: {
        N: "1687405977323",
      },
      txid: {
        S: "1603004_1",
      },
      lastHeartbeat: {
        N: "1693847163966",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Aurora Positive Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "Aurora",
      },
      coef: {
        N: "-0.062",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "0358d888-e061-464e-bba2-389cc778df15",
          },
        ],
      },
      gateway: {
        S: "AuroraMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.0372228239774704",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "0.1",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12151653_1",
      },
      lastHeartbeat: {
        N: "1693846957300",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "58cf5dee-89a6-433c-8d08-079405614bc5",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: true,
      },
      heartbeat: {
        N: "41.9007682800293",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      rangeMin: {
        N: "64",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1692640546831",
      },
      txid: {
        S: "2726086_0",
      },
      lastHeartbeat: {
        N: "1693847066518",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692640546831",
      },
      name: {
        S: "IV Room Temperature",
      },
      clientId: {
        S: "AuburnOlathe",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnOlathe",
      },
      heartbeat: {
        N: "69.11599731445312",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "74",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "1",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12151709_1",
      },
      lastHeartbeat: {
        N: "1693847137135",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Lab Fridge #2",
      },
      clientId: {
        S: "DallasCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "2a9b257b-c422-492a-bc39-6d2f4e7d4e96",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "42.00859832763672",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "8",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "7b569358-16d6-499b-9475-12f27443604b",
          },
        ],
      },
      rangeMin: {
        N: "10",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1692718961728",
      },
      txid: {
        S: "2726097_1",
      },
      lastHeartbeat: {
        N: "1693847066278",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1692225690085",
      },
      name: {
        S: "OR Room Humidity",
      },
      clientId: {
        S: "Lexington",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1999ab49-59f8-46ed-a3cb-0b23f800e9e6",
          },
        ],
      },
      gateway: {
        S: "Lexington",
      },
      heartbeat: {
        N: "56.29267120361328",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "68",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "cc117220-cc13-4a5d-91c1-e608b47bb2f9",
          },
        ],
      },
      rangeMin: {
        N: "34",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "OR",
      },
      modifiedAt: {
        N: "1684959469573",
      },
      txid: {
        S: "12151598_1",
      },
      lastHeartbeat: {
        N: "1693846982785",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "OR Meds Fridge",
      },
      clientId: {
        S: "DallasCounty",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7a88b586-bf3e-44cf-a344-7e4fb5e9fbe0",
          },
        ],
      },
      gateway: {
        S: "DallasCountyMain",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "33.44145965576172",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "42",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "2232db4a-e315-4d44-b91b-b24eb48d738f",
          },
        ],
      },
      rangeMin: {
        N: "50",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Server Room",
      },
      modifiedAt: {
        N: "1692993090682",
      },
      txid: {
        S: "4303967_0",
      },
      lastHeartbeat: {
        N: "1693847159161",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ambient Temp.",
      },
      clientId: {
        S: "OlatheLab",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "95db3b88-58cb-48c9-a19d-42d92d28a71c",
          },
        ],
      },
      gateway: {
        S: "OlatheLab",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "67.45999908447266",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "70",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      rangeMin: {
        N: "20",
      },
      unit: {
        S: "%",
      },
      location: {
        S: "Main Floor",
      },
      modifiedAt: {
        N: "1693403400707",
      },
      txid: {
        S: "3849945_1",
      },
      lastHeartbeat: {
        N: "1693847111431",
      },
      createdAt: {
        N: "1693403400707",
      },
      name: {
        S: "Ante Room Humidity",
      },
      clientId: {
        S: "AuburnLTC",
      },
      deleted: {
        BOOL: false,
      },
      gateway: {
        S: "AuburnWichita",
      },
      heartbeat: {
        N: "54.93447494506836",
      },
      rangeMax: {
        N: "70",
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "0.05",
      },
      unit: {
        S: "WC",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1678131985091",
      },
      txid: {
        S: "13019162_0",
      },
      lastHeartbeat: {
        N: "1693847144106",
      },
      alarmType: {
        S: "outRange",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Positive Room Pressure",
      },
      positive: {
        BOOL: true,
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "dc634839-17d9-49ef-a360-d596a2e43f98",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "0.1081298291683197",
      },
      alarmOn: {
        BOOL: true,
      },
      rangeMax: {
        N: "0.08",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "0d3e7c02-51dc-48e6-82ac-6012c8a364b6",
          },
        ],
      },
      rangeMin: {
        N: "14",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Pharmacy",
      },
      modifiedAt: {
        N: "1681229693556",
      },
      txid: {
        S: "3276962_0",
      },
      lastHeartbeat: {
        N: "1693847142134",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ante Room Temperature",
      },
      clientId: {
        S: "DrVince",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "695664e8-e769-458b-a539-808bbc4d0758",
          },
        ],
      },
      gateway: {
        S: "DrVince",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "68.6893310546875",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "24.5",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "814bca9e-f163-417c-81e3-6a81fcded637",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main",
      },
      modifiedAt: {
        N: "1670044545667",
      },
      txid: {
        S: "9147150_1",
      },
      lastHeartbeat: {
        N: "1688610487103",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Pharmacy Fridge",
      },
      clientId: {
        S: "Hamburg",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "ae9d3875-2f57-4ce3-be39-295c20a67764",
          },
        ],
      },
      gateway: {
        S: "Hamburg",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "71.13406372070312",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "852e3593-ced4-492b-b754-0a14c36bc3fd",
          },
        ],
      },
      rangeMin: {
        N: "36",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Main Hospital",
      },
      modifiedAt: {
        N: "1686740138130",
      },
      txid: {
        S: "9147305_1",
      },
      lastHeartbeat: {
        N: "1693847142489",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "ER Fridge",
      },
      clientId: {
        S: "Loring",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "7f019902-54dd-414e-b688-6e99472b70d6",
          },
        ],
      },
      gateway: {
        S: "Loring",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "39.67438888549805",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "46",
      },
      onHold: {
        BOOL: false,
      },
    },
    {
      escalationsTimeout: {
        L: [],
      },
      rangeMin: {
        N: "60",
      },
      unit: {
        S: "F",
      },
      location: {
        S: "Kitchen",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "1631197_0",
      },
      lastHeartbeat: {
        N: "1686102914405",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Ambient",
      },
      clientId: {
        S: "Auburn",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [],
      },
      gateway: {
        S: "auburn",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "77.67500305175781",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "95",
      },
      onHold: {
        BOOL: true,
      },
    },
    {
      escalationsTimeout: {
        L: [
          {
            S: "9fb744ed-6397-4e9d-a63b-7406fe72a052",
          },
        ],
      },
      rangeMin: {
        N: "19",
      },
      unit: {
        S: "C",
      },
      location: {
        S: "Laboratory",
      },
      modifiedAt: {
        N: "1606780800000",
      },
      txid: {
        S: "12935602_0",
      },
      lastHeartbeat: {
        N: "1693847056817",
      },
      alarmType: {
        S: "none",
      },
      createdAt: {
        N: "1606780800000",
      },
      name: {
        S: "Laboratory Temperature",
      },
      clientId: {
        S: "SmithCounty",
      },
      coef: {
        N: "0",
      },
      deleted: {
        BOOL: false,
      },
      escalations: {
        L: [
          {
            S: "1aeedfc4-fb0c-4d2e-b03b-741b315226f3",
          },
        ],
      },
      gateway: {
        S: "SmithCounty",
      },
      hasEscalation: {
        BOOL: false,
      },
      heartbeat: {
        N: "69.15199279785156",
      },
      alarmOn: {
        BOOL: false,
      },
      rangeMax: {
        N: "25",
      },
      onHold: {
        BOOL: false,
      },
    },
  ],
  ScannedCount: 430,
};
