import * as Select from '@radix-ui/react-select';

interface SelectInput {
  placeholder: string | null;
  options: {
    label: string;
    value: string;
  }[];
  onValueChange: (val: string) => void;
}

export const SelectInput = ({ placeholder, options, onValueChange}: SelectInput) => {
  return (
    <Select.Root onValueChange={(val) => onValueChange(val)}>
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder={placeholder}/>
        {/* <Select.Icon className="SelectIcon">
                icon
			</Select.Icon> */}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            icon
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {options.map(item => {
                return (
                  <>
                    {/* <Select.Label className="SelectLabel">Fruits</Select.Label> */}
                    <Select.Item className="SelectItem" value={item.value}>
                      <Select.ItemText>{item.label}</Select.ItemText>
                    </Select.Item>
                  </>
                );
              })}
            </Select.Group>

            {/* <Select.Separator className="SelectSeparator" /> */}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            icon
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
