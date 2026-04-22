/**
 * AETHERIA Boutique Hotel - Core Frontend Logic
 */

(function() {
    // Cloudbeds Integration
    function initCloudbeds() {
        const container = document.getElementById('cloudbeds-booking-container');
        if (!container) return;

        if (window.CloudbedsBookingEngine && window.CloudbedsBookingEngine.init) {
            window.CloudbedsBookingEngine.init({
                propertyId: '70415q',
                mode: 'standard', // Corrected from displayMode
                container: '#cloudbeds-booking-container' // Corrected from containerId
            });
        } else {
            setTimeout(initCloudbeds, 500);
        }
    }

    // Mobile Menu Logic
    function initMobileMenu() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = menuToggle.querySelector('.material-symbols-outlined');
                if (icon) {
                    icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
                }
            });
        }
    }

    // Initialize on load
    if (document.readyState === 'complete') {
        initCloudbeds();
        initMobileMenu();
    } else {
        window.addEventListener('load', () => {
            initCloudbeds();
            initMobileMenu();
        });
    }
})();
