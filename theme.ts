// theme.ts - Create this file in your project
import { createContext, useContext, useEffect, useState } from "react";

// Define theme colors
export const darkTheme = {
  background: "#1E1E1E", // Dark matte grey background
  foreground: "#E4E4E4", // Light text
  primary: "#3E3E3E", // Darker matte grey for buttons
  primaryForeground: "#FFFFFF", // White text on primary buttons
  secondary: "#2A2A2A", // Slightly lighter than background
  secondaryForeground: "#E4E4E4", // Light text on secondary
  muted: "#313131", // Muted background
  mutedForeground: "#A0A0A0", // Muted text
  accent: "#404040", // Accent color for hover states
  accentForeground: "#FFFFFF", // Text on accent
  border: "#3A3A3A", // Border color
  input: "#2E2E2E", // Input background
  ring: "#505050", // Focus ring color
  destructive: "#7F3A3A", // Destructive action color
  destructiveForeground: "#FFFFFF", // Text on destructive
  userMessage: "#404D61", // Dark blue-grey for user messages
  aiMessage: "#313131", // Dark grey for AI messages
  success: "#2D4A3E", // Success color
  warning: "#4A412D", // Warning color
};

// Create the theme context
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (isDarkMode) {
      root.classList.add("dark");
      // Apply dark theme colors
      root.style.setProperty("--background", darkTheme.background);
      root.style.setProperty("--foreground", darkTheme.foreground);
      root.style.setProperty("--primary", darkTheme.primary);
      root.style.setProperty("--primary-foreground", darkTheme.primaryForeground);
      root.style.setProperty("--secondary", darkTheme.secondary);
      root.style.setProperty("--secondary-foreground", darkTheme.secondaryForeground);
      root.style.setProperty("--muted", darkTheme.muted);
      root.style.setProperty("--muted-foreground", darkTheme.mutedForeground);
      root.style.setProperty("--accent", darkTheme.accent);
      root.style.setProperty("--accent-foreground", darkTheme.accentForeground);
      root.style.setProperty("--border", darkTheme.border);
      root.style.setProperty("--input", darkTheme.input);
      root.style.setProperty("--ring", darkTheme.ring);
      root.style.setProperty("--destructive", darkTheme.destructive);
      root.style.setProperty("--destructive-foreground", darkTheme.destructiveForeground);
    } else {
      root.classList.remove("dark");
      // Reset to light theme colors (if you need to support light mode)
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);