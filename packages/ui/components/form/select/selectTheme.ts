import type { GroupBase, MenuPlacement, SelectComponentsConfig } from "react-select";
import { ControlComponent, DropdownIndicatorComponent, InputComponent, OptionComponent } from "./components";

export const getReactSelectProps = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  components,
  menuPlacement = "auto",
}: {
  components: SelectComponentsConfig<Option, IsMulti, Group>;
  menuPlacement?: MenuPlacement;
}) => {
  return {
    menuPlacement,
    components: {
      Input: InputComponent,
      Option: OptionComponent,
      Control: ControlComponent,
      DropdownIndicator: DropdownIndicatorComponent,
      ...components,
    },
    unstyled: true,
  };
};
