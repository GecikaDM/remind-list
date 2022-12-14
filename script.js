const form = document.getElementById('form');

const todo = document.getElementById('todo');

const listItems = document.querySelector('.list-items');

form.addEventListener('submit', function(e) {
  e.preventDefault();
 
  const todoValue = todo.value;
  
  // create the element task
  let item = `
              <div class="item"> 
                    <p> ${todoValue} </p>
                    <button class="btn-delete">
                      <i class="fas fa-trash-alt" title="delete it"></i>
                    </button>
                    <button class="btn-archive">
                      <i class="fas fa-check-circle" title="done!"></i>
                    </button>
                </div>
              `
    listItems.innerHTML += item;
    todo.value = '';


    const btnDelete = document.querySelectorAll('.btn-delete');

     btnDelete.forEach(i => {
  

          i.addEventListener('click', function() {
          
          i.parentElement.remove();
        });
      });

    const btnArchive = document.querySelectorAll('.btn-archive');

      btnArchive.forEach(i => {
        console.log(btnArchive);
        
        i.addEventListener('click', function() {
          i.parentElement.classList.toggle('done');
        });
      });
});

