import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatButtonModule,
         MatCheckboxModule, 
         MatListModule,
         MatCardModule,
         MatInputModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatListModule,
        MatCardModule,
        MatInputModule
    ],
})
export class MaterialModule {}