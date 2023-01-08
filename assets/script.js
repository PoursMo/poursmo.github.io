document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-toggle')
    var menuToggled = false

    if (menuToggle.style.display != 'none') {
        const menu = document.getElementById('mobile-sidebar-content')
        menuToggle.addEventListener('click', function () {
            if (!menuToggled) {
                menu.classList.toggle('mobile-sidebar-content-active')
                menuToggled = true
            }
            else {
                menu.classList.remove('mobile-sidebar-content-active')
                menuToggled = false
            }
        })
    }
 });