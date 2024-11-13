import * as Select from "@radix-ui/react-select";

export const SelectInput = () => {
  return (
<Select.Root>
		<Select.Trigger className="SelectTrigger" aria-label="Food">
			<Select.Value placeholder="Select a fruit…" />
			<Select.Icon className="SelectIcon">
                icon
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className="SelectContent">
				<Select.ScrollUpButton className="SelectScrollButton">
					icon
				</Select.ScrollUpButton>
				<Select.Viewport className="SelectViewport">
					<Select.Group>
						<Select.Label className="SelectLabel">Fruits</Select.Label>
						<Select.Item className="SelectItem" value="apple">
                        <Select.ItemText>apple</Select.ItemText>
                        </Select.Item>
					</Select.Group>

					<Select.Separator className="SelectSeparator" />
				</Select.Viewport>
				<Select.ScrollDownButton className="SelectScrollButton">
					icon
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
  );
};
