import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name=''
  @Input() status=''
  @Input() url = ''
  onlineStatus = 'Online';
  isOnline = false;

  toggleOnlineStatus() {
    this.isOnline = !this.isOnline;
    this.onlineStatus = this.isOnline ? 'Offline' : 'Online';
  }
}
