import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CommonService {

    constructor(){}

    // callback

    // promise

    promiseData(){
        return new Promise(
            (resolve =>{
                setTimeout(() => {
                    const username ='momo-Promise';
                    resolve(username);
                },2000);
            }));
        
    }

    // async await

     /*
     const promiseData = this.commonservice.promiseData();
   
      promiseData.then((data) => {
        console.log('promise momo using asynchron await'+data);
    */
    // rexjs , observable

    rexjsData(){
        return new Observable(
            (observer =>{
                setTimeout(() => {
                    const username ='momo-Rexjs';
                    observer.next(username);
            },3000)
      
    }));
    }

    /*
  const rexjsData = this.commonservice.rexjsData();
  rexjsData.subscribe((data) => {
    console.log('rexjs momo using asynchron await'+data);

    */
}