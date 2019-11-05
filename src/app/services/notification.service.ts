import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig  } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	options: IndividualConfig;

	constructor(private toastr: ToastrService) {
		this.options = this.toastr.toastrConfig;
	}

	showToast(message, title, type) {
		this.toastr.show(message, title, this.options, 'toast-' + type);
	}

	/*

		showSuccess(message, title) {
			this.toastr.success(message, title);
		}

		showError(){
			this.toastr.error();
		}

		showHTMLMessage(message, title){
			this.toastr.success(message, title, {
				enableHtml :  true
			})
		}

		showSuccessWithTimeout(message, title, timespan){
			this.toastr.success(message, title ,{
				timeOut :  timespan
			})
		}
	*/
}
