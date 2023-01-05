import { createStore } from "vuex";

export default createStore({
  state: {
    selectedA1: false,
    selectedA2: false,
    // selectedB1: false,
    // selectedB2: false,
    // selectedC1: false,
    // selectedDtz: false,
    examData: [
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
    ],

    filteredData: [],
    filters: ["a1", "a2", "b1", "b2", "c1", "dtz"],
  },
  getters: {
    allExamData: (state) => {
      return state.examData;
    },
    filteredData: (state) => {
      return state.filteredData;
    },

    // filters: (state) => {
    //   state.examData.examName.push(state.filters);
    // },
  },

  actions: {
    // filters

    filterPosts(catName) {
      // this.state.examData
      if (catName !== "All") {
        this.state.examData = this.state.examData.filter((exam) => {
          return exam.examName === catName;
        });
      }
    },

    // filters ends
    filteredList() {
      this.state.selectedA1 = !this.state.selectedA1;
      this.state.filteredData = this.state.examData;

      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "a1"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
      // a2
      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "a2"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
      // b1
      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "b1"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
      // b2
      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "b2"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
      // c1
      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "c1"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
      // dtz
      if (this.state.selectedA1) {
        const filtered = this.state.examData.filter(
          (item) => item.examName.toLowerCase() == "dtz"
        );
        this.state.filteredData = filtered;
      } else {
        this.state.filteredData = this.state.examData;
      }
    },

    // ------
    // filteredA1() {
    //   this.state.selectedA1 = !this.state.selectedA1;
    //   this.state.filteredData = this.state.examData;

    //   if (this.state.selectedA1) {
    //     const filtered = this.state.examData.filter(
    //       (item) => item.examName.toLowerCase() == "a1"
    //     );
    //     this.state.filteredData = filtered;
    //   } else {
    //     this.state.filteredData = this.state.examData;
    //   }
    // },
    // filteredA2() {
    //   this.state.selectedA1 = !this.state.selectedA1;
    //   this.state.filteredData = this.state.examData;
    //   if (this.state.selectedA1) {
    //     const filtered = this.state.examData.filter(
    //       (item) => item.examName.toLowerCase() == "a2"
    //     );
    //     this.state.filteredData = filtered;
    //   } else {
    //     this.state.filteredData = this.state.examData;
    //   }
    // },
    // filteredB1() {
    //   this.state.filteredData = this.state.examData;
    //   const filtered = this.state.examData.filter(
    //     (item) => item.examName.toLowerCase() == "b1"
    //   );
    //   this.state.filteredData = filtered;
    // },
    // filteredB2() {
    //   this.state.filteredData = this.state.examData;
    //   const filtered = this.state.examData.filter(
    //     (item) => item.examName.toLowerCase() == "b2"
    //   );
    //   this.state.filteredData = filtered;
    // },
    // filteredC1() {
    //   this.state.filteredData = this.state.examData;
    //   const filtered = this.state.examData.filter(
    //     (item) => item.examName.toLowerCase() == "c1"
    //   );
    //   this.state.filteredData = filtered;
    // },
    // filteredDtz() {
    //   this.state.filteredData = this.state.examData;
    //   const filtered = this.state.examData.filter(
    //     (item) => item.examName.toLowerCase() == "dtz"
    //   );
    //   this.state.filteredData = filtered;
    // },
    noneFiltered() {
      this.state.examData = this.state.filteredData;
    },
  },
  mutations: {},
  modules: {},
});
