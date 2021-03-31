import { Test, TestingModule } from '@nestjs/testing';
import { StarstoreService } from './starstore.service';

describe('StarstoreService', () => {
  let provider: StarstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarstoreService],
    }).compile();

    provider = module.get<StarstoreService>(StarstoreService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
