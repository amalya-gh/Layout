<template>
    <div class="footer-right">
        <form>
            <label>
                <input type="text" placeholder="Էլ․ հասցե" class="subscribe">
            </label>
            <button class="subscribe-btn">
                Subscribe
            </button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "FooterRight"
  }
</script>

<style scoped>
    form {
        display: flex;
    }
.footer-right{
    width: 50%;
}
    .subscribe {
        background: #DFE0E4;
        border: 1px solid #009DBC;
        box-sizing: border-box;
        border-radius: 22px 0 0 22px;
        padding: 12px 18px;
        outline: none;
    }

    .subscribe-btn {
        padding: 14px 32px;
        background: linear-gradient(180deg, #04B5D8 0%, #008AA6 100%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        border-radius: 0 22px 22px 0;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        border: none;
        outline: none;
        color: #FFFFFF;
    }
    @media (max-width: 425px){
    .footer-right{
            width: 100%;
        }
        label{
            width: 40%;
        }
        button{
            width: 60%;
        }
    }
</style>