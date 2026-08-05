const canvas = document.getElementById("requestsChart");
const ctx = canvas.getContext("2d");

// Gradient under linjen
const gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(59,130,246,0.35)");
gradient.addColorStop(1, "rgba(59,130,246,0)");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "14 Jul",
            "15 Jul",
            "16 Jul",
            "17 Jul",
            "18 Jul",
            "19 Jul",
            "20 Jul"
        ],

        datasets: [{

            label: "Mottagna ärenden",

            data: [
                12,
                19,
                15,
                24,
                18,
                28,
                25
            ],

            borderColor: "#60A5FA",

            backgroundColor: gradient,

            fill: true,

            borderWidth: 4,

            tension: 0.4,

            pointRadius: 7,

            pointHoverRadius: 10,

            pointBackgroundColor: "#60A5FA",

            pointBorderColor: "#FFFFFF",

            pointBorderWidth: 2

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        animation: {

            duration: 1500,

            easing: "easeOutQuart"

        },

        interaction: {

            mode: "index",

            intersect: false

        },

        plugins: {

            legend: {

                display: false

            },

            tooltip: {

                backgroundColor: "#111827",

                titleColor: "#FFFFFF",

                bodyColor: "#FFFFFF",

                titleFont: {

                    family: "Inter",
                    size: 16,
                    weight: "600"

                },

                bodyFont: {

                    family: "Inter",
                    size: 15

                },

                borderColor: "#60A5FA",

                borderWidth: 1,

                padding: 14,

                displayColors: false,

                callbacks: {

                    label: function(context) {

                        return context.parsed.y + " ärenden";

                    }

                }

            }

        },

        scales: {

            x: {

                grid: {

                    display: false

                },

                border: {

                    display: false

                },

                ticks: {

                    color: "#E2E8F0",

                    padding: 12,

                    font: {

                        family: "Inter",

                        size: 16,

                        weight: "600"

                    }

                }

            },

            y: {

                beginAtZero: true,

                suggestedMax: 30,

                border: {

                    display: false

                },

                ticks: {

                    color: "#E2E8F0",

                    stepSize: 5,

                    padding: 10,

                    font: {

                        family: "Inter",

                        size: 16,

                        weight: "600"

                    }

                },

                grid: {

                    color: "rgba(255,255,255,0.08)",

                    drawBorder: false

                }

            }

        }

    }

});