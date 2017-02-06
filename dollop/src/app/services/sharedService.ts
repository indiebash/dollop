import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  constructor() {}

	private createVar(name: string, value: any) {
		this[name + "Source"] = new BehaviorSubject(value);
		this[name] = this[name + "Source"].asObservable();
		return this[name];
	}

	setVar(name: string, value: any){
		if(typeof this[name + "Source"] !== 'undefined'){
			this[name + "Source"].next(value);
		}
		else{
			this.createVar(name, value);
		}
		return this[name];
	}

	getVar(name: string){
		if(typeof this[name + "Source"] !== 'undefined'){
			return this[name];
		}else{
			return this.createVar(name, null);
		}
	}

	getValue(name: string){
		return this[name + "Source"];
	}

}
