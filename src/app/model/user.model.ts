export class User{
  id!:number;
  username!:string;
  password!:string;
  role!:USER_ROLE;
}

export enum USER_ROLE{
  STAR='STAR',
  REFERENT='REFERENT',
  BERGER='BERGER'
}
