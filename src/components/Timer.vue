<template>
  <div class="app">
    <div class="wrapper">
      <div class="timer_wrapper">
        <div class="message">{{ message }}</div>
        <div class="timer" v-if="timeLeft">{{ minutes }}:{{ seconds }}</div>
      </div>
      <div class="buttons">
        <button v-if="isTimerActive" @click="reset">Скинути таймер</button>
        <button v-else @click="startTimer">Старт</button>
      </div>
    </div>
    <router-link to="/" class="to_main"> На головну </router-link>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  watchEffect,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useTimerStore } from "../stores/timer";

const store = useTimerStore();

const timeLeft = ref(25 * 60);
const minutes = computed(() =>
  Math.floor(timeLeft.value / 60)
    .toString()
    .padStart(2, 0)
);
const seconds = computed(() =>
  (timeLeft.value - minutes.value * 60).toString().padStart(2, 0)
);
const isTimerActive = ref(false);
const period = ref(0);
const message = ref("Почнемо?");

function startTimer() {
  period.value = 1;
  isTimerActive.value = true;
}

function reset() {
  isTimerActive.value = false;
}

watchEffect((onInvalidate) => {
  if (isTimerActive.value === true) {
    if (timeLeft.value > 0) {
      const timeout = setTimeout(() => {
        timeLeft.value--;
      }, 1000);
      onInvalidate(() => {
        clearTimeout(timeout);
      });
    } else {
      period.value++;
    }
  }
});

watch(period, (period) => {
  if ([1, 3, 5, 7].includes(period)) {
    timeLeft.value = 25 * 60;
    message.value = "Час працювати";
  } else if ([2, 4, 6].includes(period)) {
    timeLeft.value = 5 * 60;
    message.value = "Час відпочити";
  } else if (period === 8) {
    timeLeft.value = 30 * 60;
    message.value = "Велика пауза";
  } else {
    reset();
    store.substractHour();
  }
});

watch(
  () => store.workingHours,
  (hours) => {
    if (hours > 0) {
      setTimeout(() => {
        startTimer();
      }, 1000);
    } else {
      message.value = "На сьогодні все :)";
    }
  }
);

onMounted(() => {
  document.body.style = "background-image: none";
});

onBeforeUnmount(() => {
  document.body.style = 'background-image: url(images/"tomatoes_bg.jpg")';
});
</script>

<style scoped>
button {
  font-family: "El Messiri", sans-serif;
  font-size: 4vh;
  color: black;
  align-self: center;
  background-color: rgba(255, 255, 255, 1);
  padding: 0rem 1rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
}

a:hover,
button:hover {
  background-color: rgba(201, 71, 35, 1);
}

.app {
  height: 80vh;
  width: 80vw;
  background-image: url("../images/tomato.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.to_main {
  font-family: "El Messiri", sans-serif;
  font-size: 3vh;
  color: black;
  align-self: center;
  background-color: rgba(165, 165, 165, 0.8);
  padding: 0rem 2rem;
  border-radius: 3rem;
  position: absolute;
  left: 2rem;
  top: 2rem;
}

.timer_wrapper {
  border-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.message {
  margin: 2rem;
  font-family: "El Messiri", sans-serif;
  font-size: 6vh;
}

.timer {
  color: black;
  font-family: "Dancing Script";
  padding: 1rem;
  font-size: 10vh;
}

@media (max-width: 30em) {
  .wrapper {
    margin-top: 4rem;
  }
  .message {
    font-size: 6rem;
  }
  .timer {
    font-size: 7rem;
  }
  button {
    font-size: 5rem;
  }
  a:hover,
  button:hover {
    background-color: rgba(255, 255, 255, 1);
  }
}

@media (max-width: 50em) {
  .wrapper {
    margin-top: 3rem;
  }
  .message {
    font-size: 5rem;
  }
  .timer {
    font-size: 6rem;
  }
  button {
    font-size: 4rem;
  }
  a:hover,
  button:hover {
    background-color: rgba(255, 255, 255, 1);
  }
}
</style>
