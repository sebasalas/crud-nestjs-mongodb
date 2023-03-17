import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crud_nestjs_mongodb'),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
