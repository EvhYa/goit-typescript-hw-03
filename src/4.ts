//==============interfaces====================

interface IKey {
   signature: number;
   getSignature(): number;
}
interface IPerson {
   key: IKey;
   getKey(key: IKey): number;
}

//============absctact class==========================
abstract class House {
   public door = false;
   protected key = key;
   public tenants: IPerson[] = [];
   public comeIn(person: IPerson): void {
      if (this.door === true) {
         this.tenants = [...this.tenants, person];
      }
   }
}

//====================classes============================

class Key implements IKey {
   signature: number;
   constructor(signature: number = Math.random()) {
      this.signature = signature;
   }
   getSignature() {
      return this.signature;
   }
}

class Person implements IPerson {
   key: IKey;
   constructor(key: IKey) {
      this.key = key;
   }

   getKey() {
      return this.key.signature;
   }
}

class MyHouse extends House {
   constructor(key: IKey) {
      super();
      this.key = key;
   }
   public openDoor(key) {
      if (this.key.signature === key) {
         this.door = true;
      }
   }
}

//===================constants=====================

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

console.log(house.tenants);

export {};
