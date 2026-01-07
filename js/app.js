/**
 * PIR Presentation - Main Application Controller
 * Handles slide loading, navigation, and component rendering
 */

// Slide manifest - defines all slides in order
const slideManifest = [
    // TITLE PAGE
    { path: 'slides/quality/intro.html', group: 'TITLE PAGE', title: 'Overview' },

    // ACCESS - Enrollment & Demographics
    { path: 'slides/access/demographics.html', group: 'ACCESS', title: 'Demographics', chart: 'enrollChart' },
    { path: 'slides/access/enrollment-trends.html', group: 'ACCESS', title: 'Enrollment Trends', chart: 'elemEnrollChart' },

    // QUALITY - Overview
    { path: 'slides/quality/kpi-dashboard.html', group: 'QUALITY', title: 'KPI Dashboard' },
    { path: 'slides/quality/success-gallery.html', group: 'QUALITY', title: 'Success Gallery' },

    // QUALITY - National Assessments
    { path: 'slides/quality/ellna-assessment.html', group: 'QUALITY', title: 'ELLNA Assessment', chart: 'ellnaChart' },
    { path: 'slides/quality/nat-grade6.html', group: 'QUALITY', title: 'NAT Grade 6', chart: 'natG6Chart' },
    { path: 'slides/quality/nat-grade10.html', group: 'QUALITY', title: 'NAT Grade 10', chart: 'natG10Chart' },

    // QUALITY - Early Literacy (CRLA Grades 1-3)
    { path: 'slides/quality/crla-intro.html', group: 'QUALITY', title: 'CRLA Intro' },
    { path: 'slides/quality/grade1-analysis.html', group: 'QUALITY', title: 'Grade 1 Analysis', chart: 'g1Chart' },
    { path: 'slides/quality/grade2-3.html', group: 'QUALITY', title: 'Grade 2 & 3' },

    // QUALITY - Reading Proficiency (Phil-IRI)
    { path: 'slides/quality/reading-intro.html', group: 'QUALITY', title: 'Reading Intro' },
    { path: 'slides/quality/philiri-elem-english.html', group: 'QUALITY', title: 'Phil-IRI Elem English', chart: 'philIriElemEngChart' },
    { path: 'slides/quality/philiri-sec-english.html', group: 'QUALITY', title: 'Phil-IRI Sec English', chart: 'philIriSecEngChart' },
    { path: 'slides/quality/sec-filipino-alert.html', group: 'QUALITY', title: 'Phil-IRI Sec Filipino', chart: 'philIriSecFilChart' },
    { path: 'slides/quality/philiri-gallery.html', group: 'QUALITY', title: 'Phil-IRI Gallery' },
    { path: 'slides/quality/elem-english.html', group: 'QUALITY', title: 'Elem English Trends', chart: 'elemEngChart' },

    // QUALITY - Academic Performance (SHS)
    { path: 'slides/quality/academics-intro.html', group: 'QUALITY', title: 'Academics Intro' },
    { path: 'slides/quality/grade11-overview.html', group: 'QUALITY', title: 'Grade 11 Overview', chart: 'shsChart' },
    { path: 'slides/quality/grade11-deepdive.html', group: 'QUALITY', title: 'Grade 11 Deep Dive', chart: 'g11SubChart' },
    { path: 'slides/quality/grade11-status.html', group: 'QUALITY', title: 'Grade 11 Status' },
    { path: 'slides/quality/grade11-competencies.html', group: 'QUALITY', title: 'Grade 11 Competencies' },
    { path: 'slides/quality/grade12-overview.html', group: 'QUALITY', title: 'Grade 12 Overview', chart: 'g12Chart' },
    { path: 'slides/quality/grade12-competencies.html', group: 'QUALITY', title: 'Grade 12 Competencies' },

    // QUALITY - JDVP
    { path: 'slides/quality/jdvp-implementation.html', group: 'QUALITY', title: 'JDVP Implementation' },
    { path: 'slides/quality/jdvp-strategies.html', group: 'QUALITY', title: 'JDVP Strategies' },
    { path: 'slides/quality/jdvp-gallery.html', group: 'QUALITY', title: 'JDVP Gallery' },
    // DFOT Gallery moved to Achievements section

    // QUALITY - Subject Analysis (JHS)
    { path: 'slides/quality/jhs-math.html', group: 'QUALITY', title: 'JHS Math', chart: 'jhsMathChart' },
    { path: 'slides/quality/science-trends.html', group: 'QUALITY', title: 'Science Trends', chart: 'sciTrendChart' },

    // QUALITY - Achievements
    { path: 'slides/quality/achievements-intro.html', group: 'QUALITY', title: 'Achievements Intro' },
    { path: 'slides/quality/sports-champions.html', group: 'QUALITY', title: 'Sports Winners' },
    { path: 'slides/quality/sports-gallery.html', group: 'QUALITY', title: 'Sports Gallery' },
    { path: 'slides/quality/skills-academics.html', group: 'QUALITY', title: 'Talents and Skills' },
    { path: 'slides/quality/dfot-gallery.html', group: 'QUALITY', title: 'DFOT Gallery' },
    { path: 'slides/quality/dspc-gallery.html', group: 'QUALITY', title: 'DSPC Gallery' },
    { path: 'slides/quality/iped-gallery.html', group: 'QUALITY', title: 'IPED Gallery' },
    { path: 'slides/quality/opcrf-validation.html', group: 'QUALITY', title: 'OPCRF Validation' },
    { path: 'slides/quality/aral-program.html', group: 'QUALITY', title: 'Aral Program' },
    { path: 'slides/quality/nutrition-gallery.html', group: 'QUALITY', title: 'Nutrition Month' },
    { path: 'slides/quality/gpta-officers.html', group: 'QUALITY', title: 'PTA Induction' },

    // TEACHER DEVELOPMENT
    { path: 'slides/teacher-development/faculty-research.html', group: 'TEACHER DEVELOPMENT', title: 'Faculty Research' },
    { path: 'slides/teacher-development/dev-overview.html', group: 'TEACHER DEVELOPMENT', title: 'Dev Overview' },
    { path: 'slides/teacher-development/training-leaders.html', group: 'TEACHER DEVELOPMENT', title: 'Training Leaders' },
    { path: 'slides/teacher-development/training-interm-fil.html', group: 'TEACHER DEVELOPMENT', title: 'Training Interm/Fil' },
    { path: 'slides/teacher-development/training-sci-math.html', group: 'TEACHER DEVELOPMENT', title: 'Training Sci/Math' },
    { path: 'slides/teacher-development/teacher-gallery.html', group: 'TEACHER DEVELOPMENT', title: 'Teacher Gallery' },

    // CONCLUSION
    { path: 'slides/conclusion/recommendations.html', group: 'CONCLUSION', title: 'Recommendations' },
    { path: 'slides/conclusion/roadmap.html', group: 'CONCLUSION', title: 'Roadmap' },
    { path: 'slides/conclusion/interventions.html', group: 'CONCLUSION', title: 'Interventions' },
    { path: 'slides/conclusion/inspiration.html', group: 'CONCLUSION', title: 'Inspiration' },
    { path: 'slides/conclusion/end.html', group: 'CONCLUSION', title: 'End' }
];

// State
let currentSlide = 0;
let slides = [];
let charts = {};

// DOM Elements
const progressBar = document.getElementById('progressBar');
const slideCounter = document.getElementById('slideCounter');
const sectionTitle = document.getElementById('currentSectionTitle');
const navContainer = document.getElementById('navContainer');
const slideWrapper = document.getElementById('slideWrapper');

/**
 * Load an HTML component into a container
 */
async function loadComponent(containerId, path) {
    try {
        const response = await fetch(path);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Failed to load component: ${path}`, error);
    }
}

/**
 * Load all slides from manifest
 */
async function loadSlides() {
    const loadPromises = slideManifest.map(async (slide, index) => {
        try {
            const response = await fetch(slide.path);
            const html = await response.text();

            // Create slide container
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide' + (index === 0 ? ' active' : '');

            // Add section-intro class for intro slides
            if (slide.title.includes('Intro') || slide.title === 'Overview' ||
                slide.title === 'Recommendations' || slide.title === 'Inspiration' ||
                slide.title === 'End') {
                slideDiv.classList.add('section-intro');
            }

            slideDiv.setAttribute('data-group', slide.group);
            slideDiv.setAttribute('data-title', slide.title);
            if (slide.chart) {
                slideDiv.setAttribute('data-chart', slide.chart);
            }
            slideDiv.innerHTML = html;

            return { index, element: slideDiv };
        } catch (error) {
            console.error(`Failed to load slide: ${slide.path}`, error);
            return null;
        }
    });

    const results = await Promise.all(loadPromises);

    // Sort by index and append to wrapper
    results
        .filter(r => r !== null)
        .sort((a, b) => a.index - b.index)
        .forEach(r => slideWrapper.appendChild(r.element));

    // Update slides reference
    slides = document.querySelectorAll('.slide');

    // Build navigation
    buildNavigation();

    // Initial UI update
    updateUI();
}

/**
 * Build sidebar navigation from loaded slides
 */
function buildNavigation() {
    let currentGroup = "";

    slides.forEach((slide, index) => {
        const group = slide.getAttribute('data-group');
        const title = slide.getAttribute('data-title');

        if (group !== currentGroup) {
            const groupHeader = document.createElement('div');
            groupHeader.className = 'nav-group';
            groupHeader.innerText = group;
            navContainer.appendChild(groupHeader);
            currentGroup = group;
        }

        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.innerHTML = `<i class="fa-solid fa-circle-notch"></i> ${title}`;
        navItem.onclick = () => goToSlide(index);
        navContainer.appendChild(navItem);
    });
}

/**
 * Update UI state (progress, active slide, navigation)
 */
function updateUI() {
    if (slides.length === 0) return;

    // Active Slide
    slides.forEach(s => s.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Progress
    const pct = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = `${pct}%`;
    slideCounter.innerText = `${currentSlide + 1} / ${slides.length}`;

    // Update Headers
    const activeGroup = slides[currentSlide].getAttribute('data-group');
    sectionTitle.innerText = activeGroup;

    // Active Nav Item
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.toggle('active', index === currentSlide);
        if (index === currentSlide) {
            item.querySelector('i').className = 'fa-solid fa-circle';
            item.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            item.querySelector('i').className = 'fa-solid fa-circle-notch';
        }
    });

    // Trigger Charts
    const chartId = slides[currentSlide].getAttribute('data-chart');
    if (chartId) renderChart(chartId);
}

/**
 * Navigation functions
 */
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateUI();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateUI();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateUI();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
});

// --- JDVP Carousel Functions ---
let carouselIndex = 0;
let carouselInterval = null;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('#jdvpCarousel .carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    if (slides.length === 0) return;

    carouselIndex += direction;
    if (carouselIndex >= slides.length) carouselIndex = 0;
    if (carouselIndex < 0) carouselIndex = slides.length - 1;

    updateCarousel(slides, dots);
    resetCarouselTimer();
}

function goToCarouselSlide(index) {
    const slides = document.querySelectorAll('#jdvpCarousel .carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    if (slides.length === 0) return;

    carouselIndex = index;
    updateCarousel(slides, dots);
    resetCarouselTimer();
}

function updateCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === carouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselIndex);
    });
}

function startCarouselAutoPlay() {
    const slides = document.querySelectorAll('#jdvpCarousel .carousel-slide');
    if (slides.length > 0 && !carouselInterval) {
        carouselInterval = setInterval(() => moveCarousel(1), 5000);
    }
}

function resetCarouselTimer() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
    // Resume auto-play after 8 seconds of inactivity
    setTimeout(() => startCarouselAutoPlay(), 8000);
}

// --- DFOT Carousel Functions ---
let dfotCarouselIndex = 0;

function moveDfotCarousel(direction) {
    const slides = document.querySelectorAll('#dfotCarousel .carousel-slide');
    const dots = document.querySelectorAll('#dfotDots .carousel-dot');
    if (slides.length === 0) return;

    dfotCarouselIndex += direction;
    if (dfotCarouselIndex >= slides.length) dfotCarouselIndex = 0;
    if (dfotCarouselIndex < 0) dfotCarouselIndex = slides.length - 1;

    updateDfotCarousel(slides, dots);
}

function goToDfotSlide(index) {
    const slides = document.querySelectorAll('#dfotCarousel .carousel-slide');
    const dots = document.querySelectorAll('#dfotDots .carousel-dot');
    if (slides.length === 0) return;

    dfotCarouselIndex = index;
    updateDfotCarousel(slides, dots);
}

function updateDfotCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === dfotCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === dfotCarouselIndex);
    });
}

// --- Sports Carousel Functions ---
let sportsCarouselIndex = 0;

function moveSportsCarousel(direction) {
    const slides = document.querySelectorAll('#sportsCarousel .carousel-slide');
    const dots = document.querySelectorAll('#sportsDots .carousel-dot');
    if (slides.length === 0) return;

    sportsCarouselIndex += direction;
    if (sportsCarouselIndex >= slides.length) sportsCarouselIndex = 0;
    if (sportsCarouselIndex < 0) sportsCarouselIndex = slides.length - 1;

    updateSportsCarousel(slides, dots);
}

function goToSportsSlide(index) {
    const slides = document.querySelectorAll('#sportsCarousel .carousel-slide');
    const dots = document.querySelectorAll('#sportsDots .carousel-dot');
    if (slides.length === 0) return;

    sportsCarouselIndex = index;
    updateSportsCarousel(slides, dots);
}

function updateSportsCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === sportsCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === sportsCarouselIndex);
    });
}

// --- Phil-IRI Carousel Functions ---
let philIriCarouselIndex = 0;

function movePhilIriCarousel(direction) {
    const slides = document.querySelectorAll('#philIriCarousel .carousel-slide');
    const dots = document.querySelectorAll('#philIriDots .carousel-dot');
    if (slides.length === 0) return;

    philIriCarouselIndex += direction;
    if (philIriCarouselIndex >= slides.length) philIriCarouselIndex = 0;
    if (philIriCarouselIndex < 0) philIriCarouselIndex = slides.length - 1;

    updatePhilIriCarousel(slides, dots);
}

function goToPhilIriSlide(index) {
    const slides = document.querySelectorAll('#philIriCarousel .carousel-slide');
    const dots = document.querySelectorAll('#philIriDots .carousel-dot');
    if (slides.length === 0) return;

    philIriCarouselIndex = index;
    updatePhilIriCarousel(slides, dots);
}

function updatePhilIriCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === philIriCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === philIriCarouselIndex);
    });
}

// --- DSPC Carousel Functions ---
let dspcCarouselIndex = 0;

function moveDspcCarousel(direction) {
    const slides = document.querySelectorAll('#dspcCarousel .carousel-slide');
    const dots = document.querySelectorAll('#dspcDots .carousel-dot');
    if (slides.length === 0) return;

    dspcCarouselIndex += direction;
    if (dspcCarouselIndex >= slides.length) dspcCarouselIndex = 0;
    if (dspcCarouselIndex < 0) dspcCarouselIndex = slides.length - 1;

    updateDspcCarousel(slides, dots);
}

function goToDspcSlide(index) {
    const slides = document.querySelectorAll('#dspcCarousel .carousel-slide');
    const dots = document.querySelectorAll('#dspcDots .carousel-dot');
    if (slides.length === 0) return;

    dspcCarouselIndex = index;
    updateDspcCarousel(slides, dots);
}

function updateDspcCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === dspcCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === dspcCarouselIndex);
    });
}

// --- Teacher Carousel Functions ---
let teacherCarouselIndex = 0;

function moveTeacherCarousel(direction) {
    const slides = document.querySelectorAll('#teacherCarousel .carousel-slide');
    const dots = document.querySelectorAll('#teacherDots .carousel-dot');
    if (slides.length === 0) return;

    teacherCarouselIndex += direction;
    if (teacherCarouselIndex >= slides.length) teacherCarouselIndex = 0;
    if (teacherCarouselIndex < 0) teacherCarouselIndex = slides.length - 1;

    updateTeacherCarousel(slides, dots);
}

function goToTeacherSlide(index) {
    const slides = document.querySelectorAll('#teacherCarousel .carousel-slide');
    const dots = document.querySelectorAll('#teacherDots .carousel-dot');
    if (slides.length === 0) return;

    teacherCarouselIndex = index;
    updateTeacherCarousel(slides, dots);
}

function updateTeacherCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === teacherCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === teacherCarouselIndex);
    });
}

// --- IPED Carousel Functions ---
let ipedCarouselIndex = 0;

function moveIpedCarousel(direction) {
    const slides = document.querySelectorAll('#ipedCarousel .carousel-slide');
    const dots = document.querySelectorAll('#ipedDots .carousel-dot');
    if (slides.length === 0) return;

    ipedCarouselIndex += direction;
    if (ipedCarouselIndex >= slides.length) ipedCarouselIndex = 0;
    if (ipedCarouselIndex < 0) ipedCarouselIndex = slides.length - 1;

    updateIpedCarousel(slides, dots);
}

function goToIpedSlide(index) {
    const slides = document.querySelectorAll('#ipedCarousel .carousel-slide');
    const dots = document.querySelectorAll('#ipedDots .carousel-dot');
    if (slides.length === 0) return;

    ipedCarouselIndex = index;
    updateIpedCarousel(slides, dots);
}

function updateIpedCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === ipedCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === ipedCarouselIndex);
    });
}

// --- OPCRF Carousel Functions ---
let opcrfCarouselIndex = 0;

function moveOpcrfCarousel(direction) {
    const slides = document.querySelectorAll('#opcrfCarousel .carousel-slide');
    const dots = document.querySelectorAll('#opcrfDots .carousel-dot');
    if (slides.length === 0) return;

    opcrfCarouselIndex += direction;
    if (opcrfCarouselIndex >= slides.length) opcrfCarouselIndex = 0;
    if (opcrfCarouselIndex < 0) opcrfCarouselIndex = slides.length - 1;

    updateOpcrfCarousel(slides, dots);
}

function goToOpcrfSlide(index) {
    const slides = document.querySelectorAll('#opcrfCarousel .carousel-slide');
    const dots = document.querySelectorAll('#opcrfDots .carousel-dot');
    if (slides.length === 0) return;

    opcrfCarouselIndex = index;
    updateOpcrfCarousel(slides, dots);
}

function updateOpcrfCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === opcrfCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === opcrfCarouselIndex);
    });
}

// --- Aral Program Carousel Functions ---
let aralCarouselIndex = 0;

function moveAralCarousel(direction) {
    const slides = document.querySelectorAll('#aralCarousel .carousel-slide');
    const dots = document.querySelectorAll('#aralDots .carousel-dot');
    if (slides.length === 0) return;

    aralCarouselIndex += direction;
    if (aralCarouselIndex >= slides.length) aralCarouselIndex = 0;
    if (aralCarouselIndex < 0) aralCarouselIndex = slides.length - 1;

    updateAralCarousel(slides, dots);
}

function goToAralSlide(index) {
    const slides = document.querySelectorAll('#aralCarousel .carousel-slide');
    const dots = document.querySelectorAll('#aralDots .carousel-dot');
    if (slides.length === 0) return;

    aralCarouselIndex = index;
    updateAralCarousel(slides, dots);
}

function updateAralCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === aralCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === aralCarouselIndex);
    });
}

// --- Nutrition Month Carousel Functions ---
let nutritionCarouselIndex = 0;

function moveNutritionCarousel(direction) {
    const slides = document.querySelectorAll('#nutritionCarousel .carousel-slide');
    const dots = document.querySelectorAll('#nutritionDots .carousel-dot');
    if (slides.length === 0) return;

    nutritionCarouselIndex += direction;
    if (nutritionCarouselIndex >= slides.length) nutritionCarouselIndex = 0;
    if (nutritionCarouselIndex < 0) nutritionCarouselIndex = slides.length - 1;

    updateNutritionCarousel(slides, dots);
}

function goToNutritionSlide(index) {
    const slides = document.querySelectorAll('#nutritionCarousel .carousel-slide');
    const dots = document.querySelectorAll('#nutritionDots .carousel-dot');
    if (slides.length === 0) return;

    nutritionCarouselIndex = index;
    updateNutritionCarousel(slides, dots);
}

function updateNutritionCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === nutritionCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === nutritionCarouselIndex);
    });
}

// --- GPTA Carousel Functions ---
let gptaCarouselIndex = 0;

function moveGptaCarousel(direction) {
    const slides = document.querySelectorAll('#gptaCarousel .carousel-slide');
    const dots = document.querySelectorAll('#gptaDots .carousel-dot');
    if (slides.length === 0) return;

    gptaCarouselIndex += direction;
    if (gptaCarouselIndex >= slides.length) gptaCarouselIndex = 0;
    if (gptaCarouselIndex < 0) gptaCarouselIndex = slides.length - 1;

    updateGptaCarousel(slides, dots);
}

function goToGptaSlide(index) {
    const slides = document.querySelectorAll('#gptaCarousel .carousel-slide');
    const dots = document.querySelectorAll('#gptaDots .carousel-dot');
    if (slides.length === 0) return;

    gptaCarouselIndex = index;
    updateGptaCarousel(slides, dots);
}

function updateGptaCarousel(slides, dots) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === gptaCarouselIndex);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === gptaCarouselIndex);
    });
}

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {
    await loadSlides();
    // Start carousel auto-play after slides are loaded
    setTimeout(() => startCarouselAutoPlay(), 2000);
});

