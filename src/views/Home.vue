<template>
    <div class="home">
        <main-header/>
        <main-content/>
        <main-footer/>
        <div class="copyright">
            <p class="terms">
                <a href="#">Դրույթներ և պայմաններ</a>
                <a href="#">Գաղտնիության քաղաքականություն</a>
            </p>
            <p>© Lipsum, 2021. Բոլոր իրավունքները պաշտպանված են</p>
        </div>
    </div>
</template>

<script>
  import MainHeader from "../components/MainHeader";
  import MainContent from "../components/MainContent";
  import MainFooter from "../components/MainFooter";

  export default {
    name: 'Home',
    components: {MainFooter, MainContent, MainHeader}
  }
</script>
<style scoped>
    .home {

    }

    .copyright {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-top: 1px solid #CACACA;
        background: #2E4258;
        padding: 10px 120px;
    }

    .terms a {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        margin-right: 32px;
        color: #fff !important;
    }

    .copyright p:nth-child(2) {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        color: #FFFFFF;
    }

    @media (max-width: 1150px) {
        .copyright {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media (max-width: 768px) {
        .copyright {
            padding: 16px;
            flex-direction: column;
        }

        .terms {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .terms a {
            margin: 0;
        }
    }
</style>
