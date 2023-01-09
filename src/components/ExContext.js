// ExContext --> CompB --> ComC
import React, { useState, createContext } from 'react';
import CompB from './CompB';

// Tạo ngữ cảnh (context) để chia sẻ dữ liệu
export const ThemeContext = createContext();
export default function ExContext() {
    const [theme, setTheme] = useState('light');
    const [message, setMessage] = useState("Rikkei Academy xin chào các bạn lớp Java - 10");
    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <div>
            <ThemeContext.Provider value={{ theme, message }}>
                <h2>Rikkei Academy - React Hooks - Context and useContext</h2>
                <button onClick={handleToggleTheme}>Toggle Theme</button>
                <CompB></CompB>
            </ThemeContext.Provider>
        </div>
    )
}
