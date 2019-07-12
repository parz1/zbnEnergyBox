<template>
    <div :style="{'background-color':color,'padding':padding}" id="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:[
        'color',
        'padding'
    ]
}
</script>

<style scoped>
#card {
    padding: 20px;
    border-radius: 20px;
    border: 0px solid #eee;
    box-shadow: 0px 0px 6px #eee;
}
</style>
