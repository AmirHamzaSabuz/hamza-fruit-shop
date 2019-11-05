import { NotificationService } from './../../services/notification.service';
import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: [ './cart.component.css' ]
})
export class CartComponent implements OnInit {
	cart: Shopping[] = [];

	constructor(private cs: CartService, private notifyService: NotificationService) {}

	ngOnInit() {
		this.cs.getCart().subscribe((cart) => {
			this.cart = cart.map((shopping) => {
				return {
					id: shopping.payload.doc.id,
					...shopping.payload.doc.data()
				};
			});
		});
	}

	delete(index){
		this.cs.delete(this.cart[index].id);
	}

	save(index) {
		if(this.cart[index].amount >= .5) {
			this.cs.save(this.cart[index].id, this.cart[index].amount);
			this.notifyService.showToast("Saved successfully !!", "Thank you", "success")
		}
		else{
			this.notifyService.showToast("Amount can not be less than .5 kg", "Error", "error");
		}
	}

	/*

		showHtmlToaster() {
			this.notifyService.showHTMLMessage("<h2>Saved successfully !!</h2>", "Notification")
		}
	*/
}
