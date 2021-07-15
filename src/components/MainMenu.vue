<template>
    <ul>
        <li>
            <a href="#">
                Ծառայություններ
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 0.210144L6 4.79514L10.585 0.210144L12 1.62514L6 7.62514L0 1.62514L1.415 0.210144Z"
                          fill="#F9AA19"/>
                </svg>

            </a>
        </li>
        <li>
            <a href="#">
                Տեղեկատվություն
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 0.210144L6 4.79514L10.585 0.210144L12 1.62514L6 7.62514L0 1.62514L1.415 0.210144Z"
                          fill="#F9AA19"/>
                </svg>

            </a>
        </li>
        <li>
            <a href="#">
                Հետադարձ կապ
            </a>
        </li>
        <li>
            <a href="#">
                Մեր մասին
            </a>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "MainMenu"
  }
</script>

<style scoped>
    ul li a {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #656D7A!important;
    }

    ul {
        list-style: none;
        display: flex;
        padding: 0;
    }
    ul li{
        margin-right: 30px;
    }
    svg{
        margin-left: 15px;
    }
    ul li a:hover{
        color: #232F41!important;
        text-decoration: none!important;
    }
    @media (max-width: 1300px){
        svg{
            margin-left: 5px;
        }
        ul li{
            margin-right: 15px;
        }
    }
</style>