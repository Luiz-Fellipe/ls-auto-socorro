import { AppProps } from 'next/app';

//SEO
import { DefaultSeo } from 'next-seo';
import { SEO } from '../../next-seo-config';

//Hooks
import { useMediaQuery } from '~/hooks/useMediaQuery';

//Components
import { HeaderResponsive } from '~/components/HeaderResponsive';
import { Header } from '~/components/Header';

//Styles
import { globalStyles } from '~/styles/global';

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <DefaultSeo {...SEO} />
      {isDesktop ? <Header /> : <HeaderResponsive />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
