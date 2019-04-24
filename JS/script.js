/*========Animate==========*/
AOS.init();

/*=======Phone Mask=======*/
const element = document.getElementById('phone-mask');
const maskOptions = {
    mask: '+0 (000)-000-00-00'
};

IMask(element, maskOptions);

/*=======Form Validation=======*/
new FormValidation({
    errorInputClassName: 'warning',
    errorTextClassName: 'warningTxt',
});

const Name_inp = document.getElementsByClassName('name-lastname')[0];

Name_inp.onkeypress = (event) => {
    return (event.charCode > 64 &&
        event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)
}