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
        lila: '#9747FF',
        rosaPalido: 'rgba(245, 214, 211, 0.43)',
    },
})

export default baseTheme
