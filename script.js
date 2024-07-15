const counters = document.querySelectorAll('.value'),
  speed = 300,
  /**
   * create an IntersectionObserver with the specified callback that will be executed for each intersection change for every counter we have. 
   * You may customize the options (2nd argument) per you requirement
   */
  observer = new IntersectionObserver(
    entries => entries.forEach(entry => entry.isIntersecting && animate(entry.target)), 
    {
      threshold: 1 // tells the browser that we only need to execute the callback only when an element (counter) is fully visible in the viewport
    }
  ),
  // the animate function now accepts a counter (HTML element)
  animate = counter => {
    const value = +counter.dataset.akhi,
      data = +counter.innerText,
      time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(() => animate(counter), 1);
    } else {
      counter.innerText = value;
    }
  };

// attach the counters to the observer
counters.forEach(c => observer.observe(c));


function myfunc(){
  if(window.innerWidth>768){
  document.getElementById("options").style.display="block";}
  else{
    document.getElementById("smOptions").style.display="block";
  }
  
}

function myfunc2(){
  if(window.innerWidth>768){
  document.getElementById("options2").style.display="block";
  }
  else{
    document.getElementById("smOptions2").style.display="block";
    
  }
  

} 

function secfunc(){
  if(window.innerWidth>768 ){
  document.getElementById("options").style.display="none";}
  else{
    document.getElementById("smOptions").style.display="none";
  }
  
} 

$('#country-select').val('TN');

$('#country-select').val('TN').trigger('change');

$('.checkbox').click(function(){
  if ($(this).is(':checked')) {
      $(this).removeClass('has-error').addClass('has-success'); // checked
  } else {
      $(this).addClass('has-error'); //unchecked
  }
});