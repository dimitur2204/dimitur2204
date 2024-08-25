import * as CookieConsent from "vanilla-cookieconsent";

const cookiesConfig =
  /**
   * All config. options available here:
   * https://cookieconsent.orestbida.com/reference/configuration-reference.html
   */
  {
    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
      name: "cc_cookie",
      // domain: location.hostname,
      // path: '/',
      // sameSite: "Lax",
      // expiresAfterDays: 365,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
      consentModal: {
        layout: "cloud inline",
        position: "bottom center",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },

    onFirstConsent: ({ cookie }) => {
      const categories = cookie.categories;

      console.log(categories);
      if (categories.includes("analytics")) {
        localStorage.setItem("consentGranted", "true");
        function gtag() {
          dataLayer.push(arguments);
        }

        gtag("consent", "update", {
          ad_user_data: "granted",
          ad_personalization: "granted",
          ad_storage: "granted",
          analytics_storage: "granted",
        });
        // Load gtag.js script.
        var gtagScript = document.createElement("script");
        gtagScript.async = true;
        gtagScript.src =
          "https://www.googletagmanager.com/gtag/js?id=Google tag ID";

        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(gtagScript, firstScript);
      }
    },

    categories: {
      necessary: {
        enabled: true, // this category is enabled by default
        readOnly: true, // this category cannot be disabled
      },
      analytics: {
        autoClear: {
          cookies: [
            {
              name: /^_ga/, // regex: match all cookies starting with '_ga'
            },
            {
              name: "_gid", // string: exact cookie name
            },
          ],
        },

        // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
        services: {
          ga: {
            label: "Google Analytics",
            onAccept: () => {},
            onReject: () => {},
          },
          youtube: {
            label: "Youtube Embed",
            onAccept: () => {},
            onReject: () => {},
          },
        },
      },
      ads: {},
    },

    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "We use cookies",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
            // closeIconLabel: 'Reject all and close modal',
            footer: `
                        <a href="#path-to-impressum.html" target="_blank">Impressum</a>
                        <a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
                    `,
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Accept current selection",
            closeIconLabel: "Close modal",
            serviceCounterLabel: "Service|Services",
            sections: [
              {
                title: "Your Privacy Choices",
                description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
              },
              {
                title: "Strictly Necessary",
                description:
                  "These cookies are essential for the proper functioning of the website and cannot be disabled.",

                //this field will generate a toggle linked to the 'necessary' category
                linkedCategory: "necessary",
              },
              {
                title: "Performance and Analytics",
                description:
                  "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                linkedCategory: "analytics",
                cookieTable: {
                  caption: "Cookie table",
                  headers: {
                    name: "Cookie",
                    domain: "Domain",
                    desc: "Description",
                  },
                  body: [
                    {
                      name: "_ga",
                      domain: location.hostname,
                      desc: "Description 1",
                    },
                    {
                      name: "_gid",
                      domain: location.hostname,
                      desc: "Description 2",
                    },
                  ],
                },
              },
              {
                title: "Targeting and Advertising",
                description:
                  "These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
                linkedCategory: "ads",
              },
              {
                title: "More information",
                description:
                  'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
              },
            ],
          },
        },
      },
    },
  };

export default cookiesConfig;
