document.addEventListener('DOMContentLoaded', (event) => {

    var dragSrcEl = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);


    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');

    }

    function handleDragLeave(e) {
        this.classList.remove('over');

    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        let items = document.querySelectorAll('.game .box');
        i=0;   var win=true;
        var letters = ['T', 'R', 'U', 'T', 'H'];
        items.forEach(function(item){
            if(item.innerText!=letters[i]){
               win=false;
            };
            i++;
        });
        if(win==true){
            alert("Win!");
        }

        return false;
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }
    let items = document.querySelectorAll('.game .box');
    items.forEach(function(item){
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });






});

function saktSpeli() 
{
    let vards   = document.querySelector('#vards').value
    let vecums  = document.querySelector('#vecums').value
    let regions = document.querySelector('#regions').value
    
    console.log(regions)

    if( vecums !==undefined && vards=='') 
    {
        alert('Ievadi vārdu!')
    }
    else
    {
        window.location='spele.html#'+vards+','+vecums+','+regions
    }

   
}//beidzas saktSpeli()


document.querySelector('.virsraksts').innerHTML = 'Sveiks '+vards