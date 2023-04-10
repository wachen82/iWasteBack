import { Test, TestingModule } from '@nestjs/testing';
import { WasteTypeService } from './waste-type.service';

describe('WasteTypeService', () => {
  let service: WasteTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WasteTypeService],
    }).compile();

    service = module.get<WasteTypeService>(WasteTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
