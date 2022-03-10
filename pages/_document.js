import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏓</text></svg>"
          />
        </Head>

        <body className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>
          
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument

