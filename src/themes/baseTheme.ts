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
        RosaBarbie: '#ED1E81',
        nightWhite: '#F5F5F5',
        rositaBb: 'rgba(237, 30, 129, 0.35)',
        cuteCosmico:
            'linear-gradient(180deg, rgba(237, 30, 129, 0.55) 0%, rgba(254, 246, 172, 0.69) 100%)',
    },
})

export default baseTheme
