import { defineMessages } from 'react-intl'

const msgs = defineMessages({
  externalAccont: {
    id: 'consts.external.account',
    defaultMessage: 'Bank account'
  },
  city: {
    id: 'consts.address.city',
    defaultMessage: 'City'
  },
  addressLine1: {
    id: 'consts.address.line1',
    defaultMessage: 'Address line 1'
  },
  zipcode: {
    id: 'consts.address.zipcode',
    defaultMessage: 'Zip code'
  },
  state: {
    id: 'consts.address.state',
    defaultMessage: 'State'
  },
  birthDay: {
    id: 'consts.address.birth.day',
    defaultMessage: 'Day of birth'
  },
  birthMonth: {
    id: 'consts.address.birth.month',
    defaultMessage: 'Month of Birth'
  },
  birthYear: {
    id: 'consts.address.birth.year',
    defaultMessage: 'Year of birth'
  },
  firstName: {
    id: 'consts.account.firstname',
    defaultMessage: 'First name'
  },
  lastName: {
    id: 'consts.account.lastname',
    defaultMessage: 'Last name'
  },
  idNumber: {
    id: 'consts.account.id.number',
    defaultMessage: 'document number'
  },
  docNumber: {
    id: 'consts.account.id.doc',
    defaultMessage: 'document'
  },
  idType: {
    id: 'consts.account.id.type',
    defaultMessage: 'identification type'
  },
  termsDate: {
    id: 'consts.account.terms.date',
    defaultMessage: 'Accepted terms date'
  },
  terms: {
    id: 'consts.account.terms.accept',
    defaultMessage: 'Accepted terms'
  },
  accountReasonsFieldsNeeded: {
    id: 'consts.account.reasons.fields.needed',
    defaultMessage: 'Pending fields'
  },
  accountReasonsFieldsExternal: {
    id: 'consts.account.reasons.fields.external',
    defaultMessage: 'Register bank account'
  },
  accountReasonsFieldsPending: {
    id: 'consts.account.reasons.fields.pending',
    defaultMessage: 'Verification pending'
  },
  accountReasonsFieldsPendingOther: {
    id: 'consts.account.reasons.fields.pending.other',
    defaultMessage: 'Pending'
  },
  statusOpen: {
    id: 'consts.account.statuses.open',
    defaultMessage: 'Open'
  },
  statusOpenTwo: {
    id: 'consts.account.statuses.open.two',
    defaultMessage: 'Open'
  },
  statusProgress: {
    id: 'consts.account.statuses.progress',
    defaultMessage: 'In progress'
  },
  statusFinish: {
    id: 'consts.account.statuses.finish',
    defaultMessage: 'Finished'
  },
  statusUndefined: {
    id: 'consts.account.statuses.undefined',
    defaultMessage: 'Undefined'
  },
  statusUndefinedTwo: {
    id: 'consts.account.statuses.undefined.two',
    defaultMessage: 'Undefined'
  },
  statusUndefinedThree: {
    id: 'consts.account.statuses.undefined.three',
    defaultMessage: 'Undefined'
  }
})

const api = {
  API_URL: process.env.API_HOST || 'http://localhost:3000',
  ACCOUNT_FIELDS: {
    'external_account': msgs.externalAccont,
    'legal_entity.address.city': msgs.city,
    'legal_entity.address.line1': msgs.addressLine1,
    'legal_entity.address.postal_code': msgs.zipcode,
    'legal_entity.address.state': msgs.state,
    'legal_entity.dob.day': msgs.birthDay,
    'legal_entity.dob.month': msgs.birthMonth,
    'legal_entity.dob.year': msgs.birthYear,
    'legal_entity.first_name': msgs.firstName,
    'legal_entity.last_name': msgs.lastName,
    'legal_entity.personal_id_number': msgs.idNumber,
    'legal_entity.verification.document': msgs.docNumber,
    'legal_entity.type': msgs.idType,
    'tos_acceptance.date': msgs.termsDate,
    'tos_acceptance.ip': msgs.terms
  },
  ACCOUNT_REASONS: {
    'fields_needed': msgs.accountReasonsFieldsNeeded,
    'external_account': msgs.accountReasonsFieldsExternal,
    null: msgs.accountReasonsFieldsPending,
    undefined: msgs.accountReasonsFieldsPendingOther
  },

  STATUSES: {
    'open': msgs.statusOpen,
    'OPEN': msgs.statusOpenTwo,
    'in_progress': msgs.statusProgress,
    'closed': msgs.statusFinish,
    '': msgs.statusUndefined,
    null: msgs.statusUndefinedTwo,
    undefined: msgs.statusUndefinedThree
  },

  STATUSES_COLORS: {
    'open': 'green',
    'OPEN': 'green',
    'in_progress': 'orange',
    'closed': 'blue',
    '': 'black',
    null: 'gray',
    undefined: 'brown'
  },

  BANK_NUMBERS: {
    '110': 'BANCO PARA TESTE STRIPE',
    '260': 'NUBANK',
    '001': 'BANCO DO BRASIL S.A. (Banco do Brasil)',
    '237': 'BANCO BRADESCO S.A. (Bradesco)',
    '341': 'BANCO ITAU S.A. (Itaú)',
    '033': 'BANCO SANTANDER (BRASIL) S.A.',
    '409': 'UNIBANCO UNIAO DE BANCOS BRASILEIROS S.A. (Unibanco)',
    '041': 'BANCO DO ESTADO DO RIO GRANDE DO SUL S.A. (Banrisul)',
    '104': 'CAIXA ECONOMICA FEDERAL (Caixa Econômica Federal)',
    '399': 'HSBC BANK BRASIL S.A.BANCO MULTIPLO (HSBC)',
    '745': 'BANCO CITIBANK S.A.',
    '151': 'BANCO NOSSA CAIXA S.A (Nossa Caixa)',
    '389': 'BANCO MERCANTIL DO BRASIL S.A. (Mercantil do Brasil)',
    '004': 'BANCO DO NORDESTE DO BRASIL S.A (Banco do Nordeste (BNB) )',
    '021': 'BANESTES S.A BANCO DO ESTADO DO ESPIRITO SANTO (Banestes)',
    '422': 'BANCO SAFRA S.A. (Safra)',
    '003': 'BANCO DA AMAZONIA S.A. (Banco da Amazônia (Basa))',
    '047': 'Banco do Estado de Sergipe S.A (Banese)',
    '070': 'Banco de Brasília S.A. (BRB)',
    '655': 'Banco Votorantim S.A (Votorantim)',
    '107': 'Banco BBM S.A (BBM)',
    '025': 'Banco Alfa S.A (Alfa)',
    '263': 'Banco Cacique S. A. (Cacique)',
    '229': 'BANCO CRUZEIRO DO SUL S.A. (Cruzeiro do Sul)',
    '252': 'BANCO FININVEST S.A. (Fininvest)',
    '063': 'BANCO IBI S.A - BANCO MULTIPLO (Banco IBI)',
    '623': 'BANCO PANAMERICANO S.A. (PanAmericano)',
    '633': 'BANCO RENDIMENTO S.A. (Banco Rendimento)',
    '749': 'BANCO SIMPLES S.A. (Banco Simples)',
    '215': 'BANCO ACOMERCIAL E DE INVESTIMENTO SUDAMERIS S.A. (Sudameris)',
    '756': 'BANCO COOPERATIVO DO BRASIL S.A. - (BANCOOB)',
    '748': 'BANCO COOPERATIVO SICREDI S.A. (SICREDI)',
    '065': 'LEMON BANK BANCO MÚLTIPLO S..A (Lemon Bank)',
    '069': 'BPN BRASIL BANCO MÚLTIPLO S.A. (BPN)',
    '719': 'BANIF - BANCO INTERNACIONAL DO FUNCHAL (BRASIL), S.A. (Banif)',
    '318': 'BANCO BMG S.A. (BMG)',
    '027': 'BANCO DO ESTADO DE SANTA CATARINA S.A.',
    '208': 'BANCO UBS PACTUAL S.A.',
    '479': 'BANCO ITAUBANK S.A.',
    '077': 'BANCO INTERMEDIUM S.A.',
    '212': 'BANCO ORIGINAL',
    '085': 'CECRED-COOPERATIVA CENTRAL DE CREDITO URBANO'
  }
}

export default api
