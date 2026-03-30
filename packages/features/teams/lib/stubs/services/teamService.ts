export class TeamService {
  static async inviteMember(_args: any) {
    return null;
  }

  static async removeMember(_args: any) {
    return null;
  }

  static async updateTeamMember(_args: any) {
    return null;
  }

  static async createTeam(_args: any) {
    return null;
  }

  static async acceptTeamMembership(_args: any) {
    return null;
  }

  static async leaveTeamMembership(_args: any) {
    return null;
  }

  static async createInvite(_teamId: number, _args?: any) {
    return null;
  }

  static async delete(_args: any) {
    return null;
  }

  static async publish(_args: any): Promise<{ redirectUrl: string | null; status: string | null }> {
    return { redirectUrl: null, status: null };
  }

  static async removeMembers(_args: any) {
    return null;
  }

  static async inviteMemberByToken(_token: string, _userId?: number) {
    return null;
  }

  static async acceptInvitationByToken(_token: string, _userId: number) {
    return null;
  }

  static async fetchTeamOrThrow(_args: any): Promise<{
    id: number;
    name: string | null;
    slug: string;
    isOrganization: boolean;
    parent?: { id: number; name?: string; slug?: string } | null;
  }> {
    return {
      id: 1,
      name: "Stub Team",
      slug: "stub-team",
      isOrganization: false,
    };
  }

  static async isSlugAvailableForUpdate(_args: any) {
    return null;
  }
}
