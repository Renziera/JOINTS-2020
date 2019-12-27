<template>
    <div>
        <h1>Tab announcement</h1>
        <ul>
            <li
                v-for="announcement in announcements"
                v-bind:key="announcement.waktu.toString()"
            >
                {{ announcement.judul }}
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    data: () => {
        return {
            announcements: []
        };
    },
    mounted() {
        firebase
            .firestore()
            .collection('announcement')
            .orderBy('waktu', 'desc')
            .onSnapshot(snapshot => {
                this.announcements = [];
                snapshot.forEach(doc => this.announcements.push(doc.data()));
            });
    }
};
</script>

<style></style>
