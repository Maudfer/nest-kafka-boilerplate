import { Controller, Post, Body } from '@nestjs/common';
import { LeadService } from './lead.service';

@Controller('leads')
export class LeadController {
  private leadService: LeadService;

  constructor(leadService: LeadService) {
    this.leadService = leadService;
  }

  @Post()
  createLead(@Body() body: { name: string; email: string; score: number }) {
    return this.leadService.createLead(body.name, body.email, body.score);
  }
}