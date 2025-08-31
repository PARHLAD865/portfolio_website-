// Custom JavaScript for Portfolio Website

$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-dark').removeClass('bg-transparent');
        } else {
            $('.navbar').removeClass('bg-dark').addClass('bg-transparent');
        }
    });

    // Back to top button
    $('#backToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Show/hide back to top button
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Animate progress bars when in viewport
    function animateProgressBars() {
        $('.skill-item').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if(elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    }

    // Check if progress bars are in viewport on scroll
    $(window).scroll(animateProgressBars);
    animateProgressBars(); // Check on page load

    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Basic form validation
        if(!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Resume download functionality
    $('downloadResume').on('click', function(e) {
        e.preventDefault();
        window.open("Prahlad_python_resume.pdf", "_blank");
        alert('Resume download functionality will be implemented here. You can link to your actual resume PDF file.');
    });

    // Add animation delay to cards
    $('.card').each(function(index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
    });

    // Typing effect for hero section (optional)
    function typeWriter() {
        var textArray = [
            "Creative Web Developer from India",
            "Full Stack Developer",
            "Django Enthusiast",
            "Problem Solver"
        ];
        var currentText = 0;
        var currentChar = 0;
        var isDeleting = false;
        var typeSpeed = 100;
        var deleteSpeed = 50;
        var pauseTime = 2000;

        function type() {
            var current = textArray[currentText];
            
            if(isDeleting) {
                $('.hero-content .lead').text(current.substring(0, currentChar - 1));
                currentChar--;
                typeSpeed = deleteSpeed;
                
                if(currentChar === 0) {
                    isDeleting = false;
                    currentText = (currentText + 1) % textArray.length;
                    typeSpeed = 500;
                }
            } else {
                $('.hero-content .lead').text(current.substring(0, currentChar + 1));
                currentChar++;
                typeSpeed = 100;
                
                if(currentChar === current.length) {
                    isDeleting = true;
                    typeSpeed = pauseTime;
                }
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Uncomment the next line to enable typing effect
        // type();
    }

    // Initialize typing effect
    typeWriter();

    // Add hover effects to project cards
    $('.project-card').hover(
        function() {
            $(this).find('.card').addClass('shadow-lg');
        },
        function() {
            $(this).find('.card').removeClass('shadow-lg');
        }
    );

    // Add click effects to skill icons
    $('.tech-icon').click(function() {
        $(this).find('i').addClass('fa-spin');
        setTimeout(() => {
            $(this).find('i').removeClass('fa-spin');
        }, 1000);
    });

    // Parallax effect for hero section (optional)
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.hero-section').css('transform', 'translateY(' + (scrollTop * 0.5) + 'px)');
    });

    // Add fade-in animation to sections
    function fadeInSections() {
        $('.section-padding').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if(elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in');
            }
        });
    }

    $(window).scroll(fadeInSections);
    fadeInSections();

    // Mobile menu close on link click
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Add loading spinner (optional)
    $(window).on('load', function() {
        $('#loading').fadeOut('slow');
    });

    // Counter animation for stats (if you want to add stats section)
    function animateCounters() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Initialize AOS (Animate On Scroll) if you want to use it
    // You can include AOS library and uncomment the next line
    // AOS.init();

    // Add custom cursor effect (optional)
    function customCursor() {
        var cursor = $('<div class="custom-cursor"></div>').appendTo('body');
        
        $(document).mousemove(function(e) {
            cursor.css({
                left: e.pageX,
                top: e.pageY
            });
        });

        $('a, button').hover(
            function() {
                cursor.addClass('cursor-hover');
            },
            function() {
                cursor.removeClass('cursor-hover');
            }
        );
    }

    // Theme toggle functionality (if you want dark/light mode)
    function initThemeToggle() {
        $('#themeToggle').click(function() {
            $('body').toggleClass('dark-theme');
            var icon = $(this).find('i');
            if(icon.hasClass('fa-moon')) {
                icon.removeClass('fa-moon').addClass('fa-sun');
            } else {
                icon.removeClass('fa-sun').addClass('fa-moon');
            }
        });
    }

    // Initialize theme toggle if button exists
    if($('#themeToggle').length) {
        initThemeToggle();
    }

    // Preloader functionality
    $(window).on('load', function() {
        $('.preloader').fadeOut('slow');
    });

    // Add smooth reveal animation for sections
    function revealSections() {
        var reveals = $('.reveal');
        
        reveals.each(function() {
            var windowHeight = $(window).height();
            var elementTop = $(this).offset().top;
            var elementVisible = 150;
            
            if($(window).scrollTop() > elementTop - windowHeight + elementVisible) {
                $(this).addClass('active');
            }
        });
    }

    $(window).scroll(revealSections);

    // Initialize particles.js background (if you include the library)
    function initParticles() {
        if(typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80 },
                    color: { value: '#ffffff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5 },
                    size: { value: 3 },
                    move: { enable: true, speed: 2 }
                }
            });
        }
    }

    // Console welcome message
    console.log('%c Welcome to My Portfolio! ', 'background: #007bff; color: white; padding: 10px; border-radius: 5px; font-size: 16px;');
    console.log('Thanks for checking out my code! Feel free to reach out if you have any questions.');

});

// Vanilla JavaScript for additional functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to page
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.appendChild(loader);

    // Remove loader after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if(loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 300);
        }, 500);
    });

    // Add intersection observer for animations
    if('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // Add service worker for offline functionality (optional)
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    }
});

// Add custom CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    }

    .loader-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .custom-cursor {
        width: 20px;
        height: 20px;
        background: #007bff;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
    }

    .custom-cursor.cursor-hover {
        transform: scale(1.5);
        background: #0056b3;
    }
`;
document.head.appendChild(style);