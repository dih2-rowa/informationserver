import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'request-form',
  templateUrl: './request.component.html'
})
export class RequestComponent{
  @Input() requestJson;
  @Output() sendRequestEmitter: EventEmitter<string> = new EventEmitter<string>();


  sendRequest(event){
    this.sendRequestEmitter.emit(event);
  }
}
