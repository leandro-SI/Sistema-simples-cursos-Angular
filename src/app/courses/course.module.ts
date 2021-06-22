import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/component/start/star.component';
import { StartModule } from '../shared/component/start/start.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,

    ], imports: [
        FormsModule,
        CommonModule,
        StartModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
        ])
    ]
})
export class CourseModdule {

}