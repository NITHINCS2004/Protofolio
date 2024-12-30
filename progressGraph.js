// progressGraph.js
const ctx = document.getElementById('progressGraph').getContext('2d');
const progressGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Angular', 'React'], // Labels for technologies
        datasets: [{
            label: 'Learning Progress (%)',
            data: [80, 75, 60, 50, 40, 30], // Progress data for each technology
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
            borderColor: 'rgba(54, 162, 235, 1)', // Border color
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100 // Maximum value for the progress bar
            }
        }
    }
});
