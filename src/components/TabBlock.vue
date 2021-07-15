<template>
    <div class="tab-content">
        <md-steppers md-alternative :md-active-step.sync="active" md-linear>
            <md-step id="first" md-label="Տեղեկատվություն" :md-done.sync="first">
                <single-tab/>
                <md-button class="md-raised my-btn" @click="setDone('first', 'second')" :disabled="disableBtn">Հաջորդ
                </md-button>
            </md-step>

            <md-step id="second" md-label="Ծառայություններ" :md-done.sync="second">
                <single-tab/>
                <md-button class="md-raised my-btn" @click="setDone('second', 'third')">Հաջորդ</md-button>
            </md-step>

            <md-step id="third" md-label="Փաստաթղթեր" :md-done.sync="third">
                <single-tab/>
                <md-button class="md-raised my-btn" @click="setDone('third', fourth)">Հաջորդ</md-button>
            </md-step>
            <md-step id="fourth" md-label="Հավելյալ ծառայություններ" :md-done.sync="fourth">
                <single-tab/>
                <md-button class="md-raised my-btn" @click="setDone('fourth')">Վերջ</md-button>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
  import SingleTab from "./SingleTab";
  import {mapState} from "vuex";

  export default {
    name: "TabBlock",
    components: {SingleTab},
    data() {
      return {
        active: 'first',
        first: false,
        second: false,
        third: false,
        fourth: false,
        disableBtn: true
      }
    },
    computed: {
      ...mapState(['selectedValues'])
    },
    watch: {
      selectedValues(val) {
        this.disableBtn = val
      }
    },
    methods: {
      setDone(id, index) {
        this[id] = true
        if (index) {
          this.active = index
        }
      }
    }
  }
</script>

<style scoped>
    .my-btn {
        background: linear-gradient(180deg, #FFB938 0%, #DE950E 100%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        padding: 10px 39px;
        border: none;
        outline: none;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF !important;
        margin-top: 50px;
        cursor: pointer;
    }

    .my-btn:hover {
        background: linear-gradient(180deg, #E2A028 0%, #BE7B00 100%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        border-radius: 25px;
    }

    .my-btn[disabled=disabled] {
        background: #DCDCDC;
        border-radius: 25px;
    }

</style>
<style>
    .md-steppers-navigation {
        box-shadow: none !important;
    }
    .md-field.md-theme-default.md-has-value .md-input{
        -webkit-text-fill-color:transparent!important;
    }

    @media (max-width: 768px) {
        .md-stepper-label {
            display: none !important;
        }

        .md-ripple,
        .md-steppers.md-horizontal.md-alternative .md-stepper-header .md-button-content {
            padding: 0 !important;
        }

        .md-steppers.md-horizontal.md-alternative .md-stepper-header {
            height: auto !important;
        }

        .md-steppers-navigation > .md-button {
            max-width: unset;
        }
    }

</style>