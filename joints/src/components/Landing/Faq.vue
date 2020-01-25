<template>
    <div class="faq-component">
        <div role="tablist" v-if="accessFrom == 'competition'">
            <b-card
                v-for="(answer, index) in answer"
                :key="index"
                no-body
                class="mb-1"
            >
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-competition'"
                        variant="light"
                        class="btn-accordion d-flex competition"
                    >
                        <span class="btn-text">{{ question[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-competition'"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{ answer }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
        <div role="tablist" v-if="accessFrom == 'camp'">
            <b-card
                v-for="(answer, index) in answerCamp"
                :key="index"
                no-body
                class="mb-1"
            >
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-camp'"
                        variant="danger"
                        class="btn-accordion d-flex camp"
                    >
                        <span class="btn-text">{{ questionCamp[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-camp'"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                >
                    <b-card-body>
                        <b-card-text>{{ answer }}</b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Faq',
    data() {
        return {
            question: [
                'Generate Lorem Ipsum placeholder text.',
                'Select the number of characters, words',
                'sentences or paragraphs, and hit generate!',
                'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan',
                'Sudah merupakan fakta bahwa seorang pembaca',
                'Ada banyak variasi tulisan Lorem Ipsum yang tersedia'
            ],
            answer: [
                'Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini di reproduksi kembali di bawah ini untuk mereka yang tertarik.',
                'Donasi: Jika anda sering menggunakan situs ini dan ingin membantu menjaganya agar tetap berada di internet, mohon pertimbangkan untuk menyumbang sejumlah kecil dana guna membantu membayar tagihan hosting dan bandwith',
                'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, ',
                'Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum,',
                'Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang sebenarnya di internet.',
                'Terjemahan: Bisakah anda membantu menerjemahkan situs ini dalam bahasa asing? Email kami jika anda bisa membantu.'
            ],
            questionCamp: [
                'Generate Lorem Ipsum placeholder text.',
                'Select the number of characters, words',
                'sentences or paragraphs, and hit generate!',
                'Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan',
                'Sudah merupakan fakta bahwa seorang pembaca',
                'Ada banyak variasi tulisan Lorem Ipsum yang tersedia'
            ],
            answerCamp: [
                'Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini di reproduksi kembali di bawah ini untuk mereka yang tertarik.',
                'Donasi: Jika anda sering menggunakan situs ini dan ingin membantu menjaganya agar tetap berada di internet, mohon pertimbangkan untuk menyumbang sejumlah kecil dana guna membantu membayar tagihan hosting dan bandwith',
                'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, ',
                'Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum,',
                'Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang sebenarnya di internet.',
                'Terjemahan: Bisakah anda membantu menerjemahkan situs ini dalam bahasa asing? Email kami jika anda bisa membantu.'
            ]
        };
    },
    props: {
        accessFrom: String,
        variant: String
    }
};
</script>

<style scoped>
.btn-accordion.competition {
    background-image: linear-gradient(90deg, #a729a4, #e273b1);
    font-size: 20px;
    font-weight: 500;
    color: white;
}

.btn-accordion.camp {
    background-image: linear-gradient(90deg, #a23475, #e273b1);
    font-size: 20px;
    font-weight: 500;
    color: white;
}

.card.mb-1 {
    background: white;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px !important;
}

.card-header {
    background: white;
    border: none;
    padding: 0 !important;
}

.card-text {
    text-align: left;
}

.btn-icon {
    font-size: 20px;
    margin-left: auto;
}

.btn-text {
    margin-right: auto;
    margin-left: 10px;
}

.btn-accordion:focus,
.btn-accordion:active,
.btn-accordion:focus:active,
.btn-accordion:hover {
    outline: none !important;
    box-shadow: none;
    color: white;
}

@media (max-width: 991.98px) {
    .btn-icon {
        display: none;
    }
}
</style>
