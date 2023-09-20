let highSchoolGrade = 11;
let yourGrade;

function updateGrade() {
    switch (highSchoolGrade) {
        case 9: 
            yourGrade = 'Freshman';
            break;
        case 10: 
            yourGrade = 'Sophomore';
            break;
        case 11: 
            yourGrade = 'Junior';
            break;
        case 12: 
            yourGrade = 'Senior';
            break;
        default:
            yourGrade = 'Invalid';
    }

    return yourGrade;
}

 function userName() {
    let firstName = 'John';

    const userName = firstName === 'John' ? document.getElementById('demo').innerHTML = "Hello, John!" : document.getElementById('demo').innerHTML = "Hello, Human";
 }


console.log(updateGrade(yourGrade));
userName();