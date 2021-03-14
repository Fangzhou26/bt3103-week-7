<template>
<div id="list">
    <div v-for="(value,key,index) in datapacket" :key="index">
        {{key}} : {{value}}<br><br>
        <input id="index" placeholder=0 type="number" min="0" v-model="copy[key]"><br><br>
    </div>
    <button type="button" v-on:click="updateOrder">Update Order</button>
</div>
</template>

<script>
import database from "../firebase.js"
export default {
    name:"Modify",
    props: {
        id:{},
    },
    data() {
        return {
            datapacket:{},
            copy:{}
        }
    },
    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.id).get().then(doc => {
                if (doc.exists) {
                    this.datapacket = doc.data(); 
                    this.copy = doc.data();
                }
                else console.log("Not found!")
            })
        },
        updateOrder: function() {
            database.collection('orders').doc(this.id).set(this.copy).then(this.$router.push('Orders'))
        }
    },
    created() {
        this.fetchItems()
    }
}
</script>

<style scoped>
#list {
    position: absolute;
    left: 10%;
}
button {
    width: 100px;
    height: 30px;
    background-color: #f7cac9;
    border-radius: 10px;
    border-width: 1px;
  }
</style>