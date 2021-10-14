<template>
  <div>
    <!-- Header Component -->
    <Header />
    <!-- Search Phone -->
    <div class="container">
        <div class="search-phone d-flex justify-content-end align-items-center flex-gap">
            <div>
                <label>Rechecher utilisateur</label>
            </div>
            <div>
                <BaseInputPhone
                    v-model="phone"
                />
            </div>
        </div>
    </div>
    <!-- Card Component -->
    <Card 
        :title="'Réinitialisation du mot de passe'"
        :icone="require('~/assets/image/password.png')"
        :type="'settingsPage'"
        :action="{
            title: 'Enregister',
            fn: null,
        }"
    >
        <div class="box-settings">
            <!-- Button Generate Password -->
            <div class="d-flex justify-content-end">
                <button class="btn btn-sm btn-generate-pwd">
                    Generate nouveau mot de passe
                    <i class="fa fa-refresh mx-3" aria-hidden="true"></i>
                </button>
            </div>
            <!-- add component input here  -->
            <div class="d-flex flex-column" style="width:18rem">
                <div>
                    <BaseInput
                        class="mb-4 input-group-lg"
                        type="text"
                        :placeholder="'Mot de passe temporaire'"
                        :label="'Mot de passe temporaire'"
                        v-model="password"
                    />
                </div>
                <div>
                    <label class="my-1">Méthode de communication</label>
                    <select class="form-select form-select-lg" aria-label="Default select example">
                        <option value="1">SMS</option>
                    </select>
                </div>
            </div>
        </div>
    </Card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            password:"",
            phone:""
        }
    },
};
</script>
<style scoped>
.box-settings{
    background-color: #EEEEEE;
    width: 100%;
    height: auto;
    padding: 25px 15px;
}
.box-settings .btn-generate-pwd{
    background-color: var(--fouthColor);
    color: #FFF !important;
    padding: 10px;
    border-radius: 7px;
    font-size: 15px;
    letter-spacing: 0.4px;
    box-shadow: none;
}
.box-settings .btn-generate-pwd i{
    font-size: 17px;
    font-weight: 500;
}

@media (max-width:480px){
    .box-settings{
        height: 40vh;
    }
   .btn-generate-pwd{
       margin:15px auto;
   } 
}
</style>
