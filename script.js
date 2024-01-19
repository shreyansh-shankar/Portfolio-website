document.addEventListener('DOMContentLoaded', function () {
    const themeSwitchToggle = document.querySelector('.theme-switch__checkbox');
  
    // Check the user's preference from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setTheme(isDarkMode);
  
    // Set initial theme based on user preference
    function setTheme(isDarkMode) {
      const root = document.documentElement;
  
      if (isDarkMode) {
        root.style.setProperty('--background-color', '#363062');
        root.style.setProperty('--text-color', '#F5E8C7');
        root.style.setProperty('--backdrop-color', '#435585');
        root.style.setProperty('--primary-color', '#818FB4');
        root.style.setProperty('--text-hover-color', '#a4b6e5');
    } else {
        root.style.setProperty('--background-color', '#F5E8C7');
        root.style.setProperty('--text-color', '#363062');
        root.style.setProperty('--backdrop-color', '#818FB4');
        root.style.setProperty('--primary-color', '#435585');
        root.style.setProperty('--text-hover-color', '#211e3d');
      }
  
      // Update the checkbox state
      themeSwitchToggle.checked = isDarkMode;
    }
  
    // Toggle theme when the checkbox state changes
    themeSwitchToggle.addEventListener('change', function () {
      const isDarkMode = themeSwitchToggle.checked;
      setTheme(isDarkMode);
  
      // Save the user's preference to localStorage
      localStorage.setItem('darkMode', isDarkMode);
    });
  });
  