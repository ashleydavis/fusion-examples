import { InjectableSingleton } from "@codecapers/fusion";

export const IDependency2_id = "IDependency2";

export interface IDependency2 {

    getMessage(): string;
    
}

@InjectableSingleton(IDependency2_id)
export class Dependency2 implements IDependency2 {
 
    getMessage(): string {
        return "Hello from dependency 2";
    }
}