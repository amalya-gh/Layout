<template>
    <div class="main-content">
        <h2>Գրանցվել որպես Բրոքեր</h2>
        <tab-block/>
    </div>
</template>

<script>
  import TabBlock from "./TabBlock";

  export default {
    name: "MainContent",
    components: {TabBlock}
  }
</script>

<style scoped>
    .main-content {
        background: #F7F7F7;
    }

    h2 {
        text-align: left;
        margin: 0;
        padding-left: 120px;
        padding-top: 40px;
        padding-bottom: 32px;

    }

    @media (max-width: 768px) {
        h2 {
            padding-left: 20px;
        }
    }
</style>