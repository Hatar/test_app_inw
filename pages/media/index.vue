<template>
  <div>
    <!-- Header Component -->
    <Header />
    <!-- Card Component -->
    <Card 
        :title="'Mise à jour du lien du tutoriel Myinwi'"
        :icone="require('~/assets/image/video.png')"
        :type="'mediaPage'"
        :action="{
            title: 'Enregister',
            fn: null,
        }"
    >
        <div class="box-settings">
            <div class="row">
                <div class="col py-5"> 
                    <label for="lien">Lien du video</label>
                    <div class="input-group my-2 position-relative">
                        <span class="input-group-text" id="basic-addon1"><img src="~/assets/image/link.png" alt=""/></span>
                        <input type="text" class="form-control" placeholder="https://www.youtube.com/watch?v=0eWKkLBs254" aria-label="Username" aria-describedby="basic-addon1">
                        <button type="button" class="btn btn--primary btn--inside"><img src="~/assets/image/cancel.png" alt="" /></button>
                    </div>
                </div>
                <div class="col text-center">
                    <h3 class="title-video">Preview</h3>
                    <iframe
                        title="Preview"
                        src="https://www.youtube.com/embed/KcLfZOXUbmU"
                        allowfullscreen
                        >
                    </iframe>
                </div>
            </div>
        </div>
    </Card>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped> 
.box-settings{
    background-color: #EEEEEE;
    width: 100%;
    height: auto;
    padding: 25px 15px;
}
iframe{
    border-radius:10px;
    width:468px;
    height:259px
}
.title-video{
    font-size: 22px;
    margin: 10px 0;
    letter-spacing: 0.5px;
    font-weight: 500;
}
.input-group-text{
    background-color: #FFF;
}
.form-control{
    height: 50px;
    border-left: 0;
}
.btn--inside{
    position: absolute;
    right: 0;
    top: 0
}
</style>