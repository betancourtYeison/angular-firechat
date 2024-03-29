import { Component } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public _chatService: ChatService) {}
}
