import {OptionProps} from '@/shared/@types/global';
import {Select} from '@gravity-ui/uikit';
import {FC} from 'react';
import cn from 'classnames';
interface SelectInputProps {
    placeholder?: string;
    options: OptionProps[];
    className?: string;
}

export const SelectInput: FC<SelectInputProps> = ({placeholder, options, className, ...rest}) => (
    <div className="w-full">
        <Select className={cn('w-full', className)} placeholder={placeholder} {...rest}>
            {options.map((option) => (
                <Select.Option value={option.value} key={option.value}>
                    {option.content}
                </Select.Option>
            ))}
        </Select>
    </div>
);
