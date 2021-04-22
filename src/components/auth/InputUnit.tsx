import styled from "styled-components";

interface IProps {
  ref?: (event: any) => void;
  label: string;
  type: string;
  value?: string;
  onChange?: (event: any) => void;
}

const Container = styled.div`
  width: 270px;
  font-size: 12px;
  color: ${(props) => props.theme.fontColor};
  margin: ${(props) => props.theme.marginTopBottom};
  margin-top: -${(props) => props.theme.marginDouble}; ;
`;
const Label = styled.label`
  position: relative;
  top: 16px;
  left: 8px;
  pointer-events: none;
  font-size: 11px;
  color: ${(props) => props.theme.borderColorDark};
`;
const Input = styled.input`
  width: 270px;
  box-sizing: border-box;
  padding-top: 12px;
`;

export default function InputUnit({
  ref,
  onChange,
  label,
  type,
  value,
}: IProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input ref={ref} onChange={onChange} type={type} value={value} />
    </Container>
  );
}
