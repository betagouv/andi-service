export class TrackingRequest {
  constructor(
    // tslint:disable-next-line: variable-name
    public _v: number,
    public timestamp: string,
    public order: number,
    // tslint:disable-next-line: variable-name
    public session_id: string,
    public page: string,
    public action: StepContext,
    public meta: any,
    // tslint:disable-next-line: variable-name
    public client_context = {},
    // tslint:disable-next-line: variable-name
    public server_context = {}
  ) {}
}

export enum StepContext {
  ARRIVAL = 'arrival',
  DEPART = 'departure',
  MAILTO = 'mailto',
  LINKTO = 'linkto',
  BILAN = 'bilan',
  TO_MATCHING = 'to_matching',
  QUESTION_ARRIVAL = 'question_arrival',
  QUESTION_DEPARTURE = 'question_departure',
  QUESTION_RESPONSE = 'question_response',
  MATCHING_SEARCH = 'matching_search',
  MATCHING_RESULTS = 'matching_results',
  MATCHING_ERROR = 'matching_error',
  MORE_RESULTS = 'more_results',
  RESULT_CLICK = 'result_click',
  GUIDANCE_CLICK = 'guidance_click'
}
