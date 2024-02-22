const containerInner = document.getElementById('container-inner');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  if(i % 15 === 0){
    containerInner.append(box);
    box.classList.add('fizzbuzz')
    box.innerHTML = ('fizzbuzz');
    console.log("FizzBuzz");
  }else if(i % 5 === 0){
    containerInner.append(box);
    box.classList.add('buzz')
    box.innerHTML = 'buzz';
    console.log('Buzz');
  }else if(i % 3 === 0){
    containerInner.append(box);
    box.classList.add('fizz')
    box.innerHTML = 'fizz';
    console.log('Fizz');
  }else{
    console.log(i);
    containerInner.append(box);
  }
}