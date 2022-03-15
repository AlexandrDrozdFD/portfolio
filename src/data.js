import dana from './img/danalac.png';
import shelter from './img/shelter.jpg';
import cocapi from './img/cocapi.jpg';
import wildlife from './img/wildlife.jpg';

export const projects = [
  {
    id: 1,
    img: dana,
    link: 'https://danalac.netlify.app',
    git: 'https://github.com/AlexandrDrozdFD/danalact-app/tree/dev',
    title: 'Danalac',
    desc: 'Site-presentation. French products (fmcg). Website created with HTML, SCSS, Bootstrap, Gulp.'
  },
  {
    id: 2,
    img: cocapi,
    link: 'https://cocapi.netlify.com',
    git: 'https://github.com/AlexandrDrozdFD/cocapi',
    title: 'Cocapi',
    desc: 'With COCAPI you can find your favorite cocktail and ingredients. Cocktails fetched from API using React.js'
  },
  {
    id: 3,
    img: shelter,
    link: 'https://alexandrdrozdfd.github.io/shelter/pages/main',
    git: 'https://github.com/AlexandrDrozdFD/shelter',
    title: 'Shelter',
    desc: 'Not only people need a house. Adaptive layout using HTML, SCSS, JS, PixelPerfect'
  },
  {
    id: 4,
    img: wildlife,
    link: 'https://wildlife-pro.netlify.app/',
    git: 'https://github.com/AlexandrDrozdFD/Wildlife',
    title: 'Wildlife',
    desc: 'Landing page using HTML, SCSS, JS, PixelPerfect with template from Figma'
  },
];