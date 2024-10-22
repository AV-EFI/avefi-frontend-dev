import {nord} from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app.vue',
        'formkit.theme.ts'
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
            },
            /**colors here will override theme-specific colors*/
            colors: {
                'bali-hai': {
                    '50': '#f3f7f8',
                    '100': '#dfe9ee',
                    '200': '#c3d5de',
                    '300': '#9ab8c6',
                    '400': '#80a3b5',
                    DEFAULT: '#80a3b5',
                    '500': '#4d768d',
                    '600': '#436277',
                    '700': '#3b5263',
                    '800': '#364754',
                    '900': '#313d48',
                    '950': '#1d262f',
                },
                'primary': {
                    '50': '#f3f7f8',
                    '100': '#dfe9ee',
                    '200': '#c3d5de',
                    '300': '#9ab8c6',
                    '400': '#80a3b5',
                    DEFAULT: '#80a3b5',
                    '500': '#4d768d',
                    '600': '#436277',
                    '700': '#3b5263',
                    '800': '#364754',
                    '900': '#313d48',
                    '950': '#1d262f',
                },
                'accent': {
                    DEFAULT: '#ff1d25'
                }
            }
        }
    },
    darkMode: [
        'selector', 
        '[data-theme="avefi_dark"]', 
        'variant', [
            '@media (prefers-color-scheme: dark) { &:not(.light *) }',
            '&:is([data-theme="avefi_dark"] *)',
            '&:where([data-theme="avefi_dark"] *)'
        ]
    ],
    //darkMode: 'selector',
    /*
    darkMode: ['variant', [
        '@media (prefers-color-scheme: dark) { &:not(.light *) }',
        '&:is(.dark *)',
        '&:where(.dark *)'
    ]],
    */
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ],
    daisyui: {
        base: true,
        styled: true,
        utils: true,
        darkTheme: "avefi_dark",
        logs: false,
        //themeRoot: '*',
        viewer: false,
        themes: [
            {
                'avefi_light': {
                    nord,
                    //...require("daisyui/src/theming/themes")["nord"],
                    'primary': '#80a3b5',
                    'primary-50': '#f3f7f8',
                    'primary-100': '#dfe9ee',
                    'primary-200': '#c3d5de',
                    'primary-300': '#9ab8c6',
                    'primary-400': '#80a3b5',
                    'primary-500': '#4d768d',
                    'primary-600': '#436277',
                    'primary-700': '#3b5263',
                    'primary-800': '#364754',
                    'primary-900': '#313d48',
                    'primary-950': '#1d262f',
                    "primary-content": "#f3f7f8",
                    "secondary": "#D7BF83",
                    "accent": "#ff1d25",
                    "info": "#17a2b8",
                    "success": "#78DBAA",
                    "warning": "#F8A948",
                    "neutral": "#ffffff",
                    "error": "#FF9DA0",
                    "bali-hai": "#80a3b5",
                    'base-100': "#fefefe",
                    'base-200': "#fdfdfd",
                    'base-content': '#222222'
                    /* below syntax not valid in theme */
                    /*
                    'base': {
                        '50': '#efefef',
                        '100': '#ff0000',
                        '200': '#cecece',
                        '300': '#aeaeae',
                        '400': '#666667',
                        '600': '#444445',
                        'content': '#999999'
                    },
                    */
                },
            },
            {
                'avefi_dark': {
                    //night,
                    ...require("daisyui/src/theming/themes")["night"],
                    'primary': '#80a3b5',
                    'primary-50': '#f3f7f8',
                    'primary-100': '#dfe9ee',
                    'primary-200': '#c3d5de',
                    'primary-300': '#9ab8c6',
                    'primary-400': '#80a3b5',
                    'primary-500': '#4d768d',
                    'primary-600': '#436277',
                    'primary-700': '#3b5263',
                    'primary-800': '#364754',
                    'primary-900': '#313d48',
                    'primary-950': '#1d262f',
                    "info": "#17a2b8",
                    "success": "#78DBAA",
                    "warning": "#F8A948",
                    "neutral": '#1d262f',
                    "error": "#FF9DA0",
                    "bali-hai": "#80a3b5",
                }
            }
        ],
    },
};