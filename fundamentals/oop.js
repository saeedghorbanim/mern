class Olympian {
    constructor(nameInput, energyLevelInput, countryInput){
        //properties to instantiate an Olympian with
        this.name = nameInput;
        this.energy = energyLevelInput;
        this.country = countryInput;
    }

    competeInSport(){
        this.energy -= 10;
        return this;
    }

    //when we do a return this in a method, we can chain call 
    //(calling it back to back in the same line) it on an object
    takeIceBathRecovery(){
        this.energy = 100;
        return this;
    }

    displayStats(){
        // console.log(`${this.constructor.name}: ${this.name}, \n Energy Level: ${this.energy}, \n Country: ${this.country} `)


        // console.log("***********************---->" + this.constructor.name)
        // console.log(this.verticalJumpHeight)

        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
        return this;
    }

}

class Swimmer extends Olympian{
    constructor(nameInput, countryInput, swimSpeedInput){
        super(nameInput, 100, countryInput);
        this.swimSpeed = swimSpeedInput;
    }
}


class BasketballPlayer extends Olympian{
    constructor(nameInput, countryInput, verticalJumpHeightInput){
        super(nameInput, 80, countryInput);
        this.verticalJumpHeight = verticalJumpHeightInput;
    }

    celebrateAndRecoverEnergy(){
        console.log("Team USA is the best! If we didnt get gold, then im out")
        console.log("lets party!!!")
        this.energy -= 30;

        super.takeIceBathRecovery() //you can also use this.takeIceBathRecovery()


    }


}




//instances of Olympaian class below (Olympian objects)
const bolt = new Olympian("Usain Bolt", 100, "Jamaica")
// const kd = new Olympian("Kevin Durant", 80, "USA")
const megan = new Olympian("Megan Rapinoe", 80, "USA")



// bolt.competeInSport().competeInSport().competeInSport()
// bolt.takeIceBathRecovery()
// bolt.displayStats()

const phelps = new Swimmer("Michael Phelps", "USA", 6);
const kd = new BasketballPlayer("Kevin Durant", "USA", 33.5)
console.log(phelps)
console.log(kd)

kd.competeInSport().displayStats()
console.log("**************")



kd.celebrateAndRecoverEnergy()
kd.displayStats()