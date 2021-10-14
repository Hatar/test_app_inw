<template>
  <div>
    <!-- Header Component -->
    <Header />
    <!-- Card Component [ La durée des ssion ] -->
    <Card
      :title="'La durée des session'"
      :icone="require('~/assets/image/09-timer.png')"
      :type="'config-session'"
      :action="{
        title: 'Enregister',
        fn: null,
      }"
    >
      <div class="card my-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <span class="head-title">Type de session</span>
              <span class="head-title">Durée</span>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
               <span class="title-list-group"> Connexion sans compte</span>
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="title-list-group">Connexion avec compte</span>
                
                <span class="d-block fw-bold option-selected">utilisateur qui n’a pas demandé de garder sa session ouverte</span>
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="title-list-group"> Connexion avec compte</span>
                <span class="d-block fw-bold option-selected">utilisateur a demandé de garder sa session ouverte</span>
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
    <!-- Card Component [ Règles de blocage ] -->
    <Card
      :title="'Règles de blocage'"
      :icone="require('~/assets/image/banned-sign.png')"
      :type="'config-session'"
      :action="{
        title: 'Enregister',
        fn: null,
      }"
    >
      <div class="card my-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <span class="head-title">Règles de blocage</span>
              <span class="head-title">Durée</span>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
               <span class="title-list-group"> Tentatives de connexion</span>
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="title-list-group">L’intervalle (en secondes)</span>                
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="title-list-group">La durée de blocage du compte</span>
              </div>
              <div>
                <BaseSelect :items="items"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:[]
    }
  }
};
</script>
<style scoped>
.head-title{
    font-size: 16px;
    font-weight: 500;
    color: #404040;
}
.title-list-group{
    font-size: 15px;
    color: var(--thirdColor);
}
.option-selected{
    color: #646262;
    font-weight: 500;
    margin: 4px 0;
    font-size: 14px;
    letter-spacing: -0.6px;
}
</style>