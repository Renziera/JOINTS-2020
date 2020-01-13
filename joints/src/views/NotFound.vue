<template>
    <div class="notfound d-flex align-items-center">
        <b-container>
            <b-row>
                <b-col cols="12" lg="6" class="d-flex justify-content-center notfound-image-wrapper">
                    <img class="notfound-image" src="@/assets/404.png"/>
                </b-col>
                <b-col cols="12" lg="6" class="d-flex justify-content-center flex-column">
                    <h1 class="notfound-title text-left">Maaf, halaman yang anda cari tidak ditemukan</h1>
                    <b-button class="notfound-button" variant="success" to="/">Home</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
    name: 'NotFound', }
</script> 


<style scoped>
.notfound{
    height: 100vh;
}

.notfound-image{
    width: 400px;
}

.notfound-button{
    width: 100px;
}

</style>