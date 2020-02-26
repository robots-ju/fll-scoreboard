import lang from './lang';

export default function (data) {
  return data[lang.getLang()];
}
