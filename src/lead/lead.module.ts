import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';

const moduleConfig = {
    imports: [
        ClientsModule.register([
            {
                name: 'KAFKA_SERVICE',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        brokers: [process.env.KAFKA_BROKER],
                    },
                    consumer: {
                        groupId: process.env.KAFKA_CONSUMER_GROUP,
                    }
                },
            },
        ]),
    ],
    controllers: [LeadController],
    providers: [LeadService],
};

@Module(moduleConfig)
export class AppModule { }