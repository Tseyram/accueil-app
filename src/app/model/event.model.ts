import { Time } from "@angular/common";

export interface EventHistory {
  currentPage: number;
  totalPages:  number;
  pageSize:    number;
  eventsDTOs:  PhysicalEvent[];
}

export interface EventsDTO {
  id:         number;
  date:       Date;
  conducteur: string;
  debut:      Time;
  fin:        Time;
  name:       string;
  type:       EVENT_TYPE;
}

export interface Event {
   id:number;
  date:Date;
  conducteur:string;
  debut :Time;
   fin:Time;

  name:string;

   type:EVENT_TYPE;
}

export interface PhysicalEvent extends Event{
  nombreHommes:number;
    nombreFemmes:number;
    nombreEnfants:number;
    connexions:number;


}

export interface Culte extends PhysicalEvent {

}
export enum EVENT_TYPE{
  CULTE='CULTE',
  MHI='MHI',
  MFI='MFI',
  MJI='MJI',
  BAPTEME='BAPTEME',
  SEMINAIRE='SEMINAIRE',
  MCEP='MCEP',
  CORPORATE='CORPORATE',
  AUTRE='AUTRE',
  MIJ='MIJ',
  TPA='TPA',
  ONLINE='ONLINE',
  STAR='STAR',
  BIENVENUE='BIENVENUE'
}
