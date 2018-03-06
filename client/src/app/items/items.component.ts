import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private item: ItemService) { }

  ngOnInit() {
  }

  onSubmit(itemForm) {
    const { valid, value } = itemForm;
    if (valid) {
      this.item.add(value).subscribe(res => {
        console.log(res);
        alert('item added');
      });
    }
  }

}
