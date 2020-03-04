let formu= document.querySelector("form");
formu.addEventListener("submit",function(e){  /*me quedo esperando hasta q se ejecute la acion submit*/
    e.preventDefault();
   /*valido el card para q sea un #card y no se encuentre vacio*/
if(!validator.isCreditCard( formu.card.value ) || validator.isEmpty ( formu.card.value )){
  
  formu.card.focus();
  formu.card.classList.add('bg-danger');
  alert("ingrese card#");
  formu.card.classList.remove('is-valid');
} else{
  formu.card.classList.remove('bg-danger');
  formu.card.classList.add('is-valid')
}


/*valido el CVC para q  no se encuentre vacio*/
if(validator.isEmpty ( formu.CVC.value )){
  
    formu.CVC.focus();
    formu.CVC.classList.add('bg-danger');
    alert("ingrese numero");
    formu.CVC.classList.remove('is-valid');
  } else{
    formu.CVC.classList.remove('bg-danger');
    formu.CVC.classList.add('is-valid')
  }


   /*valido el amount para q sea un numero y no se encuentre vacio*/
if(!validator.isNumeric( formu.amount.value ) || validator.isEmpty ( formu.amount.value )){
  
    formu.amount.focus();
    formu.amount.classList.add('bg-danger');
    alert("ingrese numero");
    formu.amount.classList.remove('is-valid');
  } else{
    formu.amount.classList.remove('bg-danger');
    formu.amount.classList.add('is-valid')
  }

     /*valido el first name para q sea solo letras y no se encuentre vacio*/
if(!validator.isAlpha( formu.inputName.value ) || validator.isEmpty ( formu.inputName.value )){
  
    formu.inputName.focus();
    formu.inputName.classList.add('bg-danger');
    alert("ingrese nombre");
    formu.inputName.classList.remove('is-valid');
  } else{
    formu.inputName.classList.remove('bg-danger');
    formu.inputName.classList.add('is-valid')
  }

  
     /*valido el second name para q sea solo letras y no se encuentre vacio*/
if(!validator.isAlpha( formu.inputName2.value ) || validator.isEmpty ( formu.inputName2.value )){
  
    formu.inputName2.focus();
    formu.inputName2.classList.add('bg-danger');
    alert("ingrese nombre");
    formu.inputName2.classList.remove('is-valid');
  } else{
    formu.inputName2.classList.remove('bg-danger');
    formu.inputName2.classList.add('is-valid')
  }

       /*valido la ciudad para q sea solo letras y no se encuentre vacio*/
if(!validator.isAlpha( formu.inputCity.value ) || validator.isEmpty ( formu.inputCity.value )){
  
    formu.inputCity.focus();
    formu.inputCity.classList.add('bg-danger');
    alert("ingrese ciudad");
    formu.inputCity.classList.remove('is-valid');
  } else{
    formu.inputCity.classList.remove('bg-danger');
    formu.inputCity.classList.add('is-valid')
  }

  /*valido el state para q  no se encuentre vacio*/
if(validator.isEmpty ( formu.inputState.value )){
  
    formu.inputState.focus();
    formu.inputState.classList.add('bg-danger');
    alert("selecione un estado");
    formu.inputState.classList.remove('is-valid');
  } else{
    formu.inputState.classList.remove('bg-danger');
    formu.inputState.classList.add('is-valid')
  }

       /*valido para q sea un codigo postal y no se encuentre vacio*/
if(!validator.isNumeric(formu.inputcod.value) || validator.isEmpty ( formu.inputcod.value )){
  
    formu.inputcod.focus();
    formu.inputcod.classList.add('bg-danger');
    alert("ingrese codigo postal");
    formu.inputcod.classList.remove('is-valid');
  } else{
    formu.inputcod.classList.remove('bg-danger');
    formu.inputcod.classList.add('is-valid')
  }

  /*valido el mensage para q  no se encuentre vacio*/
if(validator.isEmpty( formu.opinion.value )){
  
    formu.opinion.focus();
    formu.opinion.classList.add('bg-danger');
    alert("ingrese numero");
    formu.opinion.classList.remove('is-valid');
  } else{
    formu.opinion.classList.remove('bg-danger');
    formu.opinion.classList.add('is-valid')
  }

})