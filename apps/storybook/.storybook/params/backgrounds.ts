import { tokensElectric, tokensUltraviolet } from '@awsm/tokens';

export const backgrounds ={
  default: 'electric',
  values: [
    {
      name: 'electric',
      value: tokensElectric.color.gamma[50],
    },
    {
      name: 'ultraviolet',
      value: tokensUltraviolet.color.gamma[50],
    },
  ],
}
