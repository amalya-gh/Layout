<template>
    <ul>
        <li>
            <span class="number">520</span>
            <span class="currency">USD</span>
        </li>
        <li>
            <span class="number">629</span>
            <span class="currency">EUR</span>
        </li>
        <li>
            <span class="number">6.95</span>
            <span class="currency">RUB</span>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "Prices"
  }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        display: flex;
    }

    .number {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #F9AA19;
    }

    .currency {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #6C7287;
    }
    ul li {
        margin-right: 20px;
    }
    ul li:last-child{
        margin-right: 0;
    }
</style>