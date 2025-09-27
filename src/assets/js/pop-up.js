    document.addEventListener('DOMContentLoaded', () => {
        const popup = document.getElementById('donation-popup');
        const closeButton = document.getElementById('close-popup');
        const donateButton = document.getElementById('donate-button');

        // --- 1. Pop-up Visibility Logic ---

        // A simple function to show the pop-up
        const showPopup = () => {
            // Only show if the user hasn't closed it before (using localStorage)
            if (localStorage.getItem('popupClosed') !== 'true') {
                popup.classList.remove('modal-hidden');
            }
        };

        // A function to hide and mark as closed
        const hideAndClose = () => {
            popup.classList.add('modal-hidden');
            // Set a flag in localStorage so it doesn't reappear on subsequent visits
            localStorage.setItem('popupClosed', 'true');
        };


        // --- 2. Event Listeners ---

        // Close when the 'X' button is clicked
        closeButton.addEventListener('click', hideAndClose);

        // Close when clicking outside the modal content
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                hideAndClose();
            }
        });

        // Close when the 'Escape' key is pressed
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !popup.classList.contains('modal-hidden')) {
                hideAndClose();
            }
        });

        // --- 3. Donation Button Click (Optional Tracking) ---
        // If you want to perform any action *before* the redirect (e.g., analytics)
        // donateButton.addEventListener('click', () => {
        //     console.log('Donate button clicked! Redirecting...');
        //     // The 'a' tag handles the actual redirect.
        // });


        // --- 4. Trigger the Pop-up ---

        // Option A: Pop-up after a delay (e.g., 5 seconds)
        setTimeout(showPopup, 5000); // 5000ms = 5 seconds

        /*
        // Option B: Pop-up after the user scrolls down a bit (e.g., 25% of the page)
        const scrollTrigger = 0.25; // 25%
        let hasShown = false;

        window.addEventListener('scroll', () => {
            if (hasShown) return;

            const scrollPos = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPos / pageHeight >= (1 - scrollTrigger)) {
                showPopup();
                hasShown = true;
            }
        });
        */
    });