const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy=document.getElementById('boy');
    const girl=document.getElementById('girl');
    const l1=boy.value.length;
    const l2=girl.value.length;
    const result=Math.pow((l1+l2),3)%101;
    document.querySelector('h3').textContent=`Result:${result}`;
})