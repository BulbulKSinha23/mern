const body=document.querySelector('body');

body.addEventListener('click',(e)=>{
    console.log(e.clientX, e.clientY);

    const circle=document.createElement('div');
    circle.classList.add('cicle');

    circle.textContent="HI";
    const color=['red','blue','orange','green','pink','purple'];
    circle.style.backgroundColor=color[Math.floor(Math.random()*6)];

    circle.style.top=`${e.clientY}px`;
    circle.style.left=`${e.clientX}px`;

    body.append(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
})