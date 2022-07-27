const lists = document.querySelectorAll('.list');
const list_items = document.querySelectorAll('.list-item');

let draggedItem = null;
for(let i = 0; i < list_items.length; i++){
    const item = list_items[i];

    item.addEventListener('dragstart', function(e){
        console.log('dragstart');
        draggedItem = this;

        setTimeout(()=>{
            this.style.display = 'none';
        },0);
    });


    item.addEventListener('dragend', function(e){
        console.log('dragend')

        setTimeout(()=>{
            draggedItem.style.display = 'block';
            draggedItem = null;
        },0);
    })

    for(let j = 0; j< lists.length; j++){
        const list = lists[j];

        list.addEventListener('dragover',function(e){
            e.preventDefault();
        });


        list.addEventListener('dragenter',function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.3)';

        })

        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        })

        list.addEventListener('drop',function(e){
            this.style.backgroundColor = 'rgba(0,0,0,0.1)';
            console.log('drop');
            this.append(draggedItem);
        })
    }
}