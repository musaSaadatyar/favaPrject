import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  hamburgerClass: boolean = false;
  public $hamburgerClass = new BehaviorSubject(false);



  toggleHamburgerClass() {
    let classHandler = this.$hamburgerClass.getValue();
    this.$hamburgerClass.next(!classHandler);
    this.hamburgerClass = !this.hamburgerClass
    return this.hamburgerClass;
  }

  public setToDate(fromDate: any){
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(fromDate, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
  }

  public createLazyUrl(lazyUrl: string | [string, string], id?: number | string): string {
    let suffixUrl = id !== '' ? `${id}/` : ``;
    if (lazyUrl instanceof Array) {
      return `${lazyUrl[0]}/${suffixUrl}${lazyUrl[1]}`;
    }
    return `${lazyUrl}/${suffixUrl}`;
  }


  public getStatus(
    statusList: any[],
    status: number|boolean ,
    uniqueValue = 'id' ,
    targetValue = 'topic'): string
  {
    let statusType = statusList.find(item => item[uniqueValue] === status);
    return statusType[targetValue];
  }


  public getSeverity(
    severityList: any[],
    status: number|boolean ,
    uniqueValue = 'id' ,
    targetValue = 'topic'): string
  {
    let severityType = severityList.find(item => item[uniqueValue] === status);
    return severityType[targetValue];
  }

  public disableHeaderSelectionInTreeSelect(values:any) {
    if (values) {
      return values.filter((items:any) => items.leaf === true);
    }
  }

  public minDateChangeHandler(event: any , minDate: string , periodObj: Record<string, string>): void
  {
    periodObj[minDate] = event?.toISOString() ?? '';
  }

  public maxDateChangeHandler(event: any , maxDate: string ,  periodObj: Record<string, string>): void
  {
    const temp = new Date(event?.toString());
    temp?.setDate(temp?.getDate() + 1);
    periodObj[maxDate] = temp?.toISOString() ?? '';
  }

  public setQueryParams(key: string, arr:any): string {
      arr = arr.map(encodeURIComponent);
      return key + '=' + arr.join('&' + key + '=');
  }


  public getTime(dateTime: string| number): string
  {
    return new Date(dateTime)
      .toLocaleTimeString('fa-IR')
  }

  public getShamsiDate(dateTime: string | number): string
  {
    return new Date(dateTime)
      .toLocaleDateString('fa-IR');
  }

  public getTimeOfDateString(dateTime: string | number): string {
    return new Date(dateTime)
      .toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hour12: false });
  }

  public padNumber(myNumber: number): string
  {
    let myString = myNumber.toString();

    while(myString.length < 4) {
      myString = "0" + myString;
    }

    return myString;
  }

  public setKeyToTreeNodes(node:any , prefix = ''): TreeNode[] {
    node.forEach((data: any , index: number) => {
      data.key = `${ prefix === '' ? `${this.padNumber(index)}`  : `${prefix}-${this.padNumber(index)}` }`;
      if (data?.children?.length > 0) {
        this.setKeyToTreeNodes(data.children , data.key);
      }
    });

    return node;
  }




  public combineDateWithTime(dateValue: string, timeValue: string): string {
    const date = new Date(dateValue);
    const timeParts = timeValue?.split(':');
    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1]);

    date.setHours(hours);
    date.setMinutes(minutes);

    return date.toISOString();
  }


}
