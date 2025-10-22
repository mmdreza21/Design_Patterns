import { CustomerService } from "./CostumerService.ts";
import type { ICommand } from "./FX/ICommand.ts";

export class AddCostumerCommand implements ICommand {
  private service: CustomerService;

  constructor(service: CustomerService) {
    this.service = service;
  }

  execute(): void {
    this.service.AddCostumer();
  }
}
