function Student(name, gender, age) {
  return this.name = name, this.gender = gender, this.age = age;
}

let student1 = new Student("Ivan", "male", 24);
let student2 = new Student("Mark", "male", 27);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = [...marks]
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.every((item) => sum += item);
  return this.average = sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}