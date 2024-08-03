import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from 'next/image'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '534410672624192');
            fbq('track', 'PageView');
          `
        }} />
        <noscript>
          <Image height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=534410672624192&ev=PageView&noscript=1" alt=""/>
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${montserrat.className} bg-[#50584B]`}>
        {children}
      </body>
    </html>
  );
}
