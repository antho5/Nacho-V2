if (window.location.pathname.includes("/pages/dealer")) {
  setTimeout(() => {
    const bss_grid_2 = $('<div class="bss-grid-2">')
    const bss_grid_2_2 = $('<div class="bss-grid-2">')
    $('#apartment-field').after(bss_grid_2_2)
    $('#bss-b2b-registration-form-top').after(bss_grid_2)
    const inputs = $('#RegisterForm  input:not([type="checkbox"]):not([type="file"]):not([type="hidden"]):not([type="submit"])');
    bss_grid_2.append(inputs.slice(2,9).parent())
    bss_grid_2_2.append(inputs.slice(11,14).parent())
    bss_grid_2_2.append($("#state-field").parent())
  } , 500)
}
if (window.location.pathname.includes("/pages/ambassador") || window.location.pathname.includes("/pages/career")) {
  setTimeout(() => {
    const bss_grid_2 = $('<div class="bss-grid-2">')
    const bss_grid_2_2 = $('<div class="bss-grid-2">')
    $('#apartment-field').after(bss_grid_2_2)
    $('#bss-b2b-registration-form-top').after(bss_grid_2)
    const inputs = $('#RegisterForm  input:not([type="checkbox"]):not([type="file"]):not([type="hidden"]):not([type="submit"])');
    bss_grid_2.append(inputs.slice(0,4).parent())
    bss_grid_2_2.append(inputs.slice(6,9).parent())
    bss_grid_2_2.append($("#state-field").parent())
  } , 500)
}