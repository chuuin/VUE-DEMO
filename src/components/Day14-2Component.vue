<template>
    <h3>這是 Day14-2</h3>
    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
</template>
<script>
export default {
    name: 'Vue14-2Component',
    props: {
        //定義型別
        id: Number,
        name: String,
        email: {
            type: String,
            default: 'demo@dmeo.com'
        }
    }
}
</script>