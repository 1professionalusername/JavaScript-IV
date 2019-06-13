


class Person {
   constructor(attributes) {
     this.age = attributes.age;
     this.name = attributes.name;
   }
   standUp(channel) {
       return `${this.name} announces to ${channel}, @channel standy times!`;
     }
 }

 class ProjectManager extends Person {
   constructor(pmAttributes) {
     super(pmAttributes);
   }
 }

 const sam = new ProjectManager({
   name: "Sam",
   age: "28",
 });

 console.log(sam.standUp("web21_Sam"));