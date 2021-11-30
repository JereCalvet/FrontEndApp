<!-- <div class="body">
    <div class="login">
        <mat-card>
            <img mat-card-image class="logo" src="./assets/img/programmer.png" alt="logo">
            <mat-card-title class="mat-title">Bienvenido</mat-card-title>
            <mat-card-subtitle class="mat-subheading-2">Ingresar para continuar.</mat-card-subtitle>
            <form [formGroup]="form" (ngSubmit)="login()">
                <mat-form-field class="ancho" appearance="fill">
                    <mat-label>Usuario</mat-label>
                    <input matInput formControlName="user" placeholder="jere.calvet@example.com">
                     <mat-error *ngIf="form.get('user').hasError('required')">
                        Email es <strong>requerido</strong>
                    </mat-error>
                </mat-form-field>
                <mat-form-field class="ancho" appearance="fill">
                    <mat-label>Contraseña</mat-label>
                    <input matInput formControlName="password" [type]="hide ? 'password' : 'text'">
                     <mat-error *ngIf="form.get('password').hasError('required')">
                        Contraseña es <strong>requerida</strong>
                    </mat-error>
                    <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Ocultar Contraseña'"
                        [attr.aria-pressed]="hide">
                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                    </button>
                </mat-form-field>
                <section class="remember-forgot">
                    <mat-checkbox>Recordame</mat-checkbox> <!-- [(ngModel)]="checked"
                    <a href="">Te olvidaste la Contraseña?</a>
                </section>
                <button mat-raised-button class="ancho" type="submit" [disabled]="form.invalid" color="primary">
                    Ingresar
                </button>
            </form>
            <br>
            <mat-divider>or</mat-divider>
            <br>
            <mat-card-actions>
                <button mat-raised-button class="ancho" color="primary">
                    <mat-icon aria-hidden="false" aria-label="Example home icon">google</mat-icon>
                    <i class="fab fa-google"></i>Login con Google
                </button>
                <button mat-raised-button class="ancho" color="primary">
                    <i class="fab fa-facebook-square"></i>Login con Facebook
                </button>
            </mat-card-actions>
        </mat-card>
    </div>
</div> -->


# FrontEndApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
