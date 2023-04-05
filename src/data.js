import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';
import img4 from './images/tour-4.jpeg';
import img5 from './images/tour-5.jpeg';
import img6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#footer', text: 'footer' },
];

export const socialLinks = [
  { id: 1, href: 'http://www.twitter.com', className: 'fab fa-twitter' },
  { id: 2, href: 'http://www.facebook.com', className: 'fab fa-facebook' },
  {
    id: 3,
    href: 'http://www.squarespace.com',
    className: 'fab fa-squarespace',
  },
];

export const services = [
  { id: 1, className: 'fas fa-wallet fa-fw', serviceTitle: 'saving money' },
  { id: 2, className: 'fas fa-tree fa-fw', serviceTitle: 'nature adventures' },
  { id: 3, className: 'fas fa-socks fa-fw', serviceTitle: 'homestyle comfort' },
];

export const tourCards = [
  { id: 1, imgSrc: img1, date: 'august 26th, 2023' },
  { id: 2, imgSrc: img2, date: 'october 1th, 2023' },
  { id: 3, imgSrc: img3, date: 'september 15th, 2023' },
  { id: 4, imgSrc: img4, date: 'december 5th, 2023' },
  { id: 5, imgSrc: img5, date: 'January 15th, 2024' },
  { id: 6, imgSrc: img6, date: 'April 20th, 2024' },
];

export const tourInfo = [
  {
    id: 1,
    name: 'Tibet Adventure',
    country: 'china',
    length: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    name: 'Best of Java',
    country: 'indonesia',
    length: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    name: 'Explore Hong Kong',
    country: 'hong kong',
    length: '14 days',
    price: 'from $5000',
  },
  {
    id: 4,
    name: 'Kenya Highlights',
    country: 'kenya',
    length: '20 days',
    price: 'from $3300',
  },
  {
    id: 5,
    name: 'Ugandan Outback',
    country: 'uganda',
    length: '13 days',
    price: 'from $2500',
  },
  {
    id: 6,
    name: 'Taj Mahal Retreat',
    country: 'india',
    length: '15 days',
    price: 'from $1900',
  },
];

export const footerLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'services' },
  { id: 3, href: '#services', text: 'about' },
  { id: 4, href: '#featured', text: 'featured' },
];

export const footerIcons = [
  { id: 1, href: 'https://www.facebook.com', className: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', className: 'fab fa-twitter' },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    className: 'fab fa-squarespace',
  },
];
