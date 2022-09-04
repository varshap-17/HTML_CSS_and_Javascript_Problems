window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
//template literal ES6 feature
const createInnerHtml=()=>{
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml=`${headerHtml}`;
    let empPayrollList=createEmployeePayrollJSON();
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
            <img id="1" onclick="remove(this)" src="../Assets/deleteicon.jpg" alt="delete" width="5%">
            <img id="1" onclick="update(this)" src="../Assets/selecticon.jpg" alt="edit" width="5%">
        </td>
    </tr>
    `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}
const createEmployeePayrollJSON=()=>{
    let empPayrollListLocal=[
        {
        _name: 'Harsha',
        _gender: 'male',
        _department: [
            'Engineer',
            'HR'
        ],
        _salary: '500000',
        _startDate: '29 june 2022',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '../Assets/person2.jpg'
    },
    {
        _name:'Akshara',
        _gender: 'Female',
        _department:[
            'Sales'
        ],
        _salary: '300000',
        _startDate: '17 Aug 2021',
        _note: '',
        _id: new Date().getTime()+1,
        _profilePic:'../Assets/person4.jpg'
    }
    ];
    return empPayrollListLocal;
}
const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}