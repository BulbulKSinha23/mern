const form=document.querySelector('form');
const alltask=document.querySelector('#alltask');
const input=document.querySelector('input');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text=input.value.trim();
    
    if(text=="")
        return;
    const parent=document.createElement('div');
    parent.style.marginTop="20px"

    const task=document.createElement('span');
    task.textContent=text;
    task.style.marginRight="20px";
    const deletebutton=document.createElement('button');
    deletebutton.textContent="Delete";
    deletebutton.style.width="50px";
    
    const donebutton=document.createElement('button');
    donebutton.textContent="Done";
    donebutton.style.width="50px";
    donebutton.style.marginRight="10px";

    parent.append(task,donebutton,deletebutton);

    alltask.append(parent)

    deletebutton.addEventListener('click',()=>{
        parent.remove();
    })
    donebutton.addEventListener('click',()=>{
            task.style.color="blue";
            task.style.textDecoration="line-through";
    })
    form.reset();
})