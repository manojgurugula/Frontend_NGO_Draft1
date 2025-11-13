# Prakruthi NGO Frontend

A modern React application for Prakruthi Social Service Society, providing a comprehensive platform for community engagement, donations, volunteer management, and organizational transparency.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Dashboard**: Real-time statistics and data visualization
- **Form Management**: Donation, volunteer, and contact forms with validation
- **Event Management**: Display and manage upcoming and past events
- **API Integration**: Seamless backend communication with error handling
- **Accessibility**: WCAG compliant with keyboard navigation support
- **SEO Optimized**: Meta tags and structured data for better search visibility

## Technology Stack

- **React 19.2.0**: Modern React with hooks and functional components
- **React Router DOM 7.9.5**: Client-side routing and navigation
- **Axios 1.13.1**: HTTP client for API communication
- **Chart.js 4.5.1**: Data visualization and charts
- **CSS3**: Modern styling with Flexbox and Grid
- **Progressive Web App**: PWA capabilities for mobile experience

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation with mobile menu
│   ├── Footer.js       # Footer with organization info
│   ├── LoadingSpinner.js # Loading indicator
│   └── ErrorMessage.js # Error display component
├── pages/              # Page components
│   ├── Home.js         # Landing page with statistics
│   ├── About.js        # Organization information
│   ├── Programs.js     # Program details
│   ├── Events.js       # Event listing and management
│   ├── Volunteer.js    # Volunteer application form
│   ├── Donate.js       # Donation form and impact info
│   ├── Contact.js      # Contact form and information
│   └── Dashboard.js    # Administrative dashboard
├── services/           # API and external services
│   └── api.js         # Axios configuration and API calls
├── App.js             # Main application component
├── App.css            # Global styles and components
└── index.js           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Backend API running on port 9090

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ngo_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## API Integration

The frontend communicates with the backend API running on `http://localhost:9090/api`. Key endpoints include:

- **Donations**: `/api/donations` - Donation management and statistics
- **Volunteers**: `/api/volunteers` - Volunteer applications and management
- **Events**: `/api/events` - Event listing and management
- **Contacts**: `/api/contacts` - Contact form submissions

## Key Features

### Responsive Navigation
- Mobile-friendly hamburger menu
- Active link highlighting
- Smooth transitions and animations

### Interactive Forms
- Real-time validation
- Loading states and error handling
- Success/error message display
- Accessibility features

### Dashboard Analytics
- Real-time statistics display
- Recent activity feeds
- Quick action buttons
- Data visualization with charts

### Performance Optimizations
- Code splitting and lazy loading
- Image optimization
- API request caching
- Progressive Web App features

## Styling and Theming

The application uses a consistent color scheme:
- **Primary Green**: #4a7c59
- **Dark Green**: #2c5530
- **Light Green**: #a8d5ba
- **Background**: #f8f9fa
- **Text**: #333333

### CSS Architecture
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Custom properties for theming
- Modular component styles

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
```

## Contributing

1. Follow the existing code style and conventions
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## Performance Considerations

- Images are optimized and properly sized
- API calls include timeout and error handling
- Components use React.memo where appropriate
- Bundle size is monitored and optimized

## Security Features

- Input validation and sanitization
- HTTPS enforcement in production
- Secure API communication
- XSS protection measures

## Future Enhancements

- Payment gateway integration
- Multi-language support
- Advanced analytics dashboard
- Push notifications
- Offline functionality
- Social media integration

## Support

For technical issues or questions:
- Check the documentation
- Review existing issues
- Contact the development team

## License

This project is developed for Prakruthi Social Service Society. All rights reserved.

---

**Prakruthi Social Service Society**  
Empowering communities since 2002  
FCRA Registration: 010170278