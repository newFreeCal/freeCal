/**
 * Stub IIntegrationAttributeSyncRepository for open-source version
 */
export class IIntegrationAttributeSyncRepository {
  async findMany(_args: { where: { userId: number } }) {
    return [];
  }

  async findUnique(_args: { where: { id: number } }) {
    return null;
  }

  async create(_args: { data: any }) {
    return { id: 1 };
  }

  async update(_args: { where: { id: number }; data: any; include?: any }) {
    return { id: _args.where.id };
  }

  async delete(_args: { where: { id: number } }) {
    return null;
  }
}

export type IUpdateAttributeSyncInput = any;
export const IIntegrationAttributeSyncRepositoryClass = IIntegrationAttributeSyncRepository;

export type IntegrationAttributeSync = {
  id: string;
  organizationId: number;
  name: string;
  integration: string;
  credentialId?: number;
  enabled: boolean;
  attributeSyncRule: AttributeSyncRule | null;
  syncFieldMappings: AttributeSyncFieldMapping[];
};

export type AttributeSyncRule = {
  id: string;
  rule: any;
};

export type AttributeSyncFieldMapping = {
  id: string;
  integrationFieldName: string;
  attributeId: string;
  enabled: boolean;
};

export type ISyncFormData = {
  id: string;
  name: string;
  credentialId?: number;
  enabled: boolean;
  organizationId: number;
  ruleId: string;
  rule: any;
  syncFieldMappings: any[];
};

export type IFieldMappingFormState = {
  mappings: IFieldMappingWithOptionalId[];
};

// Condition types
export interface ITeamCondition {
  identifier: ConditionIdentifierEnum.TEAM;
  operator: ConditionOperatorEnum;
  value: number[];
}

export interface IAttributeCondition {
  identifier: ConditionIdentifierEnum.ATTRIBUTE;
  operator: ConditionOperatorEnum;
  attributeId: string;
  value: string[];
}

export type TAttributeSyncRuleCondition = ITeamCondition | IAttributeCondition;

export type TAttributeSyncRuleConditionWithId = TAttributeSyncRuleCondition & {
  id: string;
};

// Field mapping types
export interface INewFieldMapping {
  integrationFieldName: string;
  attributeId: string;
  enabled: boolean;
}

export interface IFieldMapping extends INewFieldMapping {
  id: string;
}

export interface IFieldMappingWithOptionalId extends INewFieldMapping {
  id?: string;
}

export interface IAttributeSyncRule {
  operator: RuleOperatorEnum;
  conditions: TAttributeSyncRuleCondition[];
}

export enum RuleOperatorEnum {
  EQUALS = "equals",
  NOT_EQUALS = "not_equals",
  CONTAINS = "contains",
  NOT_CONTAINS = "not_contains",
  STARTS_WITH = "starts_with",
  ENDS_WITH = "ends_with",
  GREATER_THAN = "greater_than",
  LESS_THAN = "less_than",
  GREATER_THAN_OR_EQUAL = "greater_than_or_equal",
  LESS_THAN_OR_EQUAL = "less_than_or_equal",
  AND = "AND",
  OR = "OR",
}

export enum ConditionOperatorEnum {
  EQUALS = "equals",
  NOT_EQUALS = "notEquals",
  IN = "in",
  NOT_IN = "notIn",
}

// Stub enum for compatibility - open-source version
export enum ConditionIdentifierEnum {
  TEAM = "team",
  ATTRIBUTE = "attribute",
}
