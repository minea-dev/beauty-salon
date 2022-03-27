<template>
  <header>
    <nav class="header">
      <router-link :to="{name: 'Home'}"><img src="../assets/images/logo.png" alt="Saharayas Beauty Experiencie"></router-link>
      <a href="#" class="header__menu hide-for-desktop" @click.prevent="openHam" :class="{'open' : open}">
          <span></span>
          <span></span>
          <span></span>
      </a>
      <div :class="{'header__links' : links, 'hide-for-tablet' : links,'menu' : menu}">
        <router-link :to="{name: 'Home'}">Inicio</router-link>
        <router-link :to="{name: 'Treatments'}">Tratamientos</router-link>
        <router-link :to="{name: 'Services'}">Servicios</router-link>
        <router-link :to="{name: 'Contact'}">Contacto</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
 name: 'NavigationComponent',
 data() {
    return {
      open: false,
      links: true,
      menu: false
    }
  },
 methods: {
   // Transform navs in menu en X
   openHam: function() {
     if (this.open === true) {
      this.open = false
      this.links = true
      this.menu = false
     } else {
       this.open = true;
       this.links = false
      this.menu = true
     }
   }
 }
};
</script>
