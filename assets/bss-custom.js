if (window.location.pathname.includes("/pages/")) {
  setTimeout(() => {
    const bss_grid_2 = $('<div class="bss-grid-2">')
    const bss_grid_2_2 = $('<div class="bss-grid-2">')
    $('#bss-b2b-registration-form-top').after(bss_grid_2)
    $('#bss-b2b-registration-form-top').after(bss_grid_2_2)
    bss_grid_2.append($('#RegisterForm  input:not([type="checkbox"]):not([type="file"]):not(.country-field):not([type="hidden"]):not([type="submit"])').slice(2,9).parent())
    bss_grid_2_2.append($('#RegisterForm  input:not([type="checkbox"]):not([type="file"]):not([type="hidden"]):not([type="submit"])').slice(11,14).parent())
  } , 500)
}