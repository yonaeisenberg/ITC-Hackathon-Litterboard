
import axios from 'axios';

const Url = "http://127.0.0.1:7000";

export function FetchBoard() {
    return axios.get(`${Url}/board/general`);
}

export function FetchLocations(){
    return axios.get(`${Url}/fetch_locations`)
}

export function FetchEvents(){
    return axios.get(`${Url}/EventList`)
}

export function Vote(location_id){
    return axios.get(`${Url}/vote?location_id=`+location_id)
}

export function addUser(name){
    return axios.get(`${Url}/add_user?name=`+name)
}

export function addUserAtEvent(user_name,event_id){
    return axios.get(`${Url}/add_user_at_event?user_name=${user_name}&event_id=${event_id}`)
}

export function FetchEventInfo(event_id){
    return axios.get(`${Url}/FetchEventInfo?event_id=${event_id}`)
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

