import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'andi-shortcut-card',
  templateUrl: './shortcut-card.component.html',
  styleUrls: ['./shortcut-card.component.scss']
})
export class ShortcutCardComponent implements OnInit {
  @Input() image = '';
  @Input() label = '';

  constructor() { }

  ngOnInit() {
  }
}
