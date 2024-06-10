document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('nav .menu > li > a');
    var openSubmenu = null;

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            var submenu = this.nextElementSibling;

            if (submenu && submenu.classList.contains('submenu')) {
                if (submenu.style.display === 'block') {
                    // If submenu is already open, follow the link
                    return true;
                } else {
                    // If submenu is not open, open it and prevent default action
                    event.preventDefault();
                    closeAllSubmenus();
                    submenu.style.display = 'block';
                    openSubmenu = submenu;
                }
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (openSubmenu && !event.target.closest('nav .menu > li')) {
            openSubmenu.style.display = 'none';
            openSubmenu = null;
        }
    });

    function closeAllSubmenus() {
        var submenus = document.querySelectorAll('nav .submenu');
        submenus.forEach(function(submenu) {
            submenu.style.display = 'none';
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu a');

    function setActiveLink(event) {
        menuLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    menuLinks.forEach(function(link) {
        link.addEventListener('click', setActiveLink);
    });

    var currentHash = window.location.hash;
    if (currentHash) {
        var currentLink = document.querySelector('.menu a[href="' + currentHash + '"]');
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});
