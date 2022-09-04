window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});
//template literal ES6 feature
const createInnerHtml=()=>{
    const innerHtml=`
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" src="../Assets/person2.jpg" alt="" width="15%"></td>
        <td>Harsha</td>
        <td>Male</td>
        <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div></td>
        <td>300000</td>
        <td>1 Nov 2021</td>
        <td>
            <img id="1" onclick="remove(this)" src="../Assets/deleteicon.jpg" alt="delete" width="5%">
            <img id="1" onclick="update(this)" src="../Assets/selecticon.jpg" alt="edit" width="5%">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
}