<template>
    <div class="notfound d-flex align-items-center">
        <b-container>
            <b-row>
                <b-col cols="12" lg="6" class="d-flex justify-content-center notfound-image-wrapper">
                    <img class="notfound-image" src="@/assets/404.png"/>
                </b-col>
                <b-col cols="12" lg="6" class="d-flex justify-content-center flex-column">
                    <h1 class="notfound-title">Maaf, halaman yang anda cari tidak dapat ditemukan</h1>
                    <b-button class="notfound-button" variant="info" to="/">Home</b-button>
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

.notfound-title{
    color: #707070;
    text-align: left;
}

.notfound-image{
    width: 400px;
}

.notfound-button{
    width: 150px;
    background: #576AAC;
    color: white;
    border: 1px solid #576AAC;
    border-radius: 10px;
    font-size: 20px;
    margin-top: 20px;
}

.notfound-button:hover{
    color: #576AAC;
    background: white;
    border: 1px solid #576AAC;
}

@media (max-width: 991.98px){
    .notfound-title{
        text-align: center;
    }

    .notfound-button{
        margin-left: auto;
        margin-right: auto;
    }

    .notfound-image{
        width: 300px;
    }
}

@media(max-width: 767.98px){
    .notfound-image{
        width: 200px;
    }
}

</style>