/**
 * PIR Presentation - Chart Configurations
 * All Chart.js configurations for data visualization
 */

// Chart.js defaults
Chart.defaults.font.family = "'Outfit', sans-serif";
Chart.defaults.color = '#64748b';

// Color palette
const colors = {
    primary: '#0f172a',
    accent: '#f59e0b',
    success: '#10b981',
    danger: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',
    chart1: '#3b82f6',
    chart2: '#8b5cf6',
    chart3: '#ec4899'
};

/**
 * Render a chart by ID
 */
function renderChart(id) {
    if (charts[id]) return; // Avoid re-rendering

    const canvas = document.getElementById(id);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let config = {};

    switch (id) {
        case 'achievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'EPP', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [72.5, 86.04, 69.17, 85.63, 82.08, 69.58, 69.38, 78.54],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [80.21, 73.13, 66.46, 78.75, 69.58, 80.83, 75.42, 82.92],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 50,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g10AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'EPP', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [71.88, 80.31, 74.22, 58.28, 80.16, 99.54, 98.44, 81.88],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [68.31, 63.69, 57.54, 62.92, 86.00, 69.69, 96.92, 78.46],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g9AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'TLE', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [63.80, 57.00, 68.50, 76.00, 93.00, 53.40, 67.40, 52.80],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [81.2, 79.8, 85.5, 89.1, 87.5, 82.3, 88.4, 84.7],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g12AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['App. Econ', 'Trends', 'P.E.', 'PerDev', 'CSS', 'USCP', 'Research 2', 'EAPP'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [32.47, 32.94, 35.88, 35.18, 29.18, 34.35, 35.29, 34.71],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [63.76, 60.24, 62.12, 62.35, 60.82, 59.41, 61.65, 63.88],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 80, // Adjusted max since scores are ~60
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g5AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'EPP', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [78.68, 75.88, 52.94, 86.62, 66.03, 88.82, 82.94, 71.91],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [76.91, 75.15, 66.18, 90.44, 70.00, 84.26, 73.38, 67.21],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g6AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'EPP', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [57.34, 43.19, 32.22, 47.22, 25.56, 34.31, 35.69, 31.94],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [69.22, 34.72, 41.67, 55.14, 52.08, 45.83, 37.36, 46.11],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g7AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'Science', 'A.P.', 'V.E.', 'TLE', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [61.09, 48.19, 48.61, 86.39, 59.03, 50.56, 55.83, 43.75],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [43.44, 45.00, 51.39, 61.53, 28.61, 39.31, 62.22, 59.72],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g8AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'Science', 'TLE', 'Val Ed', 'MAPEH', 'Ar Pan'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [71.5, 74.2, 70.8, 73.5, 72.1, 74.8, 71.9, 73.2],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [78.5, 79.1, 77.4, 78.8, 79.5, 79.2, 77.9, 78.6],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g1PerformanceChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Reading', 'GMRC', 'Math', 'Language', 'Makabansa'],
                    datasets: [
                        {
                            label: 'Highest Score',
                            data: [25, 27, 23, 22, 19],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)',
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1,
                            borderRadius: 4
                        },
                        {
                            label: 'Lowest Score',
                            data: [10, 9, 12, 8, 8],
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: 'rgba(239, 68, 68, 1)',
                            borderWidth: 1,
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 30, // Total items
                            title: { display: true, text: 'Score (Max 30)' }
                        }
                    },
                    plugins: {
                        legend: { position: 'top' }
                    }
                }
            };
            break;

        case 'g1MasteryChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Language', 'Reading', 'Math', 'Makabansa', 'GMRC'],
                    datasets: [
                        {
                            label: 'Mastered',
                            data: [4, 13, 9, 6, 6],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)',
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Least Mastered',
                            data: [10, 8, 5, 3, 12],
                            backgroundColor: 'rgba(245, 158, 11, 0.7)',
                            borderColor: 'rgba(245, 158, 11, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Not Mastered',
                            data: [16, 9, 16, 21, 12],
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: 'rgba(239, 68, 68, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { stacked: true },
                        y: {
                            stacked: true,
                            max: 30, // Total items
                            title: { display: true, text: 'Number of Items' }
                        }
                    },
                    plugins: {
                        legend: { display: false } // Custom legend in HTML
                    }
                }
            };
            break;

        case 'g2SubjectChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['GMRC 2', 'Math 2', 'English 2', 'Filipino 2'],
                    datasets: [{
                        label: 'Average Score (Max 30)',
                        data: [23.25, 21.30, 18.55, 17.80],
                        backgroundColor: [
                            'rgba(34, 197, 94, 0.7)', // Green for high
                            'rgba(59, 130, 246, 0.7)', // Blue
                            'rgba(245, 158, 11, 0.7)', // Amber
                            'rgba(239, 68, 68, 0.7)'   // Red for low
                        ],
                        borderColor: [
                            'rgba(34, 197, 94, 1)',
                            'rgba(59, 130, 246, 1)',
                            'rgba(245, 158, 11, 1)',
                            'rgba(239, 68, 68, 1)'
                        ],
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y', // Horizontal bars
                    scales: {
                        x: {
                            beginAtZero: true,
                            max: 30,
                            title: { display: true, text: 'Average Score' }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            };
            break;

        case 'g2StudentChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Rachel Arnoza', 'Ylah Sullano', 'Stephanie Lapitan', 'Rhiezel Tual', 'Jenice Bation'],
                    datasets: [{
                        label: 'Total Score',
                        data: [106, 100, 99, 93, 92],
                        backgroundColor: 'rgba(59, 130, 246, 0.7)',
                        borderColor: 'rgba(59, 130, 246, 1)',
                        borderWidth: 1,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 40,
                            title: { display: true, text: 'Total Score (Max 120)' }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            };
            break;

        case 'g11AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'Oral Comm', 'Science', 'Philo', 'Em-Tech', 'Org Mgt', 'P.E.'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [64.55, 75.68, 83.41, 49.77, 68.18, 65.68, 94.55, 77.73, 95.91],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [67.50, 78.50, 86.00, 55.00, 71.50, 69.00, 96.00, 81.00, 97.00],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

        case 'g3AchievementChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'English', 'Math', 'GMRC', 'Science', 'A.P', 'MAPEH'],
                    datasets: [
                        {
                            label: 'First Quarter',
                            data: [64.0, 75.0, 54.0, 51.0, 68.0, 63.0, 61.0],
                            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
                            borderColor: 'rgba(99, 102, 241, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Second Quarter',
                            data: [71.4, 81.1, 62.2, 58.0, 79.7, 71.4, 68.0],
                            backgroundColor: 'rgba(34, 197, 94, 0.7)', // Green
                            borderColor: 'rgba(34, 197, 94, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: false,
                            min: 0,
                            max: 100,
                            grid: { color: 'rgba(0, 0, 0, 0.1)' },
                            ticks: { color: '#475569' }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { color: '#475569' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: '#475569', usePointStyle: true, boxWidth: 8 }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return context.dataset.label + ': ' + context.formattedValue + '%';
                                }
                            }
                        }
                    }
                }
            };
            break;

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

        case 'elemEnrollChart':
            config = {
                type: 'line',
                data: {
                    labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
                    datasets: [
                        {
                            label: 'Male',
                            data: [60, 54, 52, 56, 50],
                            borderColor: colors.info,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Female',
                            data: [55, 60, 56, 53, 58],
                            borderColor: '#ec4899',
                            backgroundColor: 'rgba(236, 72, 153, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Total',
                            data: [115, 114, 109, 109, 108],
                            borderColor: colors.primary,
                            borderWidth: 3,
                            borderDash: [5, 5],
                            fill: false,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'bottom' },
                        title: { display: false }
                    },
                    scales: { y: { beginAtZero: false, min: 40 } }
                }
            };
            // Also render JHS chart
            setTimeout(() => renderChart('jhsEnrollChart'), 100);
            break;

        case 'jhsEnrollChart':
            config = {
                type: 'line',
                data: {
                    labels: ['2020-21', '2021-22', '2022-23', '2023-24', '2024-25'],
                    datasets: [
                        {
                            label: 'Male',
                            data: [44, 45, 39, 33, 27],
                            borderColor: colors.info,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Female',
                            data: [38, 31, 34, 31, 25],
                            borderColor: '#ec4899',
                            backgroundColor: 'rgba(236, 72, 153, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Total',
                            data: [82, 76, 73, 64, 52],
                            borderColor: colors.warning,
                            borderWidth: 3,
                            borderDash: [5, 5],
                            fill: false,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'bottom' },
                        title: { display: false }
                    },
                    scales: { y: { beginAtZero: false, min: 20 } }
                }
            };
            break;

        case 'ellnaChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['English', 'Filipino', 'Numeracy', 'Mother Tongue'],
                    datasets: [
                        {
                            label: 'SY 2021-2022',
                            data: [67.51, 67.95, 3.83, 25.11],
                            backgroundColor: 'rgba(59, 130, 246, 0.6)',
                            borderColor: colors.info,
                            borderWidth: 2,
                            borderRadius: 4
                        },
                        {
                            label: 'SY 2023-2024',
                            data: [61.23, 69.01, 60, 63.46],
                            backgroundColor: 'rgba(16, 185, 129, 0.6)',
                            borderColor: colors.success,
                            borderWidth: 2,
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: { y: { beginAtZero: true, max: 100 } },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'ELLNA Performance: 2021-2022 vs 2023-2024' }
                    }
                }
            };
            break;

        case 'natG6Chart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'Araling Panlipunan', 'Mathematics', 'Science', 'English'],
                    datasets: [
                        {
                            label: 'SY 2023-2024',
                            data: [59.26, 57.41, 40.51, 41.67, 44.44],
                            backgroundColor: 'rgba(59, 130, 246, 0.6)',
                            borderColor: colors.info,
                            borderWidth: 2,
                            borderRadius: 4
                        },
                        {
                            label: 'SY 2024-2025',
                            data: [73.15, 78.70, 77.96, 88.15, 85.74],
                            backgroundColor: 'rgba(16, 185, 129, 0.6)',
                            borderColor: colors.success,
                            borderWidth: 2,
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: { y: { beginAtZero: true, max: 100 } },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Grade 6 NAT: Year-over-Year Improvement' }
                    }
                }
            };
            break;

        case 'natG10Chart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Filipino', 'Araling Panlipunan', 'Mathematics', 'Science', 'English'],
                    datasets: [
                        {
                            label: 'SY 2022-2023 MPS',
                            data: [42.83, 42.96, 28.27, 26.29, 33.45],
                            backgroundColor: [
                                'rgba(245, 158, 11, 0.7)',
                                'rgba(245, 158, 11, 0.7)',
                                'rgba(239, 68, 68, 0.7)',
                                'rgba(239, 68, 68, 0.7)',
                                'rgba(245, 158, 11, 0.7)'
                            ],
                            borderColor: [
                                '#f59e0b',
                                '#f59e0b',
                                '#ef4444',
                                '#ef4444',
                                '#f59e0b'
                            ],
                            borderWidth: 2,
                            borderRadius: 4
                        },
                        {
                            label: 'Target MPS (75%)',
                            data: [75, 75, 75, 75, 75],
                            type: 'line',
                            borderColor: '#10b981',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointRadius: 0,
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: { y: { beginAtZero: true, max: 100 } },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Grade 10 NAT Performance vs Target' }
                    }
                }
            };
            break;

        case 'philIriSecEngChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
                    datasets: [
                        {
                            label: 'At Grade Level',
                            data: [0, 0, 0, 1],
                            backgroundColor: 'rgba(16, 185, 129, 0.7)',
                            borderColor: colors.success,
                            borderWidth: 2
                        },
                        {
                            label: '2-Level Down',
                            data: [4, 1, 3, 2],
                            backgroundColor: 'rgba(245, 158, 11, 0.7)',
                            borderColor: colors.warning,
                            borderWidth: 2
                        },
                        {
                            label: '3-Level Down',
                            data: [13, 14, 7, 10],
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: colors.danger,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, beginAtZero: true }
                    },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Phil-IRI Pre-Test: Reading Levels by Grade' }
                    }
                }
            };
            break;

        case 'philIriSecFilChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'],
                    datasets: [
                        {
                            label: 'At Grade Level',
                            data: [0, 0, 1, 4],
                            backgroundColor: 'rgba(16, 185, 129, 0.7)',
                            borderColor: colors.success,
                            borderWidth: 2
                        },
                        {
                            label: '2-Level Down',
                            data: [3, 8, 5, 8],
                            backgroundColor: 'rgba(245, 158, 11, 0.7)',
                            borderColor: colors.warning,
                            borderWidth: 2
                        },
                        {
                            label: '3-Level Down',
                            data: [14, 7, 4, 1],
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: colors.danger,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, beginAtZero: true }
                    },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Filipino Phil-IRI: Reading Levels by Grade' }
                    }
                }
            };
            break;

        case 'philIriElemEngChart':
            config = {
                type: 'bar',
                data: {
                    labels: ['Grade 4', 'Grade 5', 'Grade 6'],
                    datasets: [
                        {
                            label: 'Independent',
                            data: [2, 2, 1],
                            backgroundColor: 'rgba(16, 185, 129, 0.7)',
                            borderColor: colors.success,
                            borderWidth: 2
                        },
                        {
                            label: 'Instructional',
                            data: [7, 3, 4],
                            backgroundColor: 'rgba(245, 158, 11, 0.7)',
                            borderColor: colors.warning,
                            borderWidth: 2
                        },
                        {
                            label: 'Frustration',
                            data: [4, 5, 13],
                            backgroundColor: 'rgba(239, 68, 68, 0.7)',
                            borderColor: colors.danger,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, beginAtZero: true }
                    },
                    plugins: {
                        legend: { position: 'top' },
                        title: { display: true, text: 'Elementary English Phil-IRI Post-Test Results' }
                    }
                }
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
                    labels: ['CSS', 'Per. Dev', 'PE & Health', 'MIL'],
                    datasets: [{
                        label: 'MPS (1st Sem)',
                        data: [84.50, 86.20, 88.75, 79.40],
                        backgroundColor: [colors.info, colors.success, colors.success, colors.warning],
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

    if (config.type) {
        charts[id] = new Chart(ctx, config);
    }
}
