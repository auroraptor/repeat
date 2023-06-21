import React, { useCallback, useState } from "react";

const ThemeProvider = () => {
    const [theme, setTheme] = useState('dark');

    const switchTheme = useCallback(() => {
        setTheme((currentTheme) => 
        currentTheme === 'dark' ? 'light' : 'dark')
    }, []);
}

export default ThemeProvider;