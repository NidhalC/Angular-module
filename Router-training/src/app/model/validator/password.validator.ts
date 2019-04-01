import {FormControl} from "@angular/forms";
import _ from 'lodash';

export const MON_PREFIX:string = 'n';
export const  PREFIX_SEPARATOR:string = '-';

export function isMyPrefixValidator(control:FormControl) {

  const prefix = _.split(control.value, PREFIX_SEPARATOR,1);
  return _.isArray(prefix) && MON_PREFIX === prefix[0]? null: {isMyPrefix:true};

}
