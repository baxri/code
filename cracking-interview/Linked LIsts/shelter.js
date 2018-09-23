

class Shelter {
    constructor() {
        this.shelter = []
        this.lastDog = null;
        this.lastCat = null;
    }

    addToShelter(animal) {

        let item = {
            animal: animal,
            next: null,
            nextDog: null,
            nextCat: null,
        }

        if (this.shelter.length > 0) {
            this.shelter[this.shelter.length - 1].next = this.shelter.length;
        }





        if (animal == 'dog') {

            if (this.lastDog !== null) {
                this.shelter[this.lastDog].nextDog = this.shelter.length;
            }

            this.lastDog = this.shelter.length;
        }

        if (animal == 'cat') {

            if (this.lastCat !== null) {
                this.shelter[this.lastCat].nextCat = this.shelter.length;
            }

            this.lastCat = this.shelter.length;
        }

        this.shelter.push(item);
    }

    get() {
        return this.shelter;
    }

}

let shelter = new Shelter();

shelter.addToShelter('dog');
shelter.addToShelter('cat');
shelter.addToShelter('dog');
shelter.addToShelter('cat');


console.log(shelter.get());