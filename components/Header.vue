<template>
  <div>
    <nav v-for="(label,index) in labels.header" :key="index"   class="navbar navbar-expand-lg navbar-light mainBgColor mb-5">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Accueil }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Menu }} </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ label.Balance }} 
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- sub links -->
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               {{ label.Offres }}  
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- sub links -->
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Application }} </a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               {{ label.Services }}  
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- sub links -->
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Club_Inwi }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Compte_Selfceare }}</a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">{{ label.Assistance }} </a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ label.Administration }} 
              </a>
              <ul v-for="(sub_menu,j) in label.sub_menu_admin" :key="j"  class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" to=""> {{ sub_menu.Profile }}</nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" to=""> {{ sub_menu.Utilisateurs }}</nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" :to="`/creation-comptes-inwi`"> {{ sub_menu.Creation_compte_my_inwi }}</nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" to=""> {{ sub_menu.Messages }}</nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" to=""> {{ sub_menu.Enquête }} </nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" :to="`/langue`"> {{ sub_menu.Langue }} </nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" :to="`/media`"> {{ sub_menu.Media }} </nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" :to="`/configuration-session`"> {{ sub_menu.Configuration_des_sessions }} </nuxt-link>
                </li>
                <li class="text-dark">
                  <nuxt-link class="dropdown-item text-decoration-none" :to="`/settings`"> {{ sub_menu.Rénitialisation_passe  }}</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ label.Notifications }}   
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- sub links -->
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ label.Reporting }}   
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- sub links -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import label from '../label-pages/label.json'
export default {
  data: () => ({
    labels :label
  })
};
</script>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
}
.navbar-light .navbar-toggler {
  color: #fff;
  border: 1px solid #fff;
}
.navbar-nav .dropdown-menu{
  border-bottom: 4px solid var(--mainColor);
  border-radius: none;
}
.dropdown-item:focus, .dropdown-item:hover{
  background-color: #FFF;
  color: var(--mainColor) !important;
}
.dropdown-item{
  color: #818181;
  font-size: 14px;
}
</style>
