import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil} from "ngx-webcam";
import { Observable, Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-scan-document',
  templateUrl: './scan-document.component.html',
  styleUrls: ['./scan-document.component.css']
})
export class ScanDocumentComponent implements OnInit {
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;
  taken : boolean = false;
  webcamImage: WebcamImage|undefined;
  docType? :string;


  errors: WebcamInitError[] = [];
  //webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) =>{
        this.isCameraExist = mediaDevices && mediaDevices.length >0;
      });
    this.route.queryParams.subscribe(params => {
      this.docType = params['docType'];
    });

  }
  takeSnapshot(): void {
    this.trigger.next();
    this.taken = true;
  }
  onOffWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }
  handleInitError(error: WebcamInitError){
    this.errors.push(error);
  }
  changeWebcam(directionOrDeviceId: boolean | string){
    this.nextWebcam.next(directionOrDeviceId);
  }
  handleImage(webcamImage: WebcamImage){
    this.getPicture.emit(webcamImage);
    this.showWebcam = false;
    this.webcamImage = webcamImage;
  }
  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }
  resetPage(){
    this.taken = false;
    this.webcamImage = undefined;
    this.showWebcam = true;
  }
}
