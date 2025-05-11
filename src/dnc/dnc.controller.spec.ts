import { Test, TestingModule } from '@nestjs/testing';
import { DncController } from './dnc.controller';

describe('DncController', () => {
  let controller: DncController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DncController],
    }).compile();

    controller = module.get<DncController>(DncController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
