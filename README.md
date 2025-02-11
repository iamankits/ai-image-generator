# AI Image Generator

A modern React application that generates images using AI, built with Vite, React, TypeScript, and TailwindCSS.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-blue)

## 🚀 Features

- **AI-Powered Image Generation**: Generate unique images from text descriptions
- **Modern UI**: Built with React and styled with TailwindCSS
- **Type Safety**: Written in TypeScript for better development experience
- **Fast Development**: Powered by Vite for quick development and building
- **Responsive Design**: Works seamlessly across different screen sizes
- **Image Download**: Easily download generated images
- **Error Handling**: Robust error handling and user feedback

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/image-generator.git
   cd image-generator
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your GetImg API key:
   ```env
   VITE_GETIMG_API_KEY=your_api_key_here
   ```

## 🚀 Usage

### Development

Run the development server:
```bash
pnpm dev
```

### Building for Production

Build the application:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

## 🔧 Configuration

The project uses several configuration files:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - TailwindCSS configuration
- `eslint.config.js` - ESLint configuration

## 📦 Project Structure

```
image-generator/
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Static assets
└── ...configuration files
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [GetImg AI](https://getimg.ai/)
- [Lucide Icons](https://lucide.dev/) 