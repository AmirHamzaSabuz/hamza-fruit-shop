import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { NotificationService } from './../../services/notification.service';
import { CartService } from './../../services/cart.service';
import { Good } from './../../interfaces/good.interface';
import { GoodsService } from './../../services/goods.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit, OnDestroy {
	goods: Good[] = [];
	goodsObservable: Subscription;
	add: number = -1;

	constructor(
		private gs: GoodsService,
		private cs: CartService,
		private notifyService: NotificationService,
		private as: AuthService,
		private router: Router
	) {}

	ngOnInit() {
		this.goodsObservable = this.gs.getAllGoods().subscribe((data) => {
			this.goods = data.map((element) => {
				return {
					id: element.payload.doc.id,
					...element.payload.doc.data()
				};
			});
		});
	}

	addToCart(index) {
		if (this.as.userId) {
			this.add = +index;
		} else {
			this.router.navigate([ '/login' ]);
		}
	}

	buy(amount: number) {
		let selectedGood = this.goods[this.add];
		let data = {
			name: selectedGood.name,
			amount: +amount,
			price: selectedGood.price
		};

		if (data.amount >= 0.5) {
			this.cs.addToCart(data).then(() => (this.add = -1));
			this.notifyService.showToast('Saved successfully !!', 'Thank you', 'success');
		} else {
			this.add = -1;
			this.notifyService.showToast('Amount can not be less than .5 kg', 'Error', 'error');
		}
	}

	ngOnDestroy() {
		this.goodsObservable.unsubscribe();
	}
}
