const btnAdd = getEl('btnAdd');
const divMain = getEl('divMain');

let count = 0;

btnAdd.addEventListener('click', () => {
    count++;

    if(count === 1) {
        addProgressbar();
    }
    
});

function addProgressbar() {
    let divPb = createEl('div');

    divPb.classList.add('progressbar');

    setTimeout(()=>{
        divPb.classList.add('full');
    },1);

    divPb.addEventListener('transitionend',()=>{
        count--;
        if(count >= 1) {
            addProgressbar();
        }
        
    });

    divMain.appendChild(divPb);

}


function createEl(el) {
    return document.createElement(el);
}
function getEl(id) {
    return document.getElementById(id);
}