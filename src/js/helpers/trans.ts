import lang from './lang';
import {TranslatedText} from '../interfaces/ChallengeYear';

export default function trans(data: TranslatedText) {
  return data[lang.getLang()];
}
