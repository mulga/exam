<template>
  <div>
    <h1>Ad New</h1>
    <div class="form-wrapper">
      <!-- <form @submit.prevent="submitNewExam"> -->
      <div class="input-group">
        <label for="examName">Exam Name</label>
        <input
          ref="enteredExamName"
          type="text"
          name=""
          id="examName"
          placeholder="A1"
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
        />
      </div>
      <div class="input-group">
        <label for="examDate">Exam Date</label>
        <input ref="enteredExamDate" type="date" name="" id="examFullName" />
      </div>
      <div class="input-group">
        <label for="examTime">Exam Time</label>
        <input ref="enteredExamTime" type="time" name="" id="examTime" />
      </div>
      <div class="input-group">
        <label for="examLastRegistration">Last Registration</label>
        <input
          ref="enteredExamLastRegistration"
          class="datepicker"
          type="date"
          name=""
          id="examLastRegistration"
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
        />
      </div>
      <div class="input-group">
        <base-button @click="submitNewExam" role="submit">Submit</base-button>
      </div>
      <!-- </form> -->
      <p>Tarih: {{ enteredExamDate }}</p>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  name: "AddNew",
  components: { BaseButton },
  props: {},
  inject: ["addNewExam"],
  data() {
    return {
      enteredExamDate: "",
      newExam: {
        examName: "",
        examFullName: "",
        examDate: "",
        examTime: "",
        examLastRegistration: "",
        examPrice: "",
      },
    };
  },

  methods: {
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
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  width: 100%;
  max-width: 700px;
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
</style>
