import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserService } from 'app/core/user/user.service';
import { map, catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authenticated: boolean = false;
    private _httpClient = inject(HttpClient);
    private _userService = inject(UserService);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any> {
        const url = `${environment.apiUrl}/v1/auth/sign-in`;
        if (this._authenticated) {
            return throwError(() => new Error('User is already logged in.'));
        }

        return this._httpClient
            .post(url, credentials, { withCredentials: true })
            .pipe(
                switchMap((response: any) => {
                    // Store the access token in the local storage
                    //this.accessToken = response.accessToken;

                    // Set the authenticated flag to true
                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = response.data;
                    // Return a new observable with the response
                    return of(response);
                })
            );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<boolean> {
        return this._httpClient
            .post<any>(
                `${environment.apiUrl}/v1/auth/verify-session`,
                {},
                { withCredentials: true }
            )
            .pipe(
                switchMap((response: any) => {
                    if (response && response.success) {
                        this._authenticated = true;
                        this._userService.user = response.data;
                        return of(true);
                    } else {
                        this._authenticated = false;
                        return of(false);
                    }
                }),
                catchError((error) => {
                    console.error('Verification failed:', error);
                    this._authenticated = false;
                    return of(false);
                })
            );
    }

    /**
     * Sign out
     */
    signOut(): Observable<boolean> {        
        return this._httpClient
            .post<any>(
                `${environment.apiUrl}/v1/auth/sign-out`,
                {},
                { withCredentials: true }
            )
            .pipe(
                map(response => {                    
                    if (response.success) {                        
                        this._authenticated = false;
                        return true;
                    } else {                        
                        return false;
                    }
                }),
                catchError(error => {                    
                    return of(false);
                })
            );
      }
      

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: {
        name: string;
        email: string;
        password: string;
        company: string;
    }): Observable<any> {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: {
        email: string;
        password: string;
    }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {        
        if (this._authenticated) {
            return of(true);
        }

        return this.signInUsingToken();
    }
}
