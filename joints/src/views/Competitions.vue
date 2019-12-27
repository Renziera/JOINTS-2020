<template>
    <div>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">
                            COMPETITION
                        </h1>
                        <br>
                        <p class="header-subtitle ml-auto mr-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <br>
                        <b-button class="header-button" variant="warning">
                            Yuk Daftar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section class="competition-list">
            <b-container class="d-flex justify-content-center flex-column">
                <CompetitionList></CompetitionList>
            </b-container>
        </section>
        <section class="faq">
            <b-container class="d-flex justify-content-center flex-column">
                <h5 class="faq-title">
                    Frequently Asked Question
                </h5>
                <div class="faq-content">
                    <Faq></Faq>
                </div>
            </b-container>
        </section>
    </div>
</template>

<script>
    import Faq from '@/components/Landing/Faq.vue';
    import CompetitionList from '@/components/Landing/CompetitionList.vue';

    export default {
        name: 'compe',
        components: {
            Faq,
            CompetitionList
        }
    };

</script>

<style scoped>
    *{
        transition: .3s ease-in-out !important;
    }

    .header{
        padding-top: 130px;
        min-height: 65vh;
        background-image: linear-gradient(135deg, #BF5888, #EFA0C9);
        margin-bottom: 100px;
    }

    .header-title{
        color: white !important;
        font-size: 80px;
        font-weight: 700;
    }

    .header-subtitle{
        color: white;
        max-width: 80%;
        margin-top: -30px;
        font-size: 20px;
    }

    .header-button{
        background-image: linear-gradient(90deg, #F6068B, #C9213D) !important;
        margin-top: -40px;
        border-radius: 10px;
        color: white;
        border: none;
        font-size: 22px;
    }

    .header-button:hover{
        color: white;
        font-size: 25px;
    }

    .faq{
        margin-top: 20px;
        margin-bottom: 100px;
    }

    .faq-title{
        font-weight: 600;
        margin-bottom: 10px;
    }

    .competition-list{
        background-image: linear-gradient(90deg, #E750A4, #FC9ED2);
    }

</style>
