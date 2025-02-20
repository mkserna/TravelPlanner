module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                azulPrincipal: "#045C92",
                azulSecundario: "#066495",
                moradoSecundario: "#51719C",
                amarilloSecundario: "#FBB470",
                rosadoSecundario: "#D7ACA2",
                grisSecundario: "#909090",
            },
            fontFamily: {
                MontserratItalic: ['MontserratItalic'],
                MontserratRegular: ['MontserratRegular'],
                MontserratMedium: ['MontserratMedium'],
                MontserratSemibold: ['MontserratSemibold'],
                MontserratBold: ['MontserratBold'],
                MontserrarLight: ['MontserrarLight'],
            },
            borderRadius: {
                'custom': '3rem',
            },
        },
    },
    plugins: [],
}