export class PmsmpRequest {
  readonly _v: number = 1;
  _timestamp: string;
  _query_id: string;
  _session_id: string;
  address: Address;
  criteria: Criteria[];

  constructor(
    _timestamp: string,
    _query_id: string,
    _session_id: string,
    address: Address,
    criteria: Criteria[]
  ) {
    this._timestamp = _timestamp;
    this._query_id = _query_id;
    this._session_id = _session_id;
    this.address = address;
    this.criteria = criteria;
  }
}

export class Address {
  type: ADDRESS_TYPE.string | ADDRESS_TYPE.geoapigouv;
  value: string;

  constructor(
    type: ADDRESS_TYPE.string | ADDRESS_TYPE.geoapigouv,
    value: string
  ) {
    this.type = type;
    this.value = value;
  }
}

export class Criteria {
  type: CRITERIA_TYPE.distance | CRITERIA_TYPE.rome_codes;
  value: any; // optional
  priority: number;

  constructor(
    type: CRITERIA_TYPE.distance | CRITERIA_TYPE.rome_codes,
    value: number | RomeCode,
    priority: number
  ) {
    this.type = type;
    this.value = value;
    this.priority = priority;
  }
}

export class RomeCode {
  code: string;
  priority: number;
}

export enum ADDRESS_TYPE {
  string = 'string',
  geoapigouv = 'geoapigouv'
}

export enum CRITERIA_TYPE {
  distance = 'distance',
  rome_codes = 'rome_codes'
}
