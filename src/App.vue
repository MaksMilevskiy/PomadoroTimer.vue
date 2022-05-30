<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style>
* {
    margin: 0;
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    background: url('images/tomatoes_bg.jpg');
    background-position: center;
    background-size: cover;
}

a {
    text-decoration: none;
}

#app {
    margin: 10vh 10vw;
    
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

@media (max-width: 108em) {
    html {
        font-size: 9px;
    }
}

@media (max-width: 105em) {
    html {
        font-size: 8.75px;
    }
}

@media (max-width: 91.5em) {
    html {
        font-size: 7.9px;
    }
}

@media (max-width: 91em) {
    html {
        font-size: 8.4px;
    }
}

@media (max-width: 90em) {
    html {
        font-size: 7.9px;
    }
}

@media (max-width: 80em) {
    html {
        font-size: 7.2px;
    }
}

@media (max-width: 72em) {
    html {
        font-size: 6.5px;
    }
}

@media (max-width: 64em) {
    html {
        font-size: 5.5px;
    }
}

@media (max-width: 48em) {
    html {
        font-size: 8px;
    }
}

@media (max-width: 44em) {
    html {
        font-size: 7px;
    }
}

@media (max-width: 38em) {
    html {
        font-size: 6px;
    }
}

@media (max-width: 34em) {
    html {
        font-size: 7px;
    }
}

@media (max-width: 30em) {
    html {
        font-size: 6px;
    }
}

@media (max-width: 26em) {
    html {
        font-size: 4.5px;
    }
}

@media (max-width: 21em) {
    html {
        font-size: 4.4px;
    }
}
</style>
