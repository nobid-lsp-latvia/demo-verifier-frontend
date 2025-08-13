import {AttestationDefinition} from "@core/models/attestation/AttestationDefinition";
import {AttestationType} from "@core/models/attestation/AttestationType";

export const PID_ATTESTATION: AttestationDefinition = {
  name: "Person Identification Data (PID)",
  type: AttestationType.PID,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name'},
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'family_name_birth', attribute: 'Family name birth'},
    { identifier: 'given_name_birth', attribute: 'Given name birth'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_street', attribute: 'Resident street'},
    { identifier: 'resident_house_number', attribute: 'Resident house number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'personal_administrative_number', attribute: 'Personal administrative number'},
    { identifier: 'issuing_country', attribute: 'Issuing country'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'email_address', attribute: 'Email address'},
    { identifier: 'mobile_phone_number', attribute: 'Mobile phone number'}
  ]
}

export const MDL_ATTESTATION: AttestationDefinition = {
  name: "Mobile Driving Licence (MDL)",
  type: AttestationType.MDL,
  dataSet: [
    { identifier: 'family_name', attribute: 'Family name' },
    { identifier: 'given_name', attribute: 'Given name'},
    { identifier: 'birth_date', attribute: 'Birthdate'},
    { identifier: 'issue_date', attribute: 'Issue date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'age_over_21', attribute: 'Age over 21'},
    { identifier: 'age_in_years', attribute: 'Age in years'},
    { identifier: 'age_birth_year', attribute: 'Age birth year'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'document_number', attribute: 'Document number'},
    { identifier: 'portrait', attribute: 'Portrait'},
    { identifier: 'driving_privileges', attribute: 'Driving privileges'},
    { identifier: 'un_distinguishing_sign', attribute: 'Un-distinguishing sign'},
    { identifier: 'administrative_number', attribute: 'Administrative number'},
    { identifier: 'sex', attribute: 'Sex'},
    { identifier: 'height', attribute: 'Height'},
    { identifier: 'weight', attribute: 'Weight'},
    { identifier: 'eye_colour', attribute: 'Eye colour'},
    { identifier: 'hair_colour', attribute: 'Hair colour'},
    { identifier: 'birth_place', attribute: 'Birth place'},
    { identifier: 'resident_address', attribute: 'Resident address'},
    { identifier: 'portrait_capture_date', attribute: 'Portrait capture date'},
    { identifier: 'nationality', attribute: 'Nationality'},
    { identifier: 'resident_city', attribute: 'Resident city'},
    { identifier: 'resident_state', attribute: 'Resident state'},
    { identifier: 'resident_postal_code', attribute: 'Resident postal code'},
    { identifier: 'resident_country', attribute: 'Resident country'},
    { identifier: 'family_name_national_character', attribute: 'Family name national character'},
    { identifier: 'given_name_national_character', attribute: 'Given name national character'},
    { identifier: 'signature_usual_mark', attribute: 'Signature usual mark'}
  ]
}

export const AGE_OVER_18_ATTESTATION: AttestationDefinition = {
  name: "Age Over 18",
  type: AttestationType.AGE_OVER_18,
  dataSet: [
    { identifier: 'age_over_18', attribute: 'Age over 18'},
    { identifier: 'user_pseudonym', attribute: 'User pseudonym'},
    { identifier: 'issuance_date', attribute: 'Issuance date'},
    { identifier: 'expiry_date', attribute: 'Expiry date'},
    { identifier: 'issuing_authority', attribute: 'Issuing authority'},
    { identifier: 'issuing_jurisdiction', attribute: 'Issuing jurisdiction'},
    { identifier: 'issuing_country', attribute: 'Issuing country'}
  ]
}

export const RTU_ATTESTATION: AttestationDefinition = {
  name: 'Riga Technical University (RTU)',
  type: AttestationType.RTU,
  dataSet: [
    { identifier: 'awardingBody_countryCode', attribute: 'Awarding body country code' },
    { identifier: 'awardingBody_legalName', attribute: 'Awarding body legal name' },
    { identifier: 'awardingBody_registration', attribute: 'Awarding body registration' },
    { identifier: 'awardingDate', attribute: 'Awarding date' },
    { identifier: 'citizenshipCountryCode', attribute: 'Citizenship country code' },
    { identifier: 'creditPoint', attribute: 'Credit point' },
    { identifier: 'creditValue', attribute: 'Credit value' },
    { identifier: 'eqfLevel', attribute: 'EQF level' },
    { identifier: 'familyName', attribute: 'Family name' },
    { identifier: 'givenName', attribute: 'Given name' },
    { identifier: 'issuanceDate', attribute: 'Issuance date' },
    { identifier: 'issued', attribute: 'Issued' },
    { identifier: 'maximumDuration', attribute: 'Maximum duration' },
    { identifier: 'nationalID', attribute: 'National ID' },
    { identifier: 'nqfLevel', attribute: 'NQF level' },
    { identifier: 'thematicArea', attribute: 'Thematic area' },
    { identifier: 'title', attribute: 'Title' },
    { identifier: 'type', attribute: 'Type' },
    { identifier: 'validFrom', attribute: 'Valid from' },
  ]
}

export const SUPPORTED_ATTESTATIONS: { [id: string]: AttestationDefinition } = {
  "pid": PID_ATTESTATION,
  "mdl": MDL_ATTESTATION,
  "rtu": RTU_ATTESTATION,
  "age_over_18": AGE_OVER_18_ATTESTATION,
}

