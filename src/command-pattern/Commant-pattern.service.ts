import { Service } from "../types/Service.ts";
import { AddCostumerCommand } from "./implementation/AddCustomerCommand.ts";
import { BlackAndWhite } from "./implementation/BlasckAndWhiteCommand.ts";
import { CompositeCommand } from "./implementation/CompositeCommand.ts";
import { CustomerService } from "./implementation/CostumerService.ts";
import { BoldCommand } from "./implementation/editor/BoldCommand.ts";
import { History } from "./implementation/editor/History.ts";
import { HtmlDocument } from "./implementation/editor/HtmlDocument.ts";
import { UndoCommand } from "./implementation/editor/UndoCommand.ts";
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

    console.log("-------------------");

    const history = new History();
    const document = new HtmlDocument();
    const undoCommand = new UndoCommand(history);
    const boldCommand = new BoldCommand(document, history);

    document.content = "Hello World!";
    console.log("Initial Content:", document.content);

    boldCommand.execute();
    console.log("After Bold Command:", document.content);
    undoCommand.execute();
    console.log("After Undo :", document.content);
  }
}
