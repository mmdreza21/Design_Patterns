import { Service } from "../types/Service.ts";
import { AddCostumerCommand } from "./implementation/AddCustomerCommand.ts";
import { BlackAndWhite } from "./implementation/BlasckAndWhiteCommand.ts";
import { CompositeCommand } from "./implementation/CompositeCommand.ts";
import { CustomerService } from "./implementation/CostumerService.ts";
import { Button } from "./implementation/FX/Button.ts";
import { ResizeCommand } from "./implementation/ResizaCommand.ts";

export class CommandPattern implements Service {
  static test(): void {
    const service = new CustomerService();
    const command = new AddCostumerCommand(service);
    const button = new Button(command);
    button.click();

    console.log(" -------- ");

    const composite = new CompositeCommand();
    composite.add(new ResizeCommand());
    composite.add(new BlackAndWhite());
    composite.execute();
    composite.execute();
  }
}
