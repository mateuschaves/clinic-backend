import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  createPatient(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientService.createPatient(createPatientDto);
  }
}
