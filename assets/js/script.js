$(document).ready(function() {    
    const toggleButton = $('#darkModeToggle');
    const body = $('body');
    function applyTheme(theme) {
        body.attr('data-bs-theme', theme);
        if (theme === 'dark') {
            toggleButton.html('<i class="fas fa-sun"></i>'); 
            toggleButton.html('<i class="fas fa-moon"></i>'); 
        }
    }
    const storedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(storedTheme);
    toggleButton.on('click', function() {
        const currentTheme = body.attr('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    $('a[href*="#"]:not([href="#"])').on('click', function(event) { 
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');           
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 56 
                }, 800); 
            }
        }
    });
    $('#viewProjectsBtn').on('click', function(event) { 
        event.preventDefault(); 
        var target = $('#projects-preview'); 
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 56 
            }, 800); 
        }
    });
});