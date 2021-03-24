var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
    var inputName = document.getElementById("name");
    var itemName = inputName.value;

    var inputMob = document.getElementById("mobnum");
    var itemMob = inputMob.value;

    var inputMail = document.getElementById("mail");
    var itemMail = inputMail.value;

    ul = document.getElementById("list");

    var textnodeName = document.createTextNode(itemName);
    var textnodeMob = document.createTextNode(itemMob);
    var textnodeMail = document.createTextNode(itemMail);

    if (itemName == "") {
        return false;
    } else {
        //creating li

        li = document.createElement("li");

        //Creating label
        var labelName = document.createElement("label");
        labelName.setAttribute("for", "itemName");

        var labelMob = document.createElement("label");
        labelMob.setAttribute("for", "itemMob");

        var labelMail = document.createElement("label");
        labelMail.setAttribute("for", "itemEmail");

        //Add all these to the page

        ul.appendChild(labelName);
        labelName.appendChild(textnodeName);
        li.appendChild(labelName);

        ul.appendChild(labelMob);
        labelMob.appendChild(textnodeMob);
        li.appendChild(labelMob);

        ul.appendChild(labelMail);
        labelMail.appendChild(textnodeMail);
        li.appendChild(labelMail);


        ul.insertBefore(li, ul.childNodes[0]);
    }
}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
}