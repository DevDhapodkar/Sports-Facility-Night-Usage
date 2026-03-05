let usageChart;

const mockData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    actual: [10, 8, 6, 5, 5, 7, 12, 18, 22, 25, 28, 30, 32, 35, 38, 42, 45, 50, 60, 55, 45, 30, 20, 15],
    predicted: [11, 8, 7, 5, 6, 8, 11, 19, 21, 24, 29, 31, 33, 34, 39, 41, 44, 48, 58, 54, 46, 31, 21, 14]
};

function initChart(data = mockData) {
    const ctx = document.getElementById('usageChart').getContext('2d');

    if (usageChart) usageChart.destroy();

    const gradientActual = ctx.createLinearGradient(0, 0, 0, 400);
    gradientActual.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
    gradientActual.addColorStop(1, 'rgba(56, 189, 248, 0.0)');

    const gradientPredicted = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPredicted.addColorStop(0, 'rgba(129, 140, 248, 0.5)');
    gradientPredicted.addColorStop(1, 'rgba(129, 140, 248, 0.0)');

    usageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Actual Usage (kWh)',
                    data: data.actual,
                    borderColor: '#38bdf8',
                    backgroundColor: gradientActual,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 0,
                },
                {
                    label: 'Predicted Usage (kWh)',
                    data: data.predicted,
                    borderColor: '#818cf8',
                    backgroundColor: gradientPredicted,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointRadius: 0,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: { color: '#94a3b8', font: { family: 'Inter', size: 12 } }
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const type = btn.getAttribute('data-type');
        console.log(`Filtering by: ${type}`);

        // In a real app, we'd fetch data here
        // For now, we'll just jitter the mock data to show it's "interactive"
        const jitteredData = {
            ...mockData,
            actual: mockData.actual.map(v => v * (0.8 + Math.random() * 0.4))
        };
        initChart(jitteredData);
    });
});

window.onload = () => {
    initChart();
};
