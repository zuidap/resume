/** @format */

import Script from 'next/script';
import '../styles/globals.css';
import '../styles/reset.css';
/** @type {import('next').Metadata} */
export const metadata = {
  title: 'resume',
  description: 'zuidap resume',
};

export default function RootLayout({ children }) {
  return (
    <html lang='zh'>
      <Script src='//at.alicdn.com/t/c/font_3930826_tvom3ym6re.js'></Script>
      <body>{children}</body>
    </html>
  );
}
