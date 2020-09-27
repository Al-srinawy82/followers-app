import { SummaryPipe } from './summray.pipe';
import { AuthorsService } from './authors.service';
import { CoursesSevice } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { PiccoursesComponent } from './piccourses/piccourses.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgforTrackByComponent } from './ngfor-track-by/ngfor-track-by.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalOpratorComponent } from './safe-traversal-oprator/safe-traversal-oprator.component';
import { InputFormatDirective } from './input-format.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    PiccoursesComponent,
    PipesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    NgifComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgforTrackByComponent,
    NgStyleComponent,
    SafeTraversalOpratorComponent,
    InputFormatDirective,
    CustomDirectiveComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [CoursesSevice, AuthorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
