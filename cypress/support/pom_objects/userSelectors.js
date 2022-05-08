const userSelectors = {

    emailSelector: '.input-box [name="email"]', 
    passwordSelector: '.input-box  [name="password"]',
    firstNameSelector: '[name="firstname"]',
    lastNameSelector: '[name="lastname"]',
    phoneSelector: '[name="phone"]',
    addressSelector: '[name="address"]',
    countryDropdown: ':nth-child(6) > .input-box > .form-group > .input-items > .select2 > .selection > .select2-selection > .select2-selection__arrow > b',
    nationalityDropdown: ':nth-child(7) > .input-box > .form-group > .input-items > .select2 > .selection > .select2-selection > .select2-selection__arrow > b',
    autocompleteSelector: '.select2-search__field',
    countryDefaultSelect: '.select2-results__option.select2-results__option--highlighted',
    countryOptionSelect: '.select2-results__option'

}

const formSelectors = {

    firstNameSelector: '[name="firstname_1"]',
    lastNameSelector: '[name="lastname_1"]',
    nationalitySelector: '[name="nationality_1"]',
    birthday: '[name="dob_day_1"]',
    birthmonth: '[name="dob_month_1"]',
    birthyear: '[name="dob_year_1"]',
    passportNumber: '[name="passport_1"]',
    passportIssueDay: '[name="passport_issuance_day_1"]',
    passportIssueMonth: '[name="passport_issuance_month_1"]',
    passportIssueYear: '[name="passport_issuance_year_1"]',
    passportExpiryDay: '[name="passport_day_1"]',
    passportExpiryMonth: '[name="passport_month_1"]',
    passportExpiryYear: '[name="passport_year_1"]'

}

const otherTravellersSelectors = {

    secondAdultFirstNameSelector: '[name="firstname_2"]',
    secondAdultLastNameSelector: '[name="lastname_2"]',
    secondAdultTitleSelector: '[name="title_2"]',
    firstChildFirstNameSelector: '[name="child_firstname_1"]',
    firstChildLastNameSelector: '[name="child_lastname_1"]',
    firstChildAgeSelector: '[name="child_age_1"]',
    secondChildFirstNameSelector: '[name="child_firstname_2"]',
    secondChildLastNameSelector: '[name="child_lastname_2"]',
    secondChildAgeSelector: '[name="child_age_1"]',

}

export { userSelectors, formSelectors , otherTravellersSelectors }