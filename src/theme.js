import { extendTheme } from "@chakra-ui/react"

export default {
    colors: {
        transparent: 'transparent',
        black: '#0f0',
        white: '#f0f',
        gray: {
            50: '#f00c',
            900: '#171923',
        },
    },
}

export const candy = extendTheme({  
    colors:{
        brand: {
            100: '#ffb7d5'
        }
    }
})