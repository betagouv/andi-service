export class RomeSuggestionResponse {
  readonly _v: number = 1;
  _timestamp: string;
  _query_id: string;
  _session_id: string;
  data: RomeSuggestion[];

  constructor(options: {
    _timestamp: string;
    _query_id: string;
    _session_id: string;
    data: RomeSuggestion[];
  }) {
    this._timestamp = options._timestamp;
    this._query_id = options._query_id;
    this._session_id = options._session_id;
    this.data = options.data;
  }
}

export class RomeSuggestion {
  id: string;
  label: string;
  value: string;
  occupation: string;
  score: string;

  constructor(
    id: string,
    label: string,
    value: string,
    occupation: string,
    score: string
  ) {
    this.id = id;
    this.label = label;
    this.value = value;
    this.occupation = occupation;
    this.score = score;
  }
}
