let calculationarea = document.querySelector('.calculationarea');


let createbudgetbutton = document.querySelector('.createbudgetbutton');


let expensebutton = document.querySelector('.addexpensebutton')

createbudgetbutton.onclick = function() {
    let userbudget = document.querySelector('#budgettextarea').value; // 2000
    let totalbudgettextnode = document.createTextNode("My Budget: " + userbudget); // My Budget: 2000
    let h2 = document.createElement('h2');
    h2.appendChild(totalbudgettextnode);
    calculationarea.append(h2);
    
    let remainingbudget = userbudget; // 2000
    let remainingbudgettextnode = document.createTextNode("Current remaining budget: " + remainingbudget);
    let h3 = document.createElement('h3');
    h3.appendChild(remainingbudgettextnode);
    calculationarea.append(h3);
    
    expensebutton.onclick = function() {
        let useritem = document.querySelector('#itemtextarea').value; // groceries 
        let useritemprice = document.querySelector('#expensetextarea').value; // 100
        let useritemtextnode = document.createTextNode(useritemprice + " " + useritem);
        let pitem = document.createElement('p');
        pitem.appendChild(useritemtextnode);
        calculationarea.append(pitem);
    }
}

