import './globals.css';

export const metadata = {
  title: 'Starlink Kazakhstan - Высокоскоростной спутниковый интернет',
  description: 'Подключите Starlink в Казахстане! Высокоскоростной спутниковый интернет до 400 Мбит/с. Глобальное покрытие, простая установка, безлимитный трафик.',
  keywords: 'Starlink, Казахстан, спутниковый интернет, высокоскоростной интернет, SpaceX, интернет в отдаленных районах',
  openGraph: {
    title: 'Starlink Kazakhstan - Высокоскоростной спутниковый интернет',
    description: 'Подключите Starlink в Казахстане! Высокоскоростной спутниковый интернет до 400 Мбит/с.',
    type: 'website',
    locale: 'ru_KZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body>{children}</body>
    </html>
  );
}