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
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="https://gkos.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Julius Nyambok',
};
