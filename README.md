# React Custom Carousel with Keen Slider

A lightweight, responsive image carousel built using [`keen-slider`](https://keen-slider.io/) in React. This setup features:

- Custom container boxes
- Horizontal sliding with partially visible next slide
- Arrow navigation with custom icons from Figma
- Conditional rendering of navigation arrows
- Clean component breakdown with modern styling
- Placeholder for future graph integration

---

## 📦 Technologies Used

- React
- [Keen Slider](https://keen-slider.io/) (carousel library)
- Custom SVG icons (from Figma)
- CSS Modules or plain CSS
- Vite (recommended for fast development)

## 📊 Carousel Implementation
We implemented a custom image carousel using the Keen Slider library.

## 🧩 Why Keen Slider?
After evaluating a few popular React carousel libraries — including keen-slider, swiper, and the option of building a custom solution — we chose Keen Slider for the following reasons:

- 📦 Lightweight: Keen Slider has a small bundle size compared to alternatives like Swiper, helping to keep page performance optimized.

- 🎯 Feature-Rich Yet Minimal: It provides exactly what we need — including:

    Slide tracking

    Partial slide visibility

    Responsive and swipe/touch support

- 🛠️ Fine-Grained Control: Keen gives us the flexibility to create a custom layout with one full and one partially visible box, which was harder to achieve with more opinionated libraries.

-  💡 Strong Developer Experience: It offers a flexible API and clean documentation, making it easier to implement custom logic such as conditional arrow visibility and stylized navigation.

-  🔄 Actively Maintained: With solid documentation, community support, and ongoing updates, it presents low risk of technical debt.

📚 Documentation: https://keen-slider.io/docs

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v16+
- npm or yarn
- Git

### Installation

- git clone https://github.com/your-username/slidepeek-ui.git
cd slidepeek-ui
- npm install
# or
- yarn install

### Start Development Server

- npm run dev
# or
- yarn dev

## 🤝 Contributing
- Feel free to fork this project and submit a pull - request! To contribute:

- Fork the repo

- Create your feature branch: git checkout -b feature/your-feature

- Commit your changes: git commit -am 'Add feature'

- Push to the branch: git push origin feature/your-feature

- Open a Pull Request

## 📝 License
- MIT License. See LICENSE file for details.
