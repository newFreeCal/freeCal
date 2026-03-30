/**
 * Stub ruleHelpers for open-source version
 */
import type { ITeamCondition } from "./repositories/IIntegrationAttributeSyncRepository";
import { ConditionIdentifierEnum } from "./repositories/IIntegrationAttributeSyncRepository";
export const formatConditionValue = (_args: any, _value?: any): any => {
  return _args;
};

export const generateConditionId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

export const getConditionTypeOptions = (_t?: any): any[] => {
  return [
    { label: "Equals", value: "equals" },
    { label: "Not Equals", value: "not_equals" },
    { label: "Contains", value: "contains" },
  ];
};

export const getOperatorOptionsForAttributeType = (_attrType: any, _t?: any): any[] => {
  return [
    { label: "Equals", value: "equals" },
    { label: "Not Equals", value: "not_equals" },
  ];
};

export const getParentOperatorOptions = (_t?: any): any[] => {
  return [
    { label: "AND", value: "and" },
    { label: "OR", value: "or" },
  ];
};

export const getTeamOperatorOptions = (_t?: any): any[] => {
  return [
    { label: "In", value: "in" },
    { label: "Not In", value: "not_in" },
  ];
};

export const getDefaultAttributeCondition = (): any => {
  return {
    id: generateConditionId(),
    identifier: ConditionIdentifierEnum.ATTRIBUTE,
    operator: "equals",
    value: [],
  };
};

export const getDefaultTeamCondition = (): any => {
  return {
    id: generateConditionId(),
    identifier: ConditionIdentifierEnum.TEAM,
    operator: "equals",
    value: [],
  };
};

export const isArrayOperator = (_operator: string): boolean => {
  return ["in", "not_in"].includes(_operator);
};

export const isTeamCondition = (condition: any): condition is ITeamCondition => {
  return condition?.identifier === ConditionIdentifierEnum.TEAM;
};

export const ruleHelpers = {
  evaluateRule: (_args: any): boolean => false,
  parseRule: (_args: any): any => ({}),
  validateRule: (_args: any): boolean => true,
};

export type TAttributeSyncRuleConditionWithId = any;
