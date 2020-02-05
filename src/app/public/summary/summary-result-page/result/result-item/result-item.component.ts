import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/models/pmsmp-result';
import { Router } from '@angular/router';

@Component({
  selector: 'andi-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() pmsmpItem: Data;
  contact = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchEngine() {
    this.router.navigateByUrl('http://www.google.fr/search?q=' + this.pmsmpItem.name + this.pmsmpItem.address);
  }

  redirectCompanyInfo() {
    this.router.navigateByUrl('http://entreprise.data.gouv.fr/etablissement/' + this.pmsmpItem.siret);
  }

  switchContactBtn() {
    this.contact = !this.contact;
  }

}
