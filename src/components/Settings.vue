<template>
  <div class="main">
    <div class="main__content">
      <div class="content__block">
        <p>Виберіть кількість годин, впродовж яких плануєте працювати</p>
        <p>(По їх завершенню таймер зупиниться)</p>
        <select class="select" @change="store.setWorkingHours($event.target.value)">
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
      <div class="buttons">
        <router-link to="/timer" class="link">Почати</router-link>
        <router-link to="/" class="link">На головну</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTimerStore } from '../stores/timer';

const store = useTimerStore();
</script>

<style scoped>
.main {
  position: absolute;
  top: 50;
  left: 50;
  background-color: rgba(0, 0, 0, 0.4);
  width: 80vw;
  min-height: 80vh;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__content {
  background-color: rgba(255, 255, 255, 1);
  width: 70vw;
  min-height: 70vh;
  margin: 2rem;
  padding: 1rem;
  border-radius: 3rem;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.content__block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.content__block p {
  margin-top: 2rem;
  font-family: "El Messiri", sans-serif;
  font-size: 3.2rem;
  text-align: center;
}

.content__block p:nth-child(2) {
  margin: 0;
  font-size: 2.5rem;
  font-family: "El Messiri", sans-serif, cursive;
}

.select,
.select option {
  margin-top: 3rem;
  min-width: 100%;
  min-height: 6rem;
  border-radius: 3rem;
  font-family: "El Messiri", sans-serif;
  font-size: 3rem;
  padding-left: 3rem;
}

.buttons {
  display: flex;
  justify-content: center;
}

.link {
  font-family: "El Messiri", sans-serif;
  font-size: 4rem;
  color: black;
  background-color: rgba(165, 165, 165, 0.8);
  padding: 1rem 2rem;
  border-radius: 3rem;
  border: 0;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.link:hover {
  background-color: rgba(201, 71, 35, 0.8);
}

@media (max-width: 28rem) {
  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
  .main {
    width: 80vw;
    min-height: 60vh;
  }
  .main__content {
    min-height: 50vh;
  }

  .buttons {
    text-align: center;
    padding: 1rem;
  }
}

@media (max-width: 32rem) {
  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
  .main {
    width: 80vw;
    min-height: 60vh;
  }
  .main__content {
    min-height: 50vh;
  }
}

@media (max-width: 42rem) {
  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
  .main {
    width: 80vw;
    min-height: 60vh;
  }
  .main__content {
    min-height: 50vh;
  }
}
@media (max-width: 76rem) {
  .buttons {
    margin-top: 2rem;
  }

  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
  .main {
    width: 80vw;
    min-height: 60vh;
  }
  .main__content {
    min-height: 50vh;
  }
}
</style>
