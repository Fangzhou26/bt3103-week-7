<template>
  <div>
  <button type="button" v-on:click="decrement()">-</button>
  {{counter}}
  <button type="button" v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
    name: 'QuantityCounter',
    data () {
        return {
            counter: 0
        }
    },
    props: {
        item: {
            
        }
    },
    methods: {
        decrement:function() {
            if (this.counter != 0) this.counter--;
            this.$emit('counter', this.item, this.counter);
        },
        increment:function() {
            if (this.counter == 10) alert("You cannot buy more than 10 items.");
            else this.counter++;
            this.$emit('counter', this.item, this.counter);
        }
    }

    
}
</script>

<style scoped>
button {
    height: 30px;
    width: 30px;
    background-color: #f7cac9;
    border-radius: 5px;
    border: 1px solid;
}
</style>