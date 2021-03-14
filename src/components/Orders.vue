<template>
    <div>
        <ul>
            <li v-for="order in orders" :key="order[0]">
                <div v-for="(itemName,itemCount) in order[1]" :key="itemCount">
                  {{itemCount}} : {{itemName}} 
                </div><br>
                <button type="button" v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                <button type="button" v-bind:id="order[0]" v-on:click="route($event)">Modify</button>
            </li>
        </ul>
        
    </div>
</template>

<script>
import database from "../firebase.js"
export default {
    name: 'Orders',
    metaInfo: {
        title: "Jcheez's Zi Char - Orders"
      },
    data() {
        return {
            orders:[]
        }
    },

    methods: {
        fetchItems: function() {
            database.collection('orders').get().then(snapshot => {
                snapshot.forEach(doc => {
                  this.orders.push([doc.id,doc.data()])
                })
              })
        },
        deleteItem: function(event) {
            let doc_id = event.target.getAttribute("id");
            this.orders = this.orders.filter(x => x[0]!=doc_id);
            database.collection('orders').doc(doc_id).delete();
        },
        route: function(event) {
            let doc_id = event.target.getAttribute("id");
            this.$router.push({name:'Modify',params:{id:doc_id}})
            }
        },
    created() {
        this.fetchItems()
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;  
    padding: 10px;
    border: 1px solid #222;
    margin: 10px; 
  }

button {
    width: 65px;
    height: 30px;
    background-color: #f7cac9;
    border-radius: 10px;
    border-width: 1px;
  }
</style>
