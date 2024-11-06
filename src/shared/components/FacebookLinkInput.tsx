import React from 'react';
import { Label } from '../forms/Label';
import { FormGroup } from '../forms/FormGroup';
import { Input } from '../forms/Input';

interface FacebookLinkInputProps {
  fbLink: string;
  setFbLink: (value: string) => void;
}

export const FacebookLinkInput: React.FC<FacebookLinkInputProps> = ({
  fbLink,
  setFbLink,
}) => {
  return (
    <FormGroup>
      <Label htmlFor="fbLink">Facebook Link:</Label>
      <Input
        type="text"
        id="fbLink"
        value={fbLink}
        onChange={(e) => setFbLink(e.target.value)}
        placeholder="Paste Facebook link here"
      />
    </FormGroup>
  );
};

export default FacebookLinkInput;
