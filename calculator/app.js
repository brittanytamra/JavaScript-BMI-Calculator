


//bmi formula  

//metric  weight / height ^  2

//Imperial  703 x weight / height ^ 2




//function

function calculatebmi() {

    //get values
    let height = document.getElementById('height').value  //height
    let heightIn = document.getElementById('height-in').value   //height inches
    let weight = document.getElementById('weight').value   //weight
    let gender = document.getElementById('gender').value   //gender
    let age = document.getElementById('age').value   //age

    //calculate
  
    let imperialbmi = (weight / (height * height) * 703)
    let metricbmi = (weight / (weight * height))

    // document. getElementById('message').innerHTML = 'You are underwdight'
  
    console.log(metricbmi)

}

//calculate
//output




