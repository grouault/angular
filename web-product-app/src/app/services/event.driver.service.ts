import {Injectable} from "@angular/core";
import {Subject} from "rxjs/index";
import {ActionEvent} from "../state/product.state";

/**
 * service dans lequel on va gérer la communication entre les composants
 * EventDriverService
 */
@Injectable({providedIn:"root"})
export class EventDriverService{

  sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();

  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  /**
   * permet de publier l'evenement vers le subject
   * tous les composants qui font un subscribe, recevront les évènements
   * @param {ActionEvent} event
   */
  publishEvent(event: ActionEvent){
    this.sourceEventSubject.next(event);
  }

}
