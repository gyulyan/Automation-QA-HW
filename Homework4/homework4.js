

alert("Добър ден! За да бъде приведен в експлоатация, роботът трябва да получи детайлна информация за състоянието на кухненското оборудване, както и финансовото състояние на ресторанта.");

let panAnswer = prompt(funct1MainQuestions.PAN_PCS);
let potAnswe = prompt(funct1MainQuestions.POT_PCS);
let widthAnswer = prompt(funct1MainQuestions.KITCHEN_WIDTH);
let lendhtAnswer = prompt(funct1MainQuestions.KITCHEN_LENGHT);
let heightAnswer = prompt(funct1MainQuestions.KITCHEN_HEIGHT);
let chefNameAnswer = prompt(funct1MainQuestions.CHEF_NAME);
let chefPcsAnswer = prompt(funct1MainQuestions.CHEFS_PCS);
let waiterAnswer = prompt(funct1MainQuestions.WAITER_PCS);
let sauceChefName = prompt(funct1MainQuestions.SAUCE_RESPONSIBLE_NAME);
let minTempAnswer = prompt(funct1MainQuestions.MIN_TEMP);
let maxTempAnswer = prompt(funct1MainQuestions.MAX_TEMP);
let bankAnswer = prompt(funct1MainQuestions.BANK_AMOUNT);
let dailyTurnoverAnswer = prompt(funct1MainQuestions.DAILY_TURNOVER);
let openingHourAnswer = prompt(funct1MainQuestions.OPENING_HOUR);
let closingHourAnswer = prompt(funct1MainQuestions.CLOSING_HOUR);


let addQuestionsFunc1 = prompt("Останаха още 5 допълнителни въпроса. Желаете ли да отговорите и на тях? Y/N");

let refrigeratorAnswer;
let gasStoveAnswer;
let combirAnswer;
let grillAnswer;
let aspiratorAnswer;

let kitchenTemperature = ((maxTempAnswer + minTempAnswer) / 2);
let kitchenSquareMeters = lendhtAnswer * widthAnswer;
let kitchenCubature = lendhtAnswer * widthAnswer * heightAnswer;

if(addQuestionsFunc1 == "Y") {
    refrigeratorAnswer = prompt(funct1AddQuestions.REFRIGERATOR);
    gasStoveAnswer = prompt(funct1AddQuestions.GAS_STOVE);
    combirAnswer = prompt(funct1AddQuestions.COMBIR);
    grillAnswer = prompt(funct1AddQuestions.GRILL);
    aspiratorAnswer = prompt(funct1AddQuestions.ASPIRATOR);
} 
else {
    alert("Всички въпроси са зададени.");
}


let func2Question = prompt("Какво ще хапвате? (1) Месо (2) Вегетарианско (3) Десерт?");
    console.log(`Вие ще ядете ${func2Question}`);   

if(func2Question == funct2MainAnswers.MEAT) {

let meatSize = prompt("Изберете едно от посочените, като при избора си можете да изпишете цялото име на вашия избор или номера, под който се намира: 1. малка порция (450грама) 2. средна порция (750 грама) 3. голяма порция (950 грама)"); 
let meatType = prompt("Изберете начин на приготвяне - RARE, MEDIUM, WELL DONE");
    console.log(`Вие ще ядете ястие с грамаж ${meatSize}`);  
    console.log(`Месото ви ще бъде приготвено ${meatType}`);  

    if((meatType == "RARE") 
        && (gasStoveAnswer = "N") 
        && (grillAnswer = "Y") 
        && (36 <= kitchenTemperature <= 48)
        && (aspiratorAnswer = "Y")
        && (meatSize = funct21MeatSize.SMALL)); {

        alert(orderMessages.OK)
    }

    if((meatType == funct21MeatTemp.MEDIUM) 
        || (combirAnswer == "Y") 
        || (chefPcsAnswer = 5) 
        || (meatSize = funct21MeatSize.MEDIUM)
        || (chefNameAnswer == "Иван")) {

        alert(orderMessages.OK);
    }
        if((meatType == funct21MeatTemp.WELL_DONE)
       
        && ((closingHourAnswer = 22) 
        || (sauceChefName == "Петър" 
                              || "Радо"))
       
        && (kitchenSquareMeters = 45)
        || ((panAnswer = 3) 
        || (potAnswe = 2))) {

            alert(orderMessages.OK);
        }
        else {
            alert(orderMessages.NOT_OK);
            }
        }

if(func2Question == funct2MainAnswers.VEGGIE) {

    let veggieType = prompt("Изберете между: ВЕГЕТАРИАНСКО, ВЕГАНСКО, ПЕСКАТЕРИАНСКО")
    console.log(`Избрахте ${veggieType}`);

    if((veggieType == "ВЕГЕТАРИАНСКО")
      && 
      combirAnswer == "N" ||
      grillAnswer == "N" ||
      aspiratorAnswer == "N") {

      alert(orderMessages.OK);
    }

    if((veggieType == "ВЕГАНСКО")
      && refrigeratorAnswer == "Y" 
      && chefNameAnswer == "Манол" 
      && (3 < chefPcsAnswer < 11) 
      && waiterAnswer != 7)    {
      
      alert(orderMessages.OK); 
    }

    if((veggieType == "ПЕСКАТЕРИАНСКО")
      && 
        (grillAnswer == "Y"
        || addQuestionsFunc1 == "Y")
      && 
        ((kitchenCubature < 13) 
        || ((bankAnswer + dailyTurnoverAnswer) < 158000)))  {
        
        alert(orderMessages.OK); 
        }

    else {
        alert(orderMessages.NOT_OK);
        }
}

  
if(func2Question == funct2MainAnswers.DESSERT) {
   let dessertType = prompt("Изберете между: ТОРТА И СЛАДОЛЕД");

    if(((dessertType = "ТОРТА")
       && refrigeratorAnswer == "Y"
       && closingHourAnswer == "19"
       && aspiratorAnswer == "N"
       && (15000 < bankAnswer < 50000))
    || 
    (chefNameAnswer = "Румен")) {

        alert(orderMessages.OK); 
         }
    

    if(dessertType = "СЛАДОЛЕД") {
        let iceCreamType = prompt("Изберете между: ягода, банан и ванилия!");
    }
        if(iceCreamType = "ягода") {
            alert(orderMessages.OK); 
         }
    
    else {
        alert(orderMessages.NOT_OK);
    }
}
