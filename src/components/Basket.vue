import database from "../firebase"

<template>
  <div>
  <p>Menu:</p>
   <ul>
       <li v-for="item in showing" :key="item.id">
       {{item.name + " X " + item.count}}
       </li>
   </ul>
   <button type="button" v-on:click="sendOrder()">Add Order</button>
  </div>
</template>

<script>
import database from "../firebase.js"
export default {
    data() {
        return {
           clicked:false,
        }
    },
    props: {
        itemsSelected:{
        }
    },
    computed: {
        showing:function() {
            return this.itemsSelected.filter(item => item.count>0)
        }
    },
    methods: {
        sendOrder: function() {
            let order = {};
            this.itemsSelected.forEach(item => order[item.name] = item.count);
            database.collection('orders').add(order).then(() => location.reload());
        },
    }
}
</script>

<style scoped>
button {
    height: 30px;
    width: 80px;
    background-color: #f7cac9;
    border-radius: 5px;
    border: 1px solid;
    
}
</style>