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
  nombreParticipants:number;
nombreAdultes:number;
  name:       string;
  titre :string;
  typeEvent:       EVENT_TYPE;
}

export interface Event {
   id:number;
  date:Date;
  conducteur:string;
  debut :Time;
   fin:Time;
nombreParticipants:number;
nombreAdultes:number;
  name:string;
titre : string;
   typeEvent:EVENT_TYPE;
}

export interface PhysicalEvent extends Event{
  nombreHommes:number;
    nombreFemmes:number;
    nombreEnfants:number;
    connexions:number;


}

export interface Culte extends PhysicalEvent {

hommesIntercession:number;
femmesIntercession:number;
enfantsIntercession:number;
nouveauxHommes:number;
nouveauxFemmes:number;
enfantsMIJ:number;
conducteurIntercession:string;
moderatrice:string;

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
