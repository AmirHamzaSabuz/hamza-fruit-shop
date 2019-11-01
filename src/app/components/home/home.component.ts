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

	constructor(private gs: GoodsService) {}

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

	addToCart(id) {
		console.log('added', id);
	}

	ngOnDestroy() {
		this.goodsObservable.unsubscribe();
	}
}
