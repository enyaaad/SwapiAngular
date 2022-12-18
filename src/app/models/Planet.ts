export class isNextPrev{
  next!:string;
  previous!:string
}
export type ResultsType = {
  planet:Planet[];
}
export class Planet{
  name!:string;
  residents?:ResidentLink[];
  diameter?:string;
  climate?:string;
  terrain?:string;
  population?:string;
}
export class ResidentLink{
  link?: string;
}
export class ResidentName{
  name?:string;
}
