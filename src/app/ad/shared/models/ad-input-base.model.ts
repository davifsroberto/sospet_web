export class AdInputBase {
  name: string = '';
  displayName: string = '';
  type: string = '';
  placeholder?: string = '';
  optionsSelect?: Array<{ value: string; desc: string }>;
  errorMessage?: string | undefined = '';
}
