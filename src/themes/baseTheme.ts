import { extendTheme } from '@chakra-ui/react'

const baseTheme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'md',
                padding: '0.75rem 1.5rem',
                fontWeight: 'bold',
                width: 200,
            },
        },
    },
    colors: {
        rosaBarbie: '#ED1E81',
        nightWhite: '#F5F5F5',
        rositaBb: 'rgba(237, 30, 129, 0.35)',
        cuteCosmico:
            'linear-gradient(180deg, rgba(237, 30, 129, 0.55) 0%, rgba(254, 246, 172, 0.69) 100%)',
        lila: '#9747FF',
        rosaPalido: 'rgba(245, 214, 211, 0.43)',
        nightSkyAfternoon:
            'linear-gradient(180deg, rgba(20, 19, 17, 0.76) 0%, rgba(45, 46, 56, 0.76) 45.5%, rgba(51, 56, 80, 0.76) 60%, rgba(85, 58, 119, 0.76) 100%);',
        bitGif: 'url("https://media.tenor.com/yGH5RwRTBwEAAAAj/stars-glitter.gif")',
    },
})

export default baseTheme
