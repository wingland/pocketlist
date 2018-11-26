export class Context {
  id: string;
  name: string;
  virtual: boolean;
  geo?: Geolocation;
  nicknames: string[];
  parentContext?: Context;
}
