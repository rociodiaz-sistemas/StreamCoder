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
        amarilloMorning: '#FFC926',
        amarilloMorningBit: '#FFB800',
        grisPalidoMorning: 'rgba(245, 245, 245, 0.56)',
        azulMorado: '#664EFF',
        blueDayCommon: '#0E3BB9',
        grisPalidoDay: 'rgba(245, 245, 245, 0.85)',
        grisPalidoMorningBit: 'rgba(244, 235, 255, 0.46)',
        grisMorningSub: 'rgba(244, 235, 255, 0.64)',
    },
})

export default baseTheme
