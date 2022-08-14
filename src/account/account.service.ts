import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  private DEPOSIT_FEE_PERCENTAGE = 0.02;
  private balance = 0;

  public getDepositFee = () => {
    return this.DEPOSIT_FEE_PERCENTAGE;
  };

  public getBalance = () => {
    return this.balance;
  };

  public deposit = (amount: number) => {
    return amount > 0.0
      ? (this.balance += amount * (1 - this.DEPOSIT_FEE_PERCENTAGE))
      : 0.0;
  };
}
