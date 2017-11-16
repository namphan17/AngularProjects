import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address: Address;
  hobbies:string[];
  isEdit:false;

  post:Post[];

  constructor(private dataService:DataService) {
    console.log("constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...");
    this.name = "Quynh Huong";
    this.age = 20;
    this.email = "test@test.com";
    this.address = {
      street:"810 Commons Circle SW 1098",
      city:"Mount Vernon",
      state: "IA"
    }
    this.hobbies = ["Playing Piano", "Singing", "Reading books"];

    this.dataService.getPosts().subscribe((posts)=> {
      this.posts = posts;
    });
  }
  onClick() {
    this.name = "Queen Bee";
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i,1);
      }
    }
    console.log(hobby);
  }
  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
interface Address{
    street:string,
    city:string,
    state:string
}
interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}
