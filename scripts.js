// Select the elements
const contactLink = document.getElementById('contact-link');
const contactFooterLink = document.getElementById('contact-footer-link');  // Footer contact link
const floatingButton = document.querySelector('.floating-btn'); 
const popup = document.getElementById('contact-popup');
const closeButton = document.querySelector('.close-btn');
const submitPopup = document.getElementById('submit-popup');
const closeSubmitButton = document.querySelector('.close-popup');
const form = document.querySelector('form');
const joinUsLink = document.getElementById('join-us-link');
const joinUsFooterLink = document.getElementById('join-us-footer-link'); // Footer join us link
const joinUsPopup = document.getElementById('join-us-popup');
const closeJoinUsButton = document.querySelector('.join-us-popup .close-btn');
const joinUsForm = document.getElementById('join-us-form');

// Function to open a popup
function openPopup(popupElement) {
    popupElement.classList.add('show');
}

// Function to close a popup
function closePopup(popupElement) {
    popupElement.classList.remove('show');
}

// Show the contact form popup when 'CONTACT' is clicked
contactLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    openPopup(popup); 
});

// Show the contact form popup when the footer contact link is clicked
contactFooterLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    openPopup(popup); 
});

// Show the contact form popup when the floating button is clicked
floatingButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    openPopup(popup); 
});

// Close the contact popup when the close button is clicked
closeButton.addEventListener('click', function() {
    closePopup(popup); 
});

// Close the contact popup when clicking outside the popup content
document.addEventListener('click', function(e) {
    if (!popup.contains(e.target) && e.target !== contactLink && e.target !== contactFooterLink && e.target !== floatingButton) {
        closePopup(popup);
    }
});

// Handle form submission (this is where we show the confirmation popup)
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    closePopup(popup);
    openPopup(submitPopup);
});

// Close the confirmation popup when the 'CLOSE' button is clicked
closeSubmitButton.addEventListener('click', function() {
    closePopup(submitPopup); 
});

// Show the 'JOIN US' popup when 'Join Us' is clicked
joinUsLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    openPopup(joinUsPopup); 
});

// Show the 'JOIN US' popup when the footer 'Join Us' link is clicked
joinUsFooterLink.addEventListener('click', function(e) {
    e.preventDefault(); 
    openPopup(joinUsPopup); 
});

// Close the 'JOIN US' popup when the close button is clicked
closeJoinUsButton.addEventListener('click', function() {
    closePopup(joinUsPopup); 
});

// Close 'JOIN US' popup when clicking outside the popup content
document.addEventListener('click', function(e) {
    if (!joinUsPopup.contains(e.target) && e.target !== joinUsLink && e.target !== joinUsFooterLink) {
        closePopup(joinUsPopup);
    }
});

// Handle form submission for 'Join Us' popup
joinUsForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    closePopup(joinUsPopup);
    alert("Thank you for your application. We'll get back to you shortly.");
});

// Get elements for burger menu and mobile menu
const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the mobile menu and burger animation
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    burgerMenu.classList.toggle('open');
});

// Close mobile menu when clicking outside the mobile menu content
document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && e.target !== burgerMenu) {
        mobileMenu.classList.remove('open');
        burgerMenu.classList.remove('open');
    }
});

// Close mobile menu when clicking on any menu link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        burgerMenu.classList.remove('open');
    });
});

// Add an event listener for all desktop menu links
document.querySelectorAll('.desktop-menu a').forEach(link => {
    link.addEventListener('click', function() {
        // Close the mobile menu when a link is clicked on desktop
        mobileMenu.classList.remove('open');
        burgerMenu.classList.remove('open');
    });
});

// Scroll animation for Navbar Logo
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar .logo');
const scrollThreshold = 300; // Scroll threshold in pixels

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show logo when scrolled past threshold
    if (currentScroll > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero logo shrinking on scroll
const heroLogo = document.querySelector('.hero-logo');
function handleScroll() {
    if (window.scrollY > 300) {
        heroLogo.style.transform = 'scale(0.7)';
    } else {
        heroLogo.style.transform = 'scale(1)';
    }
}
window.addEventListener('scroll', handleScroll);

// Fallback for backdrop filter support
if (!CSS.supports("backdrop-filter", "blur(5px)")) {
    const navbarBackground = document.querySelector('.navbar-background');
    navbarBackground.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Alternative style
}

// Manage label visibility and selection behavior
document.getElementById('topic').addEventListener('change', function() {
    const topicLabel = document.getElementById('topic-label');
    const selectedTopic = this.options[this.selectedIndex].text;

    // Hide or show label based on selection
    topicLabel.classList.toggle('hidden', this.value);
    topicLabel.textContent = this.value ? selectedTopic : '';
});

// Quote carousel functionality
const quotes = [
    { text: "We sometimes have complicated events with complicated clients, but Pro Event Staffing simplifies things.", author: "Jack, Lawrence Craig" },
    { text: "Most supportive team I’ve worked with!", author: "Tom, The Met museum" }
];

let currentQuoteIndex = 0;
function changeQuote() {
    const quoteTextElement = document.getElementById("quote-text");
    if (quoteTextElement) {
        const currentQuote = quotes[currentQuoteIndex];
        quoteTextElement.innerHTML = `<span class="quote-text">“${currentQuote.text}”</span><span class="author">– ${currentQuote.author}</span>`;
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }
}

// Start the quote carousel
setInterval(changeQuote, 5000);
changeQuote();

// Shuffle images in a row on hover
function shuffleImagesInRow(row) {
    const images = Array.from(row.getElementsByClassName('team-img'));
    const shuffledImages = images.sort(() => Math.random() - 0.5);
    shuffledImages.forEach(image => row.appendChild(image));
}

const teamImages = document.querySelectorAll('.team-img');
teamImages.forEach(image => {
    image.addEventListener('mouseenter', (event) => {
        const row = event.target.closest('.team-row');
        shuffleImagesInRow(row);
    });
});

// Event card behavior
document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    const content = [
        {
            title: "FROM PLANNING",
            text: "We partner with top event planners, venues, and caterers to bring your dreams to life. We help with anniversaries, weddings, and private dinners."
        },
        {
            title: "TO PREPARING",
            text: "Our team ensures your event runs smoothly. We focus on staffing to let you relax and enjoy the event."
        },
        {
            title: "TO EXECUTING",
            text: "We provide expert execution through strong partnerships with planners, venues, and caterers for flawless events."
        }
    ];

    let currentIndex = 0;

    // Update the content of the text box based on the index
    function updateCardContent(index) {
        const card = document.getElementById('event-card');
        if (card) {
            const { title, text } = content[index];
            card.querySelector('h4').textContent = title;
            card.querySelector('p').textContent = text;
        }
    }

    // Update the active class on the event cards
    function updateActiveCard(index) {
        eventCards.forEach((card, i) => card.classList.toggle('active', i === index));
    }

    // Hover to update content on the event card
    eventCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            currentIndex = index;
            updateCardContent(currentIndex);
            updateActiveCard(currentIndex);
        });
    });

    // Arrow functionality to navigate through content
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? content.length - 1 : currentIndex - 1;
            updateCardContent(currentIndex);
            updateActiveCard(currentIndex);
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex === content.length - 1) ? 0 : currentIndex + 1;
            updateCardContent(currentIndex);
            updateActiveCard(currentIndex);
        });
    }

    // Initialize content and active card
    updateCardContent(currentIndex);
    updateActiveCard(currentIndex);
});


// Event card mobilvy
document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');
    const images = document.querySelectorAll('#events .event-card img');
    const card = document.getElementById('event-card');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    // Initial index
    let currentIndex = 0;

    // Uppdatera kortinnehåll baserat på index
    function updateCardContent(index) {
        const content = [
            {
                title: "FROM PLANNING",
                text: "We partner with some of the best event planners, venues and caterers in the industry to bring your dreams to life. Whether you are planning your next big anniversary, wedding or hosting a private dinner, we can help you on each step of the way. "
            },
            {
                title: "TO PREPARING",
                text: "Our team is here to help. We know that the day of your event can be stressful and that is where we come in. Staffing your event with top staff is our number one priority. With us you get to relax and enjoy your event, without having to worry about your guests’ needs. "
            },
            {
                title: "TO EXECUTING",
                text: "We partner with some of the best event planners, venues and caterers in the industry to bring your dreams to life. Whether you are planning your next big anniversary, wedding or hosting a private dinner, we can help you on each step of the way. "
            }
        ];

        const { title, text } = content[index];
        card.querySelector('h4').textContent = title;
        card.querySelector('p').textContent = text;
    }

    // Byt till nästa bild (högerpilen)
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === eventCards.length - 1) ? 0 : currentIndex + 1;
        updateCardContent(currentIndex);
        updateActiveCard(currentIndex);
    });

    // Byt till föregående bild (vänsterpilen)
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? eventCards.length - 1 : currentIndex - 1;
        updateCardContent(currentIndex);
        updateActiveCard(currentIndex);
    });

    // Uppdatera aktiv bild
    function updateActiveCard(index) {
        eventCards.forEach(card => card.classList.remove('active'));
        eventCards[index].classList.add('active');
    }

    // Sätt initial bild och innehåll
    updateCardContent(currentIndex);
    updateActiveCard(currentIndex);

    // Hover för att uppdatera innehåll baserat på bild
    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            updateCardContent(currentIndex);
            updateActiveCard(currentIndex);
        });
    });
});


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Show logo and apply navbar styles when scrolled past threshold
    if (currentScroll > scrollThreshold) {
        navbar.classList.add('scrolled');
        document.querySelectorAll('.burger-line').forEach(line => {
            line.classList.add('dark');
        });
        document.querySelectorAll('.nav-desktop a').forEach(link => {
            link.classList.add('dark');
        });
    } else {
        navbar.classList.remove('scrolled');
        document.querySelectorAll('.burger-line').forEach(line => {
            line.classList.remove('dark');
        });
        document.querySelectorAll('.nav-desktop a').forEach(link => {
            link.classList.remove('dark');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    if (currentPath.includes("previousclients.html")) {
        document.body.classList.add("previous-clients-page");
    }
});
// Variables for images and text hero2
const eventImages = ['pictures/event1.png', 'pictures/event2.png', 'pictures/event3.png'];
const titles = [
    "WE’RE A High end staffing and production company Operating out of New York",
    "TO Preparing",
    "Whatever kind of help you need, we give."
];
const subtitles = ["From planning", "To Prepering", "TO EXECUTING"];
const descriptions = [
    "We partner with some of the best event planners, venues and caterers in the industry to bring your dreams to life. Whether you are planning your next big anniversary, wedding or hosting a private dinner, we can help you on each step of the way.",
    "Our team is here to help. We know that the day of your event can be stressful and that is where we come in. Staffing your event with top staff is our number one priority. With us you get to relax and enjoy your event, without having to worry about your guests’ needs.",
    "We partner with some of the best event planners, venues and caterers in the industry to bring your dreams to life. Whether you are planning your next big anniversary, wedding or hosting a private dinner, we can help you on each step of the way."
];

// Function to change the image and text
let currentImageIndex = 0;

function changeEventContent() {
    currentImageIndex = (currentImageIndex + 1) % eventImages.length; // Infinite loop through images
    const eventImage = document.getElementById('eventImage');
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const description = document.getElementById('description');
    const textBox = document.querySelector('.hero2-left .text-box');
    
    eventImage.src = eventImages[currentImageIndex];
    title.textContent = titles[currentImageIndex];
    subtitle.textContent = subtitles[currentImageIndex];
    description.textContent = descriptions[currentImageIndex];
    
    // Remove previous event class and add the new one
    textBox.classList.remove('event1', 'event2', 'event3');
    textBox.classList.add(`event${currentImageIndex + 1}`);
}

// Add click event to trigger the change
document.querySelector('.hero2-right img.event-image').addEventListener('click', changeEventContent);

// Animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const eventImage = document.querySelector('.hero2-right img.event-image');
    eventImage.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
});

let isAnimating = false; // Lägg till en global flagga för att förhindra dubbelkörningar

//Animation fade in out text hero2
function changeEventContent() {
    if (isAnimating) return; // Stoppa om en animation redan pågår
    isAnimating = true; // Sätt flaggan för att blockera ytterligare klick

    const textBox = document.querySelector('.hero2-left .text-box');
    const eventImage = document.getElementById('eventImage');

    // Start fade-out animation
    textBox.classList.add('fade-out');

    // Vänta tills fade-out är klar (lyssna på animationend istället för timeout)
    textBox.addEventListener('animationend', function handleFadeOut(e) {
        if (e.animationName !== 'fadeOut') return; // Kontrollera att rätt animation avslutades
        textBox.removeEventListener('animationend', handleFadeOut); // Ta bort händelsen

        // Uppdatera innehåll
        currentImageIndex = (currentImageIndex + 1) % eventImages.length;
        eventImage.src = eventImages[currentImageIndex];
        document.getElementById('title').textContent = titles[currentImageIndex];
        document.getElementById('subtitle').textContent = subtitles[currentImageIndex];
        document.getElementById('description').textContent = descriptions[currentImageIndex];

        // Byt eventklass
        textBox.classList.remove('event1', 'event2', 'event3');
        textBox.classList.add(`event${currentImageIndex + 1}`);

        // Start fade-in animation
        textBox.classList.remove('fade-out');
        textBox.classList.add('fade-in');
    });

    // Vänta på att fade-in-animationen avslutas
    textBox.addEventListener('animationend', function handleFadeIn(e) {
        if (e.animationName !== 'fadeIn') return; // Kontrollera att rätt animation avslutades
        textBox.removeEventListener('animationend', handleFadeIn); // Ta bort händelsen

        // Rensa klassen och återställ flaggan
        textBox.classList.remove('fade-in');
        isAnimating = false; // Återställ flaggan för att möjliggöra nya klick
    });
}