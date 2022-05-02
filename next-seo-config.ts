const title = 'LS AUTO SOCORRO - Transporte de Veículos e Cargas Secas';
const description =
  'A LS Auto Socorro realiza o transporte dos mais diversos veiculos e cargas pelo Brasil';

export const SEO = {
  title,
  canonical: 'https://lsautosocorro.com.br',
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://lsautosocorro.com.br',
    title,
    description,
    images: [
      {
        url: '/images/imageMetatag.png',
        alt: title,
        width: 1200,
        height: 628,
      },
    ],
  },
};
