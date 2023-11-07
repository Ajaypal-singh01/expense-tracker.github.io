//   Js code for amounts calculations
let a = 0;

//  this function is  created for make visible add expense box when clicked on add expense button
function add_expense() {
    document.getElementById("expense").style.display = "block";
}

//  this function is  created for make visible add category box when clicked on add category button

function add_category() {
    document.getElementById("category").style.display = "block";
}

// delete function for delete one table row 
function del(ids) {
    // console.log("delete function called");
    // console.log(ids);

   

    // update  amounts in category section
    let tabl = document.getElementById(ids);
    let cell = tabl.getElementsByTagName('td');
    category = cell[1].innerText;
   
    amount = cell[0].innerText;
    
    amount=Number.parseInt(amount);
    let total = 0;
    total = document.getElementById(category).innerText;
    
    total = Number.parseInt(total);
    total = total-amount;
    document.getElementById(category).innerHTML = "" + total + "";

    document.getElementById(ids).style.display = "none";


}

// this function is created for submit expense after filled add expense box
function submit_expense() {
    let amount = document.getElementById("in-amount").value;
    amount = Number.parseInt(amount);
    let category = document.getElementById("select").value;
    let dates = document.getElementById("date").value;
    let note = document.getElementById("note").value;

    if (amount == 0) {
        alert("Please enter amount");
    } else {
        trow = document.createElement("tr");
        trow.setAttribute("id", ++a);
        trow.classList.add("table-row");
        trow.innerHTML = `<td class="td">${amount}</td>
    <td class="td">${category} </td>
    <td class="td">${dates} </td>
    <td class="td">${note} </td>
    <td class="td cross" onclick="del(this.parentNode.id)">&#10060</td>`;
        let table = document.getElementById("tabl");
        table.appendChild(trow);
    }

    // update  amounts in category section

    if (category) {
        let total = 0;

        total = document.getElementById(category).innerText;
        total = Number.parseInt(total);

        total += amount;

        document.getElementById(category).innerHTML = "" + total + "";
    }
}

// this function is created for submit category after filled add category box

function submit_category() {
    let new_category = document.getElementById("category-input").value;
    if (new_category == "") {
        alert("Please enter category name before submit");
    } else {
        let div = document.createElement("div");
        div.classList.add("Categories");
        div.innerHTML =
            new_category + "-" + `<span id="${new_category}">0</span>` + " Rs. Spend";
        const addelem = document.getElementById("box2");
        addelem.appendChild(div);

        // add new category to option section

        let select = document.getElementById("select");
        let new_option = document.createElement("option");
        new_option.value = new_category;
        new_option.innerHTML = new_category;
        select.appendChild(new_option);
    }
}
