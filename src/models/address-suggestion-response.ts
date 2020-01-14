export class AddressSuggestionResponse {
  addressSuggestions: AddressSuggestion[];

  constructor(addressSuggestions: AddressSuggestion[]) {
    this.addressSuggestions = addressSuggestions;
  }
}

export class AddressSuggestion {
  constructor(id: string, label: string) {}
}

export class FeatureCollection {
  constructor(
    public type: string,
    public version: string,
    public attribution: string,
    public licence: string,
    public query: string,
    public limit: number,
    public features: Feature[]
  ) {}
}

export class Feature {
  constructor(
    public type: string,
    public geometry: GeoPoint,
    public properties: GeoProperty
  ) {}
}

export class GeoPoint {
  constructor(public type: string, public coordinates: number[]) {}
}

export class GeoProperty {
  constructor(
    public label: string,
    public score: number,
    public housenumber: string,
    public id: string,
    public type: string,
    public name: string,
    public postcode: string,
    public citycode: string,
    public x: number,
    public y: number,
    public city: string,
    public context: string,
    public importance: number,
    public street: string
  ) {}
}
