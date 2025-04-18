import { CaretDownOutlined } from "@ant-design/icons";
import { Select, SelectProps } from "antd";

const ExSelect: React.FC<SelectProps> = ({children, ...props}) => {
  return (
    <Select 
      className="exable-select"
      {...props}
      suffixIcon={props.suffixIcon ??  <CaretDownOutlined />}
    >
      { children }
    </Select>
  )
};

export default ExSelect;