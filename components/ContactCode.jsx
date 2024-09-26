import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'jnyambok14@gmail.com',
    href: 'mailto:jnyambok14@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/julius-nyerere',
    href: 'https://www.linkedin.com/in/julius-nyerere/',
  },
  {
    social: 'GitHub',
    link: 'github.com/Jnyambok',
    href: 'https://github.com/Jnyambok',
  },
  {
    social: 'Medium',
    link: 'medium.com/@juliusnyambok14',
    href: 'https://medium.com/@juliusnyambok14',
  },
  {
    social: 'Portfolio v1',
    link: 'nyerere-data-scientist.carrd.co/',
    href: 'https://nyerere-data-scientist.carrd.co/',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       
      <p className={styles.line}>
        <span>Julius Nyambok Nyerere</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
