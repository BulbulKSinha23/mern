const form=document.querySelector('form');
const answer={q1:"sachin tendulkar",q2:"wi",q3:"264",q4:"harmanpreet kaur",q5:"suryakumar yadav"}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const data=new FormData(form);
    let finalscore=0;
    for(let [name,value] of data.entries()){
        if(answer[name]==value)
        finalscore++;
    }
    document.getElementById("out").textContent=`Your Final Score is ${finalscore} out of 5.`
    form.reset();
})