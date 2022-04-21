let addbtn = document.querySelector('.duyme');
let text = document.querySelector('input');
let list = document.querySelector('.list')
let buttonImg = document.querySelector('.sortButtonImg');

// Add new to do in todo list
function addlistitem() {
    if (text.value === '') {
        alert("You must write something!");
      } 
        else {
            let newItem = createNew(closeElementid);
            newItem.firstChild.value=text.value;
            arrayHoldValue.push(newItem.firstChild.value);
            list.insertBefore(newItem,document.querySelector('.input'));
      }
      text.value="";

      giveId();

      for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            giveId();
            var div = this.parentElement;
            console.log(arrayHoldValue.length);
            console.log(arrayHoldValue);
            console.log(this.id + "is removed")
            console.log(arrayHoldValue);
            if(!isSorted)
            {
                console.log("True");
                console.log(div.parentElement.firstChild.value);
                div.parentElement.remove();
                arrayHoldValue.splice(this.id,1);
            }
            else
            {
                console.log(div.parentElement.parentElement.firstChild.value)
                arrayHoldValue.splice(arrayHoldValue.indexOf(div.parentElement.firstChild.value,1));
                div.parentElement.remove();
            }
            giveId();
        }
      }
}

addbtn.addEventListener('click', addlistitem)
let arrayHoldValue = [];
let isSorted = false;
let closeElementid=0;

// create new list element function (take id)
function createNew(id)
{
    let newDiv = document.createElement('div');
    newDiv.style.display = 'flex';
    let newInput = document.createElement('input');
    newInput.className = 'newInputClassName';
    newInput.value = '';

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = id;
    closeElementid++;
    span.style.marginLeft='5px';
    span.appendChild(txt);


    let div = document.createElement('div');
    div.style.height = '20px';
    div.style.width = '20px';
    div.style.borderRadius = '71px';
    div.style.border = '1px solid black';
    div.style.marginTop = '5px';
    div.appendChild(span);


    newDiv.appendChild(newInput);
    newDiv.appendChild(div);
    newDiv.className = "newDiv";
    return newDiv;
}

// Give id each element in list
function giveId() {
    for (i = 0; i < close.length; i++) {
    close[i].id = i;
    }
}



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log(arrayHoldValue.length);
    console.log(arrayHoldValue);
    console.log(this.id + "is removed")
    console.log(arrayHoldValue);
    if(!isSorted)
    {
        console.log("TRUE");
        console.log(div.parentElement.firstChild.value);
        div.parentElement.remove();
        arrayHoldValue.splice(this.id,1);
    }
    else
    {
        console.log(div.parentElement.firstChild.value)
        arrayHoldValue.splice(arrayHoldValue.indexOf(div.parentElement.firstChild.value,1));
        div.parentElement.remove();
    }
  }
}

for (i = 0; i < close.length; i++) {
    close[i].id = i;
}

let sortButton = document.querySelector('.sortbtn');
sortButton.addEventListener('click',arraySort)


//Array sort and unsort(reverse orginal) function
function arraySort(){
    console.log(arrayHoldValue);
        let children = list.children;
        if(!isSorted)
        {
            let arrayForSort = arrayHoldValue.slice();
            arrayForSort.sort();
            isSorted=true;
            incDecImg.src = "images/activeIncrease.png"
            for(let i = 0;i<children.length-1;i++)
            {
    
                children[i].firstChild.value = arrayForSort[i];
            }
        }
        else
        {
            incDecImg.src = "images/activeDecrease.png"
            isSorted=false;
            for(let i = 0;i<children.length-1;i++)
            {
                children[i].firstChild.value = arrayHoldValue[i];
            }
        }
}


//Mouseover-mouseout
let incDecImg = document.querySelector('.incDecImg')
sortButton.addEventListener('mouseover', _ => {
    var img = document.getElementById('sekil').getAttribute('src');
    if (img == "images/inactiveIncrease.png") {
        incDecImg.src = 'images/activeIncrease.png'
    } else if (img == "images/inactiveDecrease.png") {
        incDecImg.src = 'images/activeDecrease.png'
    }
})
sortButton.addEventListener('mouseout', _ => {
    var img = document.getElementById('sekil').getAttribute('src');

    if (img == "images/activeIncrease.png") {
        incDecImg.src = 'images/inactiveIncrease.png'

    } else if (img == "images/activeDecrease.png") {
        incDecImg.src = 'images/inactiveDecrease.png'

    }
})