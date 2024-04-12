import React from 'react';

interface ThemeSwitcherProps {
  themes: string[]
  selectedTheme: string
  onChangeTheme: (theme: string) => void
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  themes,
  selectedTheme,
  onChangeTheme,
}) => {
  return (
    <div>
      <label htmlFor="theme-select">Select a theme:</label>
      <select
        id="theme-select"
        value={selectedTheme}
        onChange={(e) => onChangeTheme(e.target.value)}
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
