export class StubSeatChangeTrackingService {
  logSeatAddition(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }

  logSeatRemoval(_params: {
    teamId: number;
    userId: number;
    count?: number;
    seatCount?: number;
    triggeredBy?: number;
  }) {
    // No-op in OSS
  }
}

export const stubSeatChangeTrackingService = new StubSeatChangeTrackingService();
