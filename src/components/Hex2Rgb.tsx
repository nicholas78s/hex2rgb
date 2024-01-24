import React, { FC, useState } from 'react'

// type FormType = {
//   hex: string,
//   rgb?: {
//     red: number,
//     green: number,
//     blue: number
//   }
// };

function hexToRgb(hex: string) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export const Hex2Rgb : FC = () => {
  //const [form, setState] = useState<FormType>({ hex: "" });
  //const [state, setState] = useState<FormType>({ hex: '' });
  const [hex, setHex] = useState('');
  const [rgb, setRGB] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const {
    //    target: { name, value },
    // } = e;
    const {
      target: { value },
   } = e;
    //console.log('handleChange', name, value, value.match(/^#[0-9a-f]{6}$/i));

    if (value.match(/^#[0-9a-f]{6}$/i)) {
      //setState((prev) => ({ hex: value }));
      //setState(() => ({ hex: value }));
      setHex(value);
      //setRGB(value);
      const result = hexToRgb(value);
      const rgbString = (result === null) ? '' : result.r + ', ' + result.g + ', ' + result.b;
      setRGB('rgb('+rgbString+')');
    } else if (value.length == 7) {
      //setState(() => ({ hex: '' }));
      setHex('');
      setRGB('Ошибка');
    }
    //setState((prev) => ({ ...prev, [hex]: files?.length ? files : value }));
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
