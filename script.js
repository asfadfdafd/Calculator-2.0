document.getElementById("submit").addEventListener("click", () => {
    const calculate = () => {
      let name = document.getElementById("brideGroomName").value;
      let price = Number(document.getElementById("startingBid").value);
      let loveLetter = document.getElementById("loveLetter").value;
  
      if (!name || !price) {
        document.getElementById("finalPrice").innerHTML = "Please provide the name and starting bid.";
        return;
      }
  
      let education = Number(document.getElementById("education").value);
      price *= education;
  
      let networth = Number(document.getElementById("networth").value);
      price *= networth;
  
      let caste = Number(document.getElementById("caste").value);
      price += caste;
  
      let skillElements = document.querySelectorAll('.skill');
      let skillBonus = Array.from(skillElements)
        .filter(skill => skill.checked)
        .reduce((acc, skill) => acc + Number(skill.value), 0);
      price += skillBonus;
  
      let ageMultiplier = 1;
      document.querySelectorAll('input[name="age"]').forEach(age => {
        if (age.checked) {
          ageMultiplier = Number(age.value);
        }
      });
      price *= ageMultiplier;
  
      const reputationElements = document.querySelectorAll('.reputation');
      for (let i = 0; i < reputationElements.length; i++) {
        if (reputationElements[i].checked) {
          price *= Number(reputationElements[i].value) || 1;
          if (reputationElements[i].value < 0) {
            price += Number(reputationElements[i].value); 
          }
        }
      }
  

      let person = {
        bride_name: name,
        bride_price: price.toFixed(2),
        letter_to_bride: loveLetter,
      };

      document.getElementById("finalPrice").innerHTML = `
        Your price for ${person.bride_name} is $${person.bride_price}. <br>
        Love Letter: ${person.letter_to_bride}
      `;
    };
  
    calculate();
  });