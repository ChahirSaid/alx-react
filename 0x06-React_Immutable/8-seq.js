import { Seq } from 'immutable';

const printBestStudents = (object) => {
  const student = Seq(object)
    .filter((grade) => grade.score > 70)
    .toJS();

  const name = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  Object.keys(student).map((key) => {
    student[key].firstName = name(student[key].firstName);
    student[key].lastName = name(student[key].lastName);
    return student[key];
  });

  console.log(student);
};

export default printBestStudents;
