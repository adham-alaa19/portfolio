document.addEventListener('DOMContentLoaded', function() {
    // Timeline hover effects
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.timeline-details').style.opacity = '1';
                this.querySelector('.timeline-details').style.visibility = 'visible';
            });
            
            item.addEventListener('mouseleave', function() {
                if (window.innerWidth > 992) {
                    this.querySelector('.timeline-details').style.opacity = '0';
                    this.querySelector('.timeline-details').style.visibility = 'hidden';
                }
            });
        });
    }
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Skill bars animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('aria-valuenow');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = value + '%';
                bar.style.transition = 'width 1.5s ease-in-out';
            }, 200);
        });
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Trigger animation when scrolled into view
    window.addEventListener('scroll', () => {
        if (progressBars.length > 0 && isInViewport(progressBars[0])) {
            animateProgressBars();
            window.removeEventListener('scroll', arguments.callee);
        }
    });
    
    // Trigger on page load if already in viewport
    if (progressBars.length > 0 && isInViewport(progressBars[0])) {
        animateProgressBars();
    }
    
    // Portfolio filtering (for projects page)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});
