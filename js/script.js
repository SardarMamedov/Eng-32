document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;
    
    if (testimonials.length > 0) {
        // Hide all testimonials except the first one
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Previous testimonial button
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                testimonials[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
                testimonials[currentTestimonial].style.display = 'block';
            });
        }
        
        // Next testimonial button
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                testimonials[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                testimonials[currentTestimonial].style.display = 'block';
            });
        }
        
        // Auto slide testimonials
        setInterval(function() {
            if (nextBtn) {
                testimonials[currentTestimonial].style.display = 'none';
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                testimonials[currentTestimonial].style.display = 'block';
            }
        }, 5000);
    }
    
    // Menu Tabs
    const menuTabs = document.querySelectorAll('.menu-tabs li');
    const menuSections = document.querySelectorAll('.menu-section');
    
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                menuTabs.forEach(tab => tab.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all menu sections
                menuSections.forEach(section => section.classList.remove('active'));
                
                // Show the corresponding menu section
                const menuId = this.getAttribute('data-menu');
                document.getElementById(menuId).classList.add('active');
            });
        });
    }
    
    // Gallery Filter
    const filterOptions = document.querySelectorAll('.filter-options li');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterOptions.length > 0) {
        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                filterOptions.forEach(option => option.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Lightbox Gallery
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    const prevImg = document.querySelector('.prev-img');
    const nextImg = document.querySelector('.next-img');
    let currentImgIndex = 0;
    
    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentImgIndex = index;
                const img = this.querySelector('img');
                const caption = this.querySelector('h3').textContent;
                
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption;
                lightbox.style.display = 'block';
                
                // Disable scrolling on body
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        if (closeLightbox) {
            closeLightbox.addEventListener('click', function() {
                lightbox.style.display = 'none';
                
                // Enable scrolling on body
                document.body.style.overflow = 'auto';
            });
        }
        
        // Previous image
        if (prevImg) {
            prevImg.addEventListener('click', function() {
                currentImgIndex = (currentImgIndex - 1 + galleryItems.length) % galleryItems.length;
                const img = galleryItems[currentImgIndex].querySelector('img');
                const caption = galleryItems[currentImgIndex].querySelector('h3').textContent;
                
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption;
            });
        }
        
        // Next image
        if (nextImg) {
            nextImg.addEventListener('click', function() {
                currentImgIndex = (currentImgIndex + 1) % galleryItems.length;
                const img = galleryItems[currentImgIndex].querySelector('img');
                const caption = galleryItems[currentImgIndex].querySelector('h3').textContent;
                
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption;
            });
        }
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
                
                // Enable scrolling on body
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Form Validation
    const reservationForm = document.getElementById('reservation-form');
    const contactForm = document.getElementById('contact-form');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            
            if (name && email && date && time && guests) {
                // In a real application, you would send this data to a server
                alert('Thank you for your reservation request! We will confirm your booking shortly.');
                reservationForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simple validation
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Date validation for reservation form
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set min date to today
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const todayString = yyyy + '-' + mm + '-' + dd;
        
        dateInput.setAttribute('min', todayString);
        
        // Set max date to 3 months from now
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        const maxDD = String(maxDate.getDate()).padStart(2, '0');
        const maxMM = String(maxDate.getMonth() + 1).padStart(2, '0');
        const maxYYYY = maxDate.getFullYear();
        const maxDateString = maxYYYY + '-' + maxMM + '-' + maxDD;
        
        dateInput.setAttribute('max', maxDateString);
    }
});