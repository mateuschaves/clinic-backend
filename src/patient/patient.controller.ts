import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';
import { ListPatientDto } from './dto/list-patient.dto';
import { ResponsePaginatedProps } from './intefaces/list-paginated.interface';
import { RemovePatientDto } from './dto/remove-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  createPatient(@Body() createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientService.createPatient(createPatientDto);
  }

  @Get('/')
  @UsePipes(ValidationPipe)
  listPatients(
    @Query() listPatientsDto: ListPatientDto,
  ): Promise<ResponsePaginatedProps> {
    return this.patientService.listPatients(listPatientsDto);
  }

  @Delete('/:id')
  @UsePipes(ValidationPipe)
  removePatient(@Param() removePatientDto: RemovePatientDto): Promise<void> {
    return this.patientService.removePatient(removePatientDto);
  }
}
