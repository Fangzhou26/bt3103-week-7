import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Pork Fried Rice","Mapo Tofu","Sambal KangKung","Cereal Prawn","Dry Beef Hor Fun","Prawn omelette"],
            datasets: [{
                label: "Sales",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#f5f5dc"],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total Number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales:{
              yAxes:[{
                  ticks:{
                      min:0
                  }

              }]
          }
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          for (let name in doc.data()) {
            var count = doc.data()[name];

            for (let index = 0;index < 6;index++) {
              if (name == this.datacollection.labels[index]) {
                this.datacollection.datasets[0].data[index] += count;
                break;
              }
            }
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