const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrolling);

function scrolling() 
{
    const triggerButton = window.innerHeight * (4/5);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(triggerButton > boxTop)
        {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}