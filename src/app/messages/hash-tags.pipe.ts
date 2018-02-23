import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'hashTags'
})
export class HashTagsPipe implements PipeTransform {
static regex = /#(\w+)/g;
constructor (private sanitizer: DomSanitizer) {

}

  transform(value: string, color= 'blue'): any {
    const match = value.match(HashTagsPipe.regex);
    if (match) {
    match.forEach((hashTag) => {
    value = value.replace(hashTag, `<i style="color:${color}">${hashTag}</i>`);
    });
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
