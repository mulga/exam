<template>
  <div>
    <div v-if="showModal" class="modal">
      <div>
        <h1>Ad New</h1>
        <div class="form-wrapper">
          <form @submit.prevent="submitNewExam">
            <div class="input-group">
              <label for="examName">Exam Name</label>
              <input
                ref="enteredExamName"
                type="text"
                name=""
                id="examName"
                placeholder="A1"
                required
              />
            </div>
            <div class="input-group">
              <label for="examFullName">Exam Fullname</label>
              <input
                ref="enteredExamFullName"
                type="text"
                name=""
                id="examFullName"
                placeholder="telc B2"
                required
              />
            </div>
            <div class="input-group">
              <label for="examDate">Exam Date</label>
              <input
                ref="enteredExamDate"
                type="date"
                name=""
                id="examFullName"
                required
              />
            </div>
            <div class="input-group">
              <label for="examTime">Exam Time</label>
              <input
                ref="enteredExamTime"
                type="time"
                name=""
                id="examTime"
                required
              />
            </div>
            <div class="input-group">
              <label for="examLastRegistration">Last Registration</label>
              <input
                ref="enteredExamLastRegistration"
                class="datepicker"
                type="date"
                name=""
                id="examLastRegistration"
                required
              />
            </div>
            <div class="input-group">
              <label for="examPrice">Exam Price</label>
              <input
                ref="enteredExamPrice"
                type="text"
                name=""
                id="examPrice"
                placeholder="120"
                required
              />
            </div>
            <div class="input-group">
              <base-button role="submit">Submit</base-button>
              <base-button class="btnClose" @click="showModal = false"
                >Close</base-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>

    <exam-filter-container class="filter-container">
      <exam-filter-button class="filterBtn" type="a1" @click="filterList"
        >A1</exam-filter-button
      >
      <exam-filter-button class="filterBtn" type="a2" @click="filterList"
        >A2</exam-filter-button
      >
      <exam-filter-button class="filterBtn" type="b1" @click="filterList"
        >B1</exam-filter-button
      >
      <exam-filter-button class="filterBtn" type="b2" @click="filterList"
        >B2</exam-filter-button
      >
      <exam-filter-button class="filterBtn" type="c1" @click="filterList"
        >C1</exam-filter-button
      >
      <exam-filter-button class="filterBtn" type="dtz" @click="filterList"
        >DTZ</exam-filter-button
      >
      <exam-filter-button
        v-for="filter in filters"
        :key="filter"
        :filterPosts="filterPosts"
        :type="filter"
      ></exam-filter-button>
      <base-button @click="showModal = true">Add New</base-button>
    </exam-filter-container>

    <exam-card
      v-for="exam in filteredData"
      :key="exam.id"
      :exam-name="exam.examName"
      :exam-full-name="exam.examFullName"
      :exam-date="exam.examDate"
      :exam-time="exam.examTime"
      :exam-lastRegistration="exam.examLastRegistration"
      :exam-price="exam.examPrice"
    ></exam-card>

    <!-- This is the component we want to render -->
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
// import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
import ExamCard from "./ExamCard.vue";
import ExamFilterButton from "./ExamFilterButton.vue";
import ExamFilterContainer from "./ExamFilterContainer.vue";
export default {
  name: "BaseListWrapper",
  components: { ExamCard, ExamFilterContainer, ExamFilterButton, BaseButton },

  data() {
    return {
      showModal: false,
      examDataList: [
        {
          id: 1,
          examName: "A1",
          examFullName: "tecl Deutsch A1",
          examDate: "15.01.2023",
          examTime: "10:00",
          examLastRegistration: "01.01.2022",
          examPrice: "100",
        },
        {
          id: 2,
          examName: "A2",
          examFullName: "tecl Deutsch A2",
          examDate: "15.02.2023",
          examTime: "10:00",
          examLastRegistration: "01.02.2022",
          examPrice: "150",
        },
        {
          id: 3,
          examName: "B2",
          examFullName: "tecl Deutsch B2",
          examDate: "10.02.2023",
          examTime: "10:00",
          examLastRegistration: "02.03.2023",
          examPrice: "200",
        },
        {
          id: 4,
          examName: "B1",
          examFullName: "tecl Deutsch B1",
          examDate: "10.02.2023",
          examTime: "10:00",
          examLastRegistration: "02.03.2023",
          examPrice: "200",
        },
        {
          id: 5,
          examName: "DTZ",
          examFullName: "DTZ",
          examDate: "10.02.2023",
          examTime: "10:00",
          examLastRegistration: "02.03.2023",
          examPrice: "200",
        },
        {
          id: 6,
          examName: "C1",
          examFullName: "C1 Allgemein",
          examDate: "10.02.2023",
          examTime: "10:00",
          examLastRegistration: "02.03.2023",
          examPrice: "200",
        },
        {
          id: 7,
          examName: "C1",
          examFullName: "C1 Allgemein",
          examDate: "10.02.2023",
          examTime: "10:00",
          examLastRegistration: "02.03.2023",
          examPrice: "200",
        },
      ],
      selectedItem: false,
    };
  },

  provide() {
    return {
      examDataList: this.examDataList,
      addNewExam: this.addNewExam,
    };
  },

  methods: {
    filterList(event) {
      this.selectedItem = !this.selectedItem;
      this.filteredData = this.examDataList;
      const button = event.target;
      const buttonText = button.innerText;

      if (this.selectedItem) {
        const filtered = this.examDataList.filter(
          (item) => item.examName === buttonText
        );
        console.log(buttonText);
        this.examDataList = filtered;
        console.log(filtered);
      } else {
        this.filteredData = this.examDataList;
        console.log(this.filteredData);
      }
    },

    addNewExam(
      examName,
      examFullName,
      examDate,
      examTime,
      examLastRegistration,
      examPrice
    ) {
      const newExam = {
        id: new Date().toISOString(),
        examName: examName,
        examFullName: examFullName,
        examDate: examDate,
        examTime: examTime,
        examLastRegistration: examLastRegistration,
        examPrice: examPrice,
      };

      this.examDataList.unshift(newExam);
    },

    // yeni bir exam ekleme

    submitNewExam() {
      const enteredExamName = this.$refs.enteredExamName.value;
      const enteredExamFullName = this.$refs.enteredExamFullName.value;
      const enteredExamDate = this.$refs.enteredExamDate.value;
      const enteredExamTime = this.$refs.enteredExamTime.value;
      const enteredExamLastRegistration =
        this.$refs.enteredExamLastRegistration.value;
      const enteredExamPrice = this.$refs.enteredExamPrice.value;

      this.addNewExam(
        enteredExamName,
        enteredExamFullName,
        enteredExamDate,
        enteredExamTime,
        enteredExamLastRegistration,
        enteredExamPrice
      );
      this.showModal = false;
    },
  },

  computed: {
    filteredData() {
      return this.examDataList;
    },
  },
};
</script>

<style scoped>
/* add new exam modal */

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(240, 33%, 98%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.form-wrapper {
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  margin: 0 auto;
  padding: 20px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 1.2rem;
  font-weight: 100;
}

input::placeholder,
input[type="date"]::placeholder,
input[type="time"]::placeholder,
#examLastRegistration::placeholder {
  color: #ccc;
}

.datepicker::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #00c851;
}
.datepicker:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #00c851;
  opacity: 1;
}
.datepicker::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #00c851;
  opacity: 1;
}
.datepicker:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #00c851;
}
.btnClose {
  margin-top: 1rem;
  background-color: red;
}
</style>
