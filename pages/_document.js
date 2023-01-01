import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="bg-backgroundLight dark:bg-backgroundDark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
