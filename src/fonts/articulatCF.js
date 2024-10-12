
const articulatCF = [
  {
    path: './Articulat_CF_Bold.otf',
    weight: 400,
    style: 'bold',
  },
  {
    path: './Articulat_CF_Demi_Bold.otf',
    weight: 500,
    style: 'semibold',
  },
  {
    path: './Articulat_CF_Extra_Bold.otf',
    weight: 600,
    style: 'extrabold',
  },
  {
    path: './Articulat_CF_Extra_Light.otf',
    weight: 200,
    style: 'extralight',
  },
  {
    path: 'Articulat_CF_Heavy.otf',
    weight: 700,
    style: 'bold',
  },
  {
    path: 'Articulat_CF_Light.otf',
    weight: 300,
    style: 'light',
  },
  {
    path: 'Articulat_CF_Medium.otf',
    weight: 500,
    style: 'medium',
  },
  {
    path: 'Articulat_CF_Normal.otf',
    weight: 400,
    style: 'normal',
  },
  {
    path: 'Articulat_CF_Regular.otf',
    weight: 400,
    style: 'normal',
  },
  {
    path: 'Articulat_CF_Thin.otf',
    weight: 100,
    style: 'thin',
  }


];

const generateFontFace = (font) => `
@font-face {
  font-family: 'ArticulatCF';
  src: url('${font.path}') format('opentype');
  font-weight: ${font.weight};
  font-style: ${font.style};
}
`;

const fontFaces = articulatCF.map(generateFontFace).join('\n');

const fs = require('fs');
const path = require('path');
fs.writeFileSync('./src/fonts.css', fontFaces);

