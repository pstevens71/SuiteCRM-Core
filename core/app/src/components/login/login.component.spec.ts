import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {LoginUiComponent} from './login.component';
import {ApiService} from '../../services/api/api.service';
import {LanguageFacade} from '@base/facades/language/language.facade';
import {languageFacadeMock} from '@base/facades/language/language.facade.spec.mock';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {systemConfigFacadeMock} from '@base/facades/system-config/system-config.facade.spec.mock';
import {SystemConfigFacade} from '@base/facades/system-config/system-config.facade';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
    let component: LoginUiComponent;
    let fixture: ComponentFixture<LoginUiComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            declarations: [LoginUiComponent],
            providers: [
                {provide: SystemConfigFacade, useValue: systemConfigFacadeMock},
                {provide: LanguageFacade, useValue: languageFacadeMock},
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginUiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async(inject([HttpTestingController],
        (router: RouterTestingModule, http: HttpTestingController, api: ApiService) => {
            expect(component).toBeTruthy();
        })));
});
