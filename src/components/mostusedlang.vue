
<template>
    <Pie 
        :options="chartOptions"
        :data="chartData"/>
</template>

<script>
    import {Pie} from "vue-chartjs";
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js'


    ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale);

    export default {
        name: "mostusedlang",
        data() {
            return {
                chartData: {
                    labels: ["Python", "Php", "JavaScript", "C", "CSS"],
                    datasets: [
                        {   
                            label: "Most used language",
                            data: [10.51, 12.46, 42.40, 16.49, 18.14],
                            backgroundColor: [
                                "#3471A4",
                                "#4E5C94",
                                "#F0DF59",
                                "#545454",
                                "#553C7B"
                            ],
                            borderWidth: 0
                        }
                    ]
                },
                chartOptions: {
                    // cutout: 80,
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                usePointStyle: true,
                                pointStyle: "circle",
                                textAlign: "left",
                                color: "#ffffff"
                            }
                        }
                    }
                }
            };
        },
        components: {Pie}
    }
</script>
