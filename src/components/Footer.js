import { footerLinks, footerIcons } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {footerIcons.map(({ id, href, className }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        Greg's Web Dev Practice copyright &copy;
        <span id="date">{new Date().getFullYear()}</span> - all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
