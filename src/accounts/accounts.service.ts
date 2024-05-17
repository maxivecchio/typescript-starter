import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  private accounts = [];

  create(createAccountDto: CreateAccountDto) {
    const newAccount = { id: Date.now(), ...createAccountDto };
    this.accounts.push(newAccount);
    return newAccount;
  }

  findAll() {
    return this.accounts;
  }

  findOne(id: number) {
    const account = this.accounts.find(acc => acc.id === id);
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    const accountIndex = this.accounts.findIndex(acc => acc.id === id);
    if (accountIndex === -1) throw new NotFoundException('Account not found');
    const updatedAccount = { ...this.accounts[accountIndex], ...updateAccountDto };
    this.accounts[accountIndex] = updatedAccount;
    return updatedAccount;
  }

  remove(id: number) {
    const accountIndex = this.accounts.findIndex(acc => acc.id === id);
    if (accountIndex === -1) throw new NotFoundException('Account not found');
    this.accounts.splice(accountIndex, 1);
    return { message: 'Account removed successfully' };
  }
}