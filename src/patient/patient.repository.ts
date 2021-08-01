import { EntityRepository, Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { InternalServerErrorException } from '@nestjs/common';
import { ListPatientDto } from './dto/list-patient.dto';
import { ResponsePaginatedProps } from './intefaces/list-paginated.interface';
import { RemovePatientDto } from './dto/remove-patient.dto';

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async createPatient(createPatientDto: CreatePatientDto): Promise<Patient> {
    const { name, gender, birthdate, height, medication, weight } =
      createPatientDto;
    const patient = this.create();
    patient.name = name;
    patient.gender = gender;
    patient.birthdate = birthdate;
    patient.height = height;
    patient.medication = medication;
    patient.weight = weight;

    try {
      return await patient.save();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async listPatients(
    listPatientDto: ListPatientDto,
  ): Promise<ResponsePaginatedProps> {
    const { page = 1, take = 10 } = listPatientDto;
    const skip = (page - 1) * take;

    const patients = await this.findAndCount({
      order: { name: 'DESC' },
      take: take,
      skip: skip,
    });

    return this.paginateResponse(patients, page, take);
  }

  async removePatient(removePatientDto: RemovePatientDto): Promise<void> {
    const { id } = removePatientDto;

    await this.softDelete({
      id,
    });
  }

  paginateResponse(
    data: [Patient[], number],
    page: number,
    limit: number,
  ): ResponsePaginatedProps {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = +page + 1 > lastPage ? null : +page + 1;
    const prevPage = +page - 1 < 1 ? null : +page - 1;
    return {
      data: [...result],
      count: total,
      currentPage: Number(page),
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    };
  }
}
