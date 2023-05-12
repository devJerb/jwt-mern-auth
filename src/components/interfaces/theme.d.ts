import "@refinedev/mui";
export interface CustomTheme {
}

declare module "@mui/material/styles" {
    // @ts-ignore
    interface Theme extends import("@mui/material/styles").Theme, CustomTheme {}
    interface ThemeOptions
        // @ts-ignore
        extends import("@mui/material/styles").ThemeOptions,
            CustomTheme {}
}
/*eslint-enable */