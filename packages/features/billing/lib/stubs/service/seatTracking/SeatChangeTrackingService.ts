// Stub for SeatChangeTrackingService - open source version
export class SeatChangeTrackingService {
  async handleSeatChange(_teamId: number, _oldSeatCount: number, _newSeatCount: number) {
    return;
  }

  async logSeatAddition(_args: {
    teamId: number;
    userId: number;
    action?: string;
  }): Promise<void> {
    return;
  }
}
