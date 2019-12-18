export class AddressSuggestionResponse {
  addressSuggestions: AddressSuggestion[];

  constructor(addressSuggestions: AddressSuggestion[]) {
    this.addressSuggestions = addressSuggestions;
  }
}

export class AddressSuggestion {
  constructor(id: string, label: string) {}
}
