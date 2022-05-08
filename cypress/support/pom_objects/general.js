const generalSelectors = {

    cookie: '#cookie_stop',
    login: '.btn-box > .btn-default',
    logout:'.la.la-power-off.mr-2.text-color-6',
    loginTitle: '.modal-content .modal-title.title',
    daySelector: '.day',
    submit: '[type="submit"]',
    hotelSelection: '.single-content-item.pb-4 .title.font-size-26'

}

const flightSelectors = {

    departureSelector: '#autocomplete',
    autocompleteSelect: '.autocomplete-result',
    destinationSelector: '#autocomplete2',
    departureDateSelector: '#departure',
    destinationDateSelector: '#return',
    adultNumber: 'adult_qty',
    childNumber: 'child_qty',
    infantNumber: 'infant_qty'

}

const paymentSelectors = {

    paylaterSelector: '#gateway_pay-later',
    termsSelector: '#agreechb',
    confirmationSelection: '#booking'
}

const tourSelectors = {

    datePickerSelector: '[name="date"]',
    adultsTour: '#adults',
    clidrenTour: '#childs',
    infantsTour: '#infants'

}

const headerLogin = '.theme-btn.theme-btn-small.theme-btn-transparent.ml-1.waves-effect'

export { generalSelectors , flightSelectors, headerLogin, paymentSelectors, tourSelectors }