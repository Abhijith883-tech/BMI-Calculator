function calculate(){
    var age = document.getElementById("age").value;
    const height = document.getElementById('height').value; 
    const weight = document.getElementById('weight').value;
    var comment = document.getElementById("comment");
    var result = document.getElementById("result");
    
    
    const heightInMeters = height / 100;

    
    const bmi =( weight / (heightInMeters * heightInMeters)).toFixed(1);
    var bmii=Number(bmi)
    console.log(bmii);
    result.innerHTML=bmii
    if(bmii<18.5){
        comment.textContent= 'Underweight';
     }else if(18.5<=bmii&&bmii<=24.9){
        comment.textContent = 'Healthy';
     }else if(25<=bmii&&bmii<=29.9){
        comment.textContent = 'Overweight';
     }else if(30<=bmii&&bmii<=34.9){
        comment.textContent = 'Obese';
     }else if(35<=bmii){
        comment.textContent = 'Extremely obese';
     }
}

