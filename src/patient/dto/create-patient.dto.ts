import { IsNotEmpty, IsString, IsIn, IsNumber, IsDate, IsDateString } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsIn(['male', 'female'])
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  medication: string;
}
