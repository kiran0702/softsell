# SoftSell - Software License Marketplace

A modern, responsive web application built with React and Tailwind CSS that enables businesses to sell their unused software licenses.

## Features

- 🎯 **Modern UI/UX**
  - Responsive design that works on all devices
  - Smooth scrolling navigation
  - Animated sections and transitions
  - Dark/Light mode support
  - Glass morphism effects

- 🔧 **Technical Features**
  - Interactive "How It Works" section with auto-rotation
  - Form validation with error handling
  - Mobile-friendly navigation menu
  - SVG icons for better scaling
  - Animated testimonials carousel
  - Contact form with validation

- 🚀 **Performance**
  - Optimized SVG icons
  - Lazy loading components
  - Efficient state management
  - Smooth animations

## Tech Stack

- React 19.1.0
- Tailwind CSS 4.1.6
- Vite 6.3.5
- Framer Motion 12.10.5
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/softsell.git
cd softsell
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
softsell/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Testimonials.jsx
│   │   └── ContactForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Components

### Navigation
- Fixed top navigation bar
- Mobile-responsive menu
- Smooth scroll to sections

### Hero Section
- Animated background with floating circles
- Call-to-action button
- Responsive layout

### How It Works
- Three-step process explanation
- Auto-rotating steps with progress bar
- Manual step controls

### Why Choose Us
- Four key benefits
- Responsive grid layout
- Custom SVG icons

### Testimonials
- Customer reviews carousel
- Responsive card layout
- Avatar display

### Contact Form
- Validated input fields
- Custom select dropdown
- Error messaging
- Success feedback

## Customization

### Tailwind Configuration
The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
      // Add other customizations
    }
  }
}
```

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=contact@yourdomain.com
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)
Project Link: [https://github.com/yourusername/softsell](https://github.com/yourusername/softsell)

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Lucide Icons](https://lucide.dev)
