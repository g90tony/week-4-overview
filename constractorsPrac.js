// new moringa student contructor
function MoringaStudent(firstName, lastName, level, track, enrollmentStatus) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.level = level;
  this.track = track;
  this.enrollmentStatus = enrollmentStatus;

  this.enrollStudent = () => {
    this.enrollmentStatus = true;
  };
}

function main() {
  //new instance of moringa student with caleb's info
  let caleb = new MoringaStudent(
    "caleb",
    "mbugua",
    1,
    ["Prep", "JavaScript", "React", "Java"],
    false
  );

  //new instance of moringa student with fatma's info
  let fatma = new MoringaStudent(
    "Fatma",
    "Ali",
    1,
    ["Prep", "JavaScript", "React", "Java"],
    false
  );

  console.log(caleb, fatma);

  //enroll caleb only
  caleb.enrollStudent();

  console.log(caleb, fatma);
}
