import React from 'react'

import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { FormHeader } from '../../components/FormHeader'
import { Input } from '../../components/Input'
import { NavigationBar } from '../../components/NavigationBar'
import { Radio } from '../../components/Radio'
import { TextArea } from '../../components/TextArea'
import { useForm } from '../../hooks/useForm'
import { findAddressByCep } from '../../utils/address'
import { toDate } from '../../utils/date'
import {
  ButtonsContainer,
  CheckboxContainer,
  Container,
  FieldsContainer,
  Label,
  RadioContainer,
  HorizontalContainer
} from './styles'

enum PrescriptionTypes {
  A = 'Receituário A',
  B_B2_RETINOIDES = 'Receituário B, B2 ou Retinóides'
}

enum council_types {
  CRM = 'CRM',
  CRO = 'CRO',
  CRMV = 'CRMV'
}

interface Address {
  street: string
  number: string
  complement?: string
  district: string
  cep: string
  city: string
  uf: string
}

interface RegistrationFormValues {
  registration_number: string
  registration_date: string
  record_number_a: string
  record_number_b: string
  // string[]?
  prescription_types: PrescriptionTypes[]
  professional_or_institution_name: string
  technical_or_clinical_director: string
  professional_council_register: string
  // string?
  council_type: council_types
  specialty: string
  telephone_number: string
  cellphone_number: string
  email: string
  business_address: Address
  home_address: Address
  comments: string
}

export function Registration() {
  const handleSave = (event: any) => {
    console.log('DATA', data)
    console.log(toDate(data.registration_date))
    console.log(data.prescription_types)
    console.log(data.council_type)
  }

  const { data, handleChange, errors, setValue, handleSubmit } = useForm<RegistrationFormValues>({
    initialValues: {
      registration_number: '',
      registration_date: '',
      record_number_a: '',
      record_number_b: '',
      prescription_types: [],
      professional_or_institution_name: '',
      technical_or_clinical_director: '',
      professional_council_register: '',
      council_type: council_types.CRM,
      specialty: '',
      telephone_number: '',
      cellphone_number: '',
      email: '',
      business_address: {
        street: '',
        number: '',
        complement: '',
        district: '',
        cep: '',
        city: '',
        uf: ''
      },
      home_address: {
        street: '',
        number: '',
        complement: '',
        district: '',
        cep: '',
        city: '',
        uf: ''
      },
      comments: ''
    },
    onSubmit: handleSave
  })

  const handleSelectPrescriptionType = (newValue: boolean, itemLabel: PrescriptionTypes) => {
    if (newValue) {
      setValue('prescription_types', [...data.prescription_types, itemLabel])
    } else {
      const newRegisters = data.prescription_types.filter((item) => item !== itemLabel)
      setValue('prescription_types', newRegisters)
    }
  }

  const handleFindBusinessAddress = async () => {
    const address = await findAddressByCep(data.business_address.cep)
    if (address) {
      const { street, district, city, uf } = address
      setValue('business_address', {
        ...data.business_address,
        street,
        district,
        city,
        uf
      })
    }
  }

  const handleFindHomeAddress = async () => {
    const address = await findAddressByCep(data.home_address.cep)
    if (address) {
      const { street, district, city, uf } = address
      setValue('home_address', {
        ...data.home_address,
        street,
        district,
        city,
        uf
      })
    }
  }

  return (
    <Container>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
        {/* FICHA DE CADASTRO */}
        <FormHeader>Informações da Ficha de Cadastro</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="registration_number"
              label="Número do Cadastro"
              type="text"
              placeholder="xxxxxx/xxxx"
              value={data.registration_number}
              onChange={handleChange('registration_number')}
              errors={errors.registration_number}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <Input
              name="registration_date"
              label="Data do Cadastro"
              type="date"
              placeholder="xx/xx/xxxx"
              value={data.registration_date}
              onChange={handleChange('registration_date')}
              errors={errors.registration_date}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <CheckboxContainer>
              <Label>Tipo de Cadastro</Label>
              <div>
                <Checkbox
                  labelText={PrescriptionTypes.A}
                  checked={!!data.prescription_types.find((item) => item === PrescriptionTypes.A)}
                  onChange={(event) => handleSelectPrescriptionType(event.target.checked, PrescriptionTypes.A)}
                />
                <Checkbox
                  labelText={PrescriptionTypes.B_B2_RETINOIDES}
                  checked={!!data.prescription_types.find((item) => item === PrescriptionTypes.B_B2_RETINOIDES)}
                  onChange={(event) =>
                    handleSelectPrescriptionType(event.target.checked, PrescriptionTypes.B_B2_RETINOIDES)
                  }
                />
              </div>
            </CheckboxContainer>
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="record_number_a"
              label="Número da Ficha A"
              type="text"
              placeholder="xxx"
              value={data.record_number_a}
              onChange={handleChange('record_number_a')}
              errors={errors.record_number_a}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <Input
              name="record_number_b"
              label="Número da Ficha B"
              type="text"
              placeholder="xxx"
              value={data.record_number_b}
              onChange={handleChange('record_number_b')}
              errors={errors.record_number_b}
              containerStyle={{ width: '15.625rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* DADOS DO PRESCRITOR */}
        <FormHeader>Dados do Prescritor</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="professional_or_institution_name"
              label="Nome do Profissional ou Instituição"
              type="text"
              placeholder="Digite o nome do Profissional ou Instituição"
              value={data.professional_or_institution_name}
              onChange={handleChange('professional_or_institution_name')}
              errors={errors.professional_or_institution_name}
              containerStyle={{ width: '86rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="technical_or_clinical_director"
              label="Responsável técnico ou Diretor clínico da Instituição (Apenas quando se tratar de pessoa jurídica)"
              type="text"
              placeholder="Digite o nome do Responsável Técnico ou Diretor Clínico da Instituição"
              value={data.technical_or_clinical_director}
              onChange={handleChange('technical_or_clinical_director')}
              errors={errors.technical_or_clinical_director}
              containerStyle={{ width: '86rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="professional_council_register"
              label="Conselho Profissional"
              type="text"
              placeholder="Digite o Conselho Profissional"
              value={data.professional_council_register}
              onChange={handleChange('professional_council_register')}
              errors={errors.professional_council_register}
              containerStyle={{ marginRight: '5.625rem', width: '18.75rem' }}
            />
            <RadioContainer>
              <Label>Tipo do Conselho</Label>
              <div>
                <Radio
                  name="council_type"
                  labelText={council_types.CRM}
                  value={council_types.CRM}
                  checked={data.council_type === council_types.CRM}
                  onChange={handleChange('council_type')}
                />
                <Radio
                  name="council_type"
                  labelText={council_types.CRO}
                  value={council_types.CRO}
                  checked={data.council_type === council_types.CRO}
                  onChange={handleChange('council_type')}
                />
                <Radio
                  name="council_type"
                  labelText={council_types.CRMV}
                  value={council_types.CRMV}
                  checked={data.council_type === council_types.CRMV}
                  onChange={handleChange('council_type')}
                />
              </div>
            </RadioContainer>
            <Input
              name="specialty"
              label="Especialidade"
              type="text"
              placeholder="Digite a especialidade"
              value={data.specialty}
              onChange={handleChange('specialty')}
              errors={errors.specialty}
              containerStyle={{ width: '37.8rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="telephone_number"
              label="Telefone"
              type="text"
              placeholder="(xx) xxxx-xxxx"
              value={data.telephone_number}
              onChange={handleChange('telephone_number')}
              errors={errors.telephone_number}
              containerStyle={{ marginRight: '5.625rem', width: '18.75rem' }}
            />
            <Input
              name="cellphone_number"
              label="Celular"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value={data.cellphone_number}
              onChange={handleChange('cellphone_number')}
              errors={errors.cellphone_number}
              containerStyle={{ marginRight: '5.625rem', width: '18.75rem' }}
            />
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="xxxxxx@xxxx.xxx"
              value={data.email}
              onChange={handleChange('email')}
              errors={errors.email}
              containerStyle={{ width: '37.2rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* TODO ENDEREÇO COMERCIAL */}
        <FormHeader>Endereço Comercial</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="business_address_cep"
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value={data.business_address.cep}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  cep: event.target.value
                })
              }
              onBlur={handleFindBusinessAddress}
              errors={errors.business_address}
              containerStyle={{ marginRight: '2.5rem', width: '13.125rem' }}
            />
            <Input
              name="business_address_street"
              label="Endereço comercial"
              type="text"
              placeholder="Digite o logradouro"
              value={data.business_address.street}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  street: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ marginRight: '2.5rem', width: '50rem' }}
            />
            <Input
              name="business_address_number"
              label="Nº"
              type="text"
              placeholder="xxxx"
              value={data.business_address.number}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  number: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ marginRight: '5.625rem', width: '6.875rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="business_address_complement"
              label="Complemento"
              type="text"
              placeholder="Digite o Complemento"
              value={data.business_address.complement}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  complement: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ marginRight: '2.5rem', width: '18rem' }}
            />
            <Input
              name="business_address_district"
              label="Bairro"
              type="text"
              placeholder="Digite o bairro"
              value={data.business_address.district}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  district: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ marginRight: '2.5rem', width: '22.25rem' }}
            />
            <Input
              name="business_address_city"
              label="Cidade"
              type="text"
              placeholder="Digite a Cidade"
              value={data.business_address.city}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  city: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ marginRight: '2.5rem', width: '25rem' }}
            />
            <Input
              name="business_address_uf"
              label="UF"
              type="text"
              placeholder="XX"
              value={data.business_address.uf}
              onChange={(event) =>
                setValue('business_address', {
                  ...data.business_address,
                  uf: event.target.value
                })
              }
              errors={errors.business_address}
              containerStyle={{ width: '5rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* TODO ENDEREÇO RESIDENCIAL */}
        <FormHeader>Endereço Residencial</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="home_address_cep"
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value={data.home_address.cep}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  cep: event.target.value
                })
              }
              onBlur={handleFindHomeAddress}
              errors={errors.home_address}
              containerStyle={{ marginRight: '2.5rem', width: '13.125rem' }}
            />
            <Input
              name="home_address_street"
              label="Endereço residencial"
              type="text"
              placeholder="Digite o logradouro"
              value={data.home_address.street}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  street: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ marginRight: '2.5rem', width: '50rem' }}
            />
            <Input
              name="home_address_number"
              label="Nº"
              type="text"
              placeholder="xxxx"
              value={data.home_address.number}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  number: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ marginRight: '5.625rem', width: '6.875rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="home_address_complement"
              label="Complemento"
              type="text"
              placeholder="Digite o Complemento"
              value={data.home_address.complement}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  complement: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ marginRight: '2.5rem', width: '18rem' }}
            />
            <Input
              name="home_address_district"
              label="Bairro"
              type="text"
              placeholder="Digite o bairro"
              value={data.home_address.district}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  district: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ marginRight: '2.5rem', width: '22.25rem' }}
            />

            <Input
              name="home_address_city"
              label="Cidade"
              type="text"
              placeholder="Digite a Cidade"
              value={data.home_address.city}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  city: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ marginRight: '2.5rem', width: '25rem' }}
            />
            <Input
              name="home_address_uf"
              label="UF"
              type="text"
              placeholder="XX"
              value={data.home_address.uf}
              onChange={(event) =>
                setValue('home_address', {
                  ...data.home_address,
                  uf: event.target.value
                })
              }
              errors={errors.home_address}
              containerStyle={{ width: '5rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* TODO INFORMAÇÕES ADICIONAIS */}
        <FormHeader>Informações Adicionais</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <TextArea
              name="comments"
              label="Observações"
              value={data.comments}
              onChange={handleChange('comments')}
              containerStyle={{ width: '86rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        <ButtonsContainer>
          <Button
            buttonStyle={{
              backgroundColor: 'var(--blue)',
              fontSize: '0.875rem',
              height: '3.75rem',
              width: '11.25rem'
            }}
          >
            Voltar
          </Button>
          <Button
            buttonStyle={{
              fontSize: '1.375rem',
              height: '3.75rem',
              width: '11.25rem'
            }}
            type="submit"
          >
            Salvar e Prosseguir
          </Button>
          <Button
            buttonStyle={{
              backgroundColor: 'var(--red-dark)',
              fontSize: '0.875rem',
              height: '2.5rem',
              width: '7.5rem'
            }}
          >
            Excluir Cadastro
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  )
}
