# Victor Semencenco · Personal Portfolio

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CSS%20Modules-CC6699?logo=sass&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white)

Source code for my personal website. I'm a Product Manager with a background in computer engineering and front-end development, and this site is where I share my experience, selected projects and résumé.

I designed and built it myself in React.

## What's on the site

| Section     | Content                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| **Home**    | Short introduction and a link to my projects                               |
| **About**   | Background, the companies I've built products for, and my core tools       |
| **Work**    | Selected projects, including work for Stellantis and Toyota                |
| **Contact** | Email and LinkedIn links                                                   |

My résumé (PDF) can be downloaded from the navigation bar.

## Features

- **Animated loading screen** and glitch-style text effects
- **Particle background** that reacts to the mouse
- **Parallax tilt** on the About section
- **Fade-in animations** as sections scroll into view
- **Smart navbar** that hides when scrolling down and reappears when scrolling up, with a hamburger menu on mobile
- **Responsive layout** for desktop, tablet and mobile
- **Screen-reader labels** on all animated text, so the content stays accessible

## Tech stack

- [React 18](https://react.dev/), bootstrapped with Create React App
- [Sass](https://sass-lang.com/) with CSS Modules for component styling
- [MUI 5](https://mui.com/) and Emotion for layout and theming
- [React Router](https://reactrouter.com/) and [react-router-hash-link](https://github.com/rafgraph/react-router-hash-link) for in-page navigation
- [tsParticles](https://particles.js.org/), [PowerGlitch](https://github.com/7PH/powerglitch), [Glitched Writer](https://github.com/thetarnav/glitched-writer) and [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) for effects and animation

## Getting started

You'll need [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
git clone git@github.com:Gondu/my-website-portfolio.git
cd my-website-portfolio
npm install
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000) and reloads as you edit.

| Command         | What it does                                       |
| --------------- | -------------------------------------------------- |
| `npm start`     | Starts the development server                      |
| `npm run build` | Creates an optimized production build in `build/`  |
| `npm test`      | Runs the test suite in watch mode                  |

## Project structure

```
src/
├── App.js                # Page layout, footer and loading screen
├── Particles.js          # Particle background configuration
├── PortfolioThemeMUI.js  # MUI theme
├── components/           # Navbar, loading screen, project cards, buttons, wrappers
├── hooks/                # Custom hooks (scroll direction)
├── pages/                # Home, About, Work and Contact sections
└── global-styles/        # Fonts, global styles and media queries
public/                   # HTML template, favicon and résumé PDF
```

## Credits

This project builds on the work of others:

| Feature                    | Source                                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Background particles       | [react-tsparticles](https://www.npmjs.com/package/react-tsparticles)                                                   |
| Glitch writer animation    | [glitched-writer](https://github.com/thetarnav/glitched-writer)                                                        |
| Glitch text, images, SVG   | [react-powerglitch](https://github.com/7PH/react-powerglitch)                                                          |
| Glitch button              | [CodePen by hirodashi](https://codepen.io/hirodashi/pen/YzGBYBY)                                                      |
| Loading glitch text        | [CodePen by Gondu](https://codepen.io/Gondu/pen/yLqMNWX)                                                              |
| Scroll down button         | [CodePen by JakubHonisek](https://codepen.io/JakubHonisek/pen/qjpeeO)                                                 |
| Scroll direction detection | [Stack Overflow](https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js)                     |
| Social links               | [CodePen by eugene_burlak](https://codepen.io/eugene_burlak/pen/bQvGvr)                                               |
| Hamburger menu             | [YouTube tutorial](https://www.youtube.com/watch?v=XQCuew98W4k&list=PL56uCmDXpcQ69vKYo2Dni24edewD7NCg_&index=5&t=43s) |
| Custom scrollbar           | [CSS-Tricks](https://css-tricks.com/custom-scrollbars-in-webkit/)                                                     |
| Cyberpunk glitch animation | [CodePen by mattgrosswork](https://codepen.io/mattgrosswork/pen/VwprebG)                                              |
| Icons                      | [Iconfinder](https://www.iconfinder.com/)                                                                             |
| Parallax hover tilt        | [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt)                                                  |
| Fade-in on scroll          | [YouTube tutorial](https://www.youtube.com/watch?v=T33NN_pPeNI)                                                       |

## Contact

- LinkedIn: [linkedin.com/in/victor-semencenco](https://www.linkedin.com/in/victor-semencenco/)
- GitHub: [@Gondu](https://github.com/Gondu)

---

© Victor Semencenco. All rights reserved.
