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
})

export default baseTheme
