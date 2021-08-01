import { IsNumberString, IsNotEmpty } from 'class-validator';

export class RemovePatientDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
