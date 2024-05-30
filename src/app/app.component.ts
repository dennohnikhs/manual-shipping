import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShippingSetupComponent } from "./shipping-setup/shipping-setup.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShippingSetupComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
