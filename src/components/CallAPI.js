import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                label: 'west',
                data: [],
                borderColor:"red",
                fill: false
            },
            {   label: 'national',
                data: [],
                borderColor: "#25a7cb",
                fill: false
            },
            {   label: 'east',
                data: [],
                borderColor: "#576299",
                fill: false
            },
            {   label: 'central',
                data: [],
                borderColor: "#0c9dc6",
                fill: false
            },
            {   label: 'south',
                data: [],
                borderColor: "#a6879d",
                fill: false
            },
            {   label: 'north',
                data: [],
                borderColor: "#9bf3af",
                fill: false
            },
        ]
        },
        options: {
            labels: ["west","national","east","central","south","north"],
            legend: { 
                position: "top"
            },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data["items"].forEach(data => {
                this.datacollection.labels.push(data["timestamp"])
                console.log(data)

                for (let i = 0;i < 6;i++) {
                    this.datacollection.datasets[i].data
                    .push(data["readings"]["psi_twenty_four_hourly"][this.options.labels[i]])
                }
            })
            this.renderChart(this.datacollection, this.options)
         })
    }
  },
  created () {
    this.fetchItems()
  }
}

