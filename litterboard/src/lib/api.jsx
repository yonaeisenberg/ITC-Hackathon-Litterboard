
import axios from 'axios';

const Url = "http://127.0.0.1:5000";

export function FetchBoard() {
    
    return axios.get(`${Url}/board/general`);
}

// export function GetStudentList() {

//     return axios.get(`${Url}/getlist`);
// }   

// export function AddStudent(student_data) {
    
//     return axios.post(Url + '/add_student', student_data);
// } 

// export function SkillUpdate(skill_data) {
    
//     return axios.post(Url + '/edit_skills', skill_data);
// }


// export function updateStudent(id) {
//     return axios.put(`${Url}/students/${student.id} `, student);
// }

// export function deleteStudent(id) {
//     return axios.delete(`${Url}/getlist/${id} `);
// }

