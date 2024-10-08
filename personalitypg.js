const riasecQuestions = [
    { question: "Do you enjoy fixing or repairing things?", category: "Realistic" },
    { question: "Do you like working outdoors?", category: "Realistic" },
    { question: "Are you interested in working with machines or tools?", category: "Realistic" },
    { question: "Do you prefer practical, hands-on tasks?", category: "Realistic" },
    { question: "Do you enjoy building or constructing things?", category: "Realistic" },
    { question: "Do you like working with animals?", category: "Realistic" },
    { question: "Do you prefer physical activity in your work?", category: "Realistic" },
    { question: "Do you enjoy working with electrical equipment?", category: "Realistic" },
    { question: "Do you like solving technical problems?", category: "Realistic" },
    { question: "Are you interested in operating heavy machinery?", category: "Realistic" },
    { question: "Do you enjoy conducting scientific experiments?", category: "Investigative" },
    { question: "Do you like solving mathematical problems?", category: "Investigative" },
    { question: "Are you interested in understanding how things work?", category: "Investigative" },
    { question: "Do you enjoy analyzing data?", category: "Investigative" },
    { question: "Do you like reading scientific or technical journals?", category: "Investigative" },
    { question: "Do you enjoy researching new information?", category: "Investigative" },
    { question: "Are you interested in developing new theories?", category: "Investigative" },
    { question: "Do you like exploring unknown places or ideas?", category: "Investigative" },
    { question: "Do you prefer intellectual challenges?", category: "Investigative" },
    { question: "Do you enjoy working in a laboratory?", category: "Investigative" },
    { question: "Do you enjoy creating art?", category: "Artistic" },
    { question: "Do you like expressing yourself through writing?", category: "Artistic" },
    { question: "Are you interested in performing music or acting?", category: "Artistic" },
    { question: "Do you enjoy designing graphics or websites?", category: "Artistic" },
    { question: "Do you like working on crafts or DIY projects?", category: "Artistic" },
    { question: "Do you prefer unconventional or original activities?", category: "Artistic" },
    { question: "Do you enjoy attending cultural events?", category: "Artistic" },
    { question: "Are you interested in photography or filmmaking?", category: "Artistic" },
    { question: "Do you like working in a visually stimulating environment?", category: "Artistic" },
    { question: "Do you prefer jobs that allow for self-expression?", category: "Artistic" },
    { question: "Do you enjoy helping others?", category: "Social" },
    { question: "Do you like teaching or instructing others?", category: "Social" },
    { question: "Are you interested in counseling or therapy?", category: "Social" },
    { question: "Do you enjoy volunteering for community service?", category: "Social" },
    { question: "Do you prefer jobs that involve social interaction?", category: "Social" },
    { question: "Do you like working in a team?", category: "Social" },
    { question: "Do you enjoy providing care or support?", category: "Social" },
    { question: "Are you interested in human behavior?", category: "Social" },
    { question: "Do you prefer roles that involve communication?", category: "Social" },
    { question: "Do you like mentoring or coaching others?", category: "Social" },
    { question: "Do you enjoy leading or managing projects?", category: "Enterprising" },
    { question: "Do you like persuading or influencing others?", category: "Enterprising" },
    { question: "Are you interested in starting your own business?", category: "Enterprising" },
    { question: "Do you enjoy selling products or services?", category: "Enterprising" },
    { question: "Do you prefer competitive environments?", category: "Enterprising" },
    { question: "Do you like negotiating deals?", category: "Enterprising" },
    { question: "Are you interested in politics or leadership roles?", category: "Enterprising" },
    { question: "Do you enjoy planning or organizing events?", category: "Enterprising" },
    { question: "Do you like making strategic decisions?", category: "Enterprising" },
    { question: "Do you enjoy taking on new challenges?", category: "Enterprising" },
    { question: "Do you prefer structured and organized tasks?", category: "Conventional" },
    { question: "Do you enjoy working with numbers or data?", category: "Conventional" },
    { question: "Are you interested in administrative work?", category: "Conventional" },
    { question: "Do you like following procedures or protocols?", category: "Conventional" },
    { question: "Do you prefer tasks that require attention to detail?", category: "Conventional" },
    { question: "Do you enjoy organizing or categorizing information?", category: "Conventional" },
    { question: "Do you like managing budgets or finances?", category: "Conventional" },
    { question: "Are you interested in maintaining records or files?", category: "Conventional" },
    { question: "Do you prefer a predictable and stable work environment?", category: "Conventional" },
    { question: "Do you like performing routine tasks?", category: "Conventional" }
  ];

const jobdata = [
  {
    "InterestCode": "CSR",
    "Occupation": "Amusement and Recreation Attendants",
    "CodeLevel": 3,
    "ID": 1
  },
  {
    "InterestCode": "RC",
    "Occupation": "Agricultural Equipment Operators",
    "CodeLevel": 2,
    "ID": 2
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Baristas",
    "CodeLevel": 3,
    "ID": 3
  },
  {
    "InterestCode": "RC",
    "Occupation": "Conveyor Operators and Tenders",
    "CodeLevel": 2,
    "ID": 4
  },
  {
    "InterestCode": "RCE",
    "Occupation": "Cooks, Fast Food",
    "CodeLevel": 3,
    "ID": 5
  },
  {
    "InterestCode": "RC",
    "Occupation": "Derrick Operators, Oil and Gas",
    "CodeLevel": 2,
    "ID": 6
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Dining Room and Cafeteria Attendants and Bartender Helpers",
    "CodeLevel": 3,
    "ID": 7
  },
  {
    "InterestCode": "RC",
    "Occupation": "Dishwashers",
    "CodeLevel": 2,
    "ID": 8
  },
  {
    "InterestCode": "RC",
    "Occupation": "Fallers",
    "CodeLevel": 2,
    "ID": 9
  },
  {
    "InterestCode": "RCE",
    "Occupation": "Fast Food and Counter Workers",
    "CodeLevel": 3,
    "ID": 10
  },
  {
    "InterestCode": "RC",
    "Occupation": "Fishing and Hunting Workers",
    "CodeLevel": 2,
    "ID": 11
  },
  {
    "InterestCode": "RC",
    "Occupation": "Food Preparation Workers",
    "CodeLevel": 2,
    "ID": 12
  },
  {
    "InterestCode": "RC",
    "Occupation": "Graders and Sorters, Agricultural Products",
    "CodeLevel": 2,
    "ID": 13
  },
  {
    "InterestCode": "RC",
    "Occupation": "Landscaping and Groundskeeping Workers",
    "CodeLevel": 2,
    "ID": 14
  },
  {
    "InterestCode": "RC",
    "Occupation": "Laundry and Dry-Cleaning Workers",
    "CodeLevel": 2,
    "ID": 15
  },
  {
    "InterestCode": "RC",
    "Occupation": "Maids and Housekeeping Cleaners",
    "CodeLevel": 2,
    "ID": 16
  },
  {
    "InterestCode": "RC",
    "Occupation": "Meat, Poultry, and Fish Cutters and Trimmers",
    "CodeLevel": 2,
    "ID": 17
  },
  {
    "InterestCode": "RC",
    "Occupation": "Plasterers and Stucco Masons",
    "CodeLevel": 2,
    "ID": 18
  },
  {
    "InterestCode": "RC",
    "Occupation": "Septic Tank Servicers and Sewer Pipe Cleaners",
    "CodeLevel": 2,
    "ID": 19
  },
  {
    "InterestCode": "RC",
    "Occupation": "Sewing Machine Operators",
    "CodeLevel": 2,
    "ID": 20
  },
  {
    "InterestCode": "CE",
    "Occupation": "Cargo and Freight Agents",
    "CodeLevel": 2,
    "ID": 21
  },
  {
    "InterestCode": "CE",
    "Occupation": "Cashiers",
    "CodeLevel": 2,
    "ID": 22
  },
  {
    "InterestCode": "CES",
    "Occupation": "Customer Service Representatives",
    "CodeLevel": 3,
    "ID": 23
  },
  {
    "InterestCode": "CRS",
    "Occupation": "Flight Attendants",
    "CodeLevel": 3,
    "ID": 24
  },
  {
    "InterestCode": "CER",
    "Occupation": "Freight Forwarders",
    "CodeLevel": 3,
    "ID": 25
  },
  {
    "InterestCode": "CER",
    "Occupation": "Gambling Dealers",
    "CodeLevel": 3,
    "ID": 26
  },
  {
    "InterestCode": "CSE",
    "Occupation": "Hotel, Motel, and Resort Desk Clerks",
    "CodeLevel": 3,
    "ID": 27
  },
  {
    "InterestCode": "CRS",
    "Occupation": "Locker Room, Coatroom, and Dressing Room Attendants",
    "CodeLevel": 3,
    "ID": 28
  },
  {
    "InterestCode": "CS",
    "Occupation": "Medical Secretaries and Administrative Assistants",
    "CodeLevel": 2,
    "ID": 29
  },
  {
    "InterestCode": "C",
    "Occupation": "Office Clerks, General",
    "CodeLevel": 1,
    "ID": 30
  },
  {
    "InterestCode": "CER",
    "Occupation": "Pharmacy Aides",
    "CodeLevel": 3,
    "ID": 31
  },
  {
    "InterestCode": "CE",
    "Occupation": "Production, Planning, and Expediting Clerks",
    "CodeLevel": 2,
    "ID": 32
  },
  {
    "InterestCode": "CRS",
    "Occupation": "Public Safety Telecommunicators",
    "CodeLevel": 3,
    "ID": 33
  },
  {
    "InterestCode": "CES",
    "Occupation": "Receptionists and Information Clerks",
    "CodeLevel": 3,
    "ID": 34
  },
  {
    "InterestCode": "CER",
    "Occupation": "Retail Loss Prevention Specialists",
    "CodeLevel": 3,
    "ID": 35
  },
  {
    "InterestCode": "CES",
    "Occupation": "Secretaries and Administrative Assistants, Except Legal, Medical, and Executive",
    "CodeLevel": 3,
    "ID": 36
  },
  {
    "InterestCode": "CRE",
    "Occupation": "Stockers and Order Fillers",
    "CodeLevel": 3,
    "ID": 37
  },
  {
    "InterestCode": "CE",
    "Occupation": "Tellers",
    "CodeLevel": 2,
    "ID": 38
  },
  {
    "InterestCode": "CE",
    "Occupation": "Title Examiners, Abstractors, and Searchers",
    "CodeLevel": 2,
    "ID": 39
  },
  {
    "InterestCode": "CR",
    "Occupation": "Transportation Security Screeners",
    "CodeLevel": 2,
    "ID": 40
  },
  {
    "InterestCode": "CRE",
    "Occupation": "Airfield Operations Specialists",
    "CodeLevel": 3,
    "ID": 41
  },
  {
    "InterestCode": "CE",
    "Occupation": "Bookkeeping, Accounting, and Auditing Clerks",
    "CodeLevel": 2,
    "ID": 42
  },
  {
    "InterestCode": "CE",
    "Occupation": "Compliance Officers",
    "CodeLevel": 2,
    "ID": 43
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Computer Numerically Controlled Tool Programmers",
    "CodeLevel": 3,
    "ID": 44
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Computer User Support Specialists",
    "CodeLevel": 3,
    "ID": 45
  },
  {
    "InterestCode": "CE",
    "Occupation": "Customs Brokers",
    "CodeLevel": 2,
    "ID": 46
  },
  {
    "InterestCode": "CRS",
    "Occupation": "Dental Assistants",
    "CodeLevel": 3,
    "ID": 47
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Energy Auditors",
    "CodeLevel": 3,
    "ID": 48
  },
  {
    "InterestCode": "CE",
    "Occupation": "Government Property Inspectors and Investigators",
    "CodeLevel": 2,
    "ID": 49
  },
  {
    "InterestCode": "CIS",
    "Occupation": "Health Information Technologists and Medical Registrars",
    "CodeLevel": 3,
    "ID": 50
  },
  {
    "InterestCode": "CSR",
    "Occupation": "Medical Assistants",
    "CodeLevel": 3,
    "ID": 51
  },
  {
    "InterestCode": "CI",
    "Occupation": "Medical Records Specialists",
    "CodeLevel": 2,
    "ID": 52
  },
  {
    "InterestCode": "CR",
    "Occupation": "Opticians, Dispensing",
    "CodeLevel": 2,
    "ID": 53
  },
  {
    "InterestCode": "CIE",
    "Occupation": "Paralegals and Legal Assistants",
    "CodeLevel": 3,
    "ID": 54
  },
  {
    "InterestCode": "CR",
    "Occupation": "Pharmacy Technicians",
    "CodeLevel": 2,
    "ID": 55
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Police Identification and Records Officers",
    "CodeLevel": 3,
    "ID": 56
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Private Detectives and Investigators",
    "CodeLevel": 3,
    "ID": 57
  },
  {
    "InterestCode": "CE",
    "Occupation": "Tax Preparers",
    "CodeLevel": 2,
    "ID": 58
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Telecommunications Engineering Specialists",
    "CodeLevel": 3,
    "ID": 59
  },
  {
    "InterestCode": "CI",
    "Occupation": "Web Developers",
    "CodeLevel": 2,
    "ID": 60
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Accountants and Auditors",
    "CodeLevel": 3,
    "ID": 61
  },
  {
    "InterestCode": "CE",
    "Occupation": "Appraisers and Assessors of Real Estate",
    "CodeLevel": 2,
    "ID": 62
  },
  {
    "InterestCode": "CI",
    "Occupation": "Blockchain Engineers",
    "CodeLevel": 2,
    "ID": 63
  },
  {
    "InterestCode": "CIE",
    "Occupation": "Business Intelligence Analysts",
    "CodeLevel": 3,
    "ID": 64
  },
  {
    "InterestCode": "CI",
    "Occupation": "Clinical Data Managers",
    "CodeLevel": 2,
    "ID": 65
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Compensation, Benefits, and Job Analysis Specialists",
    "CodeLevel": 3,
    "ID": 66
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Computer and Information Systems Managers",
    "CodeLevel": 3,
    "ID": 67
  },
  {
    "InterestCode": "CI",
    "Occupation": "Database Administrators",
    "CodeLevel": 2,
    "ID": 68
  },
  {
    "InterestCode": "CIR",
    "Occupation": "Environmental Compliance Inspectors",
    "CodeLevel": 3,
    "ID": 69
  },
  {
    "InterestCode": "CIR",
    "Occupation": "Geographic Information Systems Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 70
  },
  {
    "InterestCode": "CIR",
    "Occupation": "Industrial Engineers",
    "CodeLevel": 3,
    "ID": 71
  },
  {
    "InterestCode": "CI",
    "Occupation": "Information Security Analysts",
    "CodeLevel": 2,
    "ID": 72
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Logisticians",
    "CodeLevel": 3,
    "ID": 73
  },
  {
    "InterestCode": "CIE",
    "Occupation": "Management Analysts",
    "CodeLevel": 3,
    "ID": 74
  },
  {
    "InterestCode": "CE",
    "Occupation": "Online Merchants",
    "CodeLevel": 2,
    "ID": 75
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Regulatory Affairs Specialists",
    "CodeLevel": 3,
    "ID": 76
  },
  {
    "InterestCode": "CIR",
    "Occupation": "Security Management Specialists",
    "CodeLevel": 3,
    "ID": 77
  },
  {
    "InterestCode": "CRI",
    "Occupation": "Surveyors",
    "CodeLevel": 3,
    "ID": 78
  },
  {
    "InterestCode": "CAI",
    "Occupation": "Technical Writers",
    "CodeLevel": 3,
    "ID": 79
  },
  {
    "InterestCode": "CIE",
    "Occupation": "Web Administrators",
    "CodeLevel": 3,
    "ID": 80
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Administrative Law Judges, Adjudicators, and Hearing Officers",
    "CodeLevel": 3,
    "ID": 81
  },
  {
    "InterestCode": "CI",
    "Occupation": "Archivists",
    "CodeLevel": 2,
    "ID": 82
  },
  {
    "InterestCode": "CE",
    "Occupation": "Curators",
    "CodeLevel": 2,
    "ID": 83
  },
  {
    "InterestCode": "CEI",
    "Occupation": "Judicial Law Clerks",
    "CodeLevel": 3,
    "ID": 84
  },
  {
    "InterestCode": "CSI",
    "Occupation": "Librarians and Media Collections Specialists",
    "CodeLevel": 3,
    "ID": 85
  },
  {
    "InterestCode": "SCI",
    "Occupation": "Anesthesiologist Assistants",
    "CodeLevel": 3,
    "ID": 86
  },
  {
    "InterestCode": "ECS",
    "Occupation": "Arbitrators, Mediators, and Conciliators",
    "CodeLevel": 3,
    "ID": 87
  },
  {
    "InterestCode": "IC",
    "Occupation": "Biostatisticians",
    "CodeLevel": 2,
    "ID": 88
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Computer and Information Research Scientists",
    "CodeLevel": 3,
    "ID": 89
  },
  {
    "InterestCode": "ICE",
    "Occupation": "Economists",
    "CodeLevel": 3,
    "ID": 90
  },
  {
    "InterestCode": "IC",
    "Occupation": "Financial Quantitative Analysts",
    "CodeLevel": 2,
    "ID": 91
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Geneticists",
    "CodeLevel": 3,
    "ID": 92
  },
  {
    "InterestCode": "ECI",
    "Occupation": "Investment Fund Managers",
    "CodeLevel": 3,
    "ID": 93
  },
  {
    "InterestCode": "ECI",
    "Occupation": "Lawyers",
    "CodeLevel": 3,
    "ID": 94
  },
  {
    "InterestCode": "IC",
    "Occupation": "Mathematicians",
    "CodeLevel": 2,
    "ID": 95
  },
  {
    "InterestCode": "IC",
    "Occupation": "Operations Research Analysts",
    "CodeLevel": 2,
    "ID": 96
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Radiologists",
    "CodeLevel": 3,
    "ID": 97
  },
  {
    "InterestCode": "IC",
    "Occupation": "Statisticians",
    "CodeLevel": 2,
    "ID": 98
  },
  {
    "InterestCode": "IC",
    "Occupation": "Survey Researchers",
    "CodeLevel": 2,
    "ID": 99
  },
  {"InterestCode": "SC",
    "Occupation": "Teaching Assistants, Post Secondary",
    "CodeLevel": 2,
    "ID": 100
  },{
    "InterestCode": "RC",
    "Occupation": "Cement Masons and Concrete Finishers",
    "CodeLevel": 2,
    "ID": 101
  },
  {
    "InterestCode": "RC",
    "Occupation": "Farmworkers and Laborers, Crop, Nursery, and Greenhouse",
    "CodeLevel": 2,
    "ID": 102
  },
  {
    "InterestCode": "RC",
    "Occupation": "Logging Equipment Operators",
    "CodeLevel": 2,
    "ID": 103
  },
  {
    "InterestCode": "RC",
    "Occupation": "Roustabouts, Oil and Gas",
    "CodeLevel": 2,
    "ID": 104
  },
  {
    "InterestCode": "RSC",
    "Occupation": "Animal Caretakers",
    "CodeLevel": 3,
    "ID": 105
  },
  {
    "InterestCode": "RES",
    "Occupation": "Athletes and Sports Competitors",
    "CodeLevel": 3,
    "ID": 106
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Baggage Porters and Bellhops",
    "CodeLevel": 3,
    "ID": 107
  },
  {
    "InterestCode": "RC",
    "Occupation": "Bakers",
    "CodeLevel": 2,
    "ID": 108
  },
  {
    "InterestCode": "RCE",
    "Occupation": "Bartenders",
    "CodeLevel": 3,
    "ID": 109
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Bus Drivers, Transit and Intercity",
    "CodeLevel": 3,
    "ID": 110
  },
  {
    "InterestCode": "RC",
    "Occupation": "Construction Laborers",
    "CodeLevel": 2,
    "ID": 111
  },
  {
    "InterestCode": "RCE",
    "Occupation": "Cooks, Restaurant",
    "CodeLevel": 3,
    "ID": 112
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Electrical and Electronic Equipment Assemblers",
    "CodeLevel": 3,
    "ID": 113
  },
  {
    "InterestCode": "RC",
    "Occupation": "Heavy and Tractor-Trailer Truck Drivers",
    "CodeLevel": 2,
    "ID": 114
  },
  {
    "InterestCode": "RC",
    "Occupation": "Laborers and Freight, Stock, and Material Movers, Hand",
    "CodeLevel": 2,
    "ID": 115
  },
  {
    "InterestCode": "RC",
    "Occupation": "Light Truck Drivers",
    "CodeLevel": 2,
    "ID": 116
  },
  {
    "InterestCode": "RC",
    "Occupation": "Manicurists and Pedicurists",
    "CodeLevel": 2,
    "ID": 117
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Medical Equipment Preparers",
    "CodeLevel": 3,
    "ID": 118
  },
  {
    "InterestCode": "RC",
    "Occupation": "Recycling and Reclamation Workers",
    "CodeLevel": 2,
    "ID": 119
  },
  {
    "InterestCode": "RC",
    "Occupation": "Security Guards",
    "CodeLevel": 2,
    "ID": 120
  },
  {
    "InterestCode": "RC",
    "Occupation": "Solar Photovoltaic Installers",
    "CodeLevel": 2,
    "ID": 121
  },
  {
    "InterestCode": "RC",
    "Occupation": "Telecommunications Line Installers and Repairers",
    "CodeLevel": 2,
    "ID": 122
  },
  {
    "InterestCode": "RC",
    "Occupation": "Tile and Stone Setters",
    "CodeLevel": 2,
    "ID": 123
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Veterinary Assistants and Laboratory Animal Caretakers",
    "CodeLevel": 3,
    "ID": 124
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Aerospace Engineering and Operations Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 125
  },
  {
    "InterestCode": "RC",
    "Occupation": "Audio and Video Technicians",
    "CodeLevel": 2,
    "ID": 126
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Electrical and Electronics Installers and Repairers, Transportation Equipment",
    "CodeLevel": 3,
    "ID": 127
  },
  {
    "InterestCode": "RC",
    "Occupation": "Electricians",
    "CodeLevel": 2,
    "ID": 128
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Farm Equipment Mechanics and Service Technicians",
    "CodeLevel": 3,
    "ID": 129
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Food Science Technicians",
    "CodeLevel": 3,
    "ID": 130
  },
  {
    "InterestCode": "RC",
    "Occupation": "Forest Fire Inspectors and Prevention Specialists",
    "CodeLevel": 2,
    "ID": 131
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Hairdressers, Hairstylists, and Cosmetologists",
    "CodeLevel": 3,
    "ID": 132
  },
  {
    "InterestCode": "RC",
    "Occupation": "Heating, Air Conditioning, and Refrigeration Mechanics and Installers",
    "CodeLevel": 2,
    "ID": 133
  },
  {
    "InterestCode": "RC",
    "Occupation": "Janitors and Cleaners, Except Maids and Housekeeping Cleaners",
    "CodeLevel": 2,
    "ID": 134
  },
  {
    "InterestCode": "RC",
    "Occupation": "Maintenance and Repair Workers, General",
    "CodeLevel": 2,
    "ID": 135
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Medical and Clinical Laboratory Technicians",
    "CodeLevel": 3,
    "ID": 136
  },
  {
    "InterestCode": "RC",
    "Occupation": "Motorboat Mechanics and Service Technicians",
    "CodeLevel": 2,
    "ID": 137
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Occupational Health and Safety Technicians",
    "CodeLevel": 3,
    "ID": 138
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Phlebotomists",
    "CodeLevel": 3,
    "ID": 139
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Precision Agriculture Technicians",
    "CodeLevel": 3,
    "ID": 140
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Radiologic Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 141
  },
  {
    "InterestCode": "RCS",
    "Occupation": "Surgical Technologists",
    "CodeLevel": 3,
    "ID": 142
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Veterinary Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 143
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Wind Turbine Service Technicians",
    "CodeLevel": 3,
    "ID": 144
  },
  {
    "InterestCode": "RCE",
    "Occupation": "Airline Pilots, Copilots, and Flight Engineers",
    "CodeLevel": 3,
    "ID": 145
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Automotive Engineers",
    "CodeLevel": 3,
    "ID": 146
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Biological Technicians",
    "CodeLevel": 3,
    "ID": 147
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Chemical Engineers",
    "CodeLevel": 3,
    "ID": 148
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Civil Engineers",
    "CodeLevel": 3,
    "ID": 149
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Computer Hardware Engineers",
    "CodeLevel": 3,
    "ID": 150
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Electronics Engineers, Except Computer",
    "CodeLevel": 3,
    "ID": 151
  },
  {
    "InterestCode": "RIS",
    "Occupation": "Exercise Physiologists",
    "CodeLevel": 3,
    "ID": 152
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Fuel Cell Engineers",
    "CodeLevel": 3,
    "ID": 153
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Geodetic Surveyors",
    "CodeLevel": 3,
    "ID": 154
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Geological Technicians, Except Hydrologic Technicians",
    "CodeLevel": 3,
    "ID": 155
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Manufacturing Engineers",
    "CodeLevel": 3,
    "ID": 156
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Materials Engineers",
    "CodeLevel": 3,
    "ID": 157
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Mechanical Engineers",
    "CodeLevel": 3,
    "ID": 158
  },
  {
    "InterestCode": "RC",
    "Occupation": "Museum Technicians and Conservators",
    "CodeLevel": 2,
    "ID": 159
  },
  {
    "InterestCode": "RIE",
    "Occupation": "Range Managers",
    "CodeLevel": 3,
    "ID": 160
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Remote Sensing Technicians",
    "CodeLevel": 3,
    "ID": 161
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Solar Energy Systems Engineers",
    "CodeLevel": 3,
    "ID": 162
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Transportation Engineers",
    "CodeLevel": 3,
    "ID": 163
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Water/Wastewater Engineers",
    "CodeLevel": 3,
    "ID": 164
  },
  {
    "InterestCode": "RAI",
    "Occupation": "Architects, Except Landscape and Naval",
    "CodeLevel": 3,
    "ID": 165
  },
  {
    "InterestCode": "RIS",
    "Occupation": "Orthotists and Prosthetists",
    "CodeLevel": 3,
    "ID": 166
  },
  {
    "InterestCode": "RIS",
    "Occupation": "Prosthodontists",
    "CodeLevel": 3,
    "ID": 167
  },
  {
    "InterestCode": "RI",
    "Occupation": "Veterinarians",
    "CodeLevel": 2,
    "ID": 168
  },
  {
    "InterestCode": "SR",
    "Occupation": "Adapted Physical Education Specialists",
    "CodeLevel": 2,
    "ID": 169
  },
  {
    "InterestCode": "IR",
    "Occupation": "Anthropologists and Archeologists",
    "CodeLevel": 2,
    "ID": 170
  },
  {
    "InterestCode": "IR",
    "Occupation": "Astronomers",
    "CodeLevel": 2,
    "ID": 171
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Athletic Trainers",
    "CodeLevel": 3,
    "ID": 172
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Chiropractors",
    "CodeLevel": 3,
    "ID": 173
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Cytotechnologists",
    "CodeLevel": 3,
    "ID": 174
  },
  {
    "InterestCode": "IRS",
    "Occupation": "Dentists, General",
    "CodeLevel": 3,
    "ID": 175
  },
  {
    "InterestCode": "IRS",
    "Occupation": "Dermatologists",
    "CodeLevel": 3,
    "ID": 176
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Environmental Restoration Planners",
    "CodeLevel": 3,
    "ID": 177
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Geoscientists, Except Hydrologists and Geographers",
    "CodeLevel": 3,
    "ID": 178
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Human Factors Engineers and Ergonomists",
    "CodeLevel": 3,
    "ID": 179
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Microsystems Engineers",
    "CodeLevel": 3,
    "ID": 180
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Nurse Anesthetists",
    "CodeLevel": 3,
    "ID": 181
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Orthodontists",
    "CodeLevel": 3,
    "ID": 182
  },
  {
    "InterestCode": "IRS",
    "Occupation": "Orthopedic Surgeons, Except Pediatric",
    "CodeLevel": 3,
    "ID": 183
  },
  {
    "InterestCode": "IR",
    "Occupation": "Soil and Plant Scientists",
    "CodeLevel": 2,
    "ID": 184
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Dental Laboratory Technicians",
    "CodeLevel": 3,
    "ID": 185
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Non-Destructive Testing Specialists",
    "CodeLevel": 3,
    "ID": 186
  },
  {
    "InterestCode": "SIC",
    "Occupation": "Psychiatric Aides",
    "CodeLevel": 3,
    "ID": 187
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Agricultural Inspectors",
    "CodeLevel": 3,
    "ID": 188
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Animal Control Workers",
    "CodeLevel": 3,
    "ID": 189
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Biofuels Processing Technicians",
    "CodeLevel": 3,
    "ID": 190
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Chemical Equipment Operators and Tenders",
    "CodeLevel": 3,
    "ID": 191
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Chemical Plant and System Operators",
    "CodeLevel": 3,
    "ID": 192
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Earth Drillers, Except Oil and Gas",
    "CodeLevel": 3,
    "ID": 193
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Electromechanical Equipment Assemblers",
    "CodeLevel": 3,
    "ID": 194
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Endoscopy Technicians",
    "CodeLevel": 3,
    "ID": 195
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Explosives Workers, Ordnance Handling Experts, and Blasters",
    "CodeLevel": 3,
    "ID": 196
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Geothermal Technicians",
    "CodeLevel": 3,
    "ID": 197
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Inspectors, Testers, Sorters, Samplers, and Weighers",
    "CodeLevel": 3,
    "ID": 198
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Locomotive Engineers",
    "CodeLevel": 3,
    "ID": 199
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Operating Engineers and Other Construction Equipment Operators",
    "CodeLevel": 3,
    "ID": 200
  },
  {
    "InterestCode": "RCI",
    "Occupation": "Transportation Vehicle, Equipment and Systems Inspectors, Except Aviation",
    "CodeLevel": 3,
    "ID": 201
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Chemical Technicians",
    "CodeLevel": 3,
    "ID": 202
  },
  {
    "InterestCode": "IC",
    "Occupation": "Computer Systems Analysts",
    "CodeLevel": 2,
    "ID": 203
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Coroners",
    "CodeLevel": 3,
    "ID": 204
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Detectives and Criminal Investigators",
    "CodeLevel": 3,
    "ID": 205
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Forensic Science Technicians",
    "CodeLevel": 3,
    "ID": 206
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Medical Dosimetrists",
    "CodeLevel": 3,
    "ID": 207
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Neurodiagnostic Technologists",
    "CodeLevel": 3,
    "ID": 208
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Cardiovascular Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 209
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Civil Engineering Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 210
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Commercial Divers",
    "CodeLevel": 3,
    "ID": 211
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Electrical and Electronic Engineering Technologists and Technicians",
    "CodeLevel": 3,
    "ID": 212
  },
  {
    "InterestCode": "SIC",
    "Occupation": "Hearing Aid Specialists",
    "CodeLevel": 3,
    "ID": 213
  },
  {
    "InterestCode": "RIC",
    "Occupation": "Medical Appliance Technicians",
    "CodeLevel": 3,
    "ID": 214
  },
  {
    "InterestCode": "SI",
    "Occupation": "Psychiatric Technicians",
    "CodeLevel": 2,
    "ID": 215
  },
  {
    "InterestCode": "CIR",
    "Occupation": "Quality Control Analysts",
    "CodeLevel": 3,
    "ID": 216
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Aerospace Engineers",
    "CodeLevel": 3,
    "ID": 217
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Agricultural Engineers",
    "CodeLevel": 3,
    "ID": 218
  },
  {
    "InterestCode": "IR",
    "Occupation": "Bioengineers and Biomedical Engineers",
    "CodeLevel": 2,
    "ID": 219
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Bioinformatics Technicians",
    "CodeLevel": 3,
    "ID": 220
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Chemists",
    "CodeLevel": 3,
    "ID": 221
  },
  {
    "InterestCode": "ICE",
    "Occupation": "Clinical Research Coordinators",
    "CodeLevel": 3,
    "ID": 222
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Cytogenetic Technologists",
    "CodeLevel": 3,
    "ID": 223
  },
  {
    "InterestCode": "IC",
    "Occupation": "Data Scientists",
    "CodeLevel": 2,
    "ID": 224
  },
  {
    "InterestCode": "IC",
    "Occupation": "Digital Forensics Analysts",
    "CodeLevel": 2,
    "ID": 225
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Environmental Scientists and Specialists, Including Health",
    "CodeLevel": 3,
    "ID": 226
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Food Scientists and Technologists",
    "CodeLevel": 3,
    "ID": 227
  },
  {
    "InterestCode": "ICS",
    "Occupation": "Health Informatics Specialists",
    "CodeLevel": 3,
    "ID": 228
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Medical and Clinical Laboratory Technologists",
    "CodeLevel": 3,
    "ID": 229
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Occupational Health and Safety Specialists",
    "CodeLevel": 3,
    "ID": 230
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Penetration Testers",
    "CodeLevel": 3,
    "ID": 231
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Software Developers",
    "CodeLevel": 3,
    "ID": 232
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Software Quality Assurance Analysts and Testers",
    "CodeLevel": 3,
    "ID": 233
  },
  {
    "InterestCode": "IEC",
    "Occupation": "Sustainability Specialists",
    "CodeLevel": 3,
    "ID": 234
  },
  {
    "InterestCode": "ICR",
    "Occupation": "Validation Engineers",
    "CodeLevel": 3,
    "ID": 235
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Water Resource Specialists",
    "CodeLevel": 3,
    "ID": 236
  },
  {
    "InterestCode": "IR",
    "Occupation": "Animal Scientists",
    "CodeLevel": 2,
    "ID": 237
  },
  {
    "InterestCode": "ISC",
    "Occupation": "Audiologists",
    "CodeLevel": 3,
    "ID": 238
  },
  {
    "InterestCode": "IEC",
    "Occupation": "Climate Change Policy Analysts",
    "CodeLevel": 3,
    "ID": 239
  },
  {
    "InterestCode": "ISC",
    "Occupation": "Genetic Counselors",
    "CodeLevel": 3,
    "ID": 240
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Industrial Ecologists",
    "CodeLevel": 3,
    "ID": 241
  },
  {
    "InterestCode": "IES",
    "Occupation": "Industrial-Organizational Psychologists",
    "CodeLevel": 3,
    "ID": 242
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Medical Scientists, Except Epidemiologists",
    "CodeLevel": 3,
    "ID": 243
  },
  {
    "InterestCode": "IEC",
    "Occupation": "Natural Sciences Managers",
    "CodeLevel": 3,
    "ID": 244
  },
  {
    "InterestCode": "ISC",
    "Occupation": "Nurse Practitioners",
    "CodeLevel": 3,
    "ID": 245
  },
  {
    "InterestCode": "ISR",
    "Occupation": "Optometrists",
    "CodeLevel": 3,
    "ID": 246
  },
  {
    "InterestCode": "IRC",
    "Occupation": "Physicists",
    "CodeLevel": 3,
    "ID": 247
  },
  {
    "InterestCode": "IA",
    "Occupation": "Political Scientists",
    "CodeLevel": 2,
    "ID": 248
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Painting, Coating, and Decorating Workers",
    "CodeLevel": 3,
    "ID": 249
  },
  {
    "InterestCode": "ASE",
    "Occupation": "Actors",
    "CodeLevel": 3,
    "ID": 250
  },
  {
    "InterestCode": "ACR",
    "Occupation": "Costume Attendants",
    "CodeLevel": 3,
    "ID": 251
  },
  {
    "InterestCode": "AEC",
    "Occupation": "Disc Jockeys, Except Radio",
    "CodeLevel": 3,
    "ID": 252
  },
  {
    "InterestCode": "ARE",
    "Occupation": "Models",
    "CodeLevel": 3,
    "ID": 253
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Floral Designers",
    "CodeLevel": 3,
    "ID": 254
  },
  {
    "InterestCode": "SA",
    "Occupation": "Nannies",
    "CodeLevel": 2,
    "ID": 255
  },
  {
    "InterestCode": "RA",
    "Occupation": "Shoe and Leather Workers and Repairers",
    "CodeLevel": 2,
    "ID": 256
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Stone Cutters and Carvers, Manufacturing",
    "CodeLevel": 3,
    "ID": 257
  },
  {
    "InterestCode": "RA",
    "Occupation": "Tailors, Dressmakers, and Custom Sewers",
    "CodeLevel": 2,
    "ID": 258
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Upholsterers",
    "CodeLevel": 3,
    "ID": 259
  },
  {
    "InterestCode": "SCA",
    "Occupation": "Childcare Workers",
    "CodeLevel": 3,
    "ID": 260
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Etchers and Engravers",
    "CodeLevel": 3,
    "ID": 261
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Furniture Finishers",
    "CodeLevel": 3,
    "ID": 262
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Paperhangers",
    "CodeLevel": 3,
    "ID": 263
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Photographic Process Workers and Processing Machine Operators",
    "CodeLevel": 3,
    "ID": 264
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Sewers, Hand",
    "CodeLevel": 3,
    "ID": 265
  },
  {
    "InterestCode": "ARC",
    "Occupation": "Camera Operators, Television, Video, and Film",
    "CodeLevel": 3,
    "ID": 266
  },
  {
    "InterestCode": "AR",
    "Occupation": "Craft Artists",
    "CodeLevel": 2,
    "ID": 267
  },
  {
    "InterestCode": "ARS",
    "Occupation": "Dancers",
    "CodeLevel": 3,
    "ID": 268
  },
  {
    "InterestCode": "ARE",
    "Occupation": "Fashion Designers",
    "CodeLevel": 3,
    "ID": 269
  },
  {
    "InterestCode": "AR",
    "Occupation": "Fine Artists, Including Painters, Sculptors, and Illustrators",
    "CodeLevel": 2,
    "ID": 270
  },
  {
    "InterestCode": "AR",
    "Occupation": "Makeup Artists, Theatrical and Performance",
    "CodeLevel": 2,
    "ID": 271
  },
  {
    "InterestCode": "ARE",
    "Occupation": "Merchandise Displayers and Window Trimmers",
    "CodeLevel": 3,
    "ID": 272
  },
  {
    "InterestCode": "CA",
    "Occupation": "Desktop Publishers",
    "CodeLevel": 2,
    "ID": 273
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Fabric and Apparel Patternmakers",
    "CodeLevel": 3,
    "ID": 274
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Jewelers and Precious Stone and Metal Workers",
    "CodeLevel": 3,
    "ID": 275
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Musical Instrument Repairers and Tuners",
    "CodeLevel": 3,
    "ID": 276
  },
  {
    "InterestCode": "RA",
    "Occupation": "Photographers",
    "CodeLevel": 2,
    "ID": 277
  },
  {
    "InterestCode": "SA",
    "Occupation": "Preschool Teachers, Except Special Education",
    "CodeLevel": 2,
    "ID": 278
  },
  {
    "InterestCode": "SA",
    "Occupation": "Self-Enrichment Teachers",
    "CodeLevel": 2,
    "ID": 279
  },
  {
    "InterestCode": "RAC",
    "Occupation": "Sound Engineering Technicians",
    "CodeLevel": 3,
    "ID": 280
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Architectural and Civil Drafters",
    "CodeLevel": 3,
    "ID": 281
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Model Makers, Wood",
    "CodeLevel": 3,
    "ID": 282
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Patternmakers, Metal and Plastic",
    "CodeLevel": 3,
    "ID": 283
  },
  {
    "InterestCode": "RCA",
    "Occupation": "Patternmakers, Wood",
    "CodeLevel": 3,
    "ID": 284
  },
  {
    "InterestCode": "AE",
    "Occupation": "Art Directors",
    "CodeLevel": 2,
    "ID": 285
  },
  {
    "InterestCode": "AES",
    "Occupation": "Broadcast Announcers and Radio Disc Jockeys",
    "CodeLevel": 3,
    "ID": 286
  },
  {
    "InterestCode": "AS",
    "Occupation": "Choreographers",
    "CodeLevel": 2,
    "ID": 287
  },
  {
    "InterestCode": "ARI",
    "Occupation": "Commercial and Industrial Designers",
    "CodeLevel": 3,
    "ID": 288
  },
  {
    "InterestCode": "ACE",
    "Occupation": "Editors",
    "CodeLevel": 3,
    "ID": 289
  },
  {
    "InterestCode": "AC",
    "Occupation": "Film and Video Editors",
    "CodeLevel": 2,
    "ID": 290
  },
  {
    "InterestCode": "A",
    "Occupation": "Graphic Designers",
    "CodeLevel": 1,
    "ID": 291
  },
  {
    "InterestCode": "AR",
    "Occupation": "Interior Designers",
    "CodeLevel": 2,
    "ID": 292
  },
  {
    "InterestCode": "AE",
    "Occupation": "Music Directors and Composers",
    "CodeLevel": 2,
    "ID": 293
  },
  {
    "InterestCode": "AE",
    "Occupation": "Musicians and Singers",
    "CodeLevel": 2,
    "ID": 294
  },
  {
    "InterestCode": "AIE",
    "Occupation": "News Analysts, Reporters, and Journalists",
    "CodeLevel": 3,
    "ID": 295
  },
  {
    "InterestCode": "AI",
    "Occupation": "Poets, Lyricists and Creative Writers",
    "CodeLevel": 2,
    "ID": 296
  },
  {
    "InterestCode": "AE",
    "Occupation": "Producers and Directors",
    "CodeLevel": 2,
    "ID": 297
  },
  {
    "InterestCode": "AR",
    "Occupation": "Special Effects Artists and Animators",
    "CodeLevel": 2,
    "ID": 298
  },
  {
    "InterestCode": "AIE",
    "Occupation": "Video Game Designers",
    "CodeLevel": 3,
    "ID": 299
  },
  {
    "InterestCode": "AE",
    "Occupation": "Writers and Authors",
    "CodeLevel": 2,
    "ID": 300
  },
  {
    "InterestCode": "SA",
    "Occupation": "Kindergarten Teachers, Except Special Education",
    "CodeLevel": 2,
    "ID": 301
  },
  {
    "InterestCode": "SAI",
    "Occupation": "Music Therapists",
    "CodeLevel": 3,
    "ID": 302
  },
  {
    "InterestCode": "EAS",
    "Occupation": "Talent Directors",
    "CodeLevel": 3,
    "ID": 303
  },
  {
    "InterestCode": "IAC",
    "Occupation": "Web and Digital Interface Designers",
    "CodeLevel": 3,
    "ID": 304
  },
  {
    "InterestCode": "A",
    "Occupation": "Set and Exhibit Designers",
    "CodeLevel": 1,
    "ID": 305
  },
  {
    "InterestCode": "SA",
    "Occupation": "Art Therapists",
    "CodeLevel": 2,
    "ID": 306
  },
  {
    "InterestCode": "SA",
    "Occupation": "Art, Drama, and Music Teachers, Postsecondary",
    "CodeLevel": 2,
    "ID": 307
  },
  {
    "InterestCode": "SA",
    "Occupation": "Special Education Teachers, Preschool",
    "CodeLevel": 2,
    "ID": 308
  },
  {
    "InterestCode": "SIA",
    "Occupation": "Architecture Teachers, Postsecondary",
    "CodeLevel": 3,
    "ID": 309
  },
  {
    "InterestCode": "SIA",
    "Occupation": "English Language and Literature Teachers, Postsecondary",
    "CodeLevel": 3,
    "ID": 310
  },
  {
    "InterestCode": "ISA",
    "Occupation": "Sociologists",
    "CodeLevel": 3,
    "ID": 311
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Home Health Aides",
    "CodeLevel": 3,
    "ID": 312
  },
  {
    "InterestCode": "SEC",
    "Occupation": "Hosts and Hostesses, Restaurant, Lounge, and Coffee Shop",
    "CodeLevel": 3,
    "ID": 313
  },
  {
    "InterestCode": "SCR",
    "Occupation": "Personal Care Aides",
    "CodeLevel": 3,
    "ID": 314
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Physical Therapist Aides",
    "CodeLevel": 3,
    "ID": 315
  },
  {
    "InterestCode": "SCR",
    "Occupation": "School Bus Monitors",
    "CodeLevel": 3,
    "ID": 316
  },
  {
    "InterestCode": "SEC",
    "Occupation": "Travel Guides",
    "CodeLevel": 3,
    "ID": 317
  },
  {
    "InterestCode": "SCE",
    "Occupation": "Ushers, Lobby Attendants, and Ticket Takers",
    "CodeLevel": 3,
    "ID": 318
  },
  {
    "InterestCode": "SCE",
    "Occupation": "Waiters and Waitresses",
    "CodeLevel": 3,
    "ID": 319
  },
  {
    "InterestCode": "RS",
    "Occupation": "Animal Trainers",
    "CodeLevel": 2,
    "ID": 320
  },
  {
    "InterestCode": "RSC",
    "Occupation": "Food Servers, Nonrestaurant",
    "CodeLevel": 3,
    "ID": 321
  },
  {
    "InterestCode": "RSC",
    "Occupation": "Funeral Attendants",
    "CodeLevel": 3,
    "ID": 322
  },
  {
    "InterestCode": "RSC",
    "Occupation": "Lifeguards, Ski Patrol, and Other Recreational Protective Service Workers",
    "CodeLevel": 3,
    "ID": 323
  },
  {
    "InterestCode": "CSR",
    "Occupation": "Passenger Attendants",
    "CodeLevel": 3,
    "ID": 324
  },
  {
    "InterestCode": "RSC",
    "Occupation": "Shampooers",
    "CodeLevel": 3,
    "ID": 325
  },
  {
    "InterestCode": "SIR",
    "Occupation": "Acute Care Nurses",
    "CodeLevel": 3,
    "ID": 326
  },
  {
    "InterestCode": "SEC",
    "Occupation": "Concierges",
    "CodeLevel": 3,
    "ID": 327
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Dental Hygienists",
    "CodeLevel": 3,
    "ID": 328
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Emergency Medical Technicians",
    "CodeLevel": 3,
    "ID": 329
  },
  {
    "InterestCode": "SR",
    "Occupation": "Exercise Trainers and Group Fitness Instructors",
    "CodeLevel": 2,
    "ID": 330
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Licensed Practical and Licensed Vocational Nurses",
    "CodeLevel": 3,
    "ID": 331
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Massage Therapists",
    "CodeLevel": 3,
    "ID": 332
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Nursing Assistants",
    "CodeLevel": 3,
    "ID": 333
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Occupational Therapy Aides",
    "CodeLevel": 3,
    "ID": 334
  },
  {
    "InterestCode": "SCR",
    "Occupation": "Occupational Therapy Assistants",
    "CodeLevel": 3,
    "ID": 335
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Paramedics",
    "CodeLevel": 3,
    "ID": 336
  },
  {
    "InterestCode": "SIC",
    "Occupation": "Patient Representatives",
    "CodeLevel": 3,
    "ID": 337
  },
  {
    "InterestCode": "SRC",
    "Occupation": "Physical Therapist Assistants",
    "CodeLevel": 3,
    "ID": 338
  },
  {
    "InterestCode": "SCE",
    "Occupation": "Residential Advisors",
    "CodeLevel": 3,
    "ID": 339
  },
  {
    "InterestCode": "SRI",
    "Occupation": "Respiratory Therapists",
    "CodeLevel": 3,
    "ID": 340
  },
  {
    "InterestCode": "SCI",
    "Occupation": "Speech-Language Pathology Assistants",
    "CodeLevel": 3,
    "ID": 341
  },
  {
    "InterestCode": "SE",
    "Occupation": "Tour Guides and Escorts",
    "CodeLevel": 2,
    "ID": 342
  },
  {
    "InterestCode": "S",
    "Occupation": "Career/Technical Education Teachers, Secondary School",
    "CodeLevel": 1,
    "ID": 343
  },
  {
    "InterestCode": "S",
    "Occupation": "Child, Family, and School Social Workers",
    "CodeLevel": 1,
    "ID": 344
  },
  {
    "InterestCode": "SER",
    "Occupation": "Coaches and Scouts",
    "CodeLevel": 3,
    "ID": 345
  },
  {
    "InterestCode": "S",
    "Occupation": "Community Health Workers",
    "CodeLevel": 1,
    "ID": 346
  },
  {
    "InterestCode": "SIR",
    "Occupation": "Critical Care Nurses",
    "CodeLevel": 3,
    "ID": 347
  },
  {
    "InterestCode": "SE",
    "Occupation": "Directors, Religious Activities and Education",
    "CodeLevel": 2,
    "ID": 348
  },
  {
    "InterestCode": "SEC",
    "Occupation": "Education and Childcare Administrators, Preschool and Daycare",
    "CodeLevel": 3,
    "ID": 349
  },
  {
    "InterestCode": "SA",
    "Occupation": "Elementary School Teachers, Except Special Education",
    "CodeLevel": 2,
    "ID": 350
  },
    { "InterestCode": "RC", "Occupation": "Watch and Clock Repairers", "CodeLevel": 2, "ID": 823 },
    { "InterestCode": "RC", "Occupation": "Water and Wastewater Treatment Plant and System Operators", "CodeLevel": 2, "ID": 824 },
    { "InterestCode": "RIC", "Occupation": "Electrical Engineers", "CodeLevel": 3, "ID": 825 },
    { "InterestCode": "RIC", "Occupation": "Energy Engineers, Except Wind and Solar", "CodeLevel": 3, "ID": 826 },
    { "InterestCode": "RIC", "Occupation": "Environmental Engineering Technologists and Technicians", "CodeLevel": 3, "ID": 827 },
    { "InterestCode": "RIC", "Occupation": "Fire-Prevention and Protection Engineers", "CodeLevel": 3, "ID": 828 },
    { "InterestCode": "RCI", "Occupation": "Fish and Game Wardens", "CodeLevel": 3, "ID": 829 },
    { "InterestCode": "RIC", "Occupation": "Foresters", "CodeLevel": 3, "ID": 830 },
    { "InterestCode": "RIA", "Occupation": "Landscape Architects", "CodeLevel": 3, "ID": 831 },
    { "InterestCode": "RIC", "Occupation": "Marine Engineers and Naval Architects", "CodeLevel": 3, "ID": 832 },
    { "InterestCode": "RIC", "Occupation": "Mechatronics Engineers", "CodeLevel": 3, "ID": 833 },
    { "InterestCode": "RIC", "Occupation": "Mining and Geological Engineers, Including Mining Safety Engineers", "CodeLevel": 3, "ID": 834 },
    { "InterestCode": "RIC", "Occupation": "Nanotechnology Engineering Technologists and Technicians", "CodeLevel": 3, "ID": 835 },
    { "InterestCode": "RIC", "Occupation": "Petroleum Engineers", "CodeLevel": 3, "ID": 836 },
    { "InterestCode": "RIC", "Occupation": "Robotics Engineers", "CodeLevel": 3, "ID": 837 },
    { "InterestCode": "RIC", "Occupation": "Wind Energy Engineers", "CodeLevel": 3, "ID": 838 },
    { "InterestCode": "IRC", "Occupation": "Atmospheric and Space Scientists", "CodeLevel": 3, "ID": 839 },
    { "InterestCode": "IER", "Occupation": "Biofuels/Biodiesel Technology and Product Development Managers", "CodeLevel": 3, "ID": 840 },
    { "InterestCode": "IEC", "Occupation": "Biostatisticians", "CodeLevel": 3, "ID": 841 },
    { "InterestCode": "IRE", "Occupation": "Chemists", "CodeLevel": 3, "ID": 842 },
    { "InterestCode": "IRE", "Occupation": "Geoscientists, Except Hydrologists and Geographers", "CodeLevel": 3, "ID": 843 },
    { "InterestCode": "IRE", "Occupation": "Materials Scientists", "CodeLevel": 3, "ID": 844 },
    { "InterestCode": "IRE", "Occupation": "Remote Sensing Scientists and Technologists", "CodeLevel": 3, "ID": 845 },
    { "InterestCode": "IRC", "Occupation": "Solar Energy Systems Engineers", "CodeLevel": 3, "ID": 846 },
    { "InterestCode": "IEC", "Occupation": "Statisticians", "CodeLevel": 3, "ID": 847 },
    { "InterestCode": "IRC", "Occupation": "Transportation Engineers", "CodeLevel": 3, "ID": 848 },
    { "InterestCode": "IER", "Occupation": "Validation Engineers", "CodeLevel": 3, "ID": 849 },
    { "InterestCode": "IRC", "Occupation": "Water/Wastewater Engineers", "CodeLevel": 3, "ID": 850 },
    { "InterestCode": "CES", "Occupation": "Clergy", "CodeLevel": 3, "ID": 851 },
    { "InterestCode": "SEC", "Occupation": "Educational, Guidance, School, and Vocational Counselors", "CodeLevel": 3, "ID": 852 },
    { "InterestCode": "CES", "Occupation": "Health Educators", "CodeLevel": 3, "ID": 853 },
    { "InterestCode": "SIC", "Occupation": "Marriage and Family Therapists", "CodeLevel": 3, "ID": 854 },
    { "InterestCode": "CES", "Occupation": "Mental Health and Substance Abuse Social Workers", "CodeLevel": 3, "ID": 855 },
    { "InterestCode": "SEC", "Occupation": "Probation Officers and Correctional Treatment Specialists", "CodeLevel": 3, "ID": 856 },
    { "InterestCode": "CSE", "Occupation": "Rehabilitation Counselors", "CodeLevel": 3, "ID": 857 },
    { "InterestCode": "CES", "Occupation": "Social and Community Service Managers", "CodeLevel": 3, "ID": 858 },
    { "InterestCode": "CES", "Occupation": "Social Workers, All Other", "CodeLevel": 3, "ID": 859 },
    { "InterestCode": "SEC", "Occupation": "Substance Abuse and Behavioral Disorder Counselors", "CodeLevel": 3, "ID": 860 },
    { "InterestCode": "ESC", "Occupation": "Adult Basic Education, Adult Secondary Education, and English as a Second Language Instructors", "CodeLevel": 3, "ID": 861 },
    { "InterestCode": "SEC", "Occupation": "Career/Technical Education Teachers, Secondary School", "CodeLevel": 3, "ID": 862 },
    { "InterestCode": "SEC", "Occupation": "Education Administrators, Elementary and Secondary School", "CodeLevel": 3, "ID": 863 },
    { "InterestCode": "SEC", "Occupation": "Educational, Instructional, and Training Coordinators", "CodeLevel": 3, "ID": 864 },
    { "InterestCode": "SEC", "Occupation": "Fitness and Wellness Coordinators", "CodeLevel": 3, "ID": 865 },
    { "InterestCode": "ESC", "Occupation": "Instructional Designers and Technologists", "CodeLevel": 3, "ID": 866 },
    { "InterestCode": "SEC", "Occupation": "Kindergarten Teachers, Except Special Education", "CodeLevel": 3, "ID": 867 },
    { "InterestCode": "SEC", "Occupation": "Special Education Teachers, Kindergarten and Elementary School", "CodeLevel": 3, "ID": 868 },
    { "InterestCode": "SEC", "Occupation": "Special Education Teachers, Middle School", "CodeLevel": 3, "ID": 869 },
    { "InterestCode": "SEC", "Occupation": "Special Education Teachers, Secondary School", "CodeLevel": 3, "ID": 870 },
    { "InterestCode": "SEC", "Occupation": "Teacher Assistants", "CodeLevel": 3, "ID": 871 },
    { "InterestCode": "ESI", "Occupation": "Tutors", "CodeLevel": 3, "ID": 872 },
    { "InterestCode": "SEC", "Occupation": "Coaches and Scouts", "CodeLevel": 3, "ID": 873 },
    { "InterestCode": "SER", "Occupation": "Directors, Religious Activities and Education", "CodeLevel": 3, "ID": 874 },
    { "InterestCode": "SEA", "Occupation": "Music Directors", "CodeLevel": 3, "ID": 875 },
    { "InterestCode": "SAE", "Occupation": "Musicians, Instrumental", "CodeLevel": 3, "ID": 876 },
    { "InterestCode": "SAC", "Occupation": "Singers", "CodeLevel": 3, "ID": 877 },
    { "InterestCode": "SEC", "Occupation": "Art, Drama, and Music Teachers, Postsecondary", "CodeLevel": 3, "ID": 878 },
    { "InterestCode": "SIR", "Occupation": "Forestry and Conservation Science Teachers, Postsecondary", "CodeLevel": 3, "ID": 879 },
    { "InterestCode": "SEC", "Occupation": "Health Specialties Teachers, Postsecondary", "CodeLevel": 3, "ID": 880 },
    { "InterestCode": "SIR", "Occupation": "Law Teachers, Postsecondary", "CodeLevel": 3, "ID": 881 },
    { "InterestCode": "SIE", "Occupation": "Mathematical Science Teachers, Postsecondary", "CodeLevel": 3, "ID": 882 },
    { "InterestCode": "SIC", "Occupation": "Nursing Instructors and Teachers, Postsecondary", "CodeLevel": 3, "ID": 883 },
    { "InterestCode": "SIR", "Occupation": "Physics Teachers, Postsecondary", "CodeLevel": 3, "ID": 884 },
    { "InterestCode": "SIC", "Occupation": "Psychology Teachers, Postsecondary", "CodeLevel": 3, "ID": 885 },
    { "InterestCode": "SEC", "Occupation": "Recreation and Fitness Studies Teachers, Postsecondary", "CodeLevel": 3, "ID": 886 },
    { "InterestCode": "SEC", "Occupation": "Secondary School Teachers, Except Special and Career/Technical Education", "CodeLevel": 3, "ID": 887 },
    { "InterestCode": "SEC", "Occupation": "Self-Enrichment Education Teachers", "CodeLevel": 3, "ID": 888 },
    { "InterestCode": "SIC", "Occupation": "Sociology Teachers, Postsecondary", "CodeLevel": 3, "ID": 889 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Specialists", "CodeLevel": 3, "ID": 890 },
    { "InterestCode": "ESC", "Occupation": "Educational Administrators, Postsecondary", "CodeLevel": 3, "ID": 891 },
    { "InterestCode": "SEC", "Occupation": "Education Administrators, Preschool and Childcare Center/Program", "CodeLevel": 3, "ID": 892 },
    { "InterestCode": "SEC", "Occupation": "Home Economics Teachers, Postsecondary", "CodeLevel": 3, "ID": 893 },
    { "InterestCode": "SEC", "Occupation": "Middle School Teachers, Except Special and Career/Technical Education", "CodeLevel": 3, "ID": 894 },
    { "InterestCode": "SEC", "Occupation": "Preschool Teachers, Except Special Education", "CodeLevel": 3, "ID": 895 },
    { "InterestCode": "SEC", "Occupation": "Substitute Teachers, Short-Term", "CodeLevel": 3, "ID": 896 },
    { "InterestCode": "SEC", "Occupation": "Vocational Education Teachers, Postsecondary", "CodeLevel": 3, "ID": 897 },
    { "InterestCode": "SEC", "Occupation": "Special Education Teachers, Preschool", "CodeLevel": 3, "ID": 898 },
    { "InterestCode": "SEC", "Occupation": "Adult Basic and Secondary Education and Literacy Teachers and Instructors", "CodeLevel": 3, "ID": 899 },
    { "InterestCode": "CES", "Occupation": "Clinical, Counseling, and School Psychologists", "CodeLevel": 3, "ID": 900 },
    { "InterestCode": "SAI", "Occupation": "Genetic Counselors", "CodeLevel": 3, "ID": 901 },
    { "InterestCode": "SIR", "Occupation": "Epidemiologists", "CodeLevel": 3, "ID": 902 },
    { "InterestCode": "SIC", "Occupation": "Medical Scientists, Except Epidemiologists", "CodeLevel": 3, "ID": 903 },
    { "InterestCode": "SIR", "Occupation": "Microbiologists", "CodeLevel": 3, "ID": 904 },
    { "InterestCode": "SEC", "Occupation": "Nurse Practitioners", "CodeLevel": 3, "ID": 905 },
    { "InterestCode": "SIC", "Occupation": "Physician Assistants", "CodeLevel": 3, "ID": 906 },
    { "InterestCode": "CES", "Occupation": "Social and Human Service Assistants", "CodeLevel": 3, "ID": 907 },
    { "InterestCode": "SIC", "Occupation": "Sociologists", "CodeLevel": 3, "ID": 908 },
    { "InterestCode": "SAI", "Occupation": "Speech-Language Pathologists", "CodeLevel": 3, "ID": 909 },
    { "InterestCode": "SIR", "Occupation": "Urban and Regional Planners", "CodeLevel": 3, "ID": 910 },
    { "InterestCode": "SAI", "Occupation": "Art Therapists", "CodeLevel": 3, "ID": 911 },
    { "InterestCode": "SIA", "Occupation": "Creative Arts Therapists, All Other", "CodeLevel": 3, "ID": 912 },
    { "InterestCode": "SEC", "Occupation": "Exercise Trainers and Group Fitness Instructors", "CodeLevel": 3, "ID": 913 },
    { "InterestCode": "SIA", "Occupation": "Art Therapists", "CodeLevel": 3, "ID": 914 },
    { "InterestCode": "CIS", "Occupation": "Librarians and Media Collections Specialists", "CodeLevel": 3, "ID": 915 },
    { "InterestCode": "CER", "Occupation": "Curators", "CodeLevel": 3, "ID": 916 },
    { "InterestCode": "CER", "Occupation": "Museum Technicians and Conservators", "CodeLevel": 3, "ID": 917 },
    { "InterestCode": "CER", "Occupation": "Archivists", "CodeLevel": 3, "ID": 918 },
    { "InterestCode": "CER", "Occupation": "Historians", "CodeLevel": 3, "ID": 919 },
    { "InterestCode": "CIS", "Occupation": "Library Assistants, Clerical", "CodeLevel": 3, "ID": 920 },
    { "InterestCode": "CES", "Occupation": "Mental Health Counselors", "CodeLevel": 3, "ID": 921 },
    { "InterestCode": "SIA", "Occupation": "Clinical and Counseling Psychologists", "CodeLevel": 3, "ID": 922 },
    { "InterestCode": "CES", "Occupation": "Counseling Psychologists", "CodeLevel": 3, "ID": 923 },
    { "InterestCode": "SIA", "Occupation": "Marriage and Family Therapists", "CodeLevel": 3, "ID": 924 },
    { "InterestCode": "SIA", "Occupation": "Mental Health Counselors", "CodeLevel": 3, "ID": 925 },
    { "InterestCode": "SIA", "Occupation": "Rehabilitation Counselors", "CodeLevel": 3, "ID": 926 },
    { "InterestCode": "SIA", "Occupation": "Substance Abuse and Behavioral Disorder Counselors", "CodeLevel": 3, "ID": 927 },
    { "InterestCode": "SI", "Occupation": "Clinical Laboratory Technologists and Technicians", "CodeLevel": 2, "ID": 928 },
    { "InterestCode": "SI", "Occupation": "Critical Care Nurses", "CodeLevel": 2, "ID": 929 },
    { "InterestCode": "SIC", "Occupation": "Occupational Health and Safety Specialists", "CodeLevel": 3, "ID": 930 },
    { "InterestCode": "SI", "Occupation": "Orthotists and Prosthetists", "CodeLevel": 2, "ID": 931 },
    { "InterestCode": "SEC", "Occupation": "Physical Therapists", "CodeLevel": 3, "ID": 932 },
    { "InterestCode": "SEC", "Occupation": "Radiation Therapists", "CodeLevel": 3, "ID": 933 },
    { "InterestCode": "SEC", "Occupation": "Recreational Therapists", "CodeLevel": 3, "ID": 934 },
    { "InterestCode": "SEC", "Occupation": "Registered Nurses", "CodeLevel": 3, "ID": 935 },
    { "InterestCode": "SEC", "Occupation": "Respiratory Therapists", "CodeLevel": 3, "ID": 936 },
    { "InterestCode": "SEC", "Occupation": "Speech-Language Pathologists", "CodeLevel": 3, "ID": 937 },
    { "InterestCode": "SEC", "Occupation": "Surgical Assistants", "CodeLevel": 3, "ID": 938 },
    { "InterestCode": "SEC", "Occupation": "Therapists, All Other", "CodeLevel": 3, "ID": 939 },
    { "InterestCode": "SEC", "Occupation": "Veterinary Technologists and Technicians", "CodeLevel": 3, "ID": 940 },
    { "InterestCode": "SEC", "Occupation": "Vocational Education Teachers, Secondary School", "CodeLevel": 3, "ID": 941 },
    { "InterestCode": "SEC", "Occupation": "Child, Family, and School Social Workers", "CodeLevel": 3, "ID": 942 },
    { "InterestCode": "SEC", "Occupation": "Mental Health and Substance Abuse Social Workers", "CodeLevel": 3, "ID": 943 },
    { "InterestCode": "SEC", "Occupation": "Mental Health Counselors", "CodeLevel": 3, "ID": 944 },
    { "InterestCode": "SEC", "Occupation": "Healthcare Social Workers", "CodeLevel": 3, "ID": 945 },
    { "InterestCode": "SEC", "Occupation": "Substance Abuse and Behavioral Disorder Counselors", "CodeLevel": 3, "ID": 946 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Managers", "CodeLevel": 3, "ID": 947 },
    { "InterestCode": "SEC", "Occupation": "Human Resources Specialists", "CodeLevel": 3, "ID": 948 },
    { "InterestCode": "SEC", "Occupation": "Market Research Analysts and Marketing Specialists", "CodeLevel": 3, "ID": 949 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Specialists", "CodeLevel": 3, "ID": 950 },
    { "InterestCode": "SEC", "Occupation": "Compensation, Benefits, and Job Analysis Specialists", "CodeLevel": 3, "ID": 951 },
    { "InterestCode": "SEC", "Occupation": "Human Resources Assistants, Except Payroll and Timekeeping", "CodeLevel": 3, "ID": 952 },
    { "InterestCode": "SEC", "Occupation": "Human Resources Managers", "CodeLevel": 3, "ID": 953 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Managers", "CodeLevel": 3, "ID": 954 },
    { "InterestCode": "SEC", "Occupation": "Management Analysts", "CodeLevel": 3, "ID": 955 },
    { "InterestCode": "SEC", "Occupation": "Compensation, Benefits, and Job Analysis Specialists", "CodeLevel": 3, "ID": 956 },
    { "InterestCode": "SEC", "Occupation": "Human Resources Specialists", "CodeLevel": 3, "ID": 957 },
    { "InterestCode": "SEC", "Occupation": "Meeting, Convention, and Event Planners", "CodeLevel": 3, "ID": 958 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Specialists", "CodeLevel": 3, "ID": 959 },
    { "InterestCode": "SEC", "Occupation": "Administrative Services Managers", "CodeLevel": 3, "ID": 960 },
    { "InterestCode": "SEC", "Occupation": "Advertising and Promotions Managers", "CodeLevel": 3, "ID": 961 },
    { "InterestCode": "SEC", "Occupation": "Financial Managers", "CodeLevel": 3, "ID": 962 },
    { "InterestCode": "SEC", "Occupation": "Food Service Managers", "CodeLevel": 3, "ID": 963 },
    { "InterestCode": "SEC", "Occupation": "Funeral Home Managers", "CodeLevel": 3, "ID": 964 },
    { "InterestCode": "SEC", "Occupation": "Medical and Health Services Managers", "CodeLevel": 3, "ID": 965 },
    { "InterestCode": "SEC", "Occupation": "Property, Real Estate, and Community Association Managers", "CodeLevel": 3, "ID": 966 },
    { "InterestCode": "SEC", "Occupation": "Public Relations and Fundraising Managers", "CodeLevel": 3, "ID": 967 },
    { "InterestCode": "SEC", "Occupation": "Social and Community Service Managers", "CodeLevel": 3, "ID": 968 },
    { "InterestCode": "SEC", "Occupation": "Industrial Production Managers", "CodeLevel": 3, "ID": 969 },
    { "InterestCode": "SEC", "Occupation": "Logisticians", "CodeLevel": 3, "ID": 970 },
    { "InterestCode": "SEC", "Occupation": "Management Analysts", "CodeLevel": 3, "ID": 971 },
    { "InterestCode": "SEC", "Occupation": "Medical and Health Services Managers", "CodeLevel": 3, "ID": 972 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Managers", "CodeLevel": 3, "ID": 973 },
    { "InterestCode": "SEC", "Occupation": "Compensation, Benefits, and Job Analysis Specialists", "CodeLevel": 3, "ID": 974 },
    { "InterestCode": "SEC", "Occupation": "Meeting, Convention, and Event Planners", "CodeLevel": 3, "ID": 975 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Specialists", "CodeLevel": 3, "ID": 976 },
    { "InterestCode": "SEC", "Occupation": "Administrative Services Managers", "CodeLevel": 3, "ID": 977 },
    { "InterestCode": "SEC", "Occupation": "Advertising and Promotions Managers", "CodeLevel": 3, "ID": 978 },
    { "InterestCode": "SEC", "Occupation": "Financial Managers", "CodeLevel": 3, "ID": 979 },
    { "InterestCode": "SEC", "Occupation": "Food Service Managers", "CodeLevel": 3, "ID": 980 },
    { "InterestCode": "SEC", "Occupation": "Funeral Home Managers", "CodeLevel": 3, "ID": 981 },
    { "InterestCode": "SEC", "Occupation": "Medical and Health Services Managers", "CodeLevel": 3, "ID": 982 },
    { "InterestCode": "SEC", "Occupation": "Property, Real Estate, and Community Association Managers", "CodeLevel": 3, "ID": 983 },
    { "InterestCode": "SEC", "Occupation": "Public Relations and Fundraising Managers", "CodeLevel": 3, "ID": 984 },
    { "InterestCode": "SEC", "Occupation": "Social and Community Service Managers", "CodeLevel": 3, "ID": 985 },
    { "InterestCode": "SEC", "Occupation": "Industrial Production Managers", "CodeLevel": 3, "ID": 986 },
    { "InterestCode": "SEC", "Occupation": "Logisticians", "CodeLevel": 3, "ID": 987 },
    { "InterestCode": "SEC", "Occupation": "Management Analysts", "CodeLevel": 3, "ID": 988 },
    { "InterestCode": "SEC", "Occupation": "Medical and Health Services Managers", "CodeLevel": 3, "ID": 989 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Managers", "CodeLevel": 3, "ID": 990 },
    { "InterestCode": "SEC", "Occupation": "Compensation, Benefits, and Job Analysis Specialists", "CodeLevel": 3, "ID": 991 },
    { "InterestCode": "SEC", "Occupation": "Meeting, Convention, and Event Planners", "CodeLevel": 3, "ID": 992 },
    { "InterestCode": "SEC", "Occupation": "Training and Development Specialists", "CodeLevel": 3, "ID": 993 },
    { "InterestCode": "SEC", "Occupation": "Administrative Services Managers", "CodeLevel": 3, "ID": 994 },
    { "InterestCode": "SEC", "Occupation": "Advertising and Promotions Managers", "CodeLevel": 3, "ID": 995 },
    { "InterestCode": "SEC", "Occupation": "Financial Managers", "CodeLevel": 3, "ID": 996 },
    { "InterestCode": "SEC", "Occupation": "Food Service Managers", "CodeLevel": 3, "ID": 997 },
    { "InterestCode": "SEC", "Occupation": "Funeral Home Managers", "CodeLevel": 3, "ID": 998 },
    { "InterestCode": "SEC", "Occupation": "Medical and Health Services Managers", "CodeLevel": 3, "ID": 999 },
    { "InterestCode": "SEC", "Occupation": "Property, Real Estate, and Community Association Managers", "CodeLevel": 3, "ID": 1000 }
  ];
  
const loginCookie = getCookie("loginCookie")

// if there is no loginCookie - validate user login
if (!loginCookie) {
  console.log("cookie is: ", loginCookie )
  document.body.innerHTML = `
      <div class="error-container">
          <h1>404</h1>
          <p>Page Not Found</p>
      </div>
  `;
}

let question = document.querySelector('.question')
question.textContent = riasecQuestions[0].question

let counter = 0;
let scorearray = {
                        "Realistic" : 0,
                        "Investigative" : 0,
                        "Artistic" : 0,
                        "Social" : 0,
                        "Enterprising" : 0,
                        "Conventional": 0
                        }

async function answer(value) {

  if (counter<59) {
  scorearray[riasecQuestions[counter].category] += Number(value)
  console.log(riasecQuestions[counter].category, scorearray[riasecQuestions[counter].category])

  counter++
  question.textContent = riasecQuestions[counter].question
  document.querySelector('.count').textContent = `Question ${counter+1} of 60`

  }
  else if (counter>=59){
      document.querySelector('.questionBox').style.display = "none"
      // document.querySelector('.resultBox').style.display = "flex"
      document.querySelector('.uploadBox').style.display = "grid"

      document.querySelector('.resultBox').innerHTML = `<p>Your result is: Realistic ${scorearray['Realistic']}, Investigative ${scorearray['Investigative']}, Artistic ${scorearray['Artistic']}, Social ${scorearray['Social']}, Enterprising ${scorearray['Enterprising']}, Conventional ${scorearray['Conventional']}</p>`
    
      // Convert the object to an array of [key, value] pairs
      let sortedArray = Object.entries(scorearray).sort((a, b) => b[1] - a[1]);

      // Extract the first letter of the highest three keys and create a single string in uppercase
      topThreeLetters = sortedArray.slice(0, 3).map(item => item[0][0]).join('').toUpperCase();

      console.log(topThreeLetters);
      document.querySelector('.resultBox').innerHTML += `<p> Your Holland code is <b>${topThreeLetters}</b>.</p>`
      document.querySelector('.resultBox').innerHTML += `<p> Based on your data provided, your eligible jobs are: </p>`
        

      // add the jobs to the result
      for (let i = 0;i<jobdata.length;i++){
        // console.log(i)
        var str = topThreeLetters;
        var match = jobdata[i].InterestCode;
        var bool = true; 

        for (var prop of str) {
          if (str.length !== match.length || match.indexOf(prop) === -1) {
          bool = false; break;
          }
        };
        // console.log(bool); // false

        if (bool){
          document.querySelector('.resultBox').innerHTML += `<p><b> ${jobdata[i].InterestCode}</b> : ${jobdata[i].Occupation}.</p>`
        // make the post statement to upload the job results here
        // the job results are in a for loop and is jobdata[i].Occupation
      
        
          
      // return result
        }
      }

  }

  
}

function areAllCharactersPresent(str1, str2) {
    // Convert both strings to lowercase to make the check case-insensitive
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    // Convert strings to arrays of characters
    let arr1 = Array.from(str1);
    let arr2 = Array.from(str2);
  
    // Check if every character in arr1 is present in arr2
    return arr1.every(char => {
      let index = arr2.indexOf(char);
      if (index !== -1) {
        // Remove the found character from arr2 to handle duplicates correctly
        arr2.splice(index, 1);
        return true;
      }
      return false;
    });
  }


async function showResult(){
    document.querySelector('.resultBox').style.display = "flex"
    document.querySelector('.uploadBox').style.display = "none"
    // SUBMIT WAEC RESULTS HERE
    // make the post statement to upload the test scores and riasec code here
        // the test scores are like scorearray["Realistic"] and so on while the riasec code is topThreeLetters

        // use the cookie to make a post request to get the the matching username and student id. Then use those details to make the desired post request

        const urll = `https://riasecnode.onrender.com/api/cookiegetOne/${loginCookie}`
          const response = await fetch(urll);
          const result = await response.json();
          console.log("data is: ",result);

          // testResult is the combination of all the necessary student test info relevant to the counsellor in the correct json order as the schema
          // it must be in this format:
          // NEXT CHANGE; SUBMIT WAEC RESULTS AFTER SUBMIT RESULTS IS CLICKED 

          const testResult = {
            studentname: result.username,
            studentID: result.id,
           riasecScore: {
               realistic: scorearray["Realistic"],
               investigative: scorearray["Investigative"],
               artistic: scorearray["Artistic"],
               social: scorearray["Social"],
               enterprising: scorearray["Enterprising"],
               conventional: scorearray["Conventional"]
           },
           riasecCode: topThreeLetters,
           waecResults: {
               subject1:{
                   subjectName: document.getElementById("subject1name").value,
                   subjectScore: document.getElementById("subject1number").value
               },
               subject2:{
                subjectName: document.getElementById("subject2name").value,
                subjectScore: document.getElementById("subject2number").value
               },
               subject3:{
                subjectName: document.getElementById("subject3name").value,
                subjectScore: document.getElementById("subject3number").value
               },
               subject4:{
                subjectName: document.getElementById("subject4name").value,
                subjectScore: document.getElementById("subject4number").value
               },
               subject5:{
                subjectName: document.getElementById("subject5name").value,
                subjectScore: document.getElementById("subject5number").value
               },
               subject6:{
                subjectName: document.getElementById("subject6name").value,
                subjectScore: document.getElementById("subject6number").value
               },
               subject7:{
                subjectName: document.getElementById("subject7name").value,
                subjectScore: document.getElementById("subject7number").value
               },
               subject8:{
                subjectName: document.getElementById("subject8name").value,
                subjectScore: document.getElementById("subject8number").value
               },
               subject9:{
                subjectName: document.getElementById("subject9name").value,
                subjectScore: document.getElementById("subject9number").value
               }
           }
        }


          const postDetails = postData(`https://riasecnode.onrender.com/api/postcode`, testResult)
          document.querySelector('.resultBox').innerHTML += `<a href="/reqcousellor/requestcounsellor.html"> Need A Counselor? </a>`

          console.log("testResult iss: ", testResult, "and post details: ", postDetails)

}


// COOKIES
//CREATE COOKIE 
// cname - cookie name, cvalue - cookie value, exdays - no of days till expiry

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

// GETTING THE COOKIE
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// POST REQUEST
async function postData(url, data) {
  const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });
  const result = await response.text();
  // console.log(result);
  return result
}


let firstsubject = document.getElementById("subject1name")
let secondsubject = document.getElementById("subject2name")
let thirdsubject = document.getElementById("subject3name")
let fourthsubject = document.getElementById("subject4name")
let fifthsubject = document.getElementById("subject5name")
let sixthsubject = document.getElementById("subject6name")
let seventhsubject = document.getElementById("subject7name")
let eightsubject = document.getElementById("subject8name")
let ninthsubject = document.getElementById("subject9name")

function checksimilar(changedElement) {
  // Get all select elements with the class "subject-select"
  const selects = document.querySelectorAll('.subject-select');
  
  // Get the value of the changed select element
  const selectedValue = changedElement.value;
  
  // Only check if the selected value is not "nosubject"
  if (selectedValue !== "nosubject") {
      // Loop through all relevant select elements
      for (let i = 0; i < selects.length; i++) {
          const currentSelect = selects[i];
          
          // Skip the current changed element in comparison
          if (currentSelect !== changedElement && currentSelect.value === selectedValue) {
              // Alert the user
              alert("No two subjects can be the same.");
              
              // Reset the value of the changed element to "nosubject"
              changedElement.value = "nosubject";
              
              // Exit the function
              return;
          }
      }
  }
}


function checkSubjects() {
  // Get all select elements with the class "subject-select"
  const selects = document.querySelectorAll('.subject-select');
  
  // Loop through all relevant select elements
  for (let i = 0; i < selects.length; i++) {
      const currentSelect = selects[i];
      
      // Check if the current select has the value "nosubject"
      if (currentSelect.value === "nosubject") {
          // Alert the user
          alert("A subject is missing. Please complete your details.");
          
          // Exit the function to prevent further execution
          return;
      }
  }
  
  // If no "nosubject" values are found, call the showResult() function
  showResult();
}

// CLEARING COOKIE
function clearCookie() {
  // Set the cookie with the same name, a blank value, and an expiration date in the past
  document.cookie = loginCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}