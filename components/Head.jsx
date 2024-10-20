import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Julius Nyerere Nyambok's Portfolio."
      />
      <meta
        name="keywords"
        content="Julius Nyambok, Julius Nyambok, data scientist portfolio"
      />
      <meta property="og:title" content="Julius Nyerere's Portfolio" />
      <meta
        property="og:description"
        content="Julius Nyerere Nyerere."
      />
      <meta property="og:image" content="/home.png" />
      <meta property="og:url" content="https://www.linkedin.com/in/julius-nyerere/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Julius Nyambok',
};
