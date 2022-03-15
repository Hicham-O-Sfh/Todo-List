$(document).ready(function () {
    "use strict";

    $('#btnAjouter').click(function () {
        $('#smallModal').modal('hide');
        injecteNouvelleTache($("#nvTacheText").val());
        $("#nvTacheText").val("");
    });

    function injecteNouvelleTache(tache) {
        document.getElementById('containerTache').innerHTML +=
            `
        <div class="col-12 p-2 mt-2 tache" style="border: 1px solid black;border-radius: 15px;">
            <div class="row">
                <span class="col-8">
                    <h3 class="tache-text">
                        ${tache}
                    </h3>
                </span>

                <span class="col-4 d-flex justify-content-end">
                    <img class="btn btnSuppression" src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png"
                        style="width: 20%;" />
                </span>
            </div>
        </div>
        `;
    }

    (function () {
        injecteNouvelleTache("🚀 Microsoft .Net 6");
        injecteNouvelleTache("☁️ Microsoft Azure");
        injecteNouvelleTache("📲 Microsoft Xamarin forms");
        injecteNouvelleTache("🌐 Microsoft Asp.Net");
        injecteNouvelleTache("♾️ Microsoft Entity Framework 6.*");
    })();

    (function () {
        $(document.body).on("click", '.btnSuppression', function () {
            $(this).parent().parent().parent().remove()
        });
    })();

    (function () {
        $(document.body).attr('contenteditable', 'true');
    })();
});