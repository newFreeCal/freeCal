"use client";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui/components/button";
import { Icon } from "@iconify/react";

const AddCalendarButton = () => {
  const { t } = useLocale();

  return (
    <>
      <Button
        color="secondary"
        CustomStartIcon={<Icon icon="glyphs-poly:plus" className="h-4 w-4" />}
        href="/apps/categories/calendar">
        {t("add_calendar")}
      </Button>
    </>
  );
};

export default AddCalendarButton;
