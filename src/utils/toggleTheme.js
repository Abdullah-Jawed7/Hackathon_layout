
export function toggleTheme(theme) {
     console.log(theme)  
    if (theme === "light") {   
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
}

