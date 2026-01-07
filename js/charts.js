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
