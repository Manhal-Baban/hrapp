# HR Management Application

A modern, full-stack HR management application built with React and JSON Server. This application allows you to manage employee records with features like adding, viewing, editing, and deleting employee information.

## 🚀 Live Demo

- **Frontend (Live App):** https://manhal-baban.github.io/hrapp
- **Backend API:** https://hrapp-1c1d.onrender.com

## 📦 GitHub Repositories

- **Frontend Repository:** https://github.com/Manhal-Baban/hrapp
- **Backend Repository:** [Add your backend repo URL here when ready]

## ✨ Features

- 📋 **Employee List View** - Browse all employees in a card-based layout
- ➕ **Add New Employees** - Form with validation to add new team members
- ✏️ **Edit Employee Data** - Update salary, location, department, and skills inline
- 🗑️ **Delete Employees** - Remove employees with confirmation dialog
- 🎉 **Recognition Alerts** - Automatic reminders for employee milestones
  - Green alert for 5, 10, and 15-year anniversaries
  - Red alert for probation reviews (employees under 6 months)
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Clean UI** - Modern design with CSS Modules for consistent styling
- ⚡ **Fast Performance** - Optimized API calls using custom React hooks

## 🛠️ Technologies Used

### Frontend

- **React** 18+ - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **CSS Modules** - Scoped and modular styling
- **Vite** - Fast build tool and dev server

### Backend

- **JSON Server** - RESTful API server
- **Node.js** - Runtime environment
- **Render** - Hosting platform for backend

## 📂 Project Structure

```
hrapp/
├── src/
│   ├── assets/
│   │   ├── animalEmojis.json      # Animal emoji mappings
│   │   └── db.json                 # Employee data
│   ├── components/
│   │   ├── Header.jsx              # Navigation header
│   │   ├── Header.module.css
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Footer.module.css
│   │   ├── About.jsx               # About page
│   │   ├── About.module.css
│   │   ├── PersonList.jsx          # Employee list container
│   │   ├── PersonCard.jsx          # Individual employee card
│   │   ├── Card.module.css
│   │   ├── AddEmployee.jsx         # Add employee form
│   │   └── AddEmployee.module.css
│   ├── hooks/
│   │   └── useAxios.js             # Custom hook for API calls
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   └── main.jsx                    # App entry point
├── package.json
├── vite.config.js                  # Vite configuration
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Manhal-Baban/hrapp.git
cd hrapp
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

The application connects to the backend API at `https://hrapp-1c1d.onrender.com/employees`.

If you want to use a different backend URL, update the `BASE_URL` constant in `src/hooks/useAxios.js`:

```javascript
const BASE_URL = "your-backend-url-here/employees";
```

## 📡 API Endpoints

The backend provides the following REST API endpoints:

- `GET /employees` - Retrieve all employees
- `GET /employees/:id` - Retrieve a specific employee
- `POST /employees` - Create a new employee
- `PATCH /employees/:id` - Update an employee
- `DELETE /employees/:id` - Delete an employee

## 🎯 Key Features Explained

### Custom Hook (useAxios)

The application uses a custom React hook to handle all API interactions:

- Centralized axios instance
- Reusable HTTP methods (GET, POST, PATCH, DELETE)
- Clean separation of concerns

### Employee Recognition System

Automatically displays alerts for employees based on tenure:

- 🎉 **5, 10, or 15 years:** Green alert - "Schedule recognition meeting"
- 🔔 **Less than 6 months:** Red alert - "Schedule probation review"

### Editable Fields

Click "Edit" on any employee card to modify:

- Salary
- Location
- Department
- Skills

Changes are saved to the backend database in real-time.

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Build the project**

```bash
npm run build
```

2. **Deploy to GitHub Pages**

```bash
npm run deploy
```

The app will be deployed to: `https://manhal-baban.github.io/hrapp`

### Vite Configuration

The project is configured for GitHub Pages deployment:

```javascript
// vite.config.js
export default defineConfig({
  base: "/hrapp/",
  plugins: [react()],
});
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run server` - Run local JSON server (port 3001)

## 📝 Code Quality

This project follows best practices:

- ✅ **Component modularity** - Small, focused components
- ✅ **Custom hooks** - Reusable logic extraction
- ✅ **CSS Modules** - Consistent, scoped styling
- ✅ **Error handling** - Graceful error management
- ✅ **User feedback** - Loading states and confirmation dialogs
- ✅ **Form validation** - Required field validation
- ✅ **Responsive design** - Mobile-first approach

## 🎨 Design Features

- **Card-based layout** - Clean, modern employee cards
- **Color-coded alerts** - Visual indicators for important events
- **Smooth animations** - Hover effects and transitions
- **Consistent styling** - CSS Modules prevent style conflicts
- **Accessible design** - Semantic HTML and proper labels

## 🤝 Contributing

This is a school project for the WP25K Web Development Course. Suggestions and feedback are welcome!

## 👨‍💻 Author

**Manhal Baban**  
WP25K - Web Development Course  
© 2025 All rights reserved.

## 📄 License

This project was created as part of a school assignment.

---

## 📚 Learning Outcomes

This project demonstrates:

- React component architecture and hooks
- RESTful API integration
- State management in React
- Form handling and validation
- CSS Modules for styling
- Deployment to GitHub Pages and Render
- Git version control
- Full-stack application development
- Custom React hooks
- CRUD operations

---

## 🐛 Known Issues

None at the moment. If you find any bugs, please report them!

---

## 🔮 Future Enhancements

Possible features for future versions:

- Search and filter employees
- Sort by name, department, or tenure
- Employee photos/avatars
- Export data to CSV
- Dark mode
- User authentication

---

**Built with ❤️ using React and Vite**
