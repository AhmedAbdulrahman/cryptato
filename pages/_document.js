import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="sv-SE">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Roboto:400,500,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Jura:400,500|Khand"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
