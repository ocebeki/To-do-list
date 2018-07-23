        let add = document.getElementById('add'),
            inputList = document.getElementById('newTask'),
            list = document.getElementById('list'),
            allLi = document.getElementsByTagName('li'),
            errorMessage = document.getElementsByClassName('errorMessage')[0]


        for (var i = 0; i < allLi.length; i++) {
            let buttons = document.createElement('div');
            let checkedBtn = document.createElement('div');
            let deleteBtn = document.createElement('div');
            buttons.classList.add('buttonWrapper')
            deleteBtn.classList.add('deleteTask');
            checkedBtn.classList.add('checked');
            deleteBtn.innerHTML = "&times;"
            checkedBtn.innerHTML = "&#10004;"
            buttons.appendChild(deleteBtn);
            buttons.appendChild(checkedBtn);
            allLi[i].appendChild(buttons)

        }

        let addToList = function () {

            let newLi = document.createElement('li');
            let buttons = document.createElement('div');
            let checkedBtn = document.createElement('div');
            let deleteBtn = document.createElement('div');
        

            if (inputList.value != "" ) {

                newLi.textContent = inputList.value;


                buttons.classList.add('buttonWrapper');
                deleteBtn.classList.add('deleteTask');
                checkedBtn.classList.add('checked');
                deleteBtn.innerHTML = "&times;";
                checkedBtn.innerHTML = "&#10004;";
                buttons.appendChild(deleteBtn);
                buttons.appendChild(checkedBtn);

                newLi.appendChild(buttons);
                list.appendChild(newLi);

                inputList.value = "";
                
                

                errorMessage.style.display = "none";

            } else {
                errorMessage.style.display = "block";

            }
        }


        add.addEventListener("click", addToList);
        inputList.addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                addToList();
            }
        });


        document.body.addEventListener("click", function (event) {
            if (event.target.classList.contains("deleteTask")) {
                event.target.parentElement.parentElement.remove();
                errorMessage.style.display = "none";

            } else if (event.target.classList.contains("checked")) {
                event.target.parentElement.classList.add('line');


            }

        });
