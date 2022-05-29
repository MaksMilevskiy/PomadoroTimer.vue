<template>
  <div class="main">
    <div class="main__header">Pomadoro</div>
    <div class="main__header-content">Як користуватись?</div>
    <div class="main__content">
      <p>
        Цей метод використовує таймер для того, щоб розбити роботу на
        25-хвилинні інтервали, розділені короткими перервами.
      </p>
      <p>
        Після 4х робочих інтервалів потрібно відпочити трішки більше, тому
        перерва триває 30 хвилин, після чого таймер перезапускається.
      </p>
      <p>
        Не рекомендується відволікатися на будь-які фактори під час робочого
        інтервалу. Якщо так сталося, краще перезапустити таймер і почати з
        початку.
      </p>
      <div class="buttons">
        <router-link to="/timer" class="link">Почати</router-link>
        <router-link to="/settings" class="link">Параметри</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: rgba(0, 0, 0, 0.4);
  width: 80vw;
  min-height: 80vh;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__header {
  font-family: "Dancing Script", cursive;
  font-size: 10rem;
  color: white;
  margin-top: 1.5rem;
}

.main__header-content {
  margin-top: 2rem;
  font-family: "El Messiri", sans-serif;
  color: white;
  font-size: 6rem;
  font-weight: 400;
  text-align: center;
}

.main__content {
  background-color: rgba(255, 255, 255, 1);
  width: 70%;
  min-height: 70%;
  margin-top: 2rem;
  border-radius: 3rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.main__content p {
  margin: 2rem;
  font-family: "El Messiri", sans-serif;
  font-size: 3.2rem;
  text-align: center;
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
  border: 0;
  border-radius: 3rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.link:hover {
  background-color: rgba(201, 71, 35, 0.8);
}

@media (max-width: 30em) {
  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
}

@media (max-width: 50em) {
  .link:hover {
    background-color: rgba(201, 71, 35, 1);
  }
}
</style>
