import { useTheme } from '@chakra-ui/react'

interface GradientMappings {
    [key: string]: string
}

interface MessageStyles {
    borderColor?: string
    background?: string
    gifBackground?: string
    messageBoxStyle?: string
    backgroundGradient?: string
}

interface ThemeInfo {
    themeName: string
    getGradient: () => string
    getMessageBoxStyles: (type: string) => MessageStyles | undefined
}

const useThemeMapping = (): ThemeInfo => {
    const theme = useTheme()

    const gradientMappings: GradientMappings = {
        nightTheme: theme.gradients.NightSky,
        morningTheme: theme.gradients.MorningSky,
        dayTheme: theme.gradients.DaySky,
        afternoonTheme: theme.gradients.AfternoonSky,
        // Add mappings for other themes as needed
    }

    const messageStyles: MessageStyles = theme.messageStyles || {}

    const themeName = theme.themeName || 'nightTheme' // Default to 'nightTheme' if theme name is not found

    const getGradient = (): string => {
        return gradientMappings[themeName] || '' // Retrieve the gradient based on the current theme
    }

    const getMessageBoxStyles = (type: string): MessageStyles | undefined => {
        const styles = messageStyles && theme.messageStyles[type]
        if (typeof styles === 'object') {
            return styles
        }
        return undefined
    }
    return { themeName, getGradient, getMessageBoxStyles }
}

export default useThemeMapping
