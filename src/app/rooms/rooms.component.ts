import { AfterViewInit, Component, DoCheck, Self, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomserviceService } from './services/roomservice.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements AfterViewInit {

  constructor(private roomService: RoomserviceService) {}

  ngAfterViewInit(): void {
    this.roomService.getPhotos().subscribe(res => console.log(res))
  }

  hotelName: string = "New Hotel";
  numberOfRooms: number = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
    {
      roomNo: 1,
      type: "Deluxe",
      price: 1000,
      facilities: "AC, Bed, Bathroom",
      checkedIn: new Date("2023-11-01"),
      checkedOut: new Date("2023-11-04")
    },
    {
      roomNo: 2,
      type: "Deluxe",
      price: 1500,
      facilities: "AC, Bed, Bathroom, kitchen",
      checkedIn: new Date("2023-11-10"),
      checkedOut: new Date("2023-11-16"),
    },
    {
      roomNo: 3,
      type: "Deluxe",
      price: 2000,
      facilities: "AC, Bed, Bathroom, Free Wifi, Kitchen",
      checkedIn: new Date("2023-11-07"),
      checkedOut: new Date("2023-11-08"),
    }
  ]

  toggleRooms() {
    this.hideRooms = !this.hideRooms;
  }

  selectedRoom(room: RoomList) {
    console.log(room);    
  }

  // ngDoCheck(): void {
  //   console.log("On changes Called");
    
  // }

  // constructor() {}

  // ngOnInit(): void {

  // }

}