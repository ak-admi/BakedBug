import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myResume';
  hamburger :Element | null | undefined;
  navBar:Element | null | undefined;
  navBarActive:Element | null | undefined;
  navigationHead:any | undefined;

  navBardropdown(){
    this.navBar=document.querySelector(".fixed");
    this.navBar?.classList.toggle("active");
  }

  navBaractive(){
    this.navigationHead=document.getElementsByClassName('navigation-head');
    this.navigationHead.classList.remove('active');


    
    // this.navigationHead= document.getElementById("nav-link");
    // if(this.navigationHead.length){
    //   this.navigationHead.array.forEach((head: any) => {
    //     head.addEventListener('click',(e:any)=>{
    //       this.navigationHead.array.forEach((head: any) => {
    //         head.classList.remove('active');
    //       });
    //       e.preventDefault();
    //       head.classList.add('active');
    //     }) 
    //   });
    // }
  }




}
