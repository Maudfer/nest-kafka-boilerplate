import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LeadService {
  private prisma = new PrismaClient();

  async createLead(name: string, email: string, score: number) {
    const LeadFactory = this.prisma.lead;

    const lead = LeadFactory.create({
      data: {
        name,
        email,
        score,
      },
    });

    return lead;
  }
  
}