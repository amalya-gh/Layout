<template>
    <div class="footer">
        <footer-left/>
        <footer-right/>
    </div>
</template>

<script>
  import FooterLeft from "./FooterLeft";
  import FooterRight from "./FooterRight";

  export default {
    name: "MainFooter",
    components: {FooterRight, FooterLeft}
  }
</script>

<style scoped>

    .footer {
        background: #2E4258;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.16);
        padding: 30px 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 1150px) {
        .footer {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media (max-width: 768px) {
        .footer {
            padding: 16px;
            flex-wrap: wrap;
        }
    }
</style>