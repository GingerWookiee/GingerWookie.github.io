var names = ["Daniel", "Bobby", "Isabel", "Tim", "Gracie"];
var salaries = [0, 0, 0, 0, 0];


function addSalary()
{
    var nameInput = document.getElementById("names").value;
    var salaryInput = document.getElementById("salaries").value;

    if(salaryInput>150 || salaryInput<10|| salaryInput == ""){
        alert("You must enter a name and a valid salary");
        salaryInput = "";
        $("names").focus();
    }
    else{
     salaryInput = parseInt(salaryInput);
        if(names.includes(nameInput)){
            var index =  names.indexOf(nameInput);
            salary[index] = salaryInput;
        }
        else{
            names.push(nameInput);
            salary.push(salaryInput);
        }
        
        $("salary").innerHTML = "" ;
        $("names").focus();
    }
 
}

function displaySalary()
{
    var html = "";
    html += "<tr><th>Name</th> <th>Salary</th></tr>"
    for(k=0;k<salary.length;k++){
        html+="<tr><td>" + names[k] + "</td><td>$" + salary[k]+"</td></tr>";
    }
    html+="</table>";
    $("resultsTable").innerHTML = "<h2>Salaries</h2>" + html;
}

function displayResults()
{
    var average =0;
    var sum =0;
    var highest;
    var max =0;

    for(i=0; i<salary.length-1;i++){
        sum += salary[i];
    }
    average = (sum/salary.length);

    for(j=0;j<salary.length;j++){
        if(salary[j]>max){
            max =salary[j];
            highest=j;
        }
    }


    $("results").innerHTML = "<h2>Results</h2>" + "<p>Average salary is " + average + " thousand"
        +"</p>" + "<p>The highest salary was for " +names[highest] + " with a salary of " + max + "</p>" ;
}