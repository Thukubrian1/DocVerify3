/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./dist/*.{html,js}",
        './node_modules/preline/dist/preline.js',
        "./node_modules/flowbite/**/*.js",

    ],
    theme: {
        extend: {

        },
    },
    plugins: [

        require('preline/plugin'),
        require('flowbite/plugin'),

    ],
}