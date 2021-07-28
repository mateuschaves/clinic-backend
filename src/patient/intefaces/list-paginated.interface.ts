import { Patient } from '../patient.entity';

export interface ResponsePaginatedProps {
  data: Patient[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
