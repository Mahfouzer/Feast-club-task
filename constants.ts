const COLORS = {
    WHITE: "white",
    BLACK: "black",
    GREEN: "green",
    GREY: "#DEDEDE",
    BACKGROUND: "#f1f1f1"
}

const FONT_SIZES = {
    NORMAL: 16,
    HEADING: 20,
    SUBHEADING: 18
}

const AppTheme = {
    dark: false, colors: {
        primary: 'rgb(255, 45, 85)',
        background: COLORS.BACKGROUND,
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)'
    }
}

export { COLORS, FONT_SIZES, AppTheme }