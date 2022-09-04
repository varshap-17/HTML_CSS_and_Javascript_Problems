const createAndUpdateStorage=()=>{
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList){
        let empPayrollData=employeePayrollList.find(empData=>empData._id==employeePayrollObj._id);
        if(!empPayrollData){
            employeePayrollList.push(createEmployeePayrollData());
        }else{
            const index=employeePayrollList.map(empData=>empData._id).indexOf(empPayrollData._id);
            employeePayrollList.splice(index,1,createEmployeePayrollData(empPayrollData._id));
        }
    }else{
        employeePayrollList=[createEmployeePayrollData()]
    }
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
}
const createEmployeePayrollData=(id)=>{
    let employeePayrollData=new EmployeePayrollData();
    if(!id)
        employeePayrollData.id=createNewEmployeeId();
    else 
        employeePayrollData.id=id;
    setEmployeePayrollData(employeePayrollData);
    return employeePayrollData;
}
const setEmployeePayrollData=(employeePayrollData)=>{
    try{
        employeePayrollData.name=employeePayrollObj._name;
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic=employeePayrollObj._profilePic;
    employeePayrollData.gender=employeePayrollObj._gender;
    employeePayrollData.department=employeePayrollObj._department;
    employeePayrollData.salary=employeePayrollObj._salary;
    employeePayrollData.note=employeePayrollObj._note;
    try{
        employeePayrollData.startDate=new Date(Date.parse(employeePayrollObj._startDate));
    }catch(e){
        setTextValue('.date-error',e);
        throw e;
    }
    alert(employeePayrollData.toString());
}
const createNewEmployeeId=()=>{
    let empID=localStorage.getItem("EmployeeID");
    empID=!empID ? 1 : (parseInt(empID)+1).toString();
    localStorage.setItem("EmployeeID",empID);
    return empID;
}
const getSelectedValues=(propertyValue)=>{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>{
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}