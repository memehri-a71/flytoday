
import "./globals.css";
import { Providers } from "@/configs/providers";

export const metadata = {
  title:'بلیط هواپیما ارزان در مرجع خرید بلیط هواپیما | فلای‌تودی',
  description:'خرید بلیط هواپیما ارزان در فلای‌تودی، بهترین قیمت بلیط هواپیما خارجی و داخلی (چارتر و سیستمی) در بیش از 900 ایرلاین معتبر با پشتیبانی 24 ساعته ',
  openGraph: {
    title:'بلیط هواپیما ارزان در مرجع خرید بلیط هواپیما | فلای‌تودی',
    description: 'This is a description of my page.',
    url: 'https://www.flytoday.ir',
    siteName: 'فلای‌تودی',
    type:'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
