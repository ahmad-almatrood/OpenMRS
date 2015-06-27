var patData;
var xhr;


function checkForm() {
    document.getElementById("patButton").style.display = '';
    document.getElementById("RefButton").style.display = 'none';
}
;

function patientInfo()
{
    var patientsList = [];
    patient = document.getElementById("Patient").value;
    var daturl = 'http://gw151.iu.xsede.org:8080/openmrs/ws/rest/v1/patient?q=' + patient;
    if (!patient)
    {
        alert('Please enter the patient name');
    }
    else
    {
        document.getElementById("patButton").style.display = 'none';
        document.getElementById("RefButton").style.display = '';
        $.getJSON(daturl, function (data) {
            for (var name in data.results)
            {
                // $('<div></div>')
                //   .addClass('heading')
                //   .insertBefore('#patName')
                //   .text(data.results);

                $(data.results[name]).each(function (index, value) {
                    var n = value.display;
                    $('<div></div>')
                            //   .addClass('heading')
                            //   .attr('Display', 'T' + value.Display)
                            .insertBefore('#patName')
                            .text(n);
                });
            }

            //$(data.results).each(function (index, value)
            //{
            //    document.getElementById("patName").innerHTML = value.display;
            //});
        });
    }
}
;
function Refresh() {
    window.location.replace(href = "PatientInfo.html");
}
;
