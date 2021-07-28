import { IsNumberString } from 'class-validator';

export class ListPatientDto {
  @IsNumberString()
  take: number;

  @IsNumberString()
  page: number;
}
