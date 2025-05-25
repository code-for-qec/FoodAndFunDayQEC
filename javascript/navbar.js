document.addEventListener("DOMContentLoaded", function () {
    // Check the current page path
    const currentPage = window.location.pathname;
    const isDiscothequePage = currentPage.includes('/htmlfiles/discotheque.html');

    // Determine the background color class based on the page
    const navbarBgClass = isDiscothequePage ? 'bg-[#0d1c1b]' : 'bg-[#26443d]';

    const navbarHTML = `
    <nav class="${navbarBgClass} text-[#e8d5b5] px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50 overflow-hidden text-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <a href="../htmlfiles/index.html" class="text-xl font-bold text-[#d5ab6d]">Food & Fun Day</a>
          <button id="menu-toggle" class="md:hidden text-[#d5ab6d] focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul class="hidden md:flex space-x-2 text-sm font-semibold">
            <a href="../htmlfiles/discotheque.html" class="flex items-center gap-2 px-2 py-2 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
              <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-8 w-8" />
              Discotheque
            </a>
            <a href="../htmlfiles/gaming.html" class="flex items-center gap-2 px-2 py-2 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
              <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-8 w-8" />
              Gaming
            </a>
            <a href="../htmlfiles/football.html" class="flex items-center gap-2 px-2 py-2 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
              <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-8 w-8" />
              Football Tournament
            </a>
            <a href="../htmlfiles/foodstalls.html" class="flex items-center gap-2 px-2 py-2 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
              <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-8 w-8" />
              Food Stalls
            </a>
            <a href="../htmlfiles/activities.html" class="flex items-center gap-2 px-2 py-2 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
              <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-8 w-8" />
              Activities
            </a>
          </ul>          
        </div>
        <!-- Mobile Menu -->
        <ul id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out mt-3 space-y-2 text-sm font-semibold">
            <li>
              <a href="../htmlfiles/discotheque.html" class="flex items-center gap-2 px-2 py-1 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
                <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-8 w-8" />
                Discotheque
              </a>
            </li>
            <li>
              <a href="../htmlfiles/gaming.html" class="flex items-center gap-2 px-2 py-1 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
                <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-8 w-8" />
                Gaming
              </a>
            </li>
            <li>
              <a href="../htmlfiles/football.html" class="flex items-center gap-2 px-2 py-1 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
                <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-8 w-8" />
                Football Tournament
              </a>
            </li>
            <li>
              <a href="../htmlfiles/foodstalls.html" class="flex items-center gap-2 px-2 py-1 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
                <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-8 w-8" />
                Food Stalls
              </a>
            </li>
            <li>
              <a href="../htmlfiles/activities.html" class="flex items-center gap-2 px-2 py-1 hover:text-white rounded-md hover:bg-[#1f3c35] transition-colors">
                <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-8 w-8" />
                Activities
              </a>
            </li>
        </ul>   
    </nav>
    `;

    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;

        // Mobile menu toggle
        const toggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");

        toggle.addEventListener("click", () => {
            const isExpanded = mobileMenu.classList.contains("max-h-60");
            mobileMenu.classList.toggle("max-h-60");
            mobileMenu.classList.toggle("max-h-0");
        });
    }
});

