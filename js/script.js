const containerInner = document.getElementById('container-inner');
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
    containerInner.append(box);
    box.classList.add('fizzbuzz')
    box.innerHTML = ('fizzbuzz');
  }else if(i % 5 === 0){
    console.log('Buzz');
    containerInner.append(box);
    box.classList.add('buzz')
    box.innerHTML = 'buzz';
  }else if(i % 3 === 0){
    console.log('Fizz');
    containerInner.append(box);
    box.classList.add('fizz')
    box.innerHTML = 'fizz';
  }else{
    console.log(i);
    containerInner.append(box);
  }
}