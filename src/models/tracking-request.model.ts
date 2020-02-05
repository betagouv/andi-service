export class TrackingRequest {
  constructor(
    public timestamp: string,
    public order: number,
    public session_id: string,
    public page: string,
    public action: StepContext,
    public meta: any,
    public client_context = {},
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
  MORE_RESULTS = 'more_results',
  RESULT_CLICK = 'result_click',
  GUIDANCE_CLICK = 'guidance_click'
}
