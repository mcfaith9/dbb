import { AppliancePreset, FaqItem, HotlineContact, RequirementItem, ServiceItem } from '../types';

export const CEBU_BARANGAYS = [
  'Apas',
  'Babag',
  'Bacayan',
  'Banilad',
  'Basak Pardo',
  'Basak San Nicolas',
  'Binaliw',
  'Bonbon',
  'Budlaan',
  'Buhisan',
  'Bulacao',
  'Busay',
  'Calamba',
  'Cambinocot',
  'Camputhaw (Kamputhaw)',
  'Capitol Site',
  'Carreta',
  'Cogon Pardo',
  'Cogon Ramos',
  'Day-as',
  'Duljo Fatima',
  'Ermita',
  'Guadalupe',
  'Guba',
  'Hipodromo',
  'Inayawan',
  'Kalubihan',
  'Kalunasan',
  'Kasambagan',
  'Kinasang-an',
  'Labangon',
  'Lahug',
  'Lorega San Miguel',
  'Lusaran',
  'Luz',
  'Mabini',
  'Mabolo',
  'Malubog',
  'Mambaling',
  'Pahina Central',
  'Pahina San Nicolas',
  'Pamutan',
  'Pari-an',
  'Paril',
  'Pasil',
  'Pit-os',
  'Poblacion Pardo',
  'Pulangbato',
  'Pung-ol Sibugay',
  'Punta Princesa',
  'Quiot',
  'Sambag I',
  'Sambag II',
  'San Antonio',
  'San Jose',
  'San Nicolas Proper',
  'San Roque',
  'Santa Cruz',
  'Santo Niño',
  'Sapangdaku',
  'Sawang Calero',
  'Sinsin',
  'Sirao',
  'Suba',
  'Sudlon I',
  'Sudlon II',
  'T. Padilla',
  'Tabunan',
  'Tagba-o',
  'Talamban',
  'Taptap',
  'Tejero',
  'Tinago',
  'Tisa',
  'To-ong',
  'Zapatera',
  // Adjacent Metro Cebu coverage
  'Mandaue City (All Barangays)',
  'Talisay City (All Barangays)',
  'Consolacion',
  'Liloan',
  'Minglanilla',
  'City of Naga',
  'San Fernando'
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'new-meter-connection',
    title: 'New Electric Meter Application',
    category: 'connection',
    badge: 'Most Requested',
    processingTime: '3 – 7 Working Days',
    iconName: 'Zap',
    description: 'Complete liaison assistance for residential and commercial new service connections with Visayan Electric (VECO).',
    highlights: [
      'Document vetting & OBO CFEI processing guide',
      'Assistance with Licensed Master Electrician (RME/PEE)',
      'Service drop wire & post meter pole compliance check',
      'End-to-end follow up until meter energization'
    ]
  },
  {
    id: 'billing-dispute-audit',
    title: 'Billing Inquiry & High Consumption Review',
    category: 'billing',
    badge: 'Bill Audit',
    processingTime: '1 – 2 Working Days',
    iconName: 'ReceiptText',
    description: 'Detailed analysis of unexplained bill surges, estimated reading corrections, and bill breakdown assessment.',
    highlights: [
      'Historical kWh comparison & anomaly detection',
      'Guidance on requesting VECO meter calibration test',
      'Lifeline Rate subsidy qualification assessment',
      'Payment arrangement & installment restructuring assistance'
    ]
  },
  {
    id: 'reconnection-transfer',
    title: 'Fast Reconnection & Meter Transfer',
    category: 'maintenance',
    badge: 'Priority Support',
    processingTime: '24 – 48 Hours',
    iconName: 'RefreshCw',
    description: 'Expedited processing for disconnected electric accounts, meter post relocation, or service upgrades.',
    highlights: [
      'Quick settlement verification and reconnection dispatch',
      'Single-phase to Three-phase capacity upgrading',
      'Transfer of meter during building renovations',
      'Safe temporary disconnection requests'
    ]
  },
  {
    id: 'change-account-name',
    title: 'Change of Account Name & Ownership',
    category: 'connection',
    badge: 'Ownership Transfer',
    processingTime: '2 – 4 Working Days',
    iconName: 'UserCheck',
    description: 'Seamless transfer of the electric billing account name from previous owner, landlord, or deceased relative.',
    highlights: [
      'Title / Lease Contract and Deed of Sale document check',
      'Security bill deposit transfer or refund calculation',
      'Avoidance of inherited unpaid balances',
      'Issuance of official updated VECO account record'
    ]
  },
  {
    id: 'emergency-outage-liaison',
    title: 'Outage & Hazardous Line Reporting',
    category: 'maintenance',
    badge: 'Safety Priority',
    processingTime: 'Immediate Dispatch',
    iconName: 'AlertTriangle',
    description: 'Emergency assistance linking neighborhood brownouts, leaning utility poles, sparking transformers, and fallen wires to emergency dispatchers.',
    highlights: [
      'Priority routing to VECO Emergency Crew',
      'Barangay & BFP fire safety coordination',
      'Feeder trip-off and transformer fault reporting',
      'Post-typhoon restoration status tracking'
    ]
  },
  {
    id: 'solar-net-metering',
    title: 'Solar Net-Metering & Bi-Directional Metering',
    category: 'solar',
    badge: 'Renewable Ready',
    processingTime: '10 – 15 Working Days',
    iconName: 'SunMedium',
    description: 'Technical and administrative liaison for homeowners and businesses installing grid-tied solar panels in Metro Cebu.',
    highlights: [
      'Distribution Impact Study (DIS) preparation',
      'VECO bi-directional meter application',
      'Energy Regulatory Commission (ERC) compliance certificate',
      'Earn monthly bill credits for exported clean energy'
    ]
  }
];

export const DEFAULT_APPLIANCES: AppliancePreset[] = [
  {
    id: 'aircon-inverter-1hp',
    name: '1.0 HP Inverter Air Conditioner',
    category: 'cooling',
    wattage: 800,
    defaultHoursPerDay: 8,
    iconName: 'Wind'
  },
  {
    id: 'aircon-noninverter-075hp',
    name: '0.75 HP Non-Inverter Window Aircon',
    category: 'cooling',
    wattage: 950,
    defaultHoursPerDay: 6,
    iconName: 'Wind'
  },
  {
    id: 'ref-inverter',
    name: 'Inverter Refrigerator (Two-Door)',
    category: 'kitchen',
    wattage: 140,
    defaultHoursPerDay: 24,
    iconName: 'Refrigerator'
  },
  {
    id: 'led-tv',
    name: '50-inch Smart LED TV & Soundbar',
    category: 'entertainment',
    wattage: 110,
    defaultHoursPerDay: 5,
    iconName: 'Tv'
  },
  {
    id: 'washing-machine',
    name: 'Automatic Washing Machine',
    category: 'utility',
    wattage: 450,
    defaultHoursPerDay: 1.5,
    iconName: 'Waves'
  },
  {
    id: 'electric-fan',
    name: 'Stand / Desk Electric Fan (x2)',
    category: 'cooling',
    wattage: 120,
    defaultHoursPerDay: 12,
    iconName: 'Fan'
  },
  {
    id: 'induction-cooker',
    name: 'Induction Cooktop / Rice Cooker',
    category: 'kitchen',
    wattage: 1200,
    defaultHoursPerDay: 1.5,
    iconName: 'Flame'
  },
  {
    id: 'water-heater',
    name: 'Shower Instant Water Heater',
    category: 'utility',
    wattage: 3000,
    defaultHoursPerDay: 0.5,
    iconName: 'Droplets'
  }
];

// Average Cebu residential utility rate parameters (approx ~₱12.35 / kWh)
export const VECO_RATES = {
  effectiveRatePerKwh: 12.35,
  generationShare: 0.54, // ~54%
  transmissionShare: 0.09, // ~9%
  distributionShare: 0.20, // ~20% VECO distribution charge
  systemLossShare: 0.07, // ~7%
  taxesAndUniversalShare: 0.10, // ~10% VAT & Universal charges
  lifelineThresholds: [
    { maxKwh: 20, discountPercent: 1.0 }, // 100% discount on generation/distribution for marginalized
    { maxKwh: 50, discountPercent: 0.5 }, // 50% discount
    { maxKwh: 70, discountPercent: 0.35 }, // 35% discount
    { maxKwh: 100, discountPercent: 0.20 } // 20% discount
  ]
};

export const HOTLINES: HotlineContact[] = [
  {
    id: 'veco-callcenter',
    name: 'Visayan Electric (VECO) 24/7 Customer Care',
    agency: 'Visayan Electric Company',
    number: '(032) 230-8326',
    altNumber: '230-VECO',
    available: '24 Hours / 7 Days a week',
    description: 'Official hotline for billing inquiries, scheduled power interruptions, emergency outage dispatch, and transformer trouble.',
    type: 'veco'
  },
  {
    id: 'dbb-hotline',
    name: 'DBB Customer Assistance Desk',
    agency: 'DBB Utility Liaison Cebu',
    number: '(032) 412-8822',
    altNumber: '0917-882-3221',
    available: 'Mon – Sat: 8:00 AM – 6:00 PM',
    description: 'Direct assistance for new application tracking, CFEI document assistance, bill dispute mediation, and expedited requests.',
    type: 'veco'
  },
  {
    id: 'cebu-disaster',
    name: 'Cebu City Disaster Risk Reduction (CCDRRMO)',
    agency: 'Cebu City Government',
    number: '(032) 255-0055',
    altNumber: '166 / (032) 262-1424',
    available: '24/7 Emergency Operations',
    description: 'For fallen trees on power lines, post-storm clearing, flooded substations, and urgent civic emergencies in Cebu City.',
    type: 'emergency'
  },
  {
    id: 'bfp-cebu',
    name: 'Bureau of Fire Protection (BFP) Cebu City',
    agency: 'BFP Central Visayas',
    number: '(032) 256-0541',
    altNumber: '911 / (032) 256-0544',
    available: '24/7 Immediate Fire Alarm',
    description: 'For electrical fires, transformer explosions, smoking meter bases, and emergency safety cordons.',
    type: 'fire'
  },
  {
    id: 'obo-cebu',
    name: 'Office of the Building Official (OBO)',
    agency: 'Cebu City Hall (8th Floor Executive Bldg)',
    number: '(032) 412-0000',
    altNumber: 'Local 801 / 802',
    available: 'Mon – Fri: 8:00 AM – 5:00 PM',
    description: 'Mandatory agency for issuance of Electrical Wiring Permit and Certificate of Final Electrical Inspection (CFEI).',
    type: 'cityhall'
  }
];

export const CONNECTION_REQUIREMENTS: RequirementItem[] = [
  {
    id: 'cfei-cert',
    title: 'Certificate of Final Electrical Inspection (CFEI)',
    issuer: 'Office of the Building Official (OBO) / City Hall',
    description: 'Mandatory certificate certifying that the building wiring complies with the Philippine Electrical Code (PEC).',
    notes: 'Must be stamped and signed by the City Building Official after site inspection.',
    requiredFor: ['residential', 'commercial']
  },
  {
    id: 'gov-id',
    title: 'Two (2) Valid Government-Issued IDs',
    issuer: 'National / Local Gov (DFA, LTO, PhilHealth, Postal, PhilID)',
    description: 'Clear photocopies and original presentation of valid IDs of the registered applicant.',
    notes: 'If represented by an agent, must provide Notarized Special Power of Attorney (SPA).',
    requiredFor: ['residential', 'commercial', 'tenant']
  },
  {
    id: 'proof-ownership',
    title: 'Proof of Ownership (OCT/TCT or Tax Declaration)',
    issuer: 'Registry of Deeds / City Assessor',
    description: 'Certified True Copy of Transfer Certificate of Title, Deed of Absolute Sale, or updated Real Property Tax receipt.',
    notes: 'For tenants: Notarized Contract of Lease + Owner authorization letter.',
    requiredFor: ['residential', 'commercial']
  },
  {
    id: 'brgy-clearance',
    title: 'Barangay Electric / Construction Clearance',
    issuer: 'Local Barangay Hall of your Cebu Residence',
    description: 'Certificate from the Barangay Captain confirming residence and permitting electrical service entry.',
    notes: 'Usually requires a Community Tax Certificate (Cedula) from the barangay or City Hall.',
    requiredFor: ['residential', 'commercial', 'tenant']
  },
  {
    id: 'electrical-plan',
    title: 'Signed & Sealed Electrical Plan & Wiring Permit',
    issuer: 'Licensed Professional Electrical Engineer (PEE/RME)',
    description: 'One-line electrical diagram, load schedule, and permit signed by a registered electrical professional.',
    notes: 'Required for commercial establishments and residential homes with loads exceeding standard residential limits.',
    requiredFor: ['residential', 'commercial']
  },
  {
    id: 'sec-dti',
    title: 'SEC / DTI Registration & Mayor’s Business Permit',
    issuer: 'DTI / SEC & Cebu City Business Permit Licensing Office (BPLO)',
    description: 'Legal proof of corporate registration, business trade name, and municipal operating license in Cebu.',
    notes: 'Required along with Secretary’s Certificate or Board Resolution authorizing connection.',
    requiredFor: ['commercial']
  },
  {
    id: 'lease-contract',
    title: 'Notarized Contract of Lease & Landlord Authorization',
    issuer: 'Property Owner / Notary Public',
    description: 'Proof of legal tenancy with express written consent from the registered property owner for meter installation.',
    notes: 'Include landlord’s valid ID and previous electric bill reference if existing.',
    requiredFor: ['tenant']
  },
  {
    id: 'meter-base-ready',
    title: 'Service Entrance & Meter Base Standard Compliance',
    issuer: 'Accredited Electrician',
    description: 'Physical installation of 2-inch galvanized iron pipe, entrance cap, grounding rod, and approved meter socket box.',
    notes: 'Height must be between 1.5m to 1.8m from the ground as mandated by VECO standards.',
    requiredFor: ['residential', 'commercial', 'tenant']
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a new VECO meter application take in Cebu City?',
    category: 'application',
    answer: 'Once all documents—specifically your Certificate of Final Electrical Inspection (CFEI) from Cebu City Hall OBO and Barangay Clearance—are complete and your service entrance is physically erected, VECO inspection and meter energization typically takes 3 to 7 working days.'
  },
  {
    id: 'faq-2',
    question: 'What is a CFEI and why is it required before electric energization?',
    category: 'application',
    answer: 'CFEI stands for Certificate of Final Electrical Inspection issued by the Office of the Building Official (OBO) of your city or municipality. By Philippine law and VECO safety regulations, electricity cannot be connected without CFEI to prevent fire hazards, illegal tap connections, and substandard wiring.'
  },
  {
    id: 'faq-3',
    question: 'Why did my electricity bill spike even without buying new appliances?',
    category: 'billing',
    answer: 'Common factors in Metro Cebu include: (1) Warm weather forcing inverter and non-inverter air conditioners and refrigerators to consume 20-40% more electricity to reach cooling setpoints; (2) Fluctuations in the generation charge component influenced by WESM (Wholesale Electricity Spot Market) fuel prices; (3) Ground faults or undetected wire insulation leakages in internal building wiring.'
  },
  {
    id: 'faq-4',
    question: 'What is the Lifeline Rate subsidy and who qualifies in Cebu?',
    category: 'billing',
    answer: 'Under Republic Act 11552, consumers who consume 100 kWh or below per month and are registered 4Ps beneficiaries or certified marginalized end-users can receive up to 20% to 100% discount on generation and distribution charges. DBB can help you file your Lifeline registration requirements.'
  },
  {
    id: 'faq-5',
    question: 'How does DBB help with my electric service concerns?',
    category: 'general',
    answer: 'DBB provides professional, independent liaison, consultation, and customer service assistance for Cebu residents and businesses. We guide you through document requirements, review high bills, arrange certified electrical inspections, follow up on pending VECO meter work orders, and clarify utility procedures.'
  },
  {
    id: 'faq-6',
    question: 'How do I transfer an existing electric bill to my name after buying a property?',
    category: 'technical',
    answer: 'You will need a Change of Account Name application. Submit your notarized Deed of Absolute Sale or Transfer Certificate of Title (TCT), two valid IDs, and settle any pending balances. If there is a previous bill deposit, it can either be transferred or replaced with a new customer deposit based on average monthly consumption.'
  },
  {
    id: 'faq-7',
    question: 'Can I install grid-tied solar panels and sell excess power to VECO in Cebu?',
    category: 'technical',
    answer: 'Yes! Metro Cebu supports the Net-Metering Program for systems up to 100kWp. VECO installs a bi-directional meter that tracks both the electricity you draw from the grid and the excess solar energy you push back, which appears as credits on your monthly billing statement.'
  }
];
