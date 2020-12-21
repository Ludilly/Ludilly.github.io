window.onload = function () {
  
  const btnEvent = document.getElementById('btn-function');
  let dog1 = document.querySelector('.dog1');
  let dog2 = document.querySelector('.dog2');
  let dog3 = document.querySelector('.dog3');
  let dog4 = document.querySelector('.dog4');

  dog1.style.marginLeft = '0px';
  dog2.style.marginLeft = '0px';
  dog3.style.marginLeft = '0px';
  dog4.style.marginLeft = '0px';

  btnEvent.addEventListener('click', () => {
    const interval = setInterval(() => dogRace(), 300);
    const dogRace = () => {
      dog1.style.marginLeft = parseInt(dog1.style.marginLeft) + (Math.random() * 100) + 'px';
      dog2.style.marginLeft = parseInt(dog2.style.marginLeft) + (Math.random() * 100) + 'px';
      dog3.style.marginLeft = parseInt(dog3.style.marginLeft) + (Math.random() * 100) + 'px';
      dog4.style.marginLeft = parseInt(dog4.style.marginLeft) + (Math.random() * 100) + 'px';
      
      if (parseInt(dog1.style.marginLeft) > window.innerWidth) {
        alert('Dog 1 ganhou!');
        resetDogs(dog1, dog2, dog3, dog4);
        clearInterval(interval);
      };
  
      if (parseInt(dog2.style.marginLeft) > window.innerWidth) {
        alert('Dog 2 ganhou!');
        resetDogs(dog1, dog2, dog3, dog4);
        clearInterval(interval);
      };
  
      if (parseInt(dog3.style.marginLeft) > window.innerWidth) {
        alert('Dog 3 ganhou!');
        resetDogs(dog1, dog2, dog3, dog4);
        clearInterval(interval);
      };
  
      if (parseInt(dog4.style.marginLeft) > window.innerWidth) {
        alert('Dog 4 ganhou!');
        resetDogs(dog1, dog2, dog3, dog4);
        clearInterval(interval);
      };
    }
  });
};

function resetDogs(dog1, dog2, dog3, dog4) {
  dog1.style.marginLeft = '0px';
  dog2.style.marginLeft = '0px';
  dog3.style.marginLeft = '0px';
  dog4.style.marginLeft = '0px';
};

