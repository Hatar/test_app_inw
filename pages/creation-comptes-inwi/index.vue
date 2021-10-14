<template>
  <div>
    <!-- Header Component -->
    <Header />
    <!-- Card Component -->
    <Card
      :title="'Création de compte / Mot de passe temporaire'"
      :links ="['Création de compte','Mot de passe temporaire']"
      :icone="require('~/assets/image/add-user.png')"
      :type="'settingsPage'"
      :action="{
        title: isActive ? 'Suivant' : 'Créer un compte',
        fn: null,
      }"
    >
      <div class="box-settings">

        <div v-if="isActive">
          <!-- add component input here  -->
          <div class="d-flex flex-column" style="width: 22rem">
            <div class="mb-3">
              <BaseInputPhone :placeholder="'06 00 00 00 23'" v-model="phone" :label="'Numéro de la ligne inwi'"/>
            </div>
            <div class="selectCompte">
              <BaseSelect :items="items" :label="'Type de compte'" />
            </div>
          </div>
        </div>
        <div v-else>
          <!-- add component input here  -->
          <div class="d-flex flex-column" style="width: 22rem">
            <div class="mb-3">
              <BaseInputPhone :placeholder="'06 00 00 00 23'" v-model="phone" :label="'Numéro de la ligne inwi'"/>
            </div>
            <div class="selectCompte">
              <BaseSelect :items="items" :label="'Type de compte'" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      items: [],
    };
  },
  computed:{
    isActive(){
      return this.$store?.state.isActive
    }
  }
};
</script>
<style scoped>
.box-settings {
  background-color: #eeeeee;
  width: 100%;
  height: auto;
  padding: 25px 15px;
}
.box-settings .btn-generate-pwd {
  background-color: var(--fouthColor);
  color: #fff !important;
  padding: 10px;
  border-radius: 7px;
  font-size: 15px;
  letter-spacing: 0.4px;
  box-shadow: none;
}
.box-settings .btn-generate-pwd i {
  font-size: 17px;
  font-weight: 500;
}

@media (max-width: 480px) {
  .box-settings {
    height: 40vh;
  }
  .btn-generate-pwd {
    margin: 15px auto;
  }
}
/* Custome Style Select Box */
.selectCompte >>> .select-dropdown{
  float: none !important;
  width: 100%;
  background-color: #FFF;
  border-radius: 5px;
  height: 48px;
  line-height: 33px;
}
</style>
