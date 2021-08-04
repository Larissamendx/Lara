import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="shortcut icon" href="logo.svg" type="image/svg" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com"  /> */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" /> */}
          <link href="//db.onlinewebfonts.com/c/e662339992c4abf5b43f537391bd3169?family=Candara" rel="stylesheet" type="text/css"/>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
