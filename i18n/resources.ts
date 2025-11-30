import { ResourceCategory } from '../types';

export const RESOURCES: Record<string, ResourceCategory[]> = {
  US: [
    {
      title: 'resources_gov_title',
      icon: 'Government',
      resources: [
        { name: 'resources_us_gov_1_name', description: 'resources_us_gov_1_desc', url: 'https://www.consumerfinance.gov/' },
        { name: 'resources_us_gov_2_name', description: 'resources_us_gov_2_desc', url: 'https://www.fdic.gov/' },
      ],
    },
    {
      title: 'resources_banks_title',
      icon: 'Bank',
      resources: [
        { name: 'Bank of America', description: 'resources_us_bank_1_desc', url: 'https://www.bankofamerica.com/' },
        { name: 'Chase', description: 'resources_us_bank_2_desc', url: 'https://www.chase.com/' },
      ],
    },
    {
      title: 'resources_nonprofit_title',
      icon: 'NonProfit',
      resources: [
        { name: 'resources_us_nonprofit_1_name', description: 'resources_us_nonprofit_1_desc', url: 'https://www.nfcc.org/' },
      ],
    },
  ],
  CA: [
    {
      title: 'resources_gov_title',
      icon: 'Government',
      resources: [
        { name: 'resources_ca_gov_1_name', description: 'resources_ca_gov_1_desc', url: 'https://www.canada.ca/en/financial-consumer-agency.html' },
      ],
    },
    {
      title: 'resources_banks_title',
      icon: 'Bank',
      resources: [
        { name: 'RBC', description: 'resources_ca_bank_1_desc', url: 'https://www.rbcroyalbank.com/' },
        { name: 'TD', description: 'resources_ca_bank_2_desc', url: 'https://www.td.com/' },
      ],
    },
     {
      title: 'resources_nonprofit_title',
      icon: 'NonProfit',
      resources: [
        { name: 'resources_ca_nonprofit_1_name', description: 'resources_ca_nonprofit_1_desc', url: 'https://creditcanada.com/' },
      ],
    },
  ],
};
