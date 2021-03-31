import { Test, TestingModule } from '@nestjs/testing';
import { StarstoreController } from './starstore.controller';

describe('StarstoreController', () => {
  let controller: StarstoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarstoreController],
    }).compile();

    controller = module.get<StarstoreController>(StarstoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
