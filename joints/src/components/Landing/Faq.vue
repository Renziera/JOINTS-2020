<template>
    <div class="faq-component">
        <div role="tablist" v-if="accessFrom == 'pcs'">
            <b-card v-for="(answer, index) in answerPCS" :key="index" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-pcs'"
                        variant="light"
                        class="btn-accordion d-flex competition"
                    >
                        <span class="btn-text">{{ questionPCS[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-pcs'"
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
        <div role="tablist" v-if="accessFrom == 'ctf'">
            <b-card v-for="(answer, index) in answerCTF" :key="index" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-ctf'"
                        variant="light"
                        class="btn-accordion d-flex competition"
                    >
                        <span class="btn-text">{{ questionCTF[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-ctf'"
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
        <div role="tablist" v-if="accessFrom == 'dm'">
            <b-card v-for="(answer, index) in answerDM" :key="index" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-dm'"
                        variant="light"
                        class="btn-accordion d-flex competition"
                    >
                        <span class="btn-text">{{ questionDM[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-dm'"
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
        <div role="tablist" v-if="accessFrom == 'ux'">
            <b-card v-for="(answer, index) in answerUX" :key="index" no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button
                        block
                        href="#"
                        v-b-toggle="'accordion-' + index + '-ux'"
                        variant="light"
                        class="btn-accordion d-flex competition"
                    >
                        <span class="btn-text">{{ questionUX[index] }}</span>
                        <span class="btn-icon">V</span>
                    </b-button>
                </b-card-header>
                <b-collapse
                    :id="'accordion-' + index + '-ux'"
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
            <b-card v-for="(answer, index) in answerCamp" :key="index" no-body class="mb-1">
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
            questionPCS: [
                'Apa itu kompetisi Programming Competition Session (PCS) JOINTS 2020?',
                'Siapa yang dapat menjadi peserta Kompetisi PCS JOINTS 2020?',
                'Apa saja materi yang akan dilombakan?',
                'Bahasa pemrograman apa saja yang dapat digunakan?',
                'Apa saja tahap kompetisi PCS JOINTS 2020?',
                'Berapa peserta yang lolos ke tahap final?',
                'Di mana saya dapat mendapatkan informasi kompetisi PCS JOINTS 2020?'
            ],
            answerPCS: [
                'Programming Competition Session (PCS) adalah kompetisi programming yang dikhususkan bagi pelajar SMP-SMA yang dapat dijadikan sebagai ajang persiapan diri untuk mengikuti Olimpiade Sains Nasional (OSN) Bidang Komputer/Informatika.',
                'Peserta merupakan tim yang terdiri dari siswa SMP-SMA/sederajat di Indonesia. Setiap tim terdiri dari 1-3 orang yang berasal dari sekolah yang sama.',
                'PCS memiliki materi lomba berupa logika dimana akan menguji kemampuan peserta dalam menyelesaikan permasalahan dalam bentuk soal cerita. Selain itu, ada pemrograman yang akan menguji kemampuan dalam menyelesaikan program komputer untuk memecahkan permasalahan yang diberikan.',
                'Pascal, C/C++,  Java, dan Phyton.',
                'Terdapat 4 tahapan kompetisi yang harus dilalui peserta, yakni warm up contest, penyisihan, semifinal, dan final.',
                'Akan ada 20 tim yang lolos ke tahap semifinal, kemudian yang akan lolos ke tahap final terdiri dari 10 tim terbaik dari tahap semifinal.',
                'Segala informasi, ketentuan, serta Guidebook PCS JOINTS 2020 dapat diakses melalui website official JOINTS 2020 di joints.id, serta apabila ada hal yang ingin ditanyakan dapat menghubungi narahubung yang tertera dalam Guidebook. Serta jangan lupa untuk terus memantau akun media sosial JOINTS 2020.'
            ],
            questionCTF: [
                'Apa itu kompetisi Capture the Flag (CTF)?',
                'Siapa saja yang dapat menjadi peserta CTF JOINTS 2020?',
                'Apa saja materi yang akan dilombakan?',
                'Apa saja tahap kompetisi CTF JOINTS 2020?',
                'Berapa peserta yang akan lolos ke tahap final?',
                'Di mana saya dapat mendapatkan informasi kompetisi CTF JOINTS 2020?'
            ],
            answerCTF: [
                'Capture the Flag adalah kompetisi keamanan siber yang diselenggarakan untuk pelajar SMA/sederajat atau mahasiswa di seluruh Indonesia.',
                'Setiap peserta merupakan siswa dari SMA/sederajat atau mahasiswa aktif dari universitas yang terdaftar di Indonesia. Setiap peserta mendaftar dalam tim yang terdiri dari 2-3 orang yang berasal dari sekolah atau universitas yang sama.',
                'Materi yang akan dilombakan berupa Binary Exploitation, Cryptography, Forensic, Reverse Engineering, dan Web Exploitation.',
                'Terdapat 2 tahapan kompetisi yang harus dilalui peserta, yakni penyisihan dan final.',
                'Peserta yang lolos dari tahap penyisihan ke babak final adalah 12 tim yang terdiri dari minimal 3 tim terbaik tingkat SMA/sederajat dan 9 tim terbaik tingkat universitas.',
                'Segala informasi, ketentuan, serta Guidebook CTF JOINTS 2020 dapat diakses melalui website official JOINTS 2020 di joints.id, serta apabila ada hal yang ingin ditanyakan dapat menghubungi narahubung yang tertera dalam Guidebook. Serta jangan lupa untuk terus memantau akun media sosial JOINTS 2020.'
            ],
            questionDM: [
                'Apa itu kompetisi Data Mining?',
                'Siapa saja yang dapat menjadi peserta Data Mining JOINTS 2020?',
                'Apa saja materi yang dilombakan?',
                'Berapa tahap kompetisi yang dimiliki Data Mining JOINTS 2020?',
                'Berapa peserta yang akan lolos ke babak final?',
                'Di mana saya dapat mendapatkan informasi kompetisi Data Mining JOINTS 2020?'
            ],
            answerDM: [
                'Data mining berfokus pada pengolahan data mentah (raw data) dengan cara menemukan pola menarik atau informasi dengan menggunakan metode tertentu yang kemudian divisualisasikan sehingga dapat digunakan sebagai solusi atau pengetahuan lebih lanjut dari sebuah permasalahan data.',
                'Peserta kompetisi Data Mining JOINTS 2020 merupakan mahasiswa aktif dari universitas yang terdaftar di Indonesia. Peserta mendaftar dalam tim yang terdiri dari 2-3 orang yang berasal dari universitas yang sama.',
                'Materi yang akan dilombakan berupa prediksi dataset, makalah, serta presentasi.',
                'Terdapat 2 tahapan kompetisi yang harus dilalui peserta, yakni penyisihan dan final.',
                'Peserta yang lolos ke tahap final adalah 10 tim terbaik dari babak penyisihan.',
                'Segala informasi, ketentuan, serta Guidebook Data Mining JOINTS 2020 dapat diakses melalui website official JOINTS 2020 di joints.id, serta apabila ada hal yang ingin ditanyakan dapat menghubungi narahubung yang tertera dalam Guidebook. Serta jangan lupa untuk terus memantau akun media sosial JOINTS 2020.'
            ],
            questionUX: [
                'Apa itu UX Design Competition?',
                'Siapa saja yang dapat menjadi peserta UX Design Competition JOINTS 2020?',
                'Berapa tahap yang dimiliki UX Design Competition JOINTS 2020?',
                'Berapa peserta yang akan lolos ke tahap final?',
                'Di mana saya dapat mendapatkan informasi UX Design Competition JOINTS 2020?'
            ],
            answerUX: [
                'UX Design Competition adalah kompetisi yang berfokus pada pembuatan desain pengalaman pengguna dari suatu aplikasi berbasis website maupun mobile yang mengutamakan pengalaman, kenyamanan, kepuasan, dan efisiensi saat pengguna menggunakan aplikasi tersebut.',
                'Peserta merupakan mahasiswa aktif dari universitas yang terdaftar di Indonesia. Setiap peserta mendaftar dalam tim yang terdiri dari 1-3 orang yang berasal dari universitas yang sama.',
                'Terdapat 2 tahapan kompetisi yang harus dilalui peserta, yakni penyisihan dan final. Pada tahap penyisihan, peserta mengumpulkan proposal dan video yang menjelaskan desain UX yang dibuat. Kemudian pada tahap final, peserta akan mempresentasikan karya berupa presentasi dan prototipe yang dibuat.',
                'Peserta yang lolos ke tahap final adalah 10 tim terbaik dari babak penyisihan.',
                'Segala informasi, ketentuan, serta Guidebook UX Design Competition JOINTS 2020 dapat diakses melalui website official JOINTS 2020 di joints.id, serta apabila ada hal yang ingin ditanyakan dapat menghubungi narahubung yang tertera dalam Guidebook. Serta jangan lupa untuk terus memantau akun media sosial JOINTS 2020.'
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
