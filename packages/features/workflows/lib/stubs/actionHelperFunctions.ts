/**
 * Stub actionHelperFunctions for open-source version
 */
export const isFormTrigger = (_trigger?: string) => false;
export const isSMSOrWhatsappAction = (_action?: string) => false;
export const getTemplateBodyForAction = (_args: {
  action?: string;
  locale?: string;
  t?: any;
  template?: string;
  timeFormat?: any;
}) => "";
export const isAttendeeAction = (_action?: string) => false;
export const isCalAIAction = (_action?: string) => false;
export const isEmailAction = (_action?: string) => false;
export const isSMSAction = (_action?: string) => false;
export const isWhatsappAction = (_action?: string) => false;
export const getWorkflowActionTriggerEvents = (_action?: string) => [];
export const formatDateTime = (_date: Date | string, _format?: string) => "";
export const formatDate = (_date: Date | string, _format?: string) => "";
export const formatTime = (_date: Date | string, _format?: string) => "";
export const actionHelperFunctions = {
  formatDateTime,
  formatDate,
  formatTime,
  isFormTrigger,
  isSMSOrWhatsappAction,
  getTemplateBodyForAction,
  isAttendeeAction,
  isCalAIAction,
  isEmailAction,
  isSMSAction,
  isWhatsappAction,
  getWorkflowActionTriggerEvents,
};
