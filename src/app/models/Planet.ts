export type ResultsType = {
  planet:Planet[];
}
export class Planet{
  name?:string;
  residents?:ResidentLink[];
}
export class ResidentLink{
  link?: string;
}
export class ResidentName{
  name?:string;
}
