<template>
  <div class="container py-3">
    <!-- Start Card Dynamic -->
    <div class="card">
      <div class="card-header py-3">
        <div class="d-flex flex-row justify-content-start align-items-center">
          <div>
            <img :src="icone" alt="" />
          </div>
          <div v-if="routeName == 'creation-comptes-inwi'" class="mx-4">
            <div>
              <span id="create-account" class="create-account"  @click="activeCreateAccount">{{ links[0] }}</span> / 
              <span id="temp-pswd"  :class="{'linkActive':!isActive,'temp-pswd':isActive}" @click="activePswTemp">{{ links[1] }}</span> 
            </div>
          </div>
          <div v-else class="mx-4">
            <h5 class="header-title">{{ title  }}</h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
    <!-- Start Button Dynamic Dynamic -->
    <div v-if="action" class="d-flex flex-row justify-content-end">
      <input
        type="submit"
        class="inputSubmit my-3"
        :value="action.title"
        @click="action.fn"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icone: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: () => [],
    },
    action: {
      type: Object,
      default: null,
    },
  },
  data(){
    return {
      isActive  : this.$store?.state.isActive,
      routeName : this.$route?.name
    }
  },
  methods:{
    activeCreateAccount(){
      return this.$store?.commit('setIsActive',true)
    },
    activePswTemp(){
      return this.$store?.commit('setIsActive',false)
    },
  }
};
</script>

<style scoped>
input{
    color: #FFF !important;
}
.search-user > div:first-child {
  padding: 0 10px;
}
.card-header .header-title {
  margin: 0;
  padding: 0;
  color: var(--thirdColor);
  font-size: 16px;
  letter-spacing: 0.4px;
  font-weight: 600;
}
.inputSubmit {
  width: 200px;
  padding: 10px;
  font-size: 17px;
  letter-spacing: 0.5px;
  font-weight: 400;
  border-radius: 5px;
  color: #fff;
  border: 1px solid var(--secondColor);
  background: var(--secondColor);
}

.valid {
  background-color: var(--secondColor);
  color: #fff;
}
.linkActive{
  color: var(--mainColor);
}
.temp-pswd{
  color:#9b9b9b
}
</style>
