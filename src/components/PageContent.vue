<template>
  <div id="itemsList">
  <ul>
   <li v-for="item in items" :key="item.id">
     <img v-bind:src="item.imageURL" alt="not found"><br><br>
     <p id="itemName">{{item.name}}</p>
     <p id="price">{{"$" + item.price}}</p>
     
     <counter v-bind:item="item" v-on:counter="onCounter"></counter>
    </li>
  </ul>
  <Basket id="shoppingBasket" v-bind:itemsSelected="itemsSelected"></Basket>
  </div>
  
</template>

<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from "../firebase.js"

export default {
    name: 'PageContent',
    components: {
        counter:QuantityCounter,
        Basket
    },
 
    data() {
        return {
          items:[],
          itemsSelected:[]
        }
    },
    methods: {
      fetchItems: function() {
        database.collection('menu').get().then(snapshot => {
          let item={}
          snapshot.forEach(doc => {
            item=doc.data()
            item.id=doc.id
            this.items.push(item)
            this.itemsSelected.push({name:item.name,count:0})
          })
        })
      },
     onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);

      } else {

         var found = 0;
        // Loop through everything to check what is not in the basket
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item.name;

          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
          if (item_name == item.name && count > 0) {
               curr_item.count = count;
               found = 1;
               break;

          // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
          } else if (item_name == item.name && count == 0) {
               curr_item.count = 0;
               found = 1;
               break;
          } 
        }

        // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
        if (found == 0) {
            this.itemsSelected.push({name:item.name, count:item.count});
        }
        
        }
      }
    },
    created() {
        this.fetchItems()
      }
}

</script>

<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
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
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 30%;
  left: 75%;
}
</style>