<template>
    <div role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="info" class="btn-accordion d-flex">
                    <span class="btn-text">{{ question[0] }}</span>
                    <span class="btn-icon">V</span>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ answer[0] }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="info" class="btn-accordion d-flex">
                    <span class="btn-text">{{ question[1] }}</span>
                    <span class="btn-icon">V</span>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ answer[1] }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="info" class="btn-accordion d-flex">
                    <span class="btn-text">{{ question[2] }}</span>
                    <span class="btn-icon">V</span>
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ answer[2] }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "Faq",
        data() {
            return {
                answer: ['ans1', 'ans2', 'ans3'],
                question: ['ques1', 'ques2', 'ques3']
            }
        }
    }
</script>

<style scoped>
    .btn-accordion{
        background-image: linear-gradient(-90deg, #FAB5DB, #E578B4);
        font-size: 20px;
        font-weight: 500;
    }

    .card.mb-1{
        background: white;
        width: 95%;
        margin-right: auto;
        margin-left: auto;
    }

     .card-header{
        background: white;
        border: none;
        padding: 0 !important;
     }

     .card-text{
         text-align: left;
     }
    
    .btn-icon{
        font-size: 20px;
        margin-left: auto;
    }

    .btn-text{
        margin-right: auto;
        margin-left: 10px;
    }

</style>