import { defineStore } from 'pinia'

export const useTimerStore = defineStore("timer", {
    state: () => {
        return {
            workingHours: 2,
        };
    },

    actions: {
        setWorkingHours(hours) {
            this.workingHours = parseInt(hours);
        },

        substractHour() {
            this.workingHours -= 2;
        }
    }
});

