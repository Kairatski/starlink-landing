import './globals.css';

export const metadata = {
  title: 'Starlink Landing',
  description: 'Высокоскоростной спутниковый интернет Starlink в Казахстане',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}