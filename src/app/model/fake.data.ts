import { USER_ROLE, User } from "./user.model";

export const userList:User[] = [
  {
    id: 1,
    username:'star',
    password:'2024',
    role:USER_ROLE.STAR

  },
  {
    id: 2,
    username:'referent',
    password:'2024',
    role:USER_ROLE.REFERENT

  },
  {
    id: 3,
    username:'berger',
    password:'2024',
    role:USER_ROLE.BERGER

  }
]
