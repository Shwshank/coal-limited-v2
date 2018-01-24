import { EventEmitter, Injectable, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable()
export class ProjectService {

  constructor() {}

  emitgraph1 :  EventEmitter<any> = new EventEmitter<any>();
  emitgraph2 :  EventEmitter<any> = new EventEmitter<any>();
  emitgraph3 :  EventEmitter<any> = new EventEmitter<any>();
  emitgraph4 :  EventEmitter<any> = new EventEmitter<any>();
  emitgraph5 :  EventEmitter<any> = new EventEmitter<any>();
  emitgraph6 :  EventEmitter<any> = new EventEmitter<any>();

}
