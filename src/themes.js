
// Klaro themes that can be mixed & matched. Some of them change the position,
// others the color scheme. The `_meta` field contains data used e.g. by
// the configuration IDE to see which themes are mutually compatible.
export const themes = {
    top: {
        _meta: {
            incompatibleWith: ['bottom']
        },
        'notice-top': '20px',
        'notice-bottom': 'auto',
    },
    bottom: {
        _meta: {
            incompatibleWith: ['top']
        },
        'notice-bottom': '20px',
        'notice-top': 'auto',
    },
    left: {
        _meta: {
            incompatibleWith: ['wide']
        },
        'notice-left': '20px',
        'notice-right': 'auto',
    },
    right: {
        _meta: {
            incompatibleWith: ['wide']
        },
        'notice-right': '20px',
        'notice-left': 'auto',
    },
    wide: {
        // position the notice on the left screen edge
        'notice-left': '20px',
        'notice-right': 'auto',
        // make the notice span the entire screen
        'notice-max-width': 'calc(100vw - 60px)',
        'notice-position': 'fixed',
    },
    dark: {
        'button-text-color': "#fff",
        'dark1': "#333",
        'dark2': "#5c5c5c",
        'dark3': "#cccccc",
        'light1': "#fafafa",
        'light2': "#c8c8c8",
        'light3': "#a0a0a0",
        'blue1': "#2581c4",
        'blue2': "#459cdc",
        'blue3': "#30a9ff",
        'green1': "#1a936f",
        'green2': "#24cc9a",
        'green3': "#48dfb2"
    },
    light: {
        'button-text-color': "#fff",
        'dark1': "#fafafa",
        'dark2': "#777",
        'dark3': "#555",
        'light1': "#444",
        'light2': "#666",
        'light3': "#111",
        'blue1': "#2581c4",
        'blue2': "#459cdc",
        'blue3': "#30a9ff",
        'green1': "#1a936f",
        'green2': "#24cc9a",
        'green3': "#48dfb2"
    },
    light_neutral: {
        'dark1': "#fafafa",
        'dark3': "#555",
        'light1': "#444"
    }
}
