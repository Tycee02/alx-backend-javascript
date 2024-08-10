/**
 * Returns an array of ids from a list of object.
 * student - The list of students.
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }

  return [];
}
