import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  items: any[];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  async confirmDelete(item: any): Promise<void> {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this item!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      });

      if (result.isConfirmed) {
        await this.deleteItem(item);
        Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
      } else {
        Swal.fire('Cancelled', 'Your item is safe :)', 'info');
      }
    } catch (error) {
      console.error('Error during deletion:', error);
    }
  }

  async deleteItem(item: any): Promise<void> {
    try {
      await this.itemService.deleteItem(item);
      this.items = this.itemService.getItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
}

