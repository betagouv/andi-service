export class PmsmpRequest {
  readonly _v: number = 1;
  _timestamp: string;
  _query_id: string;
  _session_id: string;
  address: Address;
  criteria: Criterion[];

  constructor(
    _timestamp: string,
    _query_id: string,
    _session_id: string,
    address: Address,
    criteria: Criterion[]
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

export class Criterion {
  priority: number;

  constructor(priority: number) {
    this.priority = priority;
  }
}

export class CriterionDistance extends Criterion {
  name = 'distance';
  distance_km: string;

  constructor(priority: number, distance_km: string) {
    super(priority);
    this.distance_km = distance_km;
  }
}

export class CriterionCodeRomes extends Criterion {
  name = 'rome_codes';
  rome_list: RomeCode[];
  exclude_naf: any[];

  constructor(priority: number, rome_list: RomeCode[], exclude_naf: any[]) {
    super(priority);
    this.rome_list = rome_list;
    this.exclude_naf = exclude_naf;
  }
}

export class RomeCode {
  id: string;
  include: boolean;
  exclude: boolean;

  constructor(id: string, include: boolean, exclude: boolean) {
    this.id = id;
    this.include = include;
    this.exclude = exclude;
  }
}

export enum ADDRESS_TYPE {
  string = 'string',
  geoapigouv = 'geoapigouv'
}
