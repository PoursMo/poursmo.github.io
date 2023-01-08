var currentScroll = null

document.addEventListener('DOMContentLoaded', function() {

    // This adds a listener to perform the menu toggling/untoggling
    // It basically displays the navigation menu and hides all the page content
    // so that the menu takes all the available space.
    const menuToggle = document.getElementById('mobile-menu-toggle')
    var menuToggled = false

    if (menuToggle.style.display != 'none') {
        const menu = document.getElementById('mobile-sidebar-content')
        const contentWrapper = document.getElementById('content-wrapper')
        menuToggle.addEventListener('click', function () {
            if (!menuToggled) {
                currentScroll = document.documentElement.scrollTop || document.body.scrollTop
                menu.classList.toggle('mobile-sidebar-content-active')
                contentWrapper.style.display = 'none'
                menuToggled = true
            }
            else {
                contentWrapper.style.display = 'block'
                menu.classList.remove('mobile-sidebar-content-active')
                document.documentElement.scrollTop = document.body.scrollTop = currentScroll
                currentScroll = null
                menuToggled = false
            }
        })
    }
 });