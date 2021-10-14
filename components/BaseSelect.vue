<template>
    <div>
        <label v-if="label" class="d-block mb-2">{{ label }}</label>
        <div class="select-dropdown">
        <select>
            <option value="1">Brooklyn</option>
        </select>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        items :{
            type: Array,
            default: () => []
        },
        label :{
            type: String,
        }
    }
};
</script>
<style scoped>
.select-dropdown {
    position: relative;
    background-color: none;
    border: 2px solid #F2F2F2;
    width: auto;
    float: left;
    max-width: 100%;
    border-radius: 2px;
}
.select-dropdown select {
    font-size: 1rem;
    font-weight: 400;
    max-width: 100%;
    padding: 6px 21px 6px 13px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.select-dropdown select:active,
.select-dropdown select:focus {
    outline: none;
    box-shadow: none;
}
.select-dropdown:after {
    content: " ";
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 7px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #b9b6b6;
}
</style>