export interface Room {
    totalRooms: number
    availableRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomNo: number
    type: string
    facilities: string
    price: number
    checkedIn: Date
    checkedOut: Date
}