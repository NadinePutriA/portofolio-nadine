import React, { useState, useEffect } from 'react';

import { 
  BarChart3, 
  BrainCircuit, 
  Database, 
  LineChart, 
  Mail,
  Phone, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  ChevronRight, 
  Menu, 
  X, 
  Layers, 
  UserCheck, 
  Calendar,
  Building2,
  FileDown,
  MapPin,
  Sparkles,
  Compass,
  Cpu,
  Layers3,
  ExternalLink,
  Target,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Search,
  Activity,
  FileText
} from 'lucide-react';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isCertZoomed, setIsCertZoomed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academicInfo = {
    university: "Universitas Negeri Surabaya (UNESA)",
    degree: "S1 Sains Data (B.S. in Data Science)",
    period: "2024 – Present",
    gpa: "3.62 / 4.00",
    focus: "Data Analytics & Machine Learning",
    interest: "Data Analyst & Data Scientist"
  };

  const dataJourney = [
    {
      year: "2024",
      title: "Starting the Journey",
      subtitle: "Academic Foundation",
      description: "Began undergraduate studies in Data Science at Universitas Negeri Surabaya. Built strong mathematical foundations in calculus, linear algebra, discrete mathematics, and fundamental computational logic."
    },
    {
      year: "2025",
      title: "Exploring Data",
      subtitle: "Applied Analytics & NLP",
      description: "Mastered Python, SQL, and statistical EDA. Developed end-to-end academic projects including Sentiment Analysis on Shopee Play Store reviews, Decision Tree classifiers, and Data Wrangling on macroeconomic datasets."
    },
    {
      year: "2026",
      title: "Building Analytical Projects",
      subtitle: "Machine Learning & Engineering",
      description: "Architected advanced machine learning pipelines (Reddit Stress Prediction, Obfuscated Gambling Comment Detection with 97.83% accuracy), PostgreSQL Star Schema Data Warehouses with Atoti OLAP, and secured professional certifications from BINUS Center and Karirnex."
    }
  ];

  const experiences = [
    {
      role: "Admin & Social Media | Creative & Marketing",
      organization: "Selasarseken",
      period: "2026",
      type: "Work Experience",
      icon: Briefcase,
      bullets: [
        "Managed sales administration and maintained prompt, professional customer communication.",
        "Contributed to digital marketing strategy and creative content development to enhance brand engagement.",
        "Collaborated with the creative team to organize digital product catalogs and optimize daily online store operations."
      ]
    },
    {
      role: "Liaison Officer (LO) — Talent & Show Division",
      organization: "Festival Kebangsaan Gema Kampus UNESA Batch 7",
      period: "May 2026",
      type: "Event Organization",
      icon: UserCheck,
      bullets: [
        "Coordinated talent accommodation, stage schedules, and logistics during major university cultural performances.",
        "Facilitated seamless communication between external guest performers and internal stage committees.",
        "Ensured strict compliance with show timelines and resolved operational issues under dynamic event conditions."
      ]
    },
    {
      role: "Event Division Coordinator",
      organization: "Mathematical Solving (Online Tutoring Community)",
      period: "Nov 2025 – Oct 2026",
      type: "Community Leadership",
      icon: Layers,
      bullets: [
        "Managed internal team workflows and organized online learning session schedules.",
        "Coordinated interactive problem-solving workshops and educational webinars focused on mathematical logic.",
        "Fostered active participant engagement and gathered feedback to refine instructional quality."
      ]
    },
    {
      role: "Human Resource Development (PSDM) Member",
      organization: "UKM Protokoler UNESA",
      period: "March 2026 – Present",
      type: "Student Organization",
      icon: GraduationCap,
      bullets: [
        "Supported internal member capacity-building workshops and leadership development programs.",
        "Handled divisional administration and assisted in executing official university ceremonial protocol events.",
        "Collaborated across committees to maintain organizational continuity and member growth."
      ]
    }
  ];

  const projects = [
    {
      id: "proj-stress",
      title: "Social Media Stress Prediction",
      category: "Machine Learning",
      subtitle: "Reddit User Stress Classification using Linguistic & Social Features",
      summary: "Predictive machine learning pipeline analyzing emotional, cognitive, and social interaction characteristics to classify Reddit user stress levels.",
      academicContext: "Course: Artificial Intelligence | B.S. Data Science UNESA",
      description: "This project explores machine learning algorithms to predict user stress levels based on linguistic and social interaction markers using the Kaggle Reddit Stress Analysis dataset. Feature importance evaluation highlighted emotional tone and vocabulary choices as primary indicators.",
      tech: ["Python", "Scikit-Learn", "Random Forest", "Logistic Regression", "Robust Scaler", "Pandas"],
      github: "https://github.com/NadinePutriA/Social-Media-Stress-Prediction",
      datasetInfo: "Reddit Stress Analysis Dataset (2,838 entries) — Target: 0 (Not Stressed), 1 (Stressed). Features include linguistic (tone, negemo, iword, anxiety) and social (karma, upvote ratio).",
      problem: "Detecting early digital markers of psychological stress from user-generated text and social activity without relying on invasive diagnostic surveys.",
      objectives: [
        "Analyze relationships between linguistic features and stress categories.",
        "Identify the predictive weight of social interaction attributes.",
        "Compare Logistic Regression (unscaled vs. robust scaled) against Random Forest Classifiers."
      ],
      methodology: [
        "Data Cleaning: Imputed missing values, stripped metadata identifiers, and standardized column names.",
        "EDA & Outliers: Performed Interquartile Range (IQR) outlier detection and correlation analysis.",
        "Feature Selection: Selected top 50 discriminative features using Random Forest importance metrics.",
        "Modeling & Evaluation: Split data 80:20 (stratified). Evaluated via Accuracy, Precision, Recall, and F1-score."
      ],
      results: "Random Forest achieved the best performance with 77.8% Accuracy, Precision, Recall, and F1-Score. Features such as 'tone', 'negemo', 'iword', and 'clout' showed the strongest predictive weight.",
      keyMetrics: [
        { name: "Best Accuracy", val: "77.8%" },
        { name: "Best F1-Score", val: "77.8%" },
        { name: "Top Model", val: "Random Forest" }
      ],
      visualTheme: "gradient-blue"
    },
    {
      id: "proj-judi",
      title: "YouTube Online Gambling Promotion Detection",
      category: "Text Mining & NLP",
      subtitle: "Indonesian Spam Comment Detection with Character Obfuscation Normalization",
      summary: "High-precision NLP classification system detecting online gambling promotion comments on YouTube, resolving Unicode and leetspeak character obfuscations.",
      academicContext: "Course: Machine Learning | B.S. Data Science UNESA",
      description: "Classifies Indonesian YouTube comments into normal and online gambling promotional content. Solves character obfuscation—a technique using Unicode symbols, special characters, and leetspeak to bypass automated moderation filters.",
      tech: ["Python", "SVM", "Multilayer Perceptron", "TF-IDF", "Sastrawi", "NLP Obfuscation"],
      github: "https://github.com/NadinePutriA/Youtube-Gambling-Promotion-Detection",
      datasetInfo: "Kaggle Judi Online Dataset (9,001 cleaned entries from 10,230 raw comments). Features: comment text, cleaned comment, target label, and timestamp.",
      problem: "Automated filters fail when spam comments utilize Unicode substitution and decorative character splitting to obscure gambling keywords.",
      objectives: [
        "Classify comments into normal (0) and online gambling promotion (1).",
        "Evaluate performance improvements brought by advanced character obfuscation normalization.",
        "Benchmark Support Vector Machine (SVM) against Multilayer Perceptron (MLP)."
      ],
      methodology: [
        "Advanced Normalization: Handled Unicode normalization, spaced-character joining, and selective leetspeak decoding.",
        "Standard Preprocessing: Lowercasing, punctuation stripping, tokenization, stopword removal, and Sastrawi stemming.",
        "Feature Extraction: TF-IDF unigrams and bigrams (capped at top 10,000 features).",
        "Modeling: Trained SVM and MLP models using 80:20 stratified split and 5-fold cross-validation."
      ],
      results: "SVM combined with Advanced Preprocessing yielded top metrics: 97.83% Accuracy and 96.69% F1-Score with an inference runtime of ~0.02s.",
      keyMetrics: [
        { name: "Accuracy", val: "97.83%" },
        { name: "F1-Score", val: "96.69%" },
        { name: "5-Fold CV F1", val: "95.85%" }
      ],
      visualTheme: "gradient-slate"
    },
    {
      id: "proj-shopee",
      title: "Shopee Review Sentiment & LDA Topic Modeling",
      category: "Text Mining & NLP",
      subtitle: "Multi-class Naive Bayes Sentiment Analysis & PyLDAvis Topic Extraction",
      summary: "End-to-end NLP pipeline categorizing Shopee Play Store reviews using Multinomial Naive Bayes, SMOTE oversampling, and Latent Dirichlet Allocation (LDA).",
      academicContext: "Course: Text Processing | B.S. Data Science UNESA",
      description: "Collects and categorizes Shopee user reviews into Positive, Neutral, and Negative sentiments. Uses SMOTE on training data to balance class distributions and applies LDA to isolate specific operational feedback themes.",
      tech: ["Python", "Naive Bayes", "SMOTE", "LDA", "TF-IDF", "pyLDAvis", "Scikit-Learn"],
      github: "https://github.com/NadinePutriA/Shopee-Review-Sentiment-Topic-Modeling",
      datasetInfo: "1,000 user reviews scraped from Google Play Store with ratings, review text, timestamps, and usernames.",
      problem: "Extracting actionable user experience insights from unstructured customer app store reviews with imbalanced rating distributions.",
      objectives: [
        "Categorize user feedback into Positive (4-5), Neutral (3), and Negative (1-2) sentiments.",
        "Address severe rating class imbalance using SMOTE oversampling.",
        "Discover 5 distinct topics per sentiment category using LDA topic modeling."
      ],
      methodology: [
        "Scraping & Cleaning: Web scraping, slang normalization, emoji removal, tokenization, and stemming.",
        "Feature Engineering: TF-IDF for classification; CountVectorizer for LDA topic extraction.",
        "Classification: Multinomial Naive Bayes paired with SMOTE applied strictly to training splits.",
        "Topic Analysis: Extracted 5 core topics per sentiment based on coherence score evaluation."
      ],
      results: "Naive Bayes with SMOTE achieved 80% Accuracy and 0.82 Weighted F1-Score. Positive topics centered on promo deals and delivery speed; negative topics highlighted order tracking errors.",
      keyMetrics: [
        { name: "Accuracy", val: "80.0%" },
        { name: "Weighted F1", val: "0.82" },
        { name: "Positive F1", val: "0.91" }
      ],
      visualTheme: "gradient-cream"
    },
    {
      id: "proj-dw",
      title: "Global Superstore Data Warehouse & OLAP",
      category: "Database & Data Engineering",
      subtitle: "PostgreSQL Star Schema Architecture & Atoti OLAP Cube Integration",
      summary: "Enterprise Data Warehouse implementation analyzing retail discount sensitivity against net profit across 51,000+ global transactions.",
      academicContext: "Course: Data Warehouse | B.S. Data Science UNESA",
      description: "Designed a Star Schema Data Warehouse in PostgreSQL using Global Superstore transaction data. Built ETL pipelines in Python/Pandas, optimized analytical queries via Materialized Views and Indexing, and generated interactive multidimensional OLAP cubes using Atoti.",
      tech: ["Python", "PostgreSQL", "SQLAlchemy", "Atoti OLAP", "Star Schema", "Materialized Views"],
      github: "https://github.com/NadinePutriA/Implementasi-Data-Warehouse-dan-OLAP-Global-Superstore",
      datasetInfo: "Global Superstore Dataset comprising 51,290 retail transactions across 2011–2014.",
      problem: "Determining whether aggressive promotional discounting increases overall profitability or erodes net retail margins.",
      objectives: [
        "Design a Star Schema with 1 Fact table (fact_sales) and 5 Dimension tables (dim_customer, dim_product, dim_date, dim_region, dim_shipping).",
        "Execute automated ETL processing storing transformed data into PostgreSQL.",
        "Build an OLAP cube and multidimensional dashboards in Atoti."
      ],
      methodology: [
        "Data Staging: Standardized date attributes, extracted Year/Quarter/Month dimension attributes, and dropped irrelevant columns.",
        "Schema Build: Constructed star schema constraints in PostgreSQL.",
        "Database Tuning: Created indexes and Materialized Views analyzed with EXPLAIN ANALYZE.",
        "OLAP Integration: Connected Atoti to PostgreSQL tables for real-time multidimensional slicing & dicing."
      ],
      results: "Created 8 analytical dashboard modules. Analysis revealed that discounts exceeding 20% caused significant profit declines despite driving higher sales volume.",
      keyMetrics: [
        { name: "Transactions", val: "51,290" },
        { name: "Dim Tables", val: "5" },
        { name: "Query Speedup", val: "> 60%" }
      ],
      visualTheme: "gradient-blue"
    },
    {
      id: "proj-crypto",
      title: "FastAPI Cryptography Service (Punk Records-v1)",
      category: "Tools & System Security",
      subtitle: "ECDSA Digital Signatures, ECDH Key Exchange & AES-GCM Encryption",
      summary: "Lightweight RESTful API microservice implementing hybrid cryptography protocols for communication security, session integrity, and digital PDF signing.",
      academicContext: "API Security & Applied Cryptography Development",
      description: "Microservice integrated into Punk Records-v1 using FastAPI. Implements modern cryptographic algorithms for user authentication, shared secret key exchange, encrypted payload relay, and digital PDF document verification.",
      tech: ["Python", "FastAPI", "Cryptography", "ECDSA", "ECDH", "AES-GCM", "PDF Signature"],
      github: "https://github.com/NadinePutriA/Kriptografi-pada-Punk-Records-v1-Menggunakan-FastAPI",
      datasetInfo: "RESTful Cryptographic Endpoints — Security & Transmission Verification Protocols.",
      problem: "Ensuring payload confidentiality, sender authenticity, and document integrity across web API services.",
      objectives: [
        "Implement non-repudiation using Elliptic Curve Digital Signatures (ECDSA).",
        "Establish hybrid encryption using ECDH key exchange and AES-GCM payload encryption.",
        "Support server-side PDF digital signature verification."
      ],
      methodology: [
        "Asymmetric Cryptography: Generated ECC keypairs for digital signing and public key management.",
        "Symmetric Encryption: Derived shared secrets via ECDH, encrypting message data using AES-GCM.",
        "Encrypted Relay: Built payload routing endpoints that transmit data without exposing plaintext.",
        "PDF Signing: Implemented signature hashing and timestamp verification for PDF documents."
      ],
      results: "Successfully delivered a fast, secure API service protecting communication integrity and client session data.",
      keyMetrics: [
        { name: "Algorithm", val: "ECDSA/ECDH" },
        { name: "Encryption", val: "AES-GCM" },
        { name: "Framework", val: "FastAPI" }
      ],
      visualTheme: "gradient-slate"
    },
    {
      id: "proj-movie",
      title: "Movie Recommendation System (Decision Tree)",
      category: "Machine Learning",
      subtitle: "Rule-Based Classifier with IMDb Rating Thresholding & NetworkX Tree Visuals",
      summary: "Rule-based recommendation classifier evaluating film suitability based on IMDb ratings, genre encodings, and audience age classifications.",
      academicContext: "Course: Data Structures & Algorithms | B.S. Data Science UNESA",
      description: "Classifies whether a film is recommended based on genre, origin country, age rating, and IMDb rating rules (> 5.0). Renders visual decision tree structures using Scikit-learn and NetworkX.",
      tech: ["Python", "Scikit-Learn", "Decision Tree", "NetworkX", "Pandas", "Matplotlib"],
      github: "https://github.com/NadinePutriA/Sistem-Rekomendasi-Film-Decision-Tree",
      datasetInfo: "LIST_GENRE_FILM_SDA.csv — Attributes: Title, Release Year, Country, IMDb Rating, Age Rating, Genre.",
      problem: "Generating explainable movie recommendations derived from structured categorical parameters.",
      objectives: [
        "Convert categorical film metadata into numerical encodings.",
        "Establish recommendation targets based on IMDb ratings (> 5.0).",
        "Train a Decision Tree Classifier and visualize rule paths."
      ],
      methodology: [
        "Data Preprocessing: Cleaned missing ratings and filtered invalid entries.",
        "Label Encoding: Mapped categorical variables into numerical matrices.",
        "Model Training: Fitted DecisionTreeClassifier with depth constraint max_depth=5.",
        "Tree Graphing: Visualized rule hierarchies using Scikit-learn plot_tree and NetworkX graphs."
      ],
      results: "Delivered an interpretable model producing accurate recommendation lists and clear decision rules.",
      keyMetrics: [
        { name: "Max Depth", val: "5" },
        { name: "Rule Logic", val: "Explainable" },
        { name: "IMDb Threshold", val: "> 5.0" }
      ],
      visualTheme: "gradient-cream"
    },
    {
      id: "proj-audio",
      title: "Digital Audio Noise Reduction",
      category: "Signal Processing",
      subtitle: "Comparative Analysis of FIR (Hamming/Blackman) & IIR (Butterworth/Chebyshev) Filters",
      summary: "Digital signal processing filter design comparing FIR and IIR architectures to eliminate artificial Gaussian noise from mono audio signals.",
      academicContext: "Course: Digital Signal Processing | B.S. Data Science UNESA",
      description: "Analyzes audio signals (48 kHz sample rate, ~507 Hz main tone). Designs Low-Pass and Band-Pass FIR (Hamming & Blackman windows) and IIR (Butterworth & Chebyshev Type I) filters, evaluating SNR improvements.",
      tech: ["Python", "SciPy Signal", "NumPy", "Matplotlib", "FFT Analysis", "Audio Processing"],
      github: "https://github.com/NadinePutriA/Digital-Audio-Noise-Reduction",
      datasetInfo: "48 kHz Mono Audio Signal injected with synthetic Gaussian noise (Noisy Baseline SNR: 3.93 dB).",
      problem: "Suppressing unwanted background noise while preserving spectral energy and audio clarity.",
      objectives: [
        "Identify dominant frequencies using Fast Fourier Transform (FFT).",
        "Design Low-Pass and Band-Pass FIR & IIR filter variations.",
        "Evaluate noise suppression objectively via Signal-to-Noise Ratio (SNR) metrics."
      ],
      methodology: [
        "Spectral Analysis: Computed FFT magnitude spectrum to determine cut-off frequencies.",
        "Filter Design: Synthesized FIR filters via windowing and IIR filters via bilinear transformations.",
        "Processing: Applied forward-backward zero-phase filtering.",
        "Evaluation: Measured baseline vs filtered SNR, RMS, and spectral centroids."
      ],
      results: "IIR Low-Pass Chebyshev Type I filter achieved the highest SNR of 8.39 dB (Butterworth: 8.26 dB, FIR Hamming: 6.68 dB), significantly surpassing the 3.93 dB noisy baseline.",
      keyMetrics: [
        { name: "Chebyshev SNR", val: "8.39 dB" },
        { name: "Butterworth SNR", val: "8.26 dB" },
        { name: "Noisy Baseline", val: "3.93 dB" }
      ],
      visualTheme: "gradient-blue"
    },
    {
      id: "proj-arima",
      title: "Sales Revenue Time Series Forecasting (ARIMA)",
      category: "Data Analytics & Forecasting",
      subtitle: "Weekly E-commerce Revenue Trend Modeling & ADF Stationarity Testing",
      summary: "Time-series forecasting project modeling weekly retail revenue dynamics using ARIMA(1,0,1) with Dickey-Fuller stationarity validation.",
      academicContext: "Course: Data Mining | B.S. Data Science UNESA",
      description: "Processes 5,000 retail sales transactions aggregated into 130 weekly observations. Conducts stationarity checks, ACF/PACF parameter identification, ARIMA modeling, and 12-week revenue forecasting.",
      tech: ["Python", "ARIMA", "Statsmodels", "Pandas", "ADF Test", "Matplotlib"],
      github: "https://github.com/NadinePutriA/Sales-Time-Series-Forecasting-Arima",
      datasetInfo: "Global Retail Sales Dataset (Jan 2023 – Jun 2025, 130 weekly aggregated records).",
      problem: "Forecasting upcoming cash flow trends to optimize inventory purchasing and financial planning.",
      objectives: [
        "Aggregate daily transaction logs into chronological weekly revenue series.",
        "Verify stationarity using the Augmented Dickey-Fuller (ADF) test.",
        "Select optimal ARIMA(p,d,q) orders via Akaike Information Criterion (AIC)."
      ],
      methodology: [
        "Preprocessing: Aggregated revenue, filled temporal gaps, and removed outliers via IQR.",
        "Stationarity Test: ADF Test yielded p-value = 0.0023, confirming stationarity without differencing.",
        "Order Selection: Evaluated ACF/PACF plots and AIC scores to choose ARIMA(1,0,1) (AIC: 2512.30).",
        "Diagnostics: Assessed model errors using MAE (38,649), RMSE (50,108), MAPE (24.89%), and Ljung-Box tests."
      ],
      results: "Forecasted stable weekly revenue between 192,000 and 193,500 over the next 12-week horizon with residual independence.",
      keyMetrics: [
        { name: "Model", val: "ARIMA(1,0,1)" },
        { name: "AIC", val: "2512.30" },
        { name: "MAPE", val: "24.89%" }
      ],
      visualTheme: "gradient-slate"
    },
    {
      id: "proj-macro",
      title: "Macroeconomic & Foreign Tourism Impact Analysis",
      category: "Data Analytics & Forecasting",
      subtitle: "Decade Monthly Time-Series Integration (Inflation & USD/IDR Exchange Rates)",
      summary: "Data wrangling and statistical time-series study examining how inflation rate fluctuations and USD/IDR exchange rates influenced foreign tourist arrivals to Indonesia (2014–2024).",
      academicContext: "Data Wrangling & Macroeconomic Research Project | B.S. Data Science UNESA",
      description: "Integrates 10 years of monthly macro-level data (Jan 2014 – Dec 2024) combining foreign tourist arrivals, inflation percentage, and USD to Rupiah exchange rates into a single master time series dataframe.",
      tech: ["Python", "Data Wrangling", "Pandas", "Seaborn", "Time Series Analysis", "Matplotlib"],
      github: "https://github.com/NadinePutriA/Analisis-Pengaruh-Inflasi-dan-Nilai-Tukar-Rupiah-terhadap-Jumlah-Kunjungan-Wisatawan-Mancanegara-di-Indonesia-",
      datasetInfo: "Integrated Monthly Official Secondary Data (Jan 2014 – Dec 2024, 132 monthly snapshots).",
      problem: "Understanding macroeconomic sensitivities influencing international tourism recovery and national revenue.",
      objectives: [
        "Clean, merge, and align multi-source macroeconomic datasets into a unified index.",
        "Examine correlation lags between exchange rate shocks and arrival volumes.",
        "Visualize long-term trends and post-pandemic recovery patterns."
      ],
      methodology: [
        "Data Integration: Joined disparate datasets on datetime keys, standardizing interval and ratio scale metrics.",
        "Wrangling: Imputed missing temporal values and normalized currency notations.",
        "Exploratory Analysis: Generated rolling window correlations and seasonal trend decompositions.",
        "Visualization: Crafted multi-axis trend charts comparing inflation spikes with tourist arrival dips."
      ],
      results: "Demonstrated clear inverse relationship trends during economic shocks and highlighted exchange rate stabilization impact on tourism recovery rates.",
      keyMetrics: [
        { name: "Timespan", val: "2014 – 2024" },
        { name: "Granularity", val: "Monthly" },
        { name: "Variables", val: "3 Core Indicators" }
      ],
      visualTheme: "gradient-cream"
    }
  ];

  const skillGroups = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" }
      ]
    },
    {
      category: "Data Analytics & Visualization",
      skills: [
        { name: "Exploratory Data Analysis (EDA)", icon: null },
        { name: "Data Cleaning & Preprocessing", icon: null },
        { name: "Data Visualization", icon: null },
        { name: "Statistical Analysis", icon: null },
        { name: "Text Mining", icon: null },
        { name: "Sentiment Analysis", icon: null }
      ]
    },
    {
      category: "Machine Learning & Statistics",
      skills: [
        { name: "Predictive Modeling", icon: null },
        { name: "Classification (SVM, Random Forest, Naive Bayes)", icon: null },
        { name: "Feature Extraction & Importance", icon: null },
        { name: "Topic Modeling (LDA)", icon: null },
        { name: "Signal Filtering (FIR/IIR)", icon: null }
      ]
    },
    {
      category: "Database & Data Engineering",
      skills: [
        { name: "PostgreSQL / pgAdmin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Star Schema Architecture", icon: null },
        { name: "Data Warehouse ETL", icon: null },
        { name: "Atoti OLAP Cubes", icon: null },
        { name: "Query Optimization", icon: null }
      ]
    },
    {
      category: "Tools & Design",
      skills: [
        { name: "Google Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
        { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "RStudio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" },
        { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png" },
        { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "Microsoft Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
      ]
    }
  ];

  const certificates = [
    {
      id: "cert-python",
      title: "Fundamental Programming with Python",
      issuer: "BINUS Center",
      period: "Jan 14 – Feb 02, 2026",
      score: "Score: 92 / 100",
      description: "Short course program covering core Python syntax, algorithmic logic, object-oriented concepts, file operations, and structured problem-solving.",
      certFile: "/Sertif-python.pdf",
      certImage: "/images/Sertif-python.jpg",
      placeholderBg: "bg-emerald-900/10 text-emerald-800"
    },
    {
      id: "cert-excel",
      title: "Data Processing with Microsoft Excel",
      issuer: "BINUS Center",
      period: "Jul 04 – Aug 15, 2026",
      score: "Score: 95 / 100",
      description: "Advanced data manipulation, complex formula auditing, Power Query ETL, dynamic pivot tables, and analytical dashboarding.",
      certFile: "/Sertif-Excel.pdf",
      certImage: "/images/Sertif-Excel.jpg",    
      placeholderBg: "bg-green-900/10 text-green-800"
    },
    {
      id: "cert-karirnex",
      title: "Data Analyst Bootcamp: Excel, SQL & Career Prep",
      issuer: "Karirnex by PT Ebiz Karisma Internasional",
      period: "Nov 25 – Nov 29, 2025",
      score: "Level: Intermediate",
      description: "Practical data analysis bootcamp covering relational database querying in SQL, exploratory analysis, business KPI tracking, and mini project execution.",
      certFile: "/Sertifikat Nadine Putri Aulia Bootcamp Data Analyst Persiapan Kerja Karirnex.pdf",
      certImage: "/images/Sertif-karir.jpg",
      placeholderBg: "bg-blue-900/10 text-blue-800"
    },
    {
      id: "cert-aws",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services (AWS)",
      period: "July 20, 2026",
      score: "Official AWS Training",
      description: "Foundational cloud computing training covering AWS core services, global infrastructure, security, architecture, pricing models, and cloud data basics.",
      certFile: "/9975e75e-5594-4add-959c-bef064cfe717.pdf",
      certImage: "/images/Sertif-aws.jpg",
      placeholderBg: "bg-orange-900/10 text-orange-800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F0E9] text-[#303E4D] font-sans antialiased selection:bg-[#526B86] selection:text-white">
      
      {/* ---------------- STICKY NAVIGATION BAR ---------------- */}
      <nav className="sticky top-0 z-40 bg-[#F4F0E9]/95 backdrop-blur-md border-b border-[#303E4D]/10 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Initial */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => scrollTo('home')}
            >
              <div className="w-9 h-9 rounded-xl bg-[#526B86] text-white flex items-center justify-center font-bold text-sm tracking-widest shadow-xs group-hover:bg-[#303E4D] transition-colors">
                NPA
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-[#303E4D] text-sm tracking-tight leading-none">Nadine Putri Aulia</span>
                <span className="text-[11px] text-[#526B86] font-medium mt-0.5">Data Science Portfolio</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Certificates', id: 'certificates' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeSection === item.id
                      ? 'bg-[#526B86] text-white shadow-2xs'
                      : 'text-[#303E4D] hover:bg-[#303E4D]/10 hover:text-[#526B86]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#303E4D] hover:bg-[#303E4D]/10"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F4F0E9] border-b border-[#303E4D]/10 px-4 pt-2 pb-4 space-y-1 shadow-md">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Certificates', id: 'certificates' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-xs font-semibold ${
                  activeSection === item.id
                    ? 'bg-[#526B86] text-white'
                    : 'text-[#303E4D] hover:bg-[#303E4D]/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="md:col-span-7 text-left space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#526B86]/30 text-[11px] font-bold text-[#526B86] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#526B86] animate-pulse" />
                Data Science Student • UNESA Class of 2024
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#303E4D] tracking-tight leading-tight">
                  Nadine Putri Aulia
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#526B86]">
                  Data Science Student | <span className="text-[#303E4D]">Aspiring Data Analyst</span>
                </p>
                <p className="text-xs sm:text-sm italic font-semibold text-[#526B86]/90 border-l-2 border-[#526B86] pl-3 py-0.5">
                  "Turning Data into Meaningful Insights."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#303E4D]/80 max-w-xl leading-relaxed">
                Passionate about exploring data, uncovering underlying patterns, and transforming raw information into actionable insights through analytical thinking and modern technologies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-5 py-2.5 rounded-xl bg-[#526B86] text-white text-xs font-semibold hover:bg-[#303E4D] transition-all shadow-xs flex items-center gap-2 group"
                >
                  <span>Explore Projects</span>
                  <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="/CV_Nadine_Putri_Aulia.pdf"
                  download="CV_Nadine_Putri_Aulia.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white text-[#303E4D] text-xs font-semibold border border-[#303E4D]/20 hover:bg-[#303E4D]/5 transition-all flex items-center gap-2"
                >
                  <FileDown size={15} className="text-[#526B86]" />
                  <span>Download CV</span>
                </a>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-4 py-2.5 rounded-xl bg-white text-[#303E4D] text-xs font-semibold border border-[#303E4D]/20 hover:bg-[#303E4D]/5 transition-all flex items-center gap-2"
                >
                  <Mail size={15} className="text-[#526B86]" />
                  <span>Get In Touch</span>
                </button>
              </div>

              {/* Social Quick Links */}
              <div className="flex items-center gap-3 pt-1 text-xs text-[#526B86]">
                <span className="text-[11px] font-semibold text-[#303E4D]/60 uppercase tracking-wider">
                  Profiles:
                </span>

                {/* GitHub */}
                <a
                  href="https://github.com/NadinePutriA"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#303E4D]/15 text-[#303E4D] hover:bg-[#526B86] hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nadineputriaulia"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#303E4D]/15 text-[#303E4D] hover:bg-[#526B86] hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nadinputriia/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#303E4D]/15 text-[#303E4D] hover:bg-[#526B86] hover:text-white transition-colors"
                  title="Instagram Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>

            </div>

            {/* Right Column Profile Picture Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs">
                
                {/* Decorative Background Frame */}
                <div className="absolute inset-0 bg-[#526B86]/20 rounded-2xl transform rotate-2 scale-102" />
                
                <div className="relative bg-white p-4 rounded-2xl border border-[#303E4D]/15 shadow-md space-y-3">
                  
                  {/* Photo Frame Container - Customizable Photo Ready */}
                  <div className="aspect-4/3 sm:aspect-square w-full rounded-xl bg-[#F4F0E9] overflow-hidden flex items-center justify-center border border-[#303E4D]/10 relative group">
                    
                    {/* Fallback SVG Styled Avatar Container */}
                    <img
                      src="/images/photo-profile.jpg"
                      alt="Nadine Putri Aulia"
                      className="w-full h-full object-cover object-[center_75%] sm:object-top"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    
                    <div className="hidden w-full h-full flex-col items-center justify-center bg-[#526B86] text-white p-6 text-center space-y-2">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold border-2 border-white/40">
                        NPA
                      </div>
                      <div className="text-xs font-semibold tracking-wide">Nadine Putri Aulia</div>
                      <div className="text-[10px] text-white/80">Data Science Student</div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Compact Academic Highlights Bar */}
          <div className="mt-12 pt-6 border-t border-[#303E4D]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
          
            <div className="bg-white p-3.5 rounded-xl border border-[#303E4D]/15 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#F4F0E9] text-[#526B86]">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#526B86] tracking-wider">GPA / IPK</div>
                <div className="text-xs font-extrabold text-[#303E4D]">3.62 / 4.00</div>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#303E4D]/15 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#F4F0E9] text-[#526B86]">
                <Building2 size={18} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-[#526B86] tracking-wider">Institution</div>
                <div className="text-xs font-bold text-[#303E4D]">Universitas Negeri Surabaya</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- ABOUT ME SECTION ---------------- */}
      <section id="about" className="py-16 bg-white border-y border-[#303E4D]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start text-left mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#526B86] bg-[#F4F0E9] px-3 py-1 rounded-full mb-2 border border-[#303E4D]/10">
              Personal Profile & Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303E4D]">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Bio Narrative */}
            <div className="lg:col-span-7 text-left space-y-5 pt-2">
              <p className="text-sm sm:text-base text-[#303E4D]/90 leading-relaxed">
                I am an undergraduate Data Science student at Universitas Negeri Surabaya, class of 2024, with a strong interest in Data Analytics, Exploratory Data Analysis, Machine Learning, Text Mining, and Data Visualization.
              </p>

              <p className="text-sm sm:text-base text-[#303E4D]/90 leading-relaxed">
                I enjoy exploring datasets, identifying meaningful patterns, and transforming data into valuable insights that support better decision-making.
              </p>

              <p className="text-sm sm:text-base text-[#303E4D]/90 leading-relaxed">
                Beyond technical skills, I continuously develop my communication, collaboration, and problem-solving abilities through academic projects, research-based activities, and student organizations.
              </p>
            </div>

            {/* Right Column: 6 Highlight Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 text-left">
              
              <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1">
                <div className="text-[10px] text-[#526B86] font-bold uppercase">University</div>
                <div className="text-xs font-bold text-[#303E4D]">UNESA</div>
                <div className="text-[10px] text-[#303E4D]/70">Univ. Negeri Surabaya</div>
              </div>

              <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1">
                <div className="text-[10px] text-[#526B86] font-bold uppercase">Major</div>
                <div className="text-xs font-bold text-[#303E4D]">S1 Sains Data</div>
                <div className="text-[10px] text-[#303E4D]/70">B.S. in Data Science</div>
              </div>

              <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1">
                <div className="text-[10px] text-[#526B86] font-bold uppercase">Academic Journey</div>
                <div className="text-xs font-bold text-[#303E4D]">2024 – Present</div>
                <div className="text-[10px] text-[#303E4D]/70">Class of 2024</div>
              </div>

              <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1">
                <div className="text-[10px] text-[#526B86] font-bold uppercase">Current GPA</div>
                <div className="text-xs font-extrabold text-[#526B86]">3.62 / 4.00</div>
                <div className="text-[10px] text-[#303E4D]/70">Academic Honors</div>
              </div>

              <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1 col-span-2">
                <div className="text-[10px] text-[#526B86] font-bold uppercase">Current Academic Focus</div>
                <div className="text-xs font-bold text-[#303E4D]">{academicInfo.focus}</div>
              </div>

              <div className="bg-[#526B86] text-white p-3.5 rounded-xl border border-[#303E4D]/10 space-y-1 col-span-2">
                <div className="text-[10px] text-white/80 font-bold uppercase">Target Career Roles</div>
                <div className="text-xs font-bold text-white">{academicInfo.interest}</div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- EXPERIENCE & ORGANIZATION ---------------- */}
      <section id="experience" className="py-16 bg-[#F4F0E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start text-left mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#526B86] bg-white px-3 py-1 rounded-full mb-2 border border-[#303E4D]/10">
              Work & Organizational Roles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303E4D]">Experience</h2>
          </div>

          <div className="max-w-3xl space-y-6 relative border-l-2 border-[#526B86]/30 ml-3 sm:ml-4 pl-6 text-left">
            {experiences.map((exp, idx) => {
              return (
                <div key={idx} className="relative group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#526B86] border-2 border-white group-hover:bg-[#303E4D] transition-colors" />

                  <div className="bg-white p-5 rounded-2xl border border-[#303E4D]/10 shadow-2xs space-y-2">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-bold bg-[#F4F0E9] text-[#526B86] px-2.5 py-0.5 rounded-md border border-[#303E4D]/10">
                        {exp.type}
                      </span>
                      <span className="text-[11px] text-[#526B86] font-semibold flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#303E4D]">
                      {exp.role}
                    </h3>

                    <div className="text-xs font-semibold text-[#526B86] flex items-center gap-1.5">
                      <Building2 size={13} />
                      <span>{exp.organization}</span>
                    </div>

                    <ul className="space-y-1.5 pt-1 text-xs text-[#303E4D]/85">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#526B86] font-bold mt-0.5">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ---------------- FEATURED PROJECTS SHOWCASE ---------------- */}
      <section id="projects" className="py-16 bg-[#F4F0E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start text-left mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#526B86] bg-white px-3 py-1 rounded-full mb-2 border border-[#303E4D]/10">
              Interactive Data Science Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303E4D]">Featured Projects</h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {[
              'All', 
              'Machine Learning', 
              'Text Mining & NLP', 
              'Data Analytics & Forecasting', 
              'Database & Data Engineering', 
              'Signal Processing',
              'Tools & System Security'
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#303E4D] text-white'
                    : 'bg-white text-[#303E4D] hover:bg-[#303E4D]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-[#303E4D]/10 overflow-hidden flex flex-col justify-between hover:border-[#526B86] transition-all group text-left shadow-2xs"
                >
                  
                  {/* Visual Preview Banner Mock */}
                  <div className="h-36 bg-[#303E4D] p-4 flex flex-col justify-between relative overflow-hidden">
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white bg-[#526B86] px-2.5 py-0.5 rounded-md border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-0.5">
                      <h3 className="text-base font-bold text-white group-hover:text-[#F4F0E9] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-white/80 line-clamp-1">{project.subtitle}</p>
                    </div>

                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    <p className="text-xs text-[#303E4D]/80 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Metrics Highlights */}
                    {project.keyMetrics && (
                      <div className="grid grid-cols-3 gap-1.5 bg-[#F4F0E9] p-2.5 rounded-xl border border-[#303E4D]/10 text-center">
                        {project.keyMetrics.map((m, mIdx) => (
                          <div key={mIdx}>
                            <div className="text-[9px] text-[#526B86] uppercase font-bold">{m.name}</div>
                            <div className="text-xs font-bold text-[#303E4D]">{m.val}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-[#F4F0E9] text-[#526B86] px-2 py-0.5 rounded border border-[#303E4D]/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-[#303E4D]/10 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-[#526B86] hover:text-[#303E4D] flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ChevronRight size={14} />
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-md bg-[#F4F0E9] border border-[#303E4D]/15 text-[#303E4D] hover:bg-[#526B86] hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                        </svg>
                        
                      </a>
                    </div>

                  </div>

                </div>
              ))}
          </div>

        </div>
      </section>

      {/* ---------------- PROJECT CASE STUDY MODAL ---------------- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-xl relative border border-[#303E4D]/20 max-h-[90vh] overflow-y-auto text-left space-y-5">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[#F4F0E9] text-[#303E4D] hover:bg-[#303E4D]/10"
            >
              <X size={18} />
            </button>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-[#526B86] bg-[#F4F0E9] px-2.5 py-0.5 rounded-md border border-[#303E4D]/10">
                  {selectedProject.category}
                </span>
                <span className="text-[11px] text-[#526B86] font-medium">{selectedProject.academicContext}</span>
              </div>
              <h3 className="text-xl font-bold text-[#303E4D]">{selectedProject.title}</h3>
              <p className="text-xs text-[#526B86] font-medium">{selectedProject.subtitle}</p>
            </div>

            {/* Project Case Study Sections */}
            <div className="space-y-4 text-xs">
              
              <div>
                <h4 className="font-bold text-[#303E4D] uppercase tracking-wider text-[10px] text-[#526B86] border-b border-[#303E4D]/10 pb-1 mb-1">1. Project Overview</h4>
                <p className="text-[#303E4D] leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#303E4D] uppercase tracking-wider text-[10px] text-[#526B86] border-b border-[#303E4D]/10 pb-1 mb-1">2. Problem Statement</h4>
                <p className="text-[#303E4D] leading-relaxed">{selectedProject.problem}</p>
              </div>

              {selectedProject.datasetInfo && (
                <div className="bg-[#F4F0E9] p-3 rounded-xl border border-[#303E4D]/10">
                  <span className="font-bold text-[#526B86]">Dataset Details: </span>
                  <span className="text-[#303E4D]">{selectedProject.datasetInfo}</span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-[#303E4D] uppercase tracking-wider text-[10px] text-[#526B86] border-b border-[#303E4D]/10 pb-1 mb-1">3. Methodology</h4>
                <ul className="space-y-1 text-[#303E4D] pt-1">
                  {selectedProject.methodology.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#526B86] font-bold">•</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#303E4D] uppercase tracking-wider text-[10px] text-[#526B86] border-b border-[#303E4D]/10 pb-1 mb-1">4. Tools & Technologies</h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-[#F4F0E9] text-[#526B86] font-semibold border border-[#303E4D]/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#303E4D] uppercase tracking-wider text-[10px] text-[#526B86] border-b border-[#303E4D]/10 pb-1 mb-1">5. Results & Evaluation</h4>
                <p className="text-[#303E4D] leading-relaxed pt-1">{selectedProject.results}</p>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="pt-3 border-t border-[#303E4D]/10 flex items-center justify-end">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#303E4D] text-white text-xs font-semibold hover:bg-[#526B86] transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.944.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                </svg>
                <span>View GitHub Repository</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ---------------- TECHNICAL SKILLS VISUALIZATION ---------------- */}
      <section id="skills" className="py-12 bg-white border-y border-[#303E4D]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="flex flex-col items-start text-left mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#526B86] bg-[#F4F0E9] px-3 py-1 rounded-full mb-2 border border-[#303E4D]/10">
              Technical Expertise & Tools
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303E4D] tracking-tight">
              Technical Skills<span className="text-[#526B86]">.</span>
            </h2>

            <div className="w-12 h-1 bg-[#526B86] rounded-full mt-2"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">

            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#F4F0E9] p-4 rounded-xl border border-[#303E4D]/10 space-y-3 hover:border-[#526B86]/40 transition-colors"
              >

                {/* Category Title */}
                <div className="border-b border-[#303E4D]/10 pb-2">
                  <h3 className="text-xs font-bold text-[#303E4D] uppercase tracking-wide">
                    {group.category === "Tools & Design"
                      ? "Tools & Platforms"
                      : group.category}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center bg-white text-[#303E4D] px-2.5 py-1.5 rounded-md text-xs font-medium border border-[#303E4D]/10 shadow-sm hover:border-[#526B86]/50 transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ---------------- CERTIFICATIONS PREVIEW ---------------- */}
      <section id="certificates" className="py-16 bg-[#F4F0E9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start text-left mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#526B86] bg-white px-3 py-1 rounded-full mb-2 border border-[#303E4D]/10">
              Official Certifications & Training
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303E4D]">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white p-5 rounded-2xl border border-[#303E4D]/10 space-y-3 flex flex-col justify-between shadow-2xs">
                
                <div className="space-y-3">
                  
                  {/* Certificate Document Thumbnail Preview Container */}
                  <div 
                    onClick={() => {
                      setSelectedCertificate(cert);
                      setIsCertZoomed(false);
                    }}
                    className="h-44 rounded-xl bg-[#F4F0E9] border border-[#303E4D]/10 overflow-hidden relative group cursor-pointer"
                  >
                    
                    {/* Certificate Image */}
                <img
                  src={cert.certImage}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5">
                      <Search size={16} />
                      <span>View Certificate</span>
                    </div>

                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-[#526B86] bg-[#F4F0E9] px-2 py-0.5 rounded border border-[#303E4D]/10">
                      {cert.score}
                    </span>
                    <h3 className="text-sm font-bold text-[#303E4D] mt-1.5">{cert.title}</h3>
                  </div>

                  <p className="text-xs text-[#303E4D]/80 leading-relaxed">{cert.description}</p>
                </div>

                <div className="pt-3 border-t border-[#303E4D]/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#526B86] font-medium">{cert.period}</span>
                  
                  <button
                    onClick={() => {
                      setSelectedCertificate(cert);
                      setIsCertZoomed(false);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#526B86] text-white font-bold hover:bg-[#303E4D] transition-colors flex items-center gap-1 text-xs"
                  >
                    <Award size={13} />
                    <span>View Certificate</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- INTERACTIVE CERTIFICATE FULL VIEW MODAL ---------------- */}
      {selectedCertificate && (
        <div 
          onClick={() => setSelectedCertificate(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-2xl w-full p-5 sm:p-6 shadow-2xl relative border border-[#303E4D]/20 text-left space-y-4 transition-all duration-300 ${
              isCertZoomed ? 'max-w-6xl' : 'max-w-4xl'
            }`}
          >
            {/* Modal Header Controls */}
            <div className="flex items-center justify-between border-b border-[#303E4D]/10 pb-3">
              <div className="flex items-center gap-2 pr-6">
                <Award className="text-[#526B86]" size={22} />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#303E4D]">{selectedCertificate.title}</h3>
                  <div className="text-[11px] text-[#526B86] font-medium">{selectedCertificate.issuer} • {selectedCertificate.period}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCertZoomed(!isCertZoomed)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#F4F0E9] text-[#303E4D] text-xs font-semibold hover:bg-[#526B86] hover:text-white transition-colors flex items-center gap-1"
                  title="Toggle Zoom View"
                >
                  <Search size={14} />
                  <span className="hidden sm:inline">{isCertZoomed ? 'Standard View' : 'Zoom View'}</span>
                </button>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 rounded-full bg-[#F4F0E9] text-[#303E4D] hover:bg-[#303E4D] hover:text-white transition-colors"
                  aria-label="Close Certificate Preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Viewer Frame */}
            <div className={`w-full overflow-hidden rounded-xl border border-[#303E4D]/15 bg-[#F4F0E9] transition-all duration-300 ${
              isCertZoomed ? 'h-[75vh]' : 'h-[60vh]'
            }`}>
              <iframe
                src={selectedCertificate.certFile}
                title={selectedCertificate.title}
                className="w-full h-full border-none"
              />
            </div>

            {/* Certificate Footer Metadata */}
            <div className="bg-[#F4F0E9] p-3.5 rounded-xl border border-[#303E4D]/10 flex flex-wrap items-center justify-between text-xs gap-2">
              <div className="text-[#303E4D]">
                <strong className="text-[#526B86]">Grade / Score:</strong> {selectedCertificate.score}
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.certFile}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#303E4D]/20 text-[#303E4D] hover:bg-[#526B86] hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-xs"
                >
                  <ExternalLink size={13} />
                  <span>Open Full PDF File</span>
                </a>
                
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-1.5 rounded-lg bg-[#303E4D] text-white font-semibold hover:bg-[#526B86] transition-colors text-xs"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ---------------- MINIMALIST CONTACT SECTION ---------------- */}
      <section id="contact" className="py-16 bg-white border-t border-[#303E4D]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#303E4D] text-white rounded-2xl p-8 sm:p-10 shadow-lg text-left space-y-6">
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4F0E9] bg-[#526B86] px-2.5 py-1 rounded">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Contact & Professional Profiles
              </h2>
              <p className="text-xs sm:text-sm text-[#F4F0E9]/80">
                Always open for data science internships, analytics roles, and academic research discussions.
              </p>
            </div>

            {/* Exactly 4 Contact Touchpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Email */}
              <a
                href="mailto:nadineputrial1@gmail.com"
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center gap-3 text-white text-xs font-semibold"
              >
                <div className="p-2 rounded-lg bg-[#526B86]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-bold">Email</div>
                  <div>nadineputrial1@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nadineputriaulia"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center gap-3 text-white text-xs font-semibold"
              >
                <div className="p-2 rounded-lg bg-[#526B86]">
                  <ExternalLink size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-bold">LinkedIn</div>
                  <div>linkedin.com/in/nadineputriaulia</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/NadinePutriA"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center gap-3 text-white text-xs font-semibold"
              >
                <div className="p-2 rounded-lg bg-[#526B86]">
                  <Code2 size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-bold">GitHub</div>
                  <div>github.com/NadinePutriA</div>
                </div>
              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/6285216713880"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors flex items-center gap-3 text-white text-xs font-semibold"
              >
                <div className="p-2 rounded-lg bg-[#526B86]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-bold">WhatsApp</div>
                  <div>+62 852-1671-3880</div>
                </div>
              </a>


              {/* Location */}
              <div className="p-4 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3 text-white text-xs font-semibold">
                <div className="p-2 rounded-lg bg-[#526B86]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-white/70 uppercase font-bold">Location</div>
                  <div>Surabaya, Indonesia</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-[#242D37] text-[#526B86] py-8 border-t border-[#303E4D] text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-left">
            <span className="font-bold text-white">Nadine Putri Aulia</span>
            <span className="mx-2">•</span>
            <span>Data Science Student @ Universitas Negeri Surabaya</span>
          </div>

          <div>
            © {currentYear} Nadine Putri Aulia. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );}