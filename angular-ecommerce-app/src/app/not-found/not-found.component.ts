import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ChevronRight, LucideAngularModule } from "lucide-angular";

@Component({
    selector: 'app-not-found',
    imports: [RouterLink, LucideAngularModule],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
    readonly ChevronRight = ChevronRight
}