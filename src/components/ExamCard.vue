<template>
  <div class="card" :class="filter">
    <div class="card-info">
      <div class="card-header">
        <!-- <div class="card-image">
          {{ examName }}
        </div> -->

        <exam-card-image
          :type="examName.toLowerCase()"
          :text="examName"
        ></exam-card-image>
        <h3 class="card-title">{{ examFullName }}</h3>
      </div>

      <div class="card-body">
        <div class="card-date">
          <p class="card-body-title">Datum</p>
          <p class="card-date-data">{{ examDate }}</p>
        </div>
        <div class="card-start-time">
          <p class="card-body-title">Beginn</p>
          <p class="card-start-time-data">{{ examTime }}</p>
        </div>
        <div class="card-last-register">
          <p class="card-body-title">Anmeldeschluss</p>
          <p class="card-last-register-data">{{ examDate }}</p>
        </div>
        <div class="card-price">
          <p class="card-body-title">Preis</p>
          <p class="card-price-data">{{ examPrice }} <span>€</span></p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <base-button class="anmelden">Anmelden</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
// import ExamCardImage from "./ExamCardImage.vue";

export default {
  name: "ExamCard",
  components: { BaseButton },
  props: {
    examName: {
      type: String,
      required: true,
    },
    examFullName: {
      type: String,
      required: true,
    },
    examDate: {
      type: String,
      required: true,
    },
    examTime: {
      type: String,
      required: true,
    },
    examLastRegistration: {
      type: String,
      required: true,
    },
    examPrice: {
      type: String,
      required: true,
    },
  },

  methods: {
    anmelden() {
      console.log(this.exam.id);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card {
  display: flex;
  margin: 10px;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}

.card-header {
  align-items: center;
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

/* .card-title {
  max-width: max-content;
} */

.card-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background-color: var(--clr-primary);
}

.card-info {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.card-body {
  display: flex;
  gap: 5rem;
}

.card-body-title {
  font-weight: 700;
}

@media screen and (max-width: 1000px) {
  .card-info {
    flex-direction: column;
    gap: 1rem;
  }
}

@media screen and (max-width: 790px) {
  .card-header {
    margin-right: 0;
  }
  .card {
    flex-direction: column;
    gap: 1rem;
  }

  .card-footer,
  .anmelden {
    width: 100%;
  }
}

@media screen and (max-width: 660px) {
  .card-body {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>
