const remove=(node)=>{
    let empPayrollData=empPayrollList.find(empData=>empData._id==node.id);
    if(!empPayrollData)
        return;
    const index=empPayrollList.map(empData=>empData._id).indexOf(empPayrollData._id);
    empPayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
}