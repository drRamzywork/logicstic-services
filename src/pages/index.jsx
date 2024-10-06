import Head from "next/head";
import Home from "@/components/Home";


export default function App() {
  const title = ' المنتدى اللوجستي العالمي';
  const desc = ``

  const imagePath = '/favicon.ico';
  const locale = 'ar'
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="" />
        <link rel="icon" type="image/icon" href={`${imagePath}`} />
        <meta name="theme-color" content="#002438" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <link
          rel="apple-touch-icon"
          href={`https://www.glforum.info${imagePath}`}
        />
        <link
          rel="apple-touch-startup-image"
          href={`https://www.glforum.info${imagePath}`}
        />
        <meta name="author" content={title} />
        <meta name="description" content={desc} />
        <link
          rel="canonical"
          href={`https://www.glforum.info/${locale}`}
        />
        <meta name="msapplication-TileColor" content="#002438" />
        <meta
          name="msapplication-TileImage"
          content={`https://www.glforum.info${imagePath}`}
        />
        <meta name="msapplication-square70x70logo" content={imagePath} />
        <meta name="msapplication-square150x150logo" content={imagePath} />
        <meta name="msapplication-wide310x150logo" content={imagePath} />
        <meta name="msapplication-square310x310logo" content={imagePath} />
        <link rel="apple-touch-icon-precomposed" href={imagePath} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale} />
        <meta
          property="og:url"
          content={`https://www.glforum.info/${locale}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content={`https://www.glforum.info${imagePath}`}
        />
        <meta itemProp="name" content={title} />
        <meta itemProp="author" content={title} />
        <meta
          itemProp="image"
          content={`https://www.glforum.info${imagePath}`}
        />
        <meta itemProp="description" content={desc} />
        <meta
          name="twitter:image"
          content={`https://www.glforum.info${imagePath}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:image:src"
          content={`https://www.glforum.info${imagePath}`}
        />
        <meta name="twitter:description" content={desc} />
      </Head>


      <Home />
    </>
  );
}
