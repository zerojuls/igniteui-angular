import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    NgModule,
    Output
} from '@angular/core';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxIconModule } from '../icon/index';

let NEXT_ID = 0;
/**
 * **Ignite UI for Angular Navbar** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)
 *
 * The Ignite UI Navbar is most commonly used to provide an app header with a hamburger menu and navigation
 * state such as a "Go Back" button. It also supports other actions represented by icons.
 *
 * Example:
 * ```html
 * <igx-navbar title="Sample App" actionButtonIcon="menu">
 *   <igx-icon name="search"></igx-icon>
 *   <igx-icon name="favorite"></igx-icon>
 *   <igx-icon name="more_vert"></igx-icon>
 * </igx-navbar>
 * ```
 */

@Component({
    selector: 'igx-navbar',
    templateUrl: 'navbar.component.html'
})

export class IgxNavbarComponent {
    private static NEXT_ID = 1;
    private isVisible = true;

    /**
     *An @Input property that sets the value of the `id` attribute. If not provided it will be automatically generated.
     *```html
     *<igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
     *```
     */
    @HostBinding('attr.id')
    @Input()
    public id = `igx-navbar-${NEXT_ID++}`;
    /**
     *Returns whether the `IgxNavbarComponent` action button is visible, true/false.
     *```typescript
     *@ViewChild("MyChild")
     *public navBar: IgxNavbarComponent;
     *ngAfterViewInit(){
     *    let actionButtonVisibile = this.navBar.isActionButtonVisible;
     *}
     *```
     */
    @Input()
    public get isActionButtonVisible(): boolean {
        if (!this.actionButtonIcon) {
            return false;
        }
        return this.isVisible;
    }

    /**
     *Sets whether the action button of the `IgxNavbarComponent` is visible.
     *```html
     *<igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
     *```
     */
    public set isActionButtonVisible(value: boolean) {
        this.isVisible = value;
    }
    /**
     *An @Input property that sets the icon of the `IgxNavbarComponent`.
     *```html
     *<igx-navbar [title]="currentView" actionButtonIcon="arrow_back"></igx-navbar>
     *```
     */
    @Input() public actionButtonIcon: string;

    /**
     *An @Input property that sets the title of the `IgxNavbarComponent`.
     *```html
     *<igx-navbar title="Sample App" actionButtonIcon="menu">
     *```
     */
    @Input() public title: string;

    /**
     *The event that will be thrown when the action is executed,
     *provides reference to the `IgxNavbar` component as argument
     *```typescript
     *public actionExc(event){
     *    alert("Action Execute!");
     *}
     * //..
     *```
     *```html
     *<igx-navbar (onAction)="actionExc($event)" title="Sample App" actionButtonIcon="menu">
     *```
     */
    @Output() public onAction = new EventEmitter<IgxNavbarComponent>();

    /**
     *An @Input property that sets the titleId of the `IgxNavbarComponent`. If not set it will be automatically generated.
     *```html
     *<igx-navbar [titleId]="'igx-navbar-7'" title="Sample App" actionButtonIcon="menu">
     *```
     */
    @Input()
    public titleId = `igx-navbar-${IgxNavbarComponent.NEXT_ID++}`;

    /**
     *@hidden
     */
    public _triggerAction() {
        this.onAction.emit(this);
    }
}
    /**
     *The IgxNavbarModule provides the {@link IgxNavbarComponent} inside your application.
     */
@NgModule({
    declarations: [IgxNavbarComponent],
    exports: [IgxNavbarComponent],
    imports: [IgxButtonModule, IgxIconModule, CommonModule]
})
export class IgxNavbarModule {
}
