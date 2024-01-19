export interface EventHistory {
  currentPage: number;
  totalPages:  number;
  pageSize:    number;
  eventsDTOs:  EventsDTO[];
}

export interface EventsDTO {
  id:         number;
  date:       Date;
  conducteur: string;
  debut:      string;
  fin:        string;
  name:       string;
  type:       null;
}
