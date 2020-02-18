<template>
    <div>
        <section class="timeline" :id="accessFrom">
            <b-container>
                <div class="d-flex justify-content-center align-items-center flex-column">
                    <h3 class="timeline-title">{{ title }}</h3>
                    <template>
                        <v-timeline v-if="accessFrom == 'PCS'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelinePCS"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'CTF'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineCTF"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'DM'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineDM"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'UX'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineUX"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'GL'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineGL"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'Talk'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineTalk"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>

                        <v-timeline v-if="accessFrom == 'Camp'">
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelineCamp"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">
                                        {{
                                        timeline.date
                                        }}
                                    </span>
                                    <div class="timeline-desc">{{ timeline.desc }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </template>
                </div>
            </b-container>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timelinePCS: [
                {
                    date: '4 Februari 2020',
                    desc: 'Registrasi Dibuka'
                },
                {
                    date: '22 Maret 2020',
                    desc: 'Registrasi Ditutup'
                },
                {
                    date: '28 Maret 2020',
                    desc: 'Warm Up'
                },
                {
                    date: '29 Maret 2020',
                    desc: 'Penyisihan'
                },
                {
                    date: '4 April 2020',
                    desc: 'Pengumuman Semifinalis'
                },
                {
                    date: '18 April 2020',
                    desc: 'Technical Meeting Semifinalis'
                },
                {
                    date: '18 April 2020',
                    desc: 'Semifinal'
                },
                {
                    date: '19 April 2020',
                    desc: 'Final'
                }
            ],
            timelineCTF: [
                {
                    date: '4 Februari 2020',
                    desc: 'Registrasi Dibuka'
                },
                {
                    date: '22 Maret 2020',
                    desc: 'Registrasi Ditutup'
                },
                {
                    date: '28 Maret 2020',
                    desc: 'Warm Up'
                },
                {
                    date: '29 Maret 2020',
                    desc: 'Penyisihan'
                },
                {
                    date: '4 April 2020',
                    desc: 'Pengumuman Finalis'
                },
                {
                    date: '19 April 2020',
                    desc: 'Final'
                }
            ],
            timelineDM: [
                {
                    date: '4 Februari 2020',
                    desc: 'Registrasi Dibuka'
                },
                {
                    date: '20 Maret 2020',
                    desc: 'Registrasi Ditutup'
                },
                {
                    date: '23 Maret 2020',
                    desc: 'Pembagian Dataset dan Soal (Babak Penyisihan)'
                },
                {
                    date: '23-29 Maret 2020',
                    desc: 'Submisi dan Pengumpulan Makalah (Babak Penyisihan)'
                },
                {
                    date: '4 April 2020',
                    desc: 'Pengumuman Finalis'
                },
                {
                    date: '18 April 2020',
                    desc: 'Pengerjaan Dataset dan Soal (Babak Final)'
                },
                {
                    date: '19 April 2020',
                    desc: 'Presentasi Hasil Pengerjaan (Babak Final)'
                }
            ],
            timelineUX: [
                {
                    date: '4 Februari 2020',
                    desc: 'Registrasi Dibuka'
                },
                {
                    date: '22 Maret 2020',
                    desc:
                        'Registrasi Ditutup dan Batas Pengumpulan Proposal + Video'
                },
                {
                    date: '4 April 2020',
                    desc: 'Pengumuman Finalis'
                },
                {
                    date: '5-17 April 2020',
                    desc:
                        'Finishing Desain UX, Pembuatan Prototype, dan Penyusunan Bahan Presentasi oleh Finalis'
                },
                {
                    date: '17 April 2020',
                    desc: 'Pengumpulan Bahan Presentasi oleh Finalis'
                },
                {
                    date: '19 April 2020',
                    desc: 'Presentasi Hasil Pengerjaan (Babak Final)'
                }
            ],
            timelineGL: [
                {
                    date: '26 Januari 2020',
                    desc: 'Open Registration Grand Launching'
                },
                {
                    date: '26 Februari 2020',
                    desc: 'Close Registration Grand Launching'
                },
                {
                    date: '29 Februari 2020',
                    desc: 'D-Day Grand Launching'
                }
            ],
            timelineTalk: [
                {
                    date: 'TBA',
                    desc: 'Open Registrasi IT Day'
                },
                {
                    date: '15 Maret 2020',
                    desc: 'Close Registrasi IT DAY'
                },
                {
                    date: '18 April 2020',
                    desc: 'IT Day day-1'
                },
                {
                    date: '19 April 2020',
                    desc: 'IT Day day-2'
                }
            ],
            timelineCamp: [
                {
                    date: '31 Januari 2020',
                    desc: 'Buka Pendaftaran Joints Camp'
                },
                {
                    date: '21 Februari 2020',
                    desc: 'Tutup Pendaftaran Joints Camp'
                },
                {
                    date: '22 Februari 2020',
                    desc: 'Pengumuman Seleksi Pertama'
                },
                {
                    date: '23 Februari 2020',
                    desc: 'Tahap Seleksi Technical Test Dimulai'
                },
                {
                    date: '1 Maret 2020',
                    desc: 'Tahap Seleksi Technical Test Selesai'
                },
                {
                    date: '5 Maret 2020',
                    desc: 'Pengumuman Final Peserta JointsCamp'
                },
                {
                    date: '8 Maret 2020',
                    desc: 'Technical Meeting Peserta JointsCamp'
                },
                {
                    date: '14 Maret 2020',
                    desc: 'JointsCamp Week 1 (Frontend)'
                },
                {
                    date: '21 Maret 2020',
                    desc: 'JointsCamp Week 2 (Frontend)'
                },
                {
                    date: '28 Maret 2020',
                    desc: 'JointsCamp Week 3 (Backend)'
                },
                {
                    date: '4 April 2020',
                    desc: 'JointsCamp Week 4 (Backend)'
                }
            ]
        };
    },
    name: 'timeline',
    props: {
        accessFrom: String,
        title: String
    }
};
</script>

<style scoped>
.timeline .timeline-title {
    color: #707070;
    margin-bottom: 30px;
}

.timeline .v-timeline {
    width: 100%;
}

.timeline .theme--light.v-timeline::before {
    background: #707070 !important;
}

.timeline .timeline-date {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
}

.timeline .timeline-desc {
    color: #707070;
    font-weight: 600;
}

@media (max-width: 991.98px) {
    #PCS,
    #CTF,
    #DM,
    #UX {
        padding-top: 50px;
        padding-bottom: 50px;
    }
}
</style>

<style>
.timeline .v-timeline-item__inner-dot {
    border: 2px solid #707070 !important;
}

.timeline .v-timeline-item__inner-dot:hover {
    background: #707070 !important;
}
</style>
