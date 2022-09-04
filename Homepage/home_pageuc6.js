let empPayrollList;
window.addEventListener('DOMContentLoaded',(event)=>{
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}
//template literal ES6 feature
const createInnerHtml=()=>{
    if(empPayrollList.length==0) 
        return;
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    for(const empPayrollData of empPayrollList) {
    innerHtml=`${headerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt="" width="15%"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" src="../Assets/deleteicon.jpg" alt="delete" width="5%">
            <img name="${empPayrollData._id}" onclick="update(this)" src="../Assets/selecticon.jpg" alt="edit" width="5%">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}