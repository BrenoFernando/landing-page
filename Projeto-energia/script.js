const opcoesPadrao = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
    title: {
        display: true,
        text: 'Dashboard Energético',
        color: '#22c55e',
        font: {
            size: 18
        }
    },

    legend: {
        labels: {
        color: "#ffffff",
        font: {
            size: 14,
            weight: "bold"
    }
}
    }
},

    plugins: {
        legend: {
            ticks: {
            color: "#ffffff",
            font: {
                size: 13,
                weight: "bold"
            }
        }
        },
        tooltip: {
            enabled: true
        }
    },

    scales: {
        x: {
            ticks: {
                color: "#ffffff"
            },
            grid: {
                color: "rgba(255,255,255,0.1)"
            }
        },
        y: {
            ticks: {
                color: "#ffffff"
            },
            grid: {
                color: "rgba(255,255,255,0.1)"
            }
        }
    }
};


// =============================
// COMPARAÇÃO MENSAL
// =============================

const ctx = document.getElementById('graficoEnergia');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['Jan','Fev','Mar','Abr','Mai','Jun'],

        datasets: [
        {
            label: 'Eficiência (%)',
            data: [61,58,64,72,81,92],
            borderColor: '#22c55e',
            backgroundColor: '#22c55e',
            tension: 0.4
        },
        {
            label: 'Desperdício (%)',
            data: [42,39,33,25,18,9],
            borderColor: '#f59e0b',
            backgroundColor: '#f59e0b',
            tension: 0.4
        }]
    },

    options: opcoesPadrao
});


// =============================
// EFICIÊNCIA X DESPERDÍCIO
// =============================

const eficiencia = document.getElementById('graficoEficiência');

new Chart(eficiencia, {
    options: opcoesPadrao,
    type: 'doughnut',

    data: {
        labels: ['Eficiência', 'Desperdício'],

        datasets: [{
            data: [87, 13],
            backgroundColor: [
                '#22c55e',
                '#ef4444'
            ]
        }]
    }
});


// =============================
// ENERGIA ATIVA X REATIVA
// =============================

const ativaReativa = document.getElementById('graficoAtivaReativa');

new Chart(ativaReativa, {
    options: opcoesPadrao,
    type: 'bar',

    data: {
        labels: ['jan', 'fev', 'Mar', 'Abr', 'Mai', 'Jun'],

        datasets: [
        {
            label: 'Energia Ativa (kWh)',
            data: [1200,1250,1300,1380,1450,1520],
            backgroundColor: '#22c55e'
        },
        {
            label: 'Energia Reativa (kWh)',
            data: [800,760,690,540,420,300],
            backgroundColor: '#f59e0b'
        }
        ]
    }
});


// =============================
// DISTRIBUIÇÃO ENERGÉTICA
// =============================

const distribuicao = document.getElementById('graficoDistribuicao');

new Chart(distribuicao, {
    options: opcoesPadrao,
    type: 'pie',

    options: {
    cutout: '65%',
    plugins: {
        legend: {
            labels: {
                color: '#ffffff'
            }
        }
    }
},

    data: {
    labels: [
        'Energia Ativa',
        'Energia Reativa'
    ],

    datasets: [{
        data: [1400,900],

        backgroundColor: [
            '#22c55e',
            '#f59e0b'
        ],

        borderWidth: 0
    }]
},
        datasets: [{
            data: [25, 40, 20, 15],

            backgroundColor: [
                '#22c55e',
                '#3b82f6',
                '#f59e0b',
                '#a855f7'
            ]
        }]
    }
);


// =============================
// COMPARAÇÃO ANUAL
// =============================

const anual = document.getElementById('graficoAnual');

new Chart(anual, {
    options: opcoesPadrao,

    type: 'bar',

    data: {
        labels: ['2023','2024','2025','2026'],

        datasets:[{
        label: 'Consumo (kWh)',
        data: [22000,19500,16800,12900],
        backgroundColor: '#22c55e',
        borderRadius: 10
    }]
    }
});

const fatorPotencia = document.getElementById('graficoFatorPotencia');

new Chart(fatorPotencia, {
    type: 'line',

    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],

        datasets: [{
            label: 'Fator de Potência',
            data: [0.78, 0.80, 0.83, 0.87, 0.91, 0.96],
            borderColor: '#22c55e',
            backgroundColor: 'rgba(124, 224, 140, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 6
        }]
    },

    options: {
        ...opcoesPadrao,
        scales: {
            y: {
                min: 0.7,
                max: 1.0
            }
        }
    }
});

