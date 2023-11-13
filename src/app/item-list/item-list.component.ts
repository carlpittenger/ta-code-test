import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
    itemList = [
        { name: 'apple', link: '/apple' },
        { name: 'cake', link: '/cake' },
        { name: 'steak', link: '/steak' },
    ];
}
