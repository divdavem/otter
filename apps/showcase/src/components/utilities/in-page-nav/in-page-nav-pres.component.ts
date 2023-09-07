import { AfterViewInit, ChangeDetectionStrategy, Component, Directive, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { O3rComponent } from '@o3r/core';

export interface InPageNavLink {
  id: string;
  label: string;
  scrollTo: (e: MouseEvent) => void;
}

@Directive({
  selector: 'h2[id]',
  standalone: true
})
export class InPageNavLinkDirective implements InPageNavLink, AfterViewInit {
  /** HTML id of the h2 */
  public id: string = '';

  /** InnerText of the h2 */
  public label: string = '';

  private nativeElement: HTMLElement;

  constructor({ element }: ViewContainerRef) {
    this.nativeElement = element.nativeElement;
  }

  public ngAfterViewInit() {
    this.id = this.nativeElement.id;
    this.label = this.nativeElement.innerText;
  }

  /**
   * Scroll to the h2 HTML element
   *
   * @param e mouse event
   */
  public scrollTo(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

@O3rComponent({ componentType: 'Component' })
@Component({
  selector: 'o3r-in-page-nav-pres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './in-page-nav-pres.template.html',
  styleUrls: ['./in-page-nav-pres.style.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InPageNavPresComponent {
  /** Id of the scroll spy */
  @Input()
  public id = 'in-page-nav';

  /** List of links */
  @Input()
  public links: InPageNavLink[] = [];
}

export const IN_PAGE_NAV_PRES_DIRECTIVES = [
  InPageNavPresComponent,
  InPageNavLinkDirective
] as const;