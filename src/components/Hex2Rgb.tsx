import React, { FC, useState } from 'react'

function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const Hex2Rgb : FC = () => {
  const [hex, setHex] = useState('');
  const [rgb, setRGB] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value.match(/^#[0-9a-f]{6}$/i)) {
      setHex(value);
      const result = hexToRgb(value);
      const rgbString = (result === null) ? '' : result.r + ', ' + result.g + ', ' + result.b;
      setRGB('rgb('+rgbString+')');
    } else if (value.length == 7) {
      setHex('');
      setRGB('Ошибка');
    }
  };

  let backgroundColor = (rgb) ? '#e94a35' : 'white';
  backgroundColor = (hex) ? hex : backgroundColor;

  return (
    <div className="container" style={{backgroundColor: backgroundColor}}>
      <input type="text" id="hex" name="hex" maxLength={7} onChange={handleChange} />
      <input type="text" id="rgb" name="rgb" readOnly value={rgb} />
    </div>
  );
}
