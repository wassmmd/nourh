import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
  })

  export class UploadSrvice {
    dette : string = 'http://localhost:8031/api'

    constructor(private http: HttpClient) {}

     //POST
     fileDetails (formData:FormData) : any {
      return this.http.post(this.dette+'/etl/upload-data',formData).toPromise();
  }

  apiUrl = 'https://api.backblazeb2.com/b2api/v2';
  accountId = 'YOUR_ACCOUNT_ID';
  applicationKey = 'ad29ec234a82';

  uploadFile(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic ' + btoa(`${this.accountId}:${this.applicationKey}`))
        .append('Content-Type', 'b2/x-auto')
        .append('bucketId', '0afdf249eeacf22384da0812')
        .append('X-Bz-File-Name', file.name)
        .append('X-Bz-Content-Sha1', 'do_not_verify'); // You can compute the SHA1 hash of the file content for security purposes.

      this.http.post(`${this.apiUrl}/b2_get_upload_url`, { bucketId: '0afdf249eeacf22384da0812' })
        .subscribe((response: any) => {
          console.log(response)
          const uploadUrl = response.uploadUrl;
          const uploadAuthorizationToken = response.authorizationToken;

          this.http.post(uploadUrl, file, { headers: headers })
            .subscribe(resolve, reject);
        }, reject);
    });
  }


  }