import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Julien Okumu is an amazing developer who likes to develop complex stuff and make it look simple."
      />
      <meta
        name="keywords"
        content=""
      />
      <meta property="og:title" content="Julien Okumu's Portfolio" />
      <meta
        property="og:description"
        content=""
      />.
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Julien Okumu',
};
