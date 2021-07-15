<template>
    <div class="footer-left-menu">
        <ul>
            <li>Ընկերություն</li>
            <li><a href="">Բրոքերի հարցում</a></li>
            <li><a href="">Բեռնափոխադրման հարցում</a></li>
            <li><a href="">Բլոգ</a></li>
            <li><a href="">Նորություններ</a></li>
            <li><a href="">FAQ</a></li>
        </ul>

        <ul>
            <li>Սոց․ ցանցեր</li>
            <li>
                <ul class="social">
                    <li>
                        <a href="">
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.999 0.0049936L9.88679 0C6.39031 0 4.13072 2.31828 4.13072 5.90643V8.62969H1.00151C0.731113 8.62969 0.512146 8.84891 0.512146 9.11932V13.065C0.512146 13.3354 0.731363 13.5544 1.00151 13.5544H4.13072V23.5106C4.13072 23.781 4.34969 24 4.62009 24H8.70282C8.97322 24 9.19219 23.7808 9.19219 23.5106V13.5544H12.851C13.1214 13.5544 13.3403 13.3354 13.3403 13.065L13.3418 9.11932C13.3418 8.98948 13.2901 8.86514 13.1985 8.77326C13.1069 8.68138 12.982 8.62969 12.8522 8.62969H9.19219V6.32115C9.19219 5.21157 9.45659 4.64829 10.902 4.64829L12.9985 4.64755C13.2687 4.64755 13.4876 4.42833 13.4876 4.15817V0.494367C13.4876 0.224462 13.2689 0.00549296 12.999 0.0049936Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 6.75H0V24H5.25V6.75Z" fill="white"/>
                                <path d="M18.0023 6.75C15 6.75 14.1675 7.734 13.5 9V6.75H8.25V24H13.5V14.25C13.5 12.75 13.5 11.25 16.125 11.25C18.75 11.25 18.75 12.75 18.75 14.25V24H24V14.25C24 9.75 23.25 6.75 18.0023 6.75Z"
                                      fill="white"/>
                                <path d="M2.625 5.25C4.07475 5.25 5.25 4.07475 5.25 2.625C5.25 1.17525 4.07475 0 2.625 0C1.17525 0 0 1.17525 0 2.625C0 4.07475 1.17525 5.25 2.625 5.25Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                      fill="white"/>
                                <path d="M16.999 0H6.999C3.14 0 0 3.141 0 7.001V17.001C0 20.86 3.141 24 7.001 24H17.001C20.86 24 24 20.859 24 16.999V6.999C24 3.14 20.859 0 16.999 0ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18ZM19 6C18.448 6 18 5.552 18 5C18 4.448 18.448 4 19 4C19.552 4 20 4.448 20 5C20 5.552 19.552 6 19 6Z"
                                      fill="white"/>
                            </svg>

                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <ul>
            <li>Հետադարձ կապ</li>
            <li><a href="tel:(629) 555-0129">(629) 555-0129</a></li>
            <li><a href="mailto:lorem@ipsum.me">lorem@ipsum.me</a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "FooterLeft"
  }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        text-align: left;
    }

    .social {
        display: flex;
    }

    ul li:first-child {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #F9AA19;
        margin-bottom: 16px;
    }

    ul li {
        margin-bottom: 10px;
    }

    ul li a {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF !important;
    }

    ul li a:hover {
        color: #C0C6CD;
    }

    .footer-left-menu {
        display: flex;
        width: 50%;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .social li {
        margin-right: 30px;
    }

    .social li:last-child {
        margin-right: 0;
    }
</style>