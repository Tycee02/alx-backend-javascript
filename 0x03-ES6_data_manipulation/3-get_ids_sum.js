/**
 * Returns the sum of all the student ids.
 * @param - list of students
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
