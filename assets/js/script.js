$(document).ready(function() {
    
    // --- 1. DARK MODE TOGGLE FUNCTIONALITY ---
    const toggleButton = $('#darkModeToggle');
    const body = $('body');

    // Function to apply the stored or default theme
    function applyTheme(theme) {
        body.attr('data-bs-theme', theme);
        if (theme === 'dark') {
            toggleButton.html('<i class="fas fa-sun"></i>'); // Sun icon for dark mode
        } else {
            toggleButton.html('<i class="fas fa-moon"></i>'); // Moon icon for light mode
        }
    }

    // Load theme preference from Local Storage or default to 'light'
    const storedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(storedTheme);

    // Toggle button click handler
    toggleButton.on('click', function() {
        const currentTheme = body.attr('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply and store the new theme
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- 2. Smooth Scrolling for all Internal Anchor Links ---
    // Targets all anchor links that start with '#' and do not equal just '#'
    $('a[href*="#"]:not([href="#"])').on('click', function(event) {
        
        // Check if the link points to a location on the current page
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    // Scroll to the element's top position, compensating for the fixed navbar height (56px)
                    scrollTop: target.offset().top - 56 
                }, 800); // Smoother, slightly faster scroll
            }
        }
    });

    // --- 3. Specific Smooth Scroll for the Hero 'View Projects' Button ---
    // Targets the button by its ID
    $('#viewProjectsBtn').on('click', function(event) { // Updated ID to viewProjectsBtn
        event.preventDefault(); 

        var target = $('#projects-preview'); // Corrected target ID
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 56 
            }, 800); 
        }
    });
});