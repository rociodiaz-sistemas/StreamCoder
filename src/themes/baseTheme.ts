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
        ChatMessage: {
            common: {
                color: '#F5F5F5',
                backgroundColor: 'rgba(237, 30, 129, 0.35)'
            },
            highlighted: {
                color: '#F5F5F5',
                backgroundColor: 'linear-gradient(180deg, rgba(237, 30, 129, 0.55) 0%, rgba(254, 246, 172, 0.69) 100%)',
            },
            subscriber: {
                color: '#FFFFFF',
                backgroundColor: 'linear-gradient(0deg, rgba(237, 30, 129, 0.13), rgba(237, 30, 129, 0.13)), url(planet.png)',
            },
            bit: {
                color: '#F5F5F5',
                backgroundColor: 'rgba(237, 30, 129, 0.13)',
            },
            vip: {
                color: "purple",
                backgroundColor: "lavender",
            },
            // Add more message types as needed
        }
    },
    colors: {
        commonText: "black",
        commonBackground: "lightgray",
        subscriberText: "blue",
        subscriberBackground: "lightblue",
        bitText: "yellow",
        bitBackground: "lightyellow",
        highlightedText: "white",
        highlightedBackground: "orange",
        vipText: "purple",
        vipBackground: "lavender",
        // Add more color variables as needed
      },
})

export default baseTheme
