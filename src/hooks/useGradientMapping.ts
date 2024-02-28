import { useTheme } from '@chakra-ui/react'

interface GradientMappings {
    [key: string]: string
}

interface GradientInfo {
    gradientName: string
    getGradient: () => string
}

const useGradientMapping = (): GradientInfo => {
    const theme = useTheme()

    const gradientMappings: GradientMappings = {
        nightTheme: theme.gradients.NightSky,
        morningTheme: theme.gradients.MorningSky,
        // Add mappings for other themes as needed
    }

    const gradientName = theme.themeName || 'nightTheme' // Default to 'nightTheme' if theme name is not found

    const getGradient = (): string => {
        return gradientMappings[gradientName] || '' // Retrieve the gradient based on the current theme
    }

    return { gradientName, getGradient }
}

export default useGradientMapping
