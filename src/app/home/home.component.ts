import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

    itemCount:number;
    projectText:string="";
    project=[];

    addItem(){
      if(this.projectText!=""){
        this.project.push(this.projectText);
        this.projectText='';
        this.itemCount=this.project.length;}
      
      else{
        alert("Please Enter Your Task :)")}
    }

    removeItem(i){
      this.project.splice(i,1);
      this.itemCount=this.project.length;}

  constructor() { }

  ngOnInit(): void {
    this.itemCount=this.project.length;
  }

}
