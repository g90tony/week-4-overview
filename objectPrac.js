const moringaStudent = {
  firstName: "Charlie",
  lastName: "Obina",
  level: 1,
  track: ["Prep", "JavaScript", "Python", "Django"],
  enrollmentStatus: false,
  enrollStudent: function () {
    this.enrollmentStatus = true;
  },
};
function main() {
  console.log(moringaStudent);

  console.log(`The last name is ${moringaStudent.lastName}`);

  //change a key
  moringaStudent.lastName = "Ali";

  console.log(`The last name has been changed to ${moringaStudent.lastName}`);

  //add new key-value pair to obj
  moringaStudent = { ...moringaStudent, ...{ admissionNumber: 1209893 } };

  console.log(moringaStudent);

  //envoke obj function
  console.log("envoked enroll function");
  moringaStudent.enrollStudent();
  console.log(moringaStudent);

  //calling the array index inside an object
  console.log(`This student is on track ${moringaStudent.track[2]}`);
}
