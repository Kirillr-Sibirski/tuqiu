import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer'

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
          {/* 
            <main className='max-w-3xl mx-auto bg-slate-200	h-screen'>
              <h1 className='mt-16 mb-4 text-4xl text-indigo-900 text-center'>
                Tuqiu 🏓
              </h1>
              <Main />
            </main> 
          */}
          <Main />
          {/* <Footer /> */}
          <NextScript />

        </body>
      </Html>
    )
  }
}

export default MyDocument

