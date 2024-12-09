# Expense Tracker Application 📊💰

**Expense Tracker** is a modern, responsive web application designed to help users efficiently manage and track their expenses. The app provides an intuitive and interactive interface for recording transactions, analyzing spending patterns, and generating insightful reports. Whether you're on a desktop, tablet, or mobile device, this application ensures a seamless user experience.

## 🌟 Features

### 💼 Core Functionalities
- **Transaction Management**: Easily add, edit, and delete transactions with detailed descriptions, categories, and amounts.
- **Filtering & Searching**: Find transactions quickly using the search bar or category filter.
- **Data Visualization**: Generate reports with insightful charts and metrics to track spending trends.

### 🎨 Design
- **Responsive Design**: Fully optimized for a wide range of devices and screen sizes.
- **Dark Mode**: Sleek and modern dark theme for enhanced visual appeal and user comfort.

### 🔒 Authentication
- **Secure Login/Signup**: Traditional email/password-based login with "Remember Me" functionality.
- **Third-party Authentication**: Quick sign-in options via Google and GitHub.

### 🛠️ Technology Highlights
- **State Management**: Redux Toolkit for efficient and scalable global state management.
- **Firebase**: Utilized for backend services like authentication and database storage.
- **Icons & Animations**:
  - **Lucide Icons** for crisp and versatile iconography.
  - **Rombo Tailwind** Animation Library for smooth and dynamic user interactions.
  - **Component Library**: Shadcn components for consistent and reusable UI elements.

### 🛠️ Tech Stack
- **Frontend**: React with Tailwind CSS for a fast and modern UI.
- **Backend**: Firebase for authentication and real-time database.
- **Tools**:
  - **Redux Toolkit** for state management.
  - **Lucide Icons** for visual elements.
  - **Rombo** for animations.
  - **Shadcn** for prebuilt components.
 
### 📈 Usage
1. **Login or Signup**: Start by creating an account or logging in with your credentials.
2. **Manage Transactions**:
  - Add new transactions by specifying details like date, description, category, and amount.
  - Edit or delete existing transactions as needed.
3. **Explore Reports**: Analyze your spending patterns through intuitive charts and data insights.
4. **Filter & Search**: Use the search bar or category dropdown to locate specific transactions.

### 🖌️ Design Principles
- **User-Centric**: The interface is designed to be simple yet powerful, catering to both casual users and advanced financial planners.
- **Aesthetic & Functional**: The dark theme and animations provide an engaging yet professional experience.

### 🚀 Get Started
Clone the repository:
bash
Copy code
git clone https://github.com/your-repository-name.git
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Configure Firebase settings in your .env file.

### Project Structure
src/
├── App.jsx                   # Main application component
├── assets/                   # Static assets
├── components/               # Reusable components
│   ├── Navbar.jsx            # Navigation bar component
│   ├── theme-provider.tsx    # Theme provider component
│   └── ui/                   # UI components
│       ├── button.jsx        # Button component
│       ├── dropdown-menu.jsx # Dropdown menu component
│       ├── input.jsx         # Input component
│       ├── label.jsx         # Label component
│       ├── menubar.jsx       # Menubar component
│       └── select.jsx        # Select component
├── firebaseConfig.jsx        # Firebase configuration
├── hooks/                    # Custom hooks
│   └── useAuth.jsx           # Authentication hook
├── lib/                      # Utility functions
│   └── utils.js              # Utility functions
├── main.jsx                  # Entry point for the application
├── pages/                    # Page components
│   ├── AddTransaction.jsx    # Add transaction page
│   ├── Budget.jsx            # Budget management page
│   ├── Home.jsx              # Home page
│   ├── Login.jsx             # Login page
│   ├── NotFound.jsx          # 404 Not Found page
│   ├── Profile.jsx           # Profile page
│   ├── Signup.jsx            # Signup page
│   ├── Transaction.jsx       # Transaction page
│   ├── reports/              # Reports pages
│   │   ├── AdvancedReporting.jsx       # Advanced reporting page
│   │   ├── AuditReview.jsx             # Audit review page
│   │   ├── ComparativeInsights.jsx     # Comparative insights page
│   │   ├── ConsolidatedSummarie.jsx    # Consolidated summaries page
│   │   ├── DataSegmentation.jsx        # Data segmentation page
│   │   ├── ExportSharing.jsx           # Export and sharing page
│   │   ├── GoalsCustomInsights.jsx     # Goals and custom insights page
│   │   ├── HistoricalAnalysis.jsx      # Historical analysis page
│   │   ├── MultiDimensionalBreakdown.jsx # Multi-dimensional breakdown page
│   │   ├── VisualStorytelling.jsx      # Visual storytelling page
│   └── setting/              # Settings pages
│       ├── AppPreferences.jsx          # App preferences settings
│       ├── BudgetAndExpenseSettings.jsx # Budget and expense settings
│       ├── HelpAndSupport.jsx          # Help and support settings
│       ├── Integrations.jsx            # Integrations settings
│       ├── LegalAndInformation.jsx     # Legal and information settings
│       ├── PrivacyAndSecurity.jsx      # Privacy and security settings
│       └── ProfileSetting.jsx          # Profile settings
├── redux/                    # Redux store and reducers
│   ├── AuthReducer.jsx       # Authentication reducer
│   ├── Store.jsx             # Redux store configuration
│   └── TransactionReducer.jsx # Transaction reducer
└── style/                    # Styles
    └── index.css             # Main stylesheet


### 📷 Screenshots
1. Login Page
   ![screencapture-localhost-5173-2024-12-09-19_25_47](https://github.com/user-attachments/assets/0d315b29-6534-4a60-a356-2f368851c9da)
2. Transaction Management
  ![screencapture-localhost-5173-transaction-2024-12-09-21_19_08](https://github.com/user-attachments/assets/21030789-ab48-4cc7-80b9-415cfe33f919)
3. Budget page
  ![screencapture-localhost-5173-budget-2024-12-09-21_19_56](https://github.com/user-attachments/assets/e60b1a71-543d-43c6-8545-93311bbe9ba1)
4. Reports page
  ![screencapture-localhost-5173-reports-advancedReporting-2024-12-09-21_20_29](https://github.com/user-attachments/assets/7b0cea20-33eb-4447-9522-2893aafa9e95)
5. Setting page
  ![screencapture-localhost-5173-setting-profileSetting-2024-12-09-21_21_40](https://github.com/user-attachments/assets/59323b45-fe46-40ff-9ddb-f6affda4f085)

### 🤝 Contributions
Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

### 👨‍💻 Developer
Developed by Mohannad using modern tools and best practices. Special thanks to all the amazing libraries and tools that made this project possible.



