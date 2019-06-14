import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailedOrderComponent } from './detailed-order/detailed-order.component';
import { AppRoutingModule } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveformComponent,
    CustomersComponent,
  OrdersComponent,
    NavbarComponent,
    PagenotfoundComponent,
    DetailedOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
