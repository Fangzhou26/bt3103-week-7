<template>
    <div>
        <header>
        <div id="router"><router-link to="/" exact>Home</router-link></div>
        <div id="router"><router-link to="/orders" exact>Orders</router-link></div>
        <div id="router"><router-link to="/dashboard" exact>Dashboard</router-link></div>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }

}
</script>

<style scoped>
header {
    display: flex;
}
#router {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
</style>