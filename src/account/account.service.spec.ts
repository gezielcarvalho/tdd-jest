import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService],
    }).compile();

    service = module.get<AccountService>(AccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getDepositFee should return expected value', () => {
    const expectedValue = 0.02;
    expect(service.getDepositFee()).toEqual(expectedValue);
  });

  it('getBalance should return account balance', () => {
    const expectedValue = 0;
    expect(service.getBalance()).toEqual(expectedValue);
  });

  it('deposit Should Increase Balance When Positive Amount', () => {
    const amount = 200.0;
    const depositFee = service.getDepositFee();
    const expectedValue = amount * (1 - depositFee);
    expect(service.deposit(amount)).toEqual(expectedValue);
  });

  it('deposit Should do nothing When Negative Amount', () => {
    const amount = -200.0;
    const expectedValue = 0.0;
    expect(service.deposit(amount)).toEqual(expectedValue);
  });
});
