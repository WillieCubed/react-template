import SiteWrapper from '../components/SiteWrapper';
import '../styles/globals.css';

/**
 * A wrapper for the site.
 */
export default function AppWrapper({ Component, pageProps }): JSX.Element {
  return (
    <SiteWrapper>
      <Component {...pageProps} />
    </SiteWrapper>
  );
}
