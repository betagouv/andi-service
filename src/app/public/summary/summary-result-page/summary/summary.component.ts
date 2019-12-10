import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import {
  IHash,
  SurveyStepperSharedService
} from 'src/app/core/services/survey-stepper.shared.service';
import { AddressSuggestionResponse } from 'src/models/address-suggestion-response';

@Component({
  selector: 'andi-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  currentStateForm: IHash = {};

  addressCtrl = new FormControl();
  adrSuggestions: any;
  errorMsg: string;

  constructor(
    private http: HttpClient,
    private pmsmpService: PmsmpService,
    private surveyStepperSharedService: SurveyStepperSharedService
  ) {}

  ngOnInit() {
    this.currentStateForm = this.surveyStepperSharedService.stateForm;
    this.addressCtrl.setValue(this.currentStateForm.address);
    this.enableAutocomplete();
  }

  enableAutocomplete() {
    this.addressCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.adrSuggestions = [];
        }),
        switchMap(saisie => {
          const parameters = new HttpParams()
            .set('q', saisie !== '' ? saisie : ' ')
            .set('limit', '5')
            .set('type', 'housenumber')
            .set('autocomplete', '1');
          return this.http.get<AddressSuggestionResponse>(
            'https://api-adresse.data.gouv.fr/search',
            {
              params: parameters
            }
          );
        })
      )
      .subscribe((suggestions: any) => {
        if (suggestions !== undefined && suggestions.features.length === 0) {
          this.errorMsg = 'Aucune addresse trouvée !';
          this.adrSuggestions = [];
        } else {
          this.errorMsg = '';
          this.adrSuggestions = suggestions.features;
        }
      });
  }

  loadPmsmpList(userRequest) {
    this.pmsmpService
      .getPmsmpList(userRequest.adress, userRequest.job, userRequest.range)
      .subscribe(pmsmpListFound => {
        this.pmsmpService.pmsmpResult.next(pmsmpListFound);
      });
  }
}
