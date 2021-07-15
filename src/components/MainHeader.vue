<template>
    <div class="d-flex main-header">
        <div class="logo-block">
            <a href="#" class="logo">
                LOGO
            </a>
        </div>
        <div class="mobile">
            <button class="mobile-search">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                          fill="#F9AA19"/>
                </svg>

            </button>
            <div class="calc">
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5263 0H1.47368C0.659474 0 0 0.67125 0 1.5V16.5C0 17.3288 0.659474 18 1.47368 18H12.5263C13.3405 18 14 17.3288 14 16.5V1.5C14 0.67125 13.3405 0 12.5263 0ZM3.31579 9.75C3.92589 9.75 4.42105 10.254 4.42105 10.875C4.42105 11.496 3.92589 12 3.31579 12C2.70568 12 2.21053 11.496 2.21053 10.875C2.21053 10.254 2.70568 9.75 3.31579 9.75ZM2.21053 7.125C2.21053 6.504 2.70568 6 3.31579 6C3.92589 6 4.42105 6.504 4.42105 7.125C4.42105 7.746 3.92589 8.25 3.31579 8.25C2.70568 8.25 2.21053 7.746 2.21053 7.125ZM7 15.75H3.31579C2.70568 15.75 2.21053 15.246 2.21053 14.625C2.21053 14.004 2.70568 13.5 3.31579 13.5H7C7.61011 13.5 8.10526 14.004 8.10526 14.625C8.10526 15.246 7.61011 15.75 7 15.75ZM7 12C6.38989 12 5.89474 11.496 5.89474 10.875C5.89474 10.254 6.38989 9.75 7 9.75C7.61011 9.75 8.10526 10.254 8.10526 10.875C8.10526 11.496 7.61011 12 7 12ZM7 8.25C6.38989 8.25 5.89474 7.746 5.89474 7.125C5.89474 6.504 6.38989 6 7 6C7.61011 6 8.10526 6.504 8.10526 7.125C8.10526 7.746 7.61011 8.25 7 8.25ZM10.6842 15.75C10.0741 15.75 9.57895 15.246 9.57895 14.625C9.57895 14.004 10.0741 13.5 10.6842 13.5C11.2943 13.5 11.7895 14.004 11.7895 14.625C11.7895 15.246 11.2943 15.75 10.6842 15.75ZM10.6842 12C10.0741 12 9.57895 11.496 9.57895 10.875C9.57895 10.254 10.0741 9.75 10.6842 9.75C11.2943 9.75 11.7895 10.254 11.7895 10.875C11.7895 11.496 11.2943 12 10.6842 12ZM10.6842 8.25C10.0741 8.25 9.57895 7.746 9.57895 7.125C9.57895 6.504 10.0741 6 10.6842 6C11.2943 6 11.7895 6.504 11.7895 7.125C11.7895 7.746 11.2943 8.25 10.6842 8.25ZM11.7895 4.5H2.21053V2.25H11.7895V4.5Z"
                          fill="#F9AA19"/>
                </svg>
            </div>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1C0.447716 10 0 10.4477 0 11ZM0 6C0 6.55228 0.447715 7 1 7H17C17.5523 7 18 6.55228 18 6C18 5.44772 17.5523 5 17 5H1C0.447716 5 0 5.44772 0 6ZM1 0C0.447716 0 0 0.447715 0 1C0 1.55229 0.447715 2 1 2H17C17.5523 2 18 1.55229 18 1C18 0.447715 17.5523 0 17 0H1Z"
                      fill="#F9AA19"/>
            </svg>
        </div>
        <div class="menu-block">
            <div class="menu-top d-flex">
                <div class="menu-top-left d-flex">
                    <label class="pos-rel">
                        <input type="text" class="search">
                        <button class="search-btn">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
                                      fill="#F9AA19"/>
                            </svg>

                        </button>
                    </label>
                    <div class="calc">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5263 0H1.47368C0.659474 0 0 0.67125 0 1.5V16.5C0 17.3288 0.659474 18 1.47368 18H12.5263C13.3405 18 14 17.3288 14 16.5V1.5C14 0.67125 13.3405 0 12.5263 0ZM3.31579 9.75C3.92589 9.75 4.42105 10.254 4.42105 10.875C4.42105 11.496 3.92589 12 3.31579 12C2.70568 12 2.21053 11.496 2.21053 10.875C2.21053 10.254 2.70568 9.75 3.31579 9.75ZM2.21053 7.125C2.21053 6.504 2.70568 6 3.31579 6C3.92589 6 4.42105 6.504 4.42105 7.125C4.42105 7.746 3.92589 8.25 3.31579 8.25C2.70568 8.25 2.21053 7.746 2.21053 7.125ZM7 15.75H3.31579C2.70568 15.75 2.21053 15.246 2.21053 14.625C2.21053 14.004 2.70568 13.5 3.31579 13.5H7C7.61011 13.5 8.10526 14.004 8.10526 14.625C8.10526 15.246 7.61011 15.75 7 15.75ZM7 12C6.38989 12 5.89474 11.496 5.89474 10.875C5.89474 10.254 6.38989 9.75 7 9.75C7.61011 9.75 8.10526 10.254 8.10526 10.875C8.10526 11.496 7.61011 12 7 12ZM7 8.25C6.38989 8.25 5.89474 7.746 5.89474 7.125C5.89474 6.504 6.38989 6 7 6C7.61011 6 8.10526 6.504 8.10526 7.125C8.10526 7.746 7.61011 8.25 7 8.25ZM10.6842 15.75C10.0741 15.75 9.57895 15.246 9.57895 14.625C9.57895 14.004 10.0741 13.5 10.6842 13.5C11.2943 13.5 11.7895 14.004 11.7895 14.625C11.7895 15.246 11.2943 15.75 10.6842 15.75ZM10.6842 12C10.0741 12 9.57895 11.496 9.57895 10.875C9.57895 10.254 10.0741 9.75 10.6842 9.75C11.2943 9.75 11.7895 10.254 11.7895 10.875C11.7895 11.496 11.2943 12 10.6842 12ZM10.6842 8.25C10.0741 8.25 9.57895 7.746 9.57895 7.125C9.57895 6.504 10.0741 6 10.6842 6C11.2943 6 11.7895 6.504 11.7895 7.125C11.7895 7.746 11.2943 8.25 10.6842 8.25ZM11.7895 4.5H2.21053V2.25H11.7895V4.5Z"
                                  fill="#F9AA19"/>
                        </svg>
                    </div>
                </div>
                <div class="menu-top-right d-flex">
                    <button class="login">Մուտք</button>
                    <button class="register">Գրանցում</button>
                    <div class="notification-block">
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 20C10.3797 20 11.4988 18.8809 11.4988 17.5H6.50117C6.50117 18.8809 7.62031 20 9 20ZM17.4137 14.152C16.659 13.341 15.2469 12.1211 15.2469 8.125C15.2469 5.08984 13.1187 2.66016 10.2492 2.06406V1.25C10.2492 0.559766 9.68984 0 9 0C8.31015 0 7.75078 0.559766 7.75078 1.25V2.06406C4.88125 2.66016 2.75312 5.08984 2.75312 8.125C2.75312 12.1211 1.34101 13.341 0.586325 14.152C0.35195 14.4039 0.248043 14.7051 0.249996 15C0.254293 15.6406 0.757028 16.25 1.5039 16.25H16.4961C17.243 16.25 17.7461 15.6406 17.75 15C17.7519 14.7051 17.648 14.4035 17.4137 14.152Z"
                                  fill="#AEB1BA"/>
                        </svg>
                        <div class="red-circle"></div>
                    </div>
                    <div class="languages d-flex">
                        <img src="../assets/map.svg" alt="map">
                        <div class="md-layout-item lang">
                            <md-field>
                                <md-select v-model="lang" name="country" id="languages" :placeholder="languages[0]">
                                    <md-option :value="i" v-for="(i, index) in languages" :key="index">{{i}}</md-option>
                                </md-select>
                            </md-field>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-bottom d-flex">
                <main-menu/>
                <prices/>
            </div>
        </div>
    </div>
</template>

<script>
  import MainMenu from "./MainMenu";
  import Prices from "./Prices";

  export default {
    name: "MainHeader",
    components: {Prices, MainMenu},
    data() {
      return {
        languages: ['ՀԱՅ', 'ENG', 'рус'],
        lang: null
      }
    }
  }
</script>

<style scoped>
    .mobile {
        display: none;
    }

    .mobile-search {
        border: none;
        background: none;
        outline: none;
    }

    .mobile > .calc {
        margin-right: 24px;
    }

    .main-header {
        background: #FFFFFF;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.16);
        padding-left: 120px;
        padding-right: 120px;
    }

    .d-flex {
        display: flex;
        align-items: center;
    }

    .logo-block {
        margin-right: 32px;
    }

    .logo {
        background: linear-gradient(90deg, #009DBC 0%, #F9AA19 100%);
        border-radius: 22px;
        padding: 12px 53px;
        color: #fff !important;
        text-transform: uppercase;
        text-decoration: none;
    }

    .search {
        background: #F9F9F9;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 12px;
        width: 278px;
    }

    .menu-top {
        border-bottom: 1px solid #E5E5E5;
        min-width: 100%;
        justify-content: space-between;
    }

    .pos-rel {
        position: relative;
    }

    .search-btn {
        background: none;
        border: none;
        outline: none;
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        padding: 0
    }

    .menu-block {
        flex-grow: 2;
    }

    .calc {
        margin-left: 37px;
        cursor: pointer;
        padding: 3px;
        display: flex;
    }

    .calc:hover {
        background: #F4F5F7;
        border-radius: 5px;
    }

    .login {
        /*font-family: Mardoto;*/
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #009DBC;
        border: none;
        background: none;
        outline: none;
        margin-right: 64px;
    }

    .register {
        background: rgba(0, 157, 188, 0.1);
        border: 1px solid #009DBC;
        box-sizing: border-box;
        border-radius: 25px;
        /*font-family: Mardoto;*/
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #009DBC;
        padding: 12px 32px;
        margin-right: 32px;

    }

    .register:hover {
        background: #CBE6EB;
        border: 1px solid #009DBC;
        box-sizing: border-box;
        border-radius: 25px;
    }

    .notification-block {
        position: relative;
        margin-right: 33px;
    }

    .red-circle {
        background: #FF377F;
        position: absolute;
        top: 0;
        right: 0;
        min-height: 8.5px;
        min-width: 8.5px;
        max-height: 8.5px;
        max-width: 8.5px;
        border-radius: 50%;
        border: 1.5px solid #FFFFFF;
    }

    .languages img {
        margin-right: 5px;
    }

    .menu-bottom {
        padding: 20px 0;
        justify-content: space-between;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 1150px) {
        .main-header {
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    @media (max-width: 1024px) {
        .menu-block {
            display: none;
        }

        .mobile {
            display: flex;
            align-items: center;
        }

        .main-header {
            padding: 16px;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
<style>
    .md-list.md-theme-default {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        border-radius: 5px;
    }

    .md-field.md-theme-default:before,
    .md-field.md-theme-default:after {
        display: none
    }

    .lang {
        width: 60px;
    }

    .md-menu-content.md-select-menu {
        width: auto !important;
    }

    .lang > .md-field > .md-menu.md-select {
        border: none;
        padding: 0;
    }

    .md-list.md-theme-default .md-list-item-container:not(.md-list-item-default):not(.md-list-item-expand):not([disabled]):hover {
        background: #F7F1EC !important;
    }

    .md-list {
        padding: 0;
    }
</style>