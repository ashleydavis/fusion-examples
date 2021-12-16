import { InjectableSingleton } from "@codecapers/fusion";

export const IDependency1_id = "IDependency1";

export interface IDependency1 {

    getMessage(): string;
    
}

@InjectableSingleton(IDependency1_id)
export class Dependency1 implements IDependency1 {
 
    getMessage(): string {
        return "Hello from dependency 1";
    }
}

// console.log("^^^^^^^^^^^^^^"); //fio:
// console.log(new Dependency1().getMessage()); //fio: