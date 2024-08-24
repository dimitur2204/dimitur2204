import { useEffect } from 'react';
import pluginConfig from './CookiesConfig';
import 'vanilla-cookieconsent';

const Cookies = () => {
  useEffect(() => {
    /**
     * useEffect is executed twice (React 18+),
     * make sure the plugin is initialized and executed once
     */
    if (!document.getElementById('cc--main')) {
      window.CC = window.initCookieConsent();
      window.CC.run(pluginConfig);
    }
  }, []);

  return null;
};

export default Cookies;

