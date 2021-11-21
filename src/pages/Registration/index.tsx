import React from 'react'

import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { FormHeader } from '../../components/FormHeader'
import { Input } from '../../components/Input'
import { NavigationBar } from '../../components/NavigationBar'
import { Radio } from '../../components/Radio'
import { TextArea } from '../../components/TextArea'
import { useForm } from '../../hooks/useForm'
import {
  ButtonsContainer,
  CheckboxContainer,
  Container,
  FieldsContainer,
  Label,
  RadioContainer,
  HorizontalContainer
} from './styles'

enum RegistrationTypes {
  A = 'Receituário A',
  B_B2_RETINOIDES = 'Receituário B, B2 ou Retinóides'
}

enum CouncilTypes {
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
  registrationNumber: string
  registrationType: RegistrationTypes[]
  createdAt: string
  recordNumberA: string
  recordNumberB: string
  professionalOrInstitutionName: string
  technicalOrClinicalDirector: string
  professionalCouncil: string
  councilType: CouncilTypes
  specialty: string
  telephoneNumber: string
  cellphoneNumber: string
  email: string
  businessAddress: Address
  homeAddress: Address
  comments: string
}

export function Registration() {
  const { data, handleChange, errors, setValue, handleSubmit } = useForm<RegistrationFormValues>({
    initialValues: {
      registrationNumber: '',
      registrationType: [],
      createdAt: '',
      recordNumberA: '',
      recordNumberB: '',
      professionalOrInstitutionName: '',
      technicalOrClinicalDirector: '',
      professionalCouncil: '',
      councilType: CouncilTypes.CRM,
      specialty: '',
      telephoneNumber: '',
      cellphoneNumber: '',
      email: '',
      businessAddress: {
        street: '',
        number: '',
        complement: '',
        district: '',
        cep: '',
        city: '',
        uf: ''
      },
      homeAddress: {
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
    onSubmit: (event) => console.log(event)
  })

  const handleSelectRegistrationType = (newValue: boolean, itemLabel: RegistrationTypes) => {
    if (newValue) {
      setValue('registrationType', [...data.registrationType, itemLabel])
    } else {
      const newRegisters = data.registrationType.filter((item) => item !== itemLabel)
      setValue('registrationType', newRegisters)
    }
  }

  console.log('DATA', data)

  return (
    <Container>
      <NavigationBar />
      <form onSubmit={handleSubmit}>
        {/* TODO FICHA DE CADASTRO */}
        <FormHeader>Informações da Ficha de Cadastro</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="registrationNumber"
              label="Número do Cadastro"
              type="text"
              placeholder="xxxxxx/xxxx"
              value={data.registrationNumber}
              onChange={handleChange('registrationNumber')}
              errors={errors.registrationNumber}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <Input
              name="createdAt"
              label="Data do Cadastro"
              type="date"
              placeholder="xx/xx/xxxx"
              value={data.createdAt}
              onChange={handleChange('createdAt')}
              errors={errors.createdAt}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <CheckboxContainer>
              <Label>Tipo de Cadastro</Label>
              <div>
                <Checkbox
                  labelText={RegistrationTypes.A}
                  checked={!!data.registrationType.find((item) => item === RegistrationTypes.A)}
                  onChange={(event) => handleSelectRegistrationType(event.target.checked, RegistrationTypes.A)}
                />
                <Checkbox
                  labelText={RegistrationTypes.B_B2_RETINOIDES}
                  checked={!!data.registrationType.find((item) => item === RegistrationTypes.B_B2_RETINOIDES)}
                  onChange={(event) =>
                    handleSelectRegistrationType(event.target.checked, RegistrationTypes.B_B2_RETINOIDES)
                  }
                />
              </div>
            </CheckboxContainer>
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="recordNumberA"
              label="Número da Ficha A"
              type="text"
              placeholder="xxx"
              value={data.recordNumberA}
              onChange={handleChange('recordNumberA')}
              errors={errors.recordNumberA}
              containerStyle={{ marginRight: '5.625rem', width: '15.625rem' }}
            />
            <Input
              name="recordNumberB"
              label="Número da Ficha B"
              type="text"
              placeholder="xxx"
              value={data.recordNumberB}
              onChange={handleChange('recordNumberB')}
              errors={errors.recordNumberB}
              containerStyle={{ width: '15.625rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* TODO DADOS DO PRESCRITOR */}
        <FormHeader>Dados do Prescritor</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="professionalOrInstitutionName"
              label="Nome do Profissional ou Instituição"
              type="text"
              placeholder="Digite o nome do Profissional ou Instituição"
              value={data.professionalOrInstitutionName}
              onChange={handleChange('professionalOrInstitutionName')}
              errors={errors.professionalOrInstitutionName}
              containerStyle={{ width: '86rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="technicalOrClinicalDirector"
              label="Responsável técnico ou Diretor clínico da Instituição (Apenas quando se tratar de pessoa jurídica)"
              type="text"
              placeholder="Digite o nome do Responsável Técnico ou Diretor Clínico da Instituição"
              value={data.technicalOrClinicalDirector}
              onChange={handleChange('technicalOrClinicalDirector')}
              errors={errors.technicalOrClinicalDirector}
              containerStyle={{ width: '86rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="professionalCouncil"
              label="Conselho Profissional"
              type="text"
              placeholder="Digite o Conselho Profissional"
              value={data.professionalCouncil}
              onChange={handleChange('professionalCouncil')}
              errors={errors.professionalCouncil}
              containerStyle={{ marginRight: '5.625rem', width: '18.75rem' }}
            />
            <RadioContainer>
              <Label>Tipo do Conselho</Label>
              <div>
                <Radio
                  name="councilType"
                  labelText={CouncilTypes.CRM}
                  value={CouncilTypes.CRM}
                  checked={data.councilType === CouncilTypes.CRM}
                  onChange={handleChange('councilType')}
                />
                <Radio
                  name="councilType"
                  labelText={CouncilTypes.CRO}
                  value={CouncilTypes.CRO}
                  checked={data.councilType === CouncilTypes.CRO}
                  onChange={handleChange('councilType')}
                />
                <Radio
                  name="councilType"
                  labelText={CouncilTypes.CRMV}
                  value={CouncilTypes.CRMV}
                  checked={data.councilType === CouncilTypes.CRMV}
                  onChange={handleChange('councilType')}
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
              name="telephoneNumber"
              label="Telefone"
              type="text"
              placeholder="(xx) xxxx-xxxx"
              value={data.telephoneNumber}
              onChange={handleChange('telephoneNumber')}
              errors={errors.telephoneNumber}
              containerStyle={{ marginRight: '5.625rem', width: '18.75rem' }}
            />
            <Input
              name="cellphoneNumber"
              label="Celular"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value={data.cellphoneNumber}
              onChange={handleChange('cellphoneNumber')}
              errors={errors.cellphoneNumber}
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
              name="businessAddressStreet"
              label="Endereço comercial"
              type="text"
              placeholder="Digite o logradouro"
              value={data.businessAddress.street}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  street: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ marginRight: '2.5rem', width: '50rem' }}
            />
            <Input
              name="businessAddressNumber"
              label="Nº"
              type="text"
              placeholder="xxxx"
              value={data.businessAddress.number}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  number: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ marginRight: '5.625rem', width: '6.875rem' }}
            />
            <Input
              name="businessAddressComplement"
              label="Complemento"
              type="text"
              placeholder="Digite o Complemento"
              value={data.businessAddress.complement}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  complement: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ width: '21rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="businessAddressDistrict"
              label="Bairro"
              type="text"
              placeholder="Digite o bairro"
              value={data.businessAddress.district}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  district: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ marginRight: '2.5rem', width: '25.25rem' }}
            />
            <Input
              name="businessAddressCep"
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value={data.businessAddress.cep}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  cep: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ marginRight: '5.625rem', width: '13.125rem' }}
            />
            <Input
              name="businessAddressCity"
              label="Cidade"
              type="text"
              placeholder="Digite a Cidade"
              value={data.businessAddress.city}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  city: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ marginRight: '2.5rem', width: '32rem' }}
            />
            <Input
              name="businessAddressUf"
              label="UF"
              type="text"
              placeholder="XX"
              value={data.businessAddress.uf}
              onChange={(event) =>
                setValue('businessAddress', {
                  ...data.businessAddress,
                  uf: event.target.value
                })
              }
              errors={errors.businessAddress}
              containerStyle={{ width: '5rem' }}
            />
          </HorizontalContainer>
        </FieldsContainer>

        {/* TODO ENDEREÇO RESIDENCIAL */}
        <FormHeader>Endereço Residencial</FormHeader>

        <FieldsContainer>
          <HorizontalContainer>
            <Input
              name="homeAddressStreet"
              label="Endereço residencial"
              type="text"
              placeholder="Digite o logradouro"
              value={data.homeAddress.street}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  street: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ marginRight: '2.5rem', width: '50rem' }}
            />
            <Input
              name="homeAddressNumber"
              label="Nº"
              type="text"
              placeholder="xxxx"
              value={data.homeAddress.number}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  number: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ marginRight: '5.625rem', width: '6.875rem' }}
            />
            <Input
              name="homeAddressComplement"
              label="Complemento"
              type="text"
              placeholder="Digite o Complemento"
              value={data.homeAddress.complement}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  complement: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ width: '21rem' }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Input
              name="homeAddressDistrict"
              label="Bairro"
              type="text"
              placeholder="Digite o bairro"
              value={data.homeAddress.district}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  district: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ marginRight: '2.5rem', width: '25.25rem' }}
            />
            <Input
              name="homeAddressCep"
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value={data.homeAddress.cep}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  cep: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ marginRight: '5.625rem', width: '13.125rem' }}
            />
            <Input
              name="homeAddressCity"
              label="Cidade"
              type="text"
              placeholder="Digite a Cidade"
              value={data.homeAddress.city}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  city: event.target.value
                })
              }
              errors={errors.homeAddress}
              containerStyle={{ marginRight: '2.5rem', width: '32rem' }}
            />
            <Input
              name="homeAddressUf"
              label="UF"
              type="text"
              placeholder="XX"
              value={data.homeAddress.uf}
              onChange={(event) =>
                setValue('homeAddress', {
                  ...data.homeAddress,
                  uf: event.target.value
                })
              }
              errors={errors.homeAddress}
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
