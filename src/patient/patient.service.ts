import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientRepository } from './patient.repository';
import { CreatePatientDto } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { ListPatientDto } from './dto/list-patient.dto';
import { ResponsePaginatedProps } from './intefaces/list-paginated.interface';
import { RemovePatientDto } from './dto/remove-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientRepository)
    private patientRepository: PatientRepository,
  ) {}

  createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
    return this.patientRepository.createPatient(createPatientDto);
  }

  listPatients(
    listPatientDto: ListPatientDto,
  ): Promise<ResponsePaginatedProps> {
    return this.patientRepository.listPatients(listPatientDto);
  }

  removePatient(removePatientDto: RemovePatientDto): Promise<void> {
    return this.patientRepository.removePatient(removePatientDto);
  }
}
