import {
  Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() dto: CreateClientDto) {
    return (this.clientsService as ClientsService & {
      create(dto: CreateClientDto): unknown;
    }).create(dto);
  }

  @Get()
  findAll() {
    return (this.clientsService as ClientsService & {
      findAll(): unknown;
    }).findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return (this.clientsService as ClientsService & {
      findOne(id: number): unknown;
    }).findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClientDto) {
    return (this.clientsService as ClientsService & {
      update(id: number, dto: UpdateClientDto): unknown;
    }).update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return (this.clientsService as ClientsService & {
      remove(id: number): unknown;
    }).remove(id);
  }
}