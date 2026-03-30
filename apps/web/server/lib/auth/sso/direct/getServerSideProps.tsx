import { samlProductID, samlTenantID } from "@calcom/features/sso/lib/stubs/lib/saml";

export async function getServerSideProps() {
  return {
    props: {
      samlTenantID,
      samlProductID,
    },
  };
}
