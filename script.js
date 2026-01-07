
    /* --- CONFIGURATION --- */
    Chart.defaults.font.family = "'Outfit', sans-serif";
    Chart.defaults.color = '#64748b';
    const colors = {
        primary: '#0f172a', accent: '#f59e0b', success: '#10b981', 
        danger: '#ef4444', warning: '#f59e0b', info: '#3b82f6',
        chart1: '#3b82f6', chart2: '#8b5cf6', chart3: '#ec4899'
    };

    /* --- SLIDE LOGIC --- */
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const progressBar = document.getElementById('progressBar');
    const slideCounter = document.getElementById('slideCounter');
    const sectionTitle = document.getElementById('currentSectionTitle');
    const navContainer = document.getElementById('navContainer');
    let charts = {}; // Store chart instances

    // Initialize Navigation
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

    function updateUI() {
        // Active Slide
        slides.forEach(s => s.classList.remove('active'));
        slides[currentSlide].classList.add('active');
        
        // Progress
        const pct = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${pct}%`;
        slideCounter.innerText = `${currentSlide + 1} / ${totalSlides}`;
        
        // Update Headers
        const activeGroup = slides[currentSlide].getAttribute('data-group');
        sectionTitle.innerText = activeGroup;

        // Active Nav Item
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            item.classList.toggle('active', index === currentSlide);
            if(index === currentSlide) {
                // Change icon for active
                item.querySelector('i').className = 'fa-solid fa-circle';
                item.scrollIntoView({behavior: "smooth", block: "center"});
            } else {
                item.querySelector('i').className = 'fa-solid fa-circle-notch';
            }
        });

        // Trigger Charts
        const chartId = slides[currentSlide].getAttribute('data-chart');
        if(chartId) renderChart(chartId);
    }

    function nextSlide() {
        if(currentSlide < totalSlides - 1) { currentSlide++; updateUI(); }
    }
    function prevSlide() {
        if(currentSlide > 0) { currentSlide--; updateUI(); }
    }
    function goToSlide(index) {
        currentSlide = index; updateUI();
    }

    document.addEventListener('keydown', (e) => {
        if(e.key === "ArrowRight") nextSlide();
        if(e.key === "ArrowLeft") prevSlide();
    });

    /* --- CHART RENDERING --- */
    function renderChart(id) {
        if(charts[id]) return; // Avoid re-rendering
        const ctx = document.getElementById(id).getContext('2d');
        let config = {};

        switch(id) {
            case 'enrollChart':
                config = {
                    type: 'doughnut',
                    data: {
                        labels: ['Elementary', 'Junior High', 'Senior High'],
                        datasets: [{
                            data: [104, 55, 27],
                            backgroundColor: [colors.primary, colors.info, colors.accent],
                            borderWidth: 0
                        }]
                    },
                    options: { cutout: '70%', plugins: { legend: { position: 'right' } } }
                };
                break;
            
            case 'g1Chart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['Full Refresher', 'Moderate', 'Light', 'Ready'],
                        datasets: [{
                            label: 'Learners',
                            data: [2, 3, 3, 3],
                            backgroundColor: [colors.danger, colors.warning, colors.info, colors.success],
                            borderRadius: 6
                        }]
                    },
                    options: { indexAxis: 'y', plugins: { legend: { display: false } } }
                };
                break;
            
            case 'g2Chart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['Mother Tongue', 'Filipino'],
                        datasets: [{
                            label: 'Grade Ready (%)',
                            data: [85, 60],
                            backgroundColor: [colors.success, colors.warning],
                            borderRadius: 6
                        }]
                    },
                    options: { scales: { y: { max: 100 } }, plugins: { legend: { display: false } } }
                };
                break;

            case 'elemEngChart':
                config = {
                    type: 'line',
                    data: {
                        labels: ['Pre-Test', 'Mid-Year'],
                        datasets: [{
                            label: 'Frustrated Students',
                            data: [23, 0],
                            borderColor: colors.success,
                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: { scales: { y: { beginAtZero: true } } }
                };
                break;

            case 'secIriChart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['English', 'Filipino (Avg)'],
                        datasets: [
                            { label: 'Improvement', data: [50, -15], backgroundColor: [colors.success, colors.danger] }
                        ]
                    },
                    options: { plugins: { title: { display: true, text: '% Change in Frustration Level' } } }
                };
                break;

            case 'shsChart':
                config = {
                    type: 'radar',
                    data: {
                        labels: ['Empowerment Tech', 'PE', 'Gen Math', 'Filipino', 'Oral Comm'],
                        datasets: [{
                            label: 'MPS',
                            /* IMPROVED DATA */
                            data: [82, 85, 76, 73, 71],
                            backgroundColor: 'rgba(245, 158, 11, 0.2)',
                            borderColor: colors.info,
                            pointBackgroundColor: colors.info
                        }]
                    },
                    options: { scales: { r: { min: 0, max: 100, ticks: { display: false } } } }
                };
                break;

            case 'g12Chart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['CSS', 'Per. Dev', 'PE & Health', 'MIL', 'Philo', 'Arts'],
                        datasets: [{
                            label: 'MPS (1st Sem)',
                            data: [84.50, 86.20, 88.75, 79.40, 75.60, 83.10],
                            backgroundColor: [colors.info, colors.success, colors.success, colors.warning, colors.danger, colors.info],
                            borderRadius: 4
                        }]
                    },
                    options: { indexAxis: 'y', scales: { x: { max: 100 } }, plugins: { legend: { display: false } } }
                };
                break;

            case 'g11SubChart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['Emp. Tech', 'PE', 'Gen Math', 'Filipino', 'Oral Comm'],
                        datasets: [{
                            label: 'MPS',
                            data: [82.15, 85.50, 76.80, 73.40, 71.50],
                            backgroundColor: [colors.success, colors.success, colors.info, colors.warning, colors.warning],
                            borderRadius: 4
                        }]
                    },
                    options: { indexAxis: 'y', scales: { x: { max: 100 } }, plugins: { legend: { display: false } } }
                };
                break;

            case 'jhsMathChart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['Gr 7', 'Gr 8', 'Gr 9', 'Gr 10'],
                        datasets: [{
                            label: 'Mastery Level (%)',
                            data: [62, 70, 54, 60],
                            backgroundColor: [colors.info, colors.success, colors.warning, colors.info],
                            borderRadius: 4
                        }]
                    },
                    options: { scales: { y: { max: 100 } }, plugins: { legend: { display: false } } }
                };
                break;

            case 'sciTrendChart':
                config = {
                    type: 'bar',
                    data: {
                        labels: ['Biology/Earth', 'Chem/Physics'],
                        datasets: [{
                            label: 'Average Mastery',
                            data: [65, 35],
                            backgroundColor: [colors.success, colors.danger]
                        }]
                    },
                    options: { indexAxis: 'y', plugins: { legend: { display: false } } }
                };
                break;
        }

        charts[id] = new Chart(ctx, config);
    }

    // Initialize
    updateUI();
