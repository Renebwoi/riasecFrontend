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
    { "InterestCode": "CSR", "Occupation": "Amusement and Recreation Attendants", "CodeLevel": 3, "ID": 1 },
    { "InterestCode": "RC", "Occupation": "Agricultural Equipment Operators", "CodeLevel": 2, "ID": 2 },
    { "InterestCode": "RCS", "Occupation": "Baristas", "CodeLevel": 3, "ID": 3 },
    { "InterestCode": "RC", "Occupation": "Conveyor Operators and Tenders", "CodeLevel": 2, "ID": 4 },
    { "InterestCode": "RCE", "Occupation": "Cooks, Fast Food", "CodeLevel": 3, "ID": 5 },
    { "InterestCode": "RES", "Occupation": "Cooks, Institution and Cafeteria", "CodeLevel": 3, "ID": 6 },
    { "InterestCode": "RE", "Occupation": "Cooks, Restaurant", "CodeLevel": 2, "ID": 7 },
    { "InterestCode": "RES", "Occupation": "Cooks, Short Order", "CodeLevel": 3, "ID": 8 },
    { "InterestCode": "RC", "Occupation": "Dishwashers", "CodeLevel": 2, "ID": 9 },
    { "InterestCode": "RS", "Occupation": "Food Preparation Workers", "CodeLevel": 2, "ID": 10 },
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