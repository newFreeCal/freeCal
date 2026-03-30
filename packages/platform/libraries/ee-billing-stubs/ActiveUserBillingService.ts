export interface ActiveUsersBreakdown {
  activeUsers: Array<{
    id: number;
    email: string;
    name: string | null;
    activeAs: "host" | "attendee";
  }>;
  totalMembers: number;
  activeHosts: number;
  activeAttendees: number;
}
