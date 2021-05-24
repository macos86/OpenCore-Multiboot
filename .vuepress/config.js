module.exports = {
    title: 'OpenCore Multiboot',
    lang: 'it-IT',
    head: [
        [
            'meta', {
                name: 'theme-color',
                content: '#3eaf7c'
            }
        ],
        [
            'meta', {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            }
        ],
        [
            'meta', {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black'
            }
        ],
        [
            "link", {
                rel: "'stylesheet",
                href: "/styles/website.css"
            },
        ]
    ],

    extendMarkdown: md => {
        md.use(require('markdown-it-multimd-table'), {
            rowspan: true,
        });
    },

    base: '/OpenCore-Multiboot/',

    themeConfig: {
        lastUpdated: 'Ultimo Aggiornamento',
        repo: 'macos86/OpenCore-Multiboot',
        editLinks: true,
        smoothScroll: true,
        editLinkText: 'Help us improve this page!',
        logo: 'homepage.png',
        nav: [{
            text: 'Guide',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Dortania',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'OpenCore Install Guide',
                link: 'https://macos86.github.io/'
            },
            {
                text: 'OpenCore Post-Install (EN)',
                link: 'https://dortania.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Wireless Buyers Guide (EN)',
                link: 'https://dortania.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'GPU Buyers Guide (EN)',
                link: 'https://dortania.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Anti Buyers Guide (EN)',
                link: 'https://dortania.github.io/Anti-Hackintosh-Buyers-Guide/'
            }
            ]
        },
        ],
        sidebar: [
            {
                title: 'Per chi ha già esperienza con i multiboot',
                path: 'QUICK'
            },
            {
                title: 'Introduzione al multibooting',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/Intro/Def', 'Che cos\'è?'],
                    ['/Intro/Booting-part', 'UEFI? Legacy? CSM? Che!?'],
                ]
            },
            {
                title: 'Multiboot su UEFI',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/empty/', 'Dischi vuoti'],
                    {
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            ['/empty/samedisk', 'Un disco - molti sistemi'],
                            ['/empty/diffdisk', 'Differenti dischi - molti sistemi'],
                        ]
                    },
                    ['/exist/', 'Dischi già occupati'],
                    {
                        collapsable: false,
                        sidebarDepth: 1,
                        children: [
                            ['/exist/data', 'Su dischi con dati non relativi ai sistemi operativi (dati)'],
                            ['/exist/os', 'Su dischi con sistemi già presenti (Windows/Linux)'],
                        ]
                    },
                ]
            },
            {
                title: 'Risoluzione dei problemi',
                path: 'Troubleshooting'
            },
            {
                title: 'Configurazioni di OpenCore',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/oc/linux', 'Per avviare Linux'],
                    ['/oc/duet', 'Per installare su sistemi non UEFI'],
                    ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootstrap.html', 'Usare LauncherOption'],
                    ['https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html', 'Installare BootCamp'],
                ]
            },
            {
                title: 'Installazione manuale e automatica di Windows (10)',
                path: 'win'
            }
        ]
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ]
}
