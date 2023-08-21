    /* Première partie tuto (variables)
       const a = "Tuto";
       const b = "JS";
       const isMajeur = true;
       const notes = [
        13,
        14,
        8,
        9,
        'hello',
        [
            1,
            2,
            3
        ]
       ] 

        const notes2 = notes;

       const person = {
        firstname : 'elliot',
        lastname : 'g',
        age : 23,
        notes: [
            11,
            12,
            13
        ], 
        job : {
            name : 'etudiant',
            hours : 35
        },
        [a] : 23
       }
       
       -------------
      
      const age = 18
      const pays = 'US'
      const vraienfrance = pays === 'France' && age === 23
      const vraienus = pays === 'US' && age === 18
      if (vraienfrance){
        console.log("C'est vrai en france")
      }else if(vraienus){
        console.log("C'est vrai en us")
      }
      const year = 2023
      const birthyear = prompt("Quel est votre année de naissance ?")
      const age = year - birthyear
      if(age <= 13){
        console.log("Lilo & stitch")
      }
      else if(age < 18){
        console.log("matrix")
      }
      else {
        console.log("Evil dead")
      }

-----------------------------

      const a = prompt('Premier nombre : ')
      const b = prompt('Deuxieme nombre : ')
      const e = a * b
      let signe
      if(isNaN(e)){
        console.log("Opération impossible")
      }
      if(e > 0){
       signe = 'positif'
      }
      else{
        signe = 'negatif'
      }
      console.log(`${a}* ${b} = ${e} est ${signe}`)
     
----------------------------------------

      const nbr = prompt('Choisissez un nombre entre 1 et 10 : ')
      if(isNaN(nbr)){
        console.log("Opération impossible")
      }
      if(nbr > 0 && nbr < 10){
        for (let i = nbr; i >= 0; i--){
          console.log(i)
        }
      }
      else{
        console.log("Votre numéro est inférieur ou supérieur au nombre souhaité")
      }

      ----------------------------------

      let guess = 8
      let userguess

      while (userguess !== guess){
        userguess = prompt('Choissisez un chiffre') * 1
        if(userguess < guess){
          console.log('plus')
        }
        else if(userguess > guess){
          console.log('moins')
        }
      }
      console.log('Bravo')

      ----------------------------------
      
      
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
      const randomNbr = getRandomInt(10)

      console.log(randomNbr)

      function isRight(n){

        return randomNbr === n
        
      }

      function guess () {
        const nbr = prompt("Choissisez un nombre entre 1 et 10") * 1
        return isRight(nbr)
  
      }


      for (i=0; i < 3; i++){
        if(guess()){
          console.log("Bravo")
          break;
        }
        else if(i === 2){
          console.log("Game over")
        }
      }
      ----------------------------------
       */
      function isPremier(n){
        for (let i = n - 1; i > 1; i--) {
          if(n % i === 0 ){
            return false
          }
        }
        return true
      }

      console.log(isPremier(6))