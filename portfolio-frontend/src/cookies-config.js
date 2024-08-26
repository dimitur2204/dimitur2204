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
              "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage Individual preferences",
            // closeIconLabel: 'Reject all and close modal',
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
                    },
                    {
                      name: "_gid",
                      domain: location.hostname,
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
                  'For any queries in relation to my policy on cookies and your choices, please send an email to: <a href="mailto:dimitur2204@gmail.com">',
              },
            ],
          },
        },
        bg: {
          consentModal: {
            title: "Ние използваме бисквитки",
            description:
              "Ние използваме бисквитки за да персонализираме съдържанието и рекламите, да предоставим функции за социални мрежи и да анализираме трафика си.",
            acceptAllBtn: "Приеми всички",
            acceptNecessaryBtn: "Откажи всички",
            showPreferencesBtn: "Управление на индивидуални предпочитания",
            // closeIconLabel: 'Reject all and close modal',
          },
          preferencesModal: {
            title: "Управление на предпочитанията за бисквитки",
            acceptAllBtn: "Приеми всички",
            acceptNecessaryBtn: "Откажи всички",
            savePreferencesBtn: "Приеми текущия избор",
            closeIconLabel: "Затвори модално",
            serviceCounterLabel: "Услуга|Услуги",
            sections: [
              {
                title: "Вашите избори за поверителност",
                description: `В този панел можете да изразите някои предпочитания, свързани с обработката на вашата лична информация. Можете да прегледате и промените изразените избори по всяко време, като повторно появите този панел чрез предоставената връзка. За да откажете съгласието си за конкретните обработващи дейности, описани по-долу, превключете превключвателите на изключено или използвайте бутона „Откажи всички“ и потвърдете, че искате да запазите изборите си.`,
              },
              {
                title: "Абсолютно необходими",
                description:
                  "Тези бисквитки са от съществено значение за правилното функциониране на уебсайта и не могат да бъдат деактивирани.",

                //this field will generate a toggle linked to the 'necessary' category
                linkedCategory: "necessary",
              },
              {
                title: "Производителност и анализи",
                description:
                  "Тези бисквитки събират информация за начина, по който използвате уебсайта ни. Всички данни са анонимизирани и не могат да бъдат използвани за идентифициране на личността ви.",
                linkedCategory: "analytics",
                cookieTable: {
                  caption: "Таблица с бисквитки",
                  headers: {
                    name: "Бисквитка",
                    domain: "Домейн",
                    desc: "Описание",
                  },
                  body: [
                    {
                      name: "_ga",
                      domain: location.hostname,
                    },
                    {
                      name: "_gid",
                      domain: location.hostname,
                    },
                  ],
                },
              },
              {
                title: "Цели и рекламиране",
                description:
                  "Тези бисквитки се използват за правене на рекламни съобщения по-релевантни за вас и вашите интереси. Целта е да се показват реклами, които са релевантни и привлекателни за индивидуалния потребител и по този начин да са по-ценни за издателите и рекламодателите от трети страни.",
                linkedCategory: "ads",
              },
              {
                title: "Повече информация",
                description:
                  'За всякакви въпроси, свързани с моята политика относно бисквитките и вашите избори, моля изпратете имейл на: <a href="mailto: dimitur2204@gmail.com">',
              },
            ],
          },
        },
      },
    },
  };

export default cookiesConfig;
