import  {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    name: string;
    age: number;

}
