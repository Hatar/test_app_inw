<template>
  <div>
    <!-- Header Component -->
    <Header />
    <!-- Card Component -->
    <Card
      :title="'Activation/désactivation langue'"
      :icone="require('~/assets/image/language.png')"
      :type="'languePage'"
    >
      <div class="card my-4">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <span>Langue</span>
              <span>Statue</span>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between">
              <div>
                Francais
              </div>
              <div>
                <div class="switch">
                  <input 
                    type="checkbox" 
                    id="toggleAllFR"  
                    @change="ActiveLang('lang_fr')"  
                    v-model="checked_1" 
                    :checked="checked_1" 
                  />
                  <label class="labe1" for="toggleAllFR"></label>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item list-lang">
            <div class="d-flex justify-content-between">
              <div>
                Arabe
              </div>
              <div>
                <div>
                  <div class="switch">
                    <input
                      @change="ActiveLang('lang_ar')" 
                      type="checkbox"
                      id="toggleAllAR"
                      v-model="checked_2"
                      :checked="!checked_1"
                    />
                    <label for="toggleAllAR"></label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  </div>
</template>
<script>
import message from '../../notification/success.json'
export default {
  data() {
    return {
      checked_1: false,
      checked_2: false,
      languages: [
        {
          id: 1,
          active_lang: true,
          creation_date: null,
          description:
            "Veuillez choisir votre langue préférée pour pouvoir continuer",
          label: "Français",
          language_id: "lang_fr",
          language_tag: "fr",
          title: "Langue préférée",
          modification_date: null,
        },
          {
          id: 2,
          active_lang: true,
          creation_date: null,
          description: "الرجاء اختيار لغتك المفضلة لتتمكن من المتابعة",
          label: "Arabe",
          language_id: "lang_ar",
          language_tag: "ar",
          title: "اللغة المفضلة",
          modification_date: null,
        },
      ],
    };
  },
  methods: {
    ActiveLang(value){
      let langObject =this.languages.find(lang =>lang.language_id == value)
      let data  = {
        "active": value && value === 'lang_fr' ?  this.checked_1 : this.checked_2,
        "description":  langObject?.description,
        "label": langObject?.label,
        "languageId":langObject?.language_id,
        "tag": langObject?.language_tag,
        "title": langObject?.title
      }
      this.$store?.dispatch('updateLangue',data).then(res =>{
        if(res?.status === 200){
          this.$toast.success(message[res.response.data.message], { position: "top-right"});
        }
      }).catch(error => {
        this.$toast.error(message[error.response.data.error], { position: "top-right"})
        this.$router.push({ path: '/langue/'})
      });
    },
  }
};
</script>
<style scoped>
.list-group > .list-group-item:first-child {
  color: var(--thirdColor);
  letter-spacing: 0.4px;
  font-weight: 600;
}
.list-lang {
  font-weight: 200;
  font-size: 16px;
}

.switch {
  display: inline-flex;
  margin: 0 10px;
}
.switch input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}
.switch input[type="checkbox"]:checked + label {
  background: var(--mainColor);
}
.switch input[type="checkbox"]:checked + label::after {
  left: calc(100% - 4px);
  transform: translateX(-100%);
}
.switch label {
  cursor: pointer;
  width: 40px;
  height: 20px;
  background: #dddddd;
  display: block;
  border-radius: 24px;
  position: relative;
  margin: -14px;
}
.switch label::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 4px;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 16px;
  transition: 0.3s;
}
</style>
