const cookieConfig = {
    current_lang: 'en',
    autoclear_cookies: true,
    page_scripts: true,

    onFirstAction: function (user_preferences, cookie) {
        const analyticsEnabled = window.CookieConsent.allowedCategory('analytics');
        console.log(`analytics ${analyticsEnabled ? 'enabled' : 'disabled'}`);
        
        if (user_preferences.accepted_categories.includes('analytics')) {
            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('consent', 'update', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'granted',
            });
            
            // Load gtag.js script
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XW94197VLG';
            
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(gtagScript, firstScript);
        }
    },

    onAccept: function (cookie) {
        // Handle accept
    },

    onChange: function (cookie, changed_preferences) {
        // Handle change
    },

    languages: {
        en: {
            consent_modal: {
                title: 'We use cookies!',
                description:
                    'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all',
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary',
                },
            },
            settings_modal: {
                title: 'Cookie Settings',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Expiration' },
                    { col4: 'Description' },
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description:
                            'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
                    },
                    {
                        title: 'Strictly necessary cookies',
                        description:
                            'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true,
                        },
                    },
                    {
                        title: 'Performance and Analytics cookies',
                        description:
                            'These cookies allow the website to remember the choices you have made in the past',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false,
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'Google Analytics tracking cookie',
                                is_regex: true,
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'Google Analytics tracking cookie',
                            },
                        ],
                    },
                    {
                        title: 'More information',
                        description:
                            'For any queries in relation to our policy on cookies and your choices, please contact me.',
                    },
                ],
            },
        },
    },
};

// Initialize cookie consent
window.addEventListener('load', function () {
    window.CookieConsent = initCookieConsent();
    window.CookieConsent.run(cookieConfig);
});
