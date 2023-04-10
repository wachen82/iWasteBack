import { Test, TestingModule } from '@nestjs/testing';
import { WasteTypeController } from './waste-type.controller';
import { WasteTypeService } from './waste-type.service';

describe('WasteTypeController', () => {
  let controller: WasteTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WasteTypeController],
      providers: [WasteTypeService],
    }).compile();

    controller = module.get<WasteTypeController>(WasteTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
