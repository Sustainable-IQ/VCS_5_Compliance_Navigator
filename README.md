# VCS Version 5 Compliance Navigator

An interactive web application for navigating VCS (Verified Carbon Standard) Version 5 updates and compliance requirements.

## Features

- **Timeline View**: Visualize all updates organized by effective date
- **Update Browser**: Searchable table with sorting and filtering capabilities
- **My Compliance Checklist**: Generate personalized compliance requirements based on your project profile
- **Document Navigator**: Browse updates organized by affected documents and sections
- **Advanced Filtering**: Filter by category, project type, applicability, and document
- **Full-text Search**: Search across all update titles and descriptions

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. **Extract the ZIP file** to your desired location:
   ```
   C:\Projects\MyPythonProjects\MyScripts\verra_tool_1
   ```

2. **Open a terminal/command prompt** in the project directory

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

The application should automatically open in your default browser.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Usage Guide

### Timeline View
- Click on any date to expand and see all updates effective on that date
- Click the eye icon on any update to view full details
- Use filters to narrow down visible updates

### Update Browser
- Click column headers to sort the table
- Click "View" to see full update details in a modal
- Use search and filters to find specific updates

### My Compliance Checklist
1. Fill in your project profile:
   - Project Type (e.g., IFM, REDD, ALM)
   - Status (Pipeline, New, or Registered)
   - Registration Year (if applicable)
   - Next Action (Registration, Verification, etc.)
   - Expected Submission Date
2. Click "Generate Checklist"
3. Review required actions organized by urgency
4. Export to PDF for sharing with your team

### Document Navigator
- Click on any document to expand and see affected sections
- Click on sections to see which updates affect them
- Click "View" to see full update details

## Project Structure

```
verra_tool_1/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Filters.jsx
│   │   └── UpdateCard.jsx
│   ├── views/          # Main view components
│   │   ├── TimelineView.jsx
│   │   ├── TableView.jsx
│   │   ├── ChecklistView.jsx
│   │   └── DocumentsView.jsx
│   ├── utils/          # Helper functions
│   │   └── helpers.js
│   ├── data.js         # VCS Version 5 updates data
│   ├── store.js        # State management
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # This file
```

## Data Source

All update data has been extracted from the official VCS Version 5 documentation:
- **Document**: VCS Version 5: Overview of VCS Program Updates and Effective Dates
- **Release Date**: December 16, 2025
- **Total Updates**: 40+ program updates

## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling framework
- **Zustand**: State management
- **date-fns**: Date formatting and manipulation
- **Fuse.js**: Fuzzy search functionality
- **Lucide React**: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 is already in use
If port 3000 is occupied, you can specify a different port:
```bash
npm run dev -- --port 3001
```

### Dependencies won't install
Try clearing the npm cache:
```bash
npm cache clean --force
npm install
```

### Build fails
Ensure you're using Node.js version 16 or higher:
```bash
node --version
```

## Support

For issues related to VCS Version 5 requirements, please consult:
- Official Verra documentation: https://verra.org/programs/verified-carbon-standard/
- VCS Program Guide v5.0

For technical issues with this tool, check the troubleshooting section above.

## License

This tool is provided for informational purposes. All VCS Program data and requirements are © Verra and subject to their terms of use.

## Version

1.0.0 (December 2025)
